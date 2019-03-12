import * as React from 'react';

import { Avatar } from './Avatar';
import { Bio } from './Bio';
import { Social } from './Social';

export const App = () => {
  return (
    <React.Fragment>
      <Avatar />
      <Bio />
      <Social />
    </React.Fragment>
  );
}
