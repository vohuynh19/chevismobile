import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import AppInitializer from './AppInitializer';
import AppProviders from './AppProviders';
import ErrorBoundary from './ErrorBoundary';
import RootStackScreen from '~navigators/RootStack';

const MainApp = RootStackScreen;

const App = () => (
  <AppProviders>
    <ErrorBoundary>
      <AppInitializer>
        <MainApp />
      </AppInitializer>
    </ErrorBoundary>
  </AppProviders>
);

export default gestureHandlerRootHOC(App);
