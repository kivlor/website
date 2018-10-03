import * as React from 'react';

import { Bio } from './Bio';
import { Social } from './Social';
import { Voxels } from './Voxels';

export class App extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Voxels />
        <Bio />
        <Social />
      </React.Fragment>
    );
  }
}
