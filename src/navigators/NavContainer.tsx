import React, {memo, ReactNode, useCallback} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {appLog} from '~core/logger';

const NavContainer = memo(({children}: {children: ReactNode}) => {
  const navigationRef = useNavigationContainerRef<{}>();

  const onStateChange = useCallback(() => {
    const routeName = navigationRef.current?.getCurrentRoute()?.name;
    if (routeName) {
      appLog.info('Route to:', routeName);
    }
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      {children}
    </NavigationContainer>
  );
});

export default NavContainer;
