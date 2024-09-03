import { useState } from 'react';

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      if (!navigator.clipboard) {
        setError('Clipboard API not supported');
        return false;
      }

      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to copy text');
      return false;
    }
  };

  return { copiedText, error, copyToClipboard };
}

export default useCopyToClipboard;
