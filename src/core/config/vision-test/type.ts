export const INDO_ENGLISH_CODE = 'en-ID';
export const INDO_CODE = 'id-ID';

export enum COMPONENT_TYPE {
  CAPYBARA_TITLE = 'capybara_title',
  COUNTER = 'counter',
  COVER_EYE = 'cover_eye',
  DIAL = 'dial',
  DUOCHROME = 'duochrome',
  LOADING = 'loading',
  TITLE = 'title',
  VISUS = 'visus',
}

export enum EYE_TYPE {
  UNKNOWN = 0,
  LEFT = 1,
  RIGHT = 2,
  BOTH = 3,
}

export type TestProps = {
  type: COMPONENT_TYPE;
  props: any;
};

export type VisusTableType = {
  visus: string;
  minus: number;
  plus: number;
};

export type DiotreTableType = {
  age: number;
  bias: number;
};
