import {Icon, BaseBottomSheet, BottomSheetItem} from '~core/ui';
import {BottomSheetProps} from '~bottom-sheets/types';

type Props = BottomSheetProps;

const TestBottomSheet = ({}: Props) => {
  return (
    <BaseBottomSheet>
      <BottomSheetItem
        testID="btnBottomSheetAddPurchaseHomeAdd"
        title={'Test'}
        leftIcon={<Icon name="AccountsPayable" />}
      />
    </BaseBottomSheet>
  );
};

export default TestBottomSheet;
