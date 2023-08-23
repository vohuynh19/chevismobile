import React from 'react';
import {Pressable} from 'react-native';

import {BottomDashedLine} from '../dashed-line';
import {Text} from '../text';

interface Props {
  onPress: () => void;
  filename: string | undefined;
}

export const HeaderFilename = ({onPress, filename}: Props) => (
  <Pressable
    onPress={onPress}
    hitSlop={8}
    style={({pressed}) => ({
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 16,
      opacity: pressed ? 0.6 : 1,
    })}>
    <BottomDashedLine>
      <Text
        variant="bodySmallBold"
        color="primary900"
        numberOfLines={1}
        textAlign="center">
        {filename}
      </Text>
    </BottomDashedLine>
  </Pressable>
);
