import type { VercelRequest, VercelResponse } from '@vercel/node';

type ErrorDetails = Record<string, unknown> | { rawText: string };

function normalizePath(path: string | string[] | undefined): string {
    if (Array.isArray(path)) {
        return path[0] ?? '';
    }
    return path ?? '';
}

function toGithubContentsUrl(path: string): URL {
    const encodedPath = path
        .split('/')
        .filter(Boolean)
        .map((segment) => encodeURIComponent(segment))
        .join('/');

    return new URL(`https://api.github.com/repos/hrkshz/school_diary/contents/${encodedPath}`);
}

async function parseErrorDetails(res: Response): Promise<ErrorDetails> {
    const responseText = await res.text();

    if (!responseText) {
        return { rawText: '' };
    }

    try {
        return JSON.parse(responseText) as Record<string, unknown>;
    } catch {
        return { rawText: responseText };
    }
}

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    console.log(`[API /github] Request started. Method: ${request.method}, Path: ${request.query.path}`);
    const requestPath = normalizePath(request.query.path);
    const rawToken = process.env.GITHUB_TOKEN;

    console.log(`[API /github] Environment token status: ${!!rawToken}`);

    if (!rawToken || rawToken.trim() === '') {
        console.error('[API /github] CRITICAL: GITHUB_TOKEN is missing or empty.');
        return response.status(500).json({ error: 'Server configuration error: GitHub token is not configured.' });
    }

    const token = rawToken.trim();

    try {
        const githubApiUrl = toGithubContentsUrl(requestPath);

        const res = await fetch(githubApiUrl.toString(), {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'Vercel-Portfolio-App'
            },
        });

        if (!res.ok) {
            const errorDetails = await parseErrorDetails(res);
            const githubRequestId = res.headers.get('x-github-request-id');

            console.error('GitHub API request failed', {
                requestPath,
                githubStatus: res.status,
                githubRequestId
            });

            return response.status(res.status).json({
                error: 'GitHub API error',
                details: errorDetails,
                githubStatus: res.status,
                requestPath
            });
        }

        const data = await res.json();
        return response.status(200).json(data);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching from GitHub:', error);
        return response.status(500).json({ error: 'Failed to fetch code from GitHub', message });
    }
}
