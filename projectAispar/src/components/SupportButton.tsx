import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const SupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl mb-4 w-72 transform transition-transform animate-fade-in">
          <div className="primary-gradient text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Support Chat</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-80 bg-gray-50 overflow-y-auto">
            <div className="bg-gray-200 rounded-lg p-3 mb-2 max-w-[80%]">
              <p className="text-sm">Hello! How can we help you today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-end"
              />
              <button className="primary-gradient text-white px-4 py-2 rounded-r-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className="primary-gradient text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default SupportButton;