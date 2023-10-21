import {create} from 'zustand';

type FeaturesType = {
  halloween?: boolean;
};

type AppStoreType = {
  features?: FeaturesType;
  setFeatures: (features: FeaturesType) => void;
};

const defaultState = {
  features: {
    halloween: false,
  },
} as const;

export const useAppStore = create<AppStoreType>(set => ({
  ...defaultState,
  setFeatures: features => set(() => ({features})),
}));
