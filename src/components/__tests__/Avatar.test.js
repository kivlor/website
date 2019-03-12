import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Avatar />);

    expect(component).toBeTruthy();
  });

  it('matches snapshot', () => {
    const component = renderer.create(<Avatar />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
