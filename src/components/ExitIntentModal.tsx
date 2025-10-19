import React from 'react';
import { X, Download } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent text-2xl font-bold mb-4">
            Wait! Before you go...
          </div>
          <p className="text-gray-600 mb-6">
            Get our institutional payments one-pager with real client case studies and ROI calculations.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center mx-auto transition-all hover:scale-105">
            <Download className="h-5 w-5 mr-2" />
            Download One-Pager
          </button>
          <p className="text-xs text-gray-400 mt-4">
            No spam, just insights. Used by 49+ institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;