import 'react-native';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
