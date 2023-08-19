import {Spinner} from '../spinner/Spinner';
import {View} from '../view/View';

interface Props {
  isLoading: boolean;
}

export const PagedListFooter = ({isLoading}: Props) => {
  if (isLoading) {
    return (
      <View justifyContent="center" alignItems="center" py={2}>
        <Spinner />
      </View>
    );
  }

  return null;
};
