import * as React from 'react';

import avatarURL from '../images/avatar.gif';

export class App extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <figure className="avatar">
          <img src={avatarURL} alt="Kivlor" />
        </figure>

        <section className="bio">
          <p>Andrew Gallagher, <em>aka</em> Kivlor.</p>
          <p>Maker, Coder, Tourist, Geek.</p>
        </section>

        <nav className="links">
          <ul>
            <li><a className="github" href="http://github.com/kivlor" target="_blank">github</a></li>
            <li><a className="instagram" href="http://instagram.com/kivlor" target="_blank">instagram</a></li>
            <li><a className="twitter" href="http://twitter.com/kivlor" target="_blank">twitter</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
