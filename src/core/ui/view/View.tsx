// eslint-disable-next-line no-restricted-imports
import {View as RNView} from 'react-native';
import {createBox} from '@shopify/restyle';

import {Theme} from '../../theme';

export const View = createBox<Theme>();

export type ViewRef = RNView;
