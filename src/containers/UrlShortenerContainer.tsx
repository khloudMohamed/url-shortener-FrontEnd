import React, { useState } from 'react';
import { UrlInput } from '../components/UrlInput';
import { ShortenButton } from '../components/ShortenButton';
import { ResultDisplay } from '../components/ResultDisplay';
import { shortenUrl } from '../api/urlApi';
import { isValidUrl } from '../utils/validateUrl';

export const UrlShortenerContainer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    setError('');
    setResult('');

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      setLoading(true);
      const shortUrl = await shortenUrl(url);
      setResult(shortUrl);
    } catch (err: any) {
      setError(err.message || 'Server error, please try again later');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) navigator.clipboard.writeText(result);
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '50px auto',
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: 8,
        backgroundColor: '#fafafa',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ marginBottom: 20, color: '#333' }}>URL Shortener</h1>

      <UrlInput value={url} onChange={setUrl} error={error} disabled={loading} />
      <ShortenButton onClick={handleShorten} loading={loading} />
      {result && <ResultDisplay url={result} onCopy={handleCopy} />}
    </div>
  );
};
