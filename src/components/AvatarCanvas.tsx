import React from 'react';
import { useAvatarStore } from '../store/avatarStore';

const AvatarCanvas: React.FC = () => {
  const { features } = useAvatarStore();

  const renderHair = () => {
    switch (features.hairStyle) {
      case 'short':
        return (
          <div
            className="absolute top-0 left-0 right-0 h-1/4 rounded-t-full"
            style={{ backgroundColor: features.hairColor }}
          />
        );
      case 'medium':
        return (
          <div
            className="absolute -top-4 -left-4 -right-4 h-1/2 rounded-t-full"
            style={{ backgroundColor: features.hairColor }}
          />
        );
      case 'long':
        return (
          <div
            className="absolute -top-4 -left-8 -right-8 h-3/4 rounded-t-full"
            style={{ backgroundColor: features.hairColor }}
          />
        );
      case 'curly':
        return (
          <>
            <div
              className="absolute -top-6 -left-6 -right-6 h-1/2 rounded-t-full"
              style={{ backgroundColor: features.hairColor }}
            />
            <div
              className="absolute top-1/4 -left-8 w-8 h-8 rounded-full"
              style={{ backgroundColor: features.hairColor }}
            />
            <div
              className="absolute top-1/4 -right-8 w-8 h-8 rounded-full"
              style={{ backgroundColor: features.hairColor }}
            />
          </>
        );
      case 'spiky':
        return (
          <div className="absolute -top-8 left-0 right-0 h-1/2">
            <div
              className="absolute left-1/4 bottom-0 w-4 h-12 transform -rotate-15"
              style={{ backgroundColor: features.hairColor }}
            />
            <div
              className="absolute left-1/2 bottom-0 w-4 h-16 -translate-x-1/2"
              style={{ backgroundColor: features.hairColor }}
            />
            <div
              className="absolute right-1/4 bottom-0 w-4 h-12 transform rotate-15"
              style={{ backgroundColor: features.hairColor }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-96 h-96 bg-white rounded-lg shadow-lg p-4 avatar-canvas">
      <div className="relative w-full h-full">
        {/* Base avatar circle */}
        <div className="absolute inset-0 rounded-full bg-amber-100 border-4 border-amber-200">
          {/* Hair */}
          {renderHair()}
          
          {/* Eyes */}
          <div
            className="absolute top-1/3 left-1/3 w-4 h-4 bg-gray-800 rounded-full"
            style={{ left: `${features.eyePosition}%` }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-800 rounded-full"
            style={{ right: `${features.eyePosition}%` }}
          />

          {/* Mouth */}
          <div
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"
            style={{
              transform: `translateX(-50%) scale(${features.mouthWidth}, ${features.mouthHeight})`,
              bottom: `${features.mouthPosition}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarCanvas;