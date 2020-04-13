import 'react-native';
import React from 'react';
import {Contacts} from './Contacts';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Contacts />);
});
