/** @jsxImportSource preact */

import Avatar from "../components/Avatar.tsx";
import Bio from "../components/Bio.tsx";

import Lightbar from "../islands/Lightbar.tsx";
import Links from "../islands/Links.tsx";
import Resume from "../islands/Resume.tsx";

export default function Index() {
  return (
    <div>
      <Lightbar />

      <div class="m-auto py-4 md:max-w-3xl">
        <header>
          <section class="py-4">
            <Avatar />
          </section>

          <section class="py-4">
            <Bio />
            <Links />
          </section>
        </header>
      </div>
    </div>
  );
}
