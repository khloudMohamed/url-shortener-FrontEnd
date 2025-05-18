import React from 'react';

interface ResultDisplayProps {
  url: string;
  onCopy: () => void;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ url, onCopy }) => (
  <div
    style={{
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold', wordBreak: 'break-all' }}>
      {url}
    </a>
    <button
      onClick={onCopy}
      style={{
        padding: '6px 12px',
        borderRadius: 4,
        border: '1px solid #007bff',
        backgroundColor: 'white',
        color: '#007bff',
        cursor: 'pointer',
      }}
    >
      Copy
    </button>
  </div>
);
