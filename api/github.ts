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
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            return response.status(res.status).json({ error: 'GitHub API error', details: errorData });
        }

        const data = await res.json();
        return response.status(200).json(data);
    } catch (error) {
        console.error('Error fetching from GitHub:', error);
        return response.status(500).json({ error: 'Failed to fetch code from GitHub' });
    }
}
