import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {View} from 'react-native';

import {fireEvent, render, screen} from 'testUtils';

import {RadioButton} from '../RadioButton';

describe('RadioButton', () => {
  test('should render component', async () => {
    await render(<RadioButton checked onChange={() => {}} />, {
      withSnapshot: true,
    });

    // Disable until we upgrade react-native-reanimated
    // const checkmark = container.findAllByType(Animated.View)[0]; // there are two Animated.View, first is checkbox, second is checkmark

    // expect(checkmark).toHaveStyle({ borderRadius: 9999 });
  });

  // Disable until we upgrade react-native-reanimated
  test.skip('should show checkmark when checked is true', async () => {
    const {container} = await render(
      <RadioButton checked onChange={() => {}} />,
    );

    const viewIconComponent = container.findAllByType(View)[2];
    // Animated.View is react-native's View with animation. Pressable also is react-native's View in unit test.
    // There are three View, first is pressable, second is border of checkbox. third is checkmark

    expect(viewIconComponent).toHaveStyle({opacity: 1});
  });

  // Disable until we upgrade react-native-reanimated
  test.skip('should not show checkmark when checked is false', async () => {
    const {container} = await render(
      <RadioButton checked={false} onChange={() => {}} />,
    );

    const viewIconComponent = container.findAllByType(View)[2];
    // Animated.View is react-native's View with animation. Pressable also is react-native's View in unit test.
    // There are three View, first is pressable, second is border of checkbox. third is checkmark

    expect(viewIconComponent).toHaveStyle({opacity: 0});
  });

  test('should invoke onChange function with param is true if user presses radiobutton and checked variable is true', () => {
    const mockedHandleChange = jest.fn();
    render(<RadioButton checked onChange={mockedHandleChange} />);
    fireEvent.press(screen.getByRole('checkbox'));

    expect(mockedHandleChange).toBeCalledWith(false);
    expect(mockedHandleChange).toBeCalledTimes(1);
  });

  test('should invoke onChange function with param is false if user presses radiobutton and checked variable is false', () => {
    const mockedHandleChange = jest.fn();
    render(<RadioButton checked={false} onChange={mockedHandleChange} />);
    fireEvent.press(screen.getByRole('checkbox'));

    expect(mockedHandleChange).toBeCalledWith(true);
    expect(mockedHandleChange).toBeCalledTimes(1);
  });
});
