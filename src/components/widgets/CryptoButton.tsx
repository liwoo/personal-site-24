import { useState } from 'react';
import { Check, Copy, QrCode, X, Bitcoin, Wallet, Hexagon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface CryptoButtonProps {
  ariaLabel: string;
  address: string;
  icon?: string;
  color: string;
  qrCode?: string;
}

// Icon mapping for crypto currencies
const CryptoIcon = ({ name, className }: { name?: string; className?: string }) => {
  switch (name) {
    case 'tabler:currency-bitcoin':
      return <Bitcoin className={className} />;
    case 'tabler:currency-ethereum':
      return <Hexagon className={className} />; // Diamond shape for Ethereum
    case 'tabler:currency-solana':
      return <Wallet className={className} />; // Generic wallet for Solana
    default:
      return <Wallet className={className} />;
  }
};

export function CryptoButton({ ariaLabel, address, icon, color, qrCode }: CryptoButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleQR = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQR(!showQR);
  };

  return (
    <>
      <div className="relative group">
        <button
          onClick={handleCopy}
          className={twMerge(
            color,
            'text-white mx-2 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1 inline-flex items-center relative transition-transform hover:scale-110'
          )}
          aria-label={`${ariaLabel} - Click to copy address`}
        >
          <CryptoIcon name={icon} className="w-5 h-5" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          {isCopied ? (
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy className="w-3 h-3" /> Copy {ariaLabel} Address
            </span>
          )}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* QR Code Button */}
        {qrCode && (
          <button
            onClick={toggleQR}
            className="absolute -top-1 -right-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Show ${ariaLabel} QR Code`}
          >
            <QrCode className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* QR Code Modal */}
      {showQR && qrCode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={toggleQR}
        >
          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={toggleQR}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close QR Code"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{ariaLabel} Address</h3>
            <img src={qrCode} alt={`${ariaLabel} QR Code`} className="w-64 h-64 mx-auto" />
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 break-all text-center max-w-xs">
              {address}
            </p>
            <button
              onClick={handleCopy}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {isCopied ? 'Copied!' : 'Copy Address'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
