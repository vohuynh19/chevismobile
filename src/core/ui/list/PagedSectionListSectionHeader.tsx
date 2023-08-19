import {Text} from '../text/Text';
import {View} from '../view/View';

interface Props {
  leftText: string;
  rightText?: string;
  accessibilityLabel?: string;
}

export const PagedSectionListSectionHeader = ({
  leftText,
  accessibilityLabel,
  rightText,
}: Props) => (
  <View
    pb={3}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    bg="neutralLavender200"
    accessible
    accessibilityRole="header"
    accessibilityLabel={accessibilityLabel}>
    <Text variant="bodyBold">{leftText}</Text>
    {Boolean(rightText) && <Text color="primary900">{rightText}</Text>}
  </View>
);
