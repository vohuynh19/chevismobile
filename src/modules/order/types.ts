export type ToppingName =
  | 'xuc_xich'
  | 'pho_mai_lat'
  | 'pho_mai_soi'
  | 'mi_them'
  | 'sot_them';

export type ToppingRecord = Record<ToppingName, number>;

export interface Item {
  name: string;
  amount: number;
}

export interface MainDish extends Item {
  name: MainDishName;
  toppings?: ToppingRecord;
}

export type MainDishName = 'xet_truyen_thong' | 'xet_tan_chay';

export type Order = {
  title: string;
  items: MainDish[];
  createdAt: string;
};

export type Demographic = 'kid' | 'cap_1' | 'cap_2' | 'cap_3' | '20-30' | '>30';
