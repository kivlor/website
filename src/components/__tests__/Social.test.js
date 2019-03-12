import React from 'react';
import renderer from 'react-test-renderer';

import { Social } from '../Social';

describe('Social', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Social />);

    expect(component).toBeTruthy();
  });

  it('matches snapshot', () => {
    const component = renderer.create(<Social />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
