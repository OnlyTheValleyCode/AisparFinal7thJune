import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <CircuitBoard 
        size={32} 
        className="primary-gradient text-white p-1 rounded" 
      />
    </div>
  );
};

export default Logo;