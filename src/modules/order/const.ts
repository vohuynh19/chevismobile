import {images} from '~assets';
import {Demographic, MainDishName, ToppingName} from './types';

export const defaultToppingRecord: Record<ToppingName, number> = {
  mi_them: 0,
  pho_mai_lat: 0,
  pho_mai_soi: 0,
  sot_them: 0,
  xuc_xich: 0,
};

export const toppingImages: Record<ToppingName, any> = {
  mi_them: images.miThem,
  pho_mai_lat: images.phoMaiLat,
  pho_mai_soi: images.phoMaiSoi,
  sot_them: images.sotThem,
  xuc_xich: images.xucXich,
};

export const mainDishImages: Record<MainDishName, any> = {
  xet_tan_chay: images.xetTanChay,
  xet_truyen_thong: images.xetTruyenThong,
};

export const priceTable: Record<ToppingName | MainDishName, number> = {
  mi_them: 3,
  pho_mai_lat: 3,
  pho_mai_soi: 5,
  sot_them: 4,
  xuc_xich: 4,
  xet_tan_chay: 28,
  xet_truyen_thong: 23,
};

export const toppingNames: ToppingName[] = [
  'xuc_xich',
  'pho_mai_lat',
  'pho_mai_soi',
  'mi_them',
  'sot_them',
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
