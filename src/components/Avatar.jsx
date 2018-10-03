import * as React from 'react';

import avatarURL from '../images/avatar.gif';

export const Avatar = () => (
  <figure className="avatar">
    <img src={avatarURL} alt="Kivlor" />
  </figure>
);
