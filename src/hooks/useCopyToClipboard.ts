import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  copied: boolean;
  copyToClipboard: (text: string) => Promise<boolean>;
}

export const useCopyToClipboard = (): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return true;
      } catch (err) {
        textArea.remove();
        return false;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      return false;
    }
  }, []);

  return { copied, copyToClipboard };
};