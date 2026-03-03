import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    const { path = '' } = request.query;
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return response.status(500).json({ error: 'GitHub token is not configured on the server.' });
    }

    try {
        // Determine the type of request based on the path
        const githubApiUrl = `https://api.github.com/repos/hrkshz/school_diary/contents/${path}`;

        const res = await fetch(githubApiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'User-Agent': 'Vercel-Portfolio-App'
            },
        });

        if (!res.ok) {
            let errorMessage = 'GitHub API error';
            let errorDetails = {};
            try {
                errorDetails = await res.json();
            } catch (e) {
                const text = await res.text();
                errorDetails = { rawText: text };
            }
            return response.status(res.status).json({ error: errorMessage, details: errorDetails });
        }

        const data = await res.json();
        return response.status(200).json(data);
    } catch (error: any) {
        console.error('Error fetching from GitHub:', error);
        return response.status(500).json({ error: 'Failed to fetch code from GitHub', message: error.message });
    }
}
