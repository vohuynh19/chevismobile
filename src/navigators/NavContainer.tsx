import React, {memo, ReactNode, useCallback} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

import {appLog} from '~core/logger';

const NavContainer = memo(({children}: {children: ReactNode}) => {
  const routeNameRef = React.useRef<string>();
  const navigationRef = useNavigationContainerRef<{}>();

  const onStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;

    currentRouteName && appLog.info('Route to:', currentRouteName);
  }, [navigationRef]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={onStateChange}>
      {children}
    </NavigationContainer>
  );
});

export default NavContainer;
