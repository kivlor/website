import * as React from 'react';

import { Avatar } from './Avatar';
import { Bio } from './Bio';
import { Social } from './Social';

export class App extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Avatar />
        <Bio />
        <Social />
      </React.Fragment>
    );
  }
}
