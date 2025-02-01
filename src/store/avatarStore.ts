import { create } from 'zustand';

interface AvatarFeatures {
  eyePosition: number;
  mouthPosition: number;
  mouthWidth: number;
  mouthHeight: number;
  hairStyle: string;
  hairColor: string;
  [key: string]: number | string;
}

interface AvatarStore {
  features: AvatarFeatures;
  activeCategory: string | null;
  updateFeature: (feature: string, value: number | string) => void;
  setActiveCategory: (category: string | null) => void;
}

export const useAvatarStore = create<AvatarStore>((set) => ({
  features: {
    eyePosition: 30,
    mouthPosition: 30,
    mouthWidth: 1,
    mouthHeight: 1,
    hairStyle: 'none',
    hairColor: '#4a5568',
  },
  activeCategory: null,
  updateFeature: (feature, value) =>
    set((state) => ({
      features: {
        ...state.features,
        [feature]: value,
      },
    })),
  setActiveCategory: (category) =>
    set((state) => ({
      activeCategory: state.activeCategory === category ? null : category,
    })),
}));