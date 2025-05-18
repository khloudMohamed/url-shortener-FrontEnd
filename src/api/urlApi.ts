export async function shortenUrl(url: string): Promise<string> {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'https://localhost:7250';
    const res = await fetch(`${apiBaseUrl}/urls/shorten`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData || 'Failed to shorten URL');
    }
    const data = await res.json();
    return `${apiBaseUrl}/${data.shortened_url}`;
  }