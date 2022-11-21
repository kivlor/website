/** @jsxImportSource preact */

import Avatar from "../components/Avatar.tsx";
import Bio from "../components/Bio.tsx";
import Links from "../components/Links.tsx";

import Lightbar from "../islands/Lightbar.tsx";

export default function Index() {
  return (
    <div>
      <Lightbar />

      <div class="m-auto md:max-w-3xl">
        <header class="py-4">
          <Avatar />
          <Bio />
          <Links />
        </header>
      </div>
    </div>
  );
}
