import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../button/Button';
import {TitleDivider} from '../text';
import {Text} from '../text/Text';
import {View} from '../view';
import ErrorScreenHeaderIllustration from './ErrorScreenHeaderIllustration';
import {Screen} from './Screen';
import {ScrollViewScreen} from './ScrollViewScreen';
import {Header} from '../header';
import {NavButton} from '../navigation/NavButton';

interface Props {
  title?: string;
  subTitle?: string;
  onRetry?: () => void;
  onClose?: () => void;
}

export const ErrorScreen = ({onRetry, onClose, title, subTitle}: Props) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <Screen extraBottomInset bg="white">
      <StatusBar barStyle="dark-content" />
      <View>
        <Header asOverlay>
          <NavButton
            iconName="Close"
            onPress={() => (onClose ? onClose() : navigation.goBack())}
            accessibilityLabel={t('action.close')}
          />
        </Header>
        <ErrorScreenHeaderIllustration />
      </View>
      <ScrollViewScreen pt={8}>
        <View flex={1} alignItems="center">
          <Text variant="heading2Bold">{title ?? t('error.generalTitle')}</Text>
          <TitleDivider />
          <Text color="neutralLavender900" textAlign="center">
            {subTitle ?? t('error.generalSubtitle')}
          </Text>
        </View>
        {Boolean(onRetry) && (
          <Button
            testID="btnRetryErrorScreen"
            title={t('action.tryAgain')}
            onPress={onRetry}
          />
        )}
      </ScrollViewScreen>
    </Screen>
  );
};
