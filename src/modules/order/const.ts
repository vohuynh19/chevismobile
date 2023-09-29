import {images} from '~assets';
import {Demographic, MainDishName, MainDishSize, ToppingName} from './types';

export const defaultToppingRecord: Record<ToppingName, number> = {
  pho_mai_lat: 0,
  pho_mai_soi: 0,
  xuc_xich: 0,
};

export const toppingImages: Record<ToppingName, any> = {
  pho_mai_lat: images.phoMaiLat,
  pho_mai_soi: images.phoMaiSoi,
  xuc_xich: images.xucXich,
};

export const mainDishImages: Record<MainDishName, any> = {
  xet_tan_chay: images.xetTanChay,
  xet_truyen_thong: images.xetTruyenThong,
};

export const toppingNames: ToppingName[] = [
  'xuc_xich',
  'pho_mai_lat',
  'pho_mai_soi',
];

export const demographics: Demographic[] = [
  'kid',
  'cap_1',
  'cap_2',
  'cap_3',
  '20-30',
  '>30',
];

export const defaultDemographics: Record<Demographic, boolean> = {
  kid: false,
  cap_1: false,
  cap_2: false,
  cap_3: false,
  '>30': false,
  '20-30': false,
};

export const dishToppings: Record<MainDishName, ToppingName[]> = {
  xet_tan_chay: ['xuc_xich', 'pho_mai_soi'],
  xet_truyen_thong: ['xuc_xich', 'pho_mai_lat'],
};

export const toppingPriceTable: Record<ToppingName, number> = {
  pho_mai_lat: 2,
  pho_mai_soi: 4,
  xuc_xich: 4,
};

export const mainDishPriceTable: Record<
  MainDishName,
  Record<MainDishSize, number>
> = {
  xet_truyen_thong: {
    M: 23,
    L: 28,
  },
  xet_tan_chay: {
    M: 28,
    L: 33,
  },
};
