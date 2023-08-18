import React from 'react';
import VisionTestStack from './VisionTestStack';
import {RootStack} from './config';

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        {VisionTestStack(RootStack)}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
