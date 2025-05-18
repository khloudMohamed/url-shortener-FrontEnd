import React from 'react';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export const UrlInput: React.FC<UrlInputProps> = ({ value, onChange, error, disabled }) => (
  <>
    <input
      type="text"
      aria-label="Enter URL to shorten"
      placeholder="Enter your URL here"
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: 12,
        width: '100%',
        fontSize: 16,
        borderRadius: 4,
        border: error ? '1px solid red' : '1px solid #ccc',
        boxSizing: 'border-box',
      }}
      disabled={disabled}
    />
    {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
  </>
);
