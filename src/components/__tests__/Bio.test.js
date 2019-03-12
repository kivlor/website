import React from 'react';
import renderer from 'react-test-renderer';

import { Bio } from '../Bio';

describe('Bio', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Bio />);

    expect(component).toBeTruthy();
  });

  it('matches snapshot', () => {
    const component = renderer.create(<Bio />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
