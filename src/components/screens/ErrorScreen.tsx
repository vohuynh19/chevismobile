import {useTranslation} from 'react-i18next';
import {Button, StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
  subTitle?: string;
  onRetry?: () => void;
  onClose?: () => void;
}

/**
 * @TODO
 * Need to be re-styled
 */
export const ErrorScreen = ({title, subTitle, onRetry, onClose}: Props) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text>{title ?? t('error.generalTitle')}</Text>
          <Text>{subTitle ?? t('error.generalSubtitle')}</Text>
        </View>
        {Boolean(onRetry) && (
          <Button title={t('action.tryAgain')} onPress={onRetry} />
        )}

        <Button
          title={t('action.close')}
          onPress={() => (onClose ? onClose() : navigation.goBack())}
        />
      </View>
    </>
  );
};
