import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { exportToImage } from '../utils/exportImage';

const ExportButton: React.FC = () => {
  const handleExport = async () => {
    await exportToImage();
  };

  const handleShare = async () => {
    const imageUrl = await exportToImage();
    // In a real app, you'd upload this to a server and get a shareable link
    alert('Sharing would generate a link to: ' + imageUrl);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleExport}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Export
      </button>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>
    </div>
  );
}

export default ExportButton