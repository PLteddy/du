import React from 'react';
import { ChevronDown, ChevronRight, Scissors, Smile, Eye, Palette } from 'lucide-react';
import { useAvatarStore } from '../store/avatarStore';

const Controls: React.FC = () => {
  const { features, activeCategory, updateFeature, setActiveCategory } = useAvatarStore();

  const categories = [
    {
      id: 'hair',
      name: 'Cheveux',
      icon: Scissors,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'none', name: 'Aucun' },
              { id: 'short', name: 'Courts' },
              { id: 'medium', name: 'Mi-longs' },
              { id: 'long', name: 'Longs' },
              { id: 'curly', name: 'Bouclés' },
              { id: 'spiky', name: 'En pics' },
            ].map((style) => (
              <button
                key={style.id}
                onClick={() => updateFeature('hairStyle', style.id)}
                className={`p-2 rounded-lg text-sm ${
                  features.hairStyle === style.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
          {features.hairStyle !== 'none' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Couleur
              </label>
              <input
                type="color"
                value={features.hairColor}
                onChange={(e) => updateFeature('hairColor', e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'eyes',
      name: 'Yeux',
      icon: Eye,
      content: (
        <div className="space-y-2">
          <input
            type="range"
            min={20}
            max={40}
            step="0.1"
            value={features.eyePosition}
            onChange={(e) => updateFeature('eyePosition', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      ),
    },
    {
      id: 'mouth',
      name: 'Bouche',
      icon: Smile,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Position</label>
            <input
              type="range"
              min={20}
              max={40}
              step="0.1"
              value={features.mouthPosition}
              onChange={(e) => updateFeature('mouthPosition', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Largeur</label>
            <input
              type="range"
              min={0.5}
              max={1.5}
              step="0.1"
              value={features.mouthWidth}
              onChange={(e) => updateFeature('mouthWidth', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Hauteur</label>
            <input
              type="range"
              min={0.5}
              max={2}
              step="0.1"
              value={features.mouthHeight}
              onChange={(e) => updateFeature('mouthHeight', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-80 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Personnalisation</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveCategory(category.id)}
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </div>
              {activeCategory === category.id ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            {activeCategory === category.id && (
              <div className="p-4 bg-white">{category.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Controls;