import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />);

    expect(component).toBeTruthy();
  });

  it('matches snapshot', () => {
    const component = renderer.create(<App />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
