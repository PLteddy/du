import React from 'react';
import AvatarCanvas from '../components/AvatarCanvas';
import Controls from '../components/Controls';
import ExportButton from '../components/ExportButton';

const Editor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Your Avatar</h1>
        
        <div className="flex gap-8 flex-wrap">
          <div className="flex-1">
            <AvatarCanvas />
            <div className="mt-4">
              <ExportButton />
            </div>
          </div>
          
          <div className="flex-1">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor