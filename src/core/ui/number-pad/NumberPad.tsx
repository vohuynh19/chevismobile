import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';

import {makeStyles} from '../../theme';

import {Icon} from '../icon';
import {Text} from '../text';
import {View} from '../view';

interface NumberPadProps {
  onPressNumber?: (text: number) => void;
  onPressDelete?: () => void;
}

export const PAD_MAP = [
  {
    key: 'pad_1',
    value: '1',
  },
  {
    key: 'pad_2',
    value: '2',
  },
  {
    key: 'pad_3',
    value: '3',
  },
  {
    key: 'pad_4',
    value: '4',
  },
  {
    key: 'pad_5',
    value: '5',
  },
  {
    key: 'pad_6',
    value: '6',
  },
  {
    key: 'pad_7',
    value: '7',
  },
  {
    key: 'pad_8',
    value: '8',
  },
  {
    key: 'pad_9',
    value: '9',
  },
  {
    key: 'pad_dot',
    value: '',
  },
  {
    key: 'pad_0',
    value: '0',
  },
  {
    key: 'pad_delete',
    value: 'delete',
  },
];
const NumberPad = (props: NumberPadProps) => {
  const {onPressNumber, onPressDelete} = props;
  const styles = useStyles();

  const onPressPad = (value: string | number) => {
    if (value === 'delete') {
      onPressDelete?.();
      return;
    }
    if (!Number.isNaN(Number(value))) {
      onPressNumber?.(value as number);
    }
  };

  const renderNumber = (_number: string) => (
    <Text py={2} variant="customPINPad">
      {_number}
    </Text>
  );

  const renderButtonDelete = () => <Icon name="Backspace" size={32} />;

  return (
    <View flexDirection="row" flexWrap="wrap" px={4} backgroundColor="white">
      {PAD_MAP.map(button => (
        <TouchableOpacity
          onPress={() => onPressPad(button.value)}
          key={button.key}
          style={styles.padView}>
          {button.value === 'delete'
            ? renderButtonDelete()
            : renderNumber(button.value)}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const useStyles = makeStyles({
  padView: {
    padding: 4,
    width: (Dimensions.get('window').width - 32) / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumberPad;
