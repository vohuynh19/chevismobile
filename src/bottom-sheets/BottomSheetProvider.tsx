import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Modalize, ModalizeProps} from 'react-native-modalize';

import {makeStyles} from '~core/theme';

import TestBottomSheet from './__template__/TestBottomSheet';

import {BottomSheetContextProps, BottomSheetEntity} from './types';

export const bottomSheetEntities = {
  test: TestBottomSheet,
};

const BottomSheetContext = createContext<BottomSheetContextProps | null>(null);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('Wrap app with BottomSheetProvider');
  }
  return context;
};

export const BottomSheetProvider = ({children}: {children: ReactNode}) => {
  const styles = useStyles();
  const [bottomSheetEntity, setbottomSheetEntity] =
    useState<BottomSheetEntity | null>(null);

  const bottomSheetRef = useRef<Modalize>(null);
  const bottomSheetProps = useRef<ModalizeProps>();

  const closeBottomSheet = useCallback((cb?: () => void) => {
    bottomSheetRef?.current?.close('default', () => {
      bottomSheetProps.current = undefined;
      setbottomSheetEntity(null);
      if (cb) {
        setTimeout(cb, 0);
      }
    });
  }, []);

  const showBottomSheet = useCallback(
    (bottomSheet: BottomSheetEntity, bsProps?: ModalizeProps) => {
      bottomSheetProps.current = bsProps;
      bottomSheetRef?.current?.open();
      setbottomSheetEntity(bottomSheet);
    },
    [],
  );

  const value = useMemo(
    () => ({
      showBottomSheet,
      closeBottomSheet,
    }),
    [showBottomSheet, closeBottomSheet],
  );

  const renderBottomSheet = () => {
    if (bottomSheetEntity) {
      const {type, ...props} = bottomSheetEntity;
      if (type in bottomSheetEntities) {
        const BottomSheet = bottomSheetEntities[type];
        return (
          <BottomSheet
            showBottomSheet={showBottomSheet}
            closeBottomSheet={closeBottomSheet}
            {...props}
          />
        );
      }
    }
    return null;
  };

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      <Modalize
        ref={bottomSheetRef}
        adjustToContentHeight
        overlayStyle={styles.popoverOverlay}
        modalStyle={styles.modal}
        handleStyle={styles.handle}
        handlePosition="inside"
        onBackButtonPress={() => {
          closeBottomSheet();
          return true;
        }}
        {...bottomSheetProps.current}>
        {renderBottomSheet()}
      </Modalize>
    </BottomSheetContext.Provider>
  );
};

const useStyles = makeStyles({
  modal: {
    backgroundColor: 'neutral200',
    borderTopLeftRadius: '3xl',
    borderTopRightRadius: '3xl',
  },
  popoverOverlay: {
    backgroundColor: 'overlay',
  },
  handle: {
    backgroundColor: 'neutral500',
    height: 4,
    top: 20,
  },
});
