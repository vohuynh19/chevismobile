import type {ComponentProps} from 'react';
import {ModalizeProps} from 'react-native-modalize';

import {bottomSheetEntities} from './BottomSheetProvider';

type BottomSheetEntityKeys = keyof typeof bottomSheetEntities;

export type BottomSheetEntity = {
  [Key in BottomSheetEntityKeys]: {
    type: Key;
  } & Omit<
    ComponentProps<(typeof bottomSheetEntities)[Key]>,
    keyof BottomSheetProps
  >;
}[BottomSheetEntityKeys];

export interface BottomSheetContextProps {
  showBottomSheet: (
    bottomSheet: BottomSheetEntity,
    bsProps?: ModalizeProps,
  ) => void;
  closeBottomSheet: (cb?: () => void) => void;
}

export type BottomSheetProps = BottomSheetContextProps;
