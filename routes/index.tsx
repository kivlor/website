/** @jsxImportSource preact */

import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <figure className="avatar">
        <img src={asset('/avatar.gif')} alt="Kivlor" />
      </figure>

      <section>
        <p>Andrew Gallagher, <em>aka</em> Kivlor.</p>
        <p>Maker, Coder, Tourist, Geek.</p>
      </section>

      <nav>
        <ul>
          <li><a href="http://github.com/kivlor" target="_blank">github</a></li>
          <li><a href="http://instagram.com/kivlor" target="_blank">instagram</a></li>
          <li><a href="http://twitter.com/kivlor" target="_blank">twitter</a></li>
        </ul>
      </nav>
    </div>
  );
}
