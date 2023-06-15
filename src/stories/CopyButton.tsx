import { useState } from 'react';
import './CopyButton.css'
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { BsCheck } from 'react-icons/bs';
import './bootstrap-custom.css'

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <>
      <button className="copy-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" onClick={handleCopy}>
        {copied ? <BsCheck /> : <HiOutlineClipboardDocument />}
      </button>
    </>
  );
};

export default CopyButton;
