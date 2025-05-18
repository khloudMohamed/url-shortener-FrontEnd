import React from 'react';

interface ShortenButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
}

export const ShortenButton: React.FC<ShortenButtonProps> = ({ onClick, loading, disabled }) => (
  <button
    onClick={onClick}
    disabled={loading || disabled}
    style={{
      marginTop: 15,
      padding: '12px 20px',
      fontSize: 16,
      borderRadius: 4,
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    }}
  >
    {loading ? 'Shortening...' : 'Shorten URL'}
  </button>
);
