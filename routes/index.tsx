/** @jsxImportSource preact */

import Avatar from '../islands/Avatar.tsx';
import Links from '../islands/Links.tsx';
import LoadingBar from '../islands/LoadingBar.tsx';

export default function Home() {
  return (
    <>
      <LoadingBar />

      <main class="m-auto py-4 md:py-8 w-screen h-screen bg-white">
        <section class="py-8">
          <Avatar />
        </section>

        <section class="py-4 md:py-8">
          <p class="mb-2 font-semibold text-center text-2xl md:text-3xl">
            Andrew Gallagher, <em class="font-normal">aka</em> Kivlor
          </p>

          <p class="mb-2 font-light text-center text-xl md:text-2xl text-gray-600">
            Maker, Coder, <em class="line-through not-italic">Tourist</em>, Geek.
          </p>

          <Links />
        </section>
      </main>
    </>
  );
}
