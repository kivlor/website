/** @jsxImportSource preact */

import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div class="m-auto py-8 w-screen h-screen bg-white border-t-4 border-blue-200">
      <section class="py-8">
        <figure class="m-auto rounded-full w-40 md:w-48 h-40 md:h-48 bg-blue-200">
          <img src={asset('/avatar.png')} alt="Kivlor" />
        </figure>
      </section>

      <section class="py-8">
        <p class="mb-2 font-semibold text-center text-2xl md:text-3xl">
          Andrew Gallagher, <em class="font-normal">aka</em> Kivlor
        </p>
        <p class="mb-2 font-light text-center text-xl md:text-2xl text-gray-400">
          Maker, Coder, Tourist, Geek.
        </p>
      </section>

      <section class="py-4">
        <nav class="flex justify-center space-x-4">
          <a href="http://github.com/kivlor" target="_blank" alt="github">
            <img class="w-8 md:w-10 h-8 md:h-10" src={asset('/command-line-icon.svg')} />
          </a>
          <a href="http://instagram.com/kivlor" target="_blank" alt="instagram">
            <img class="w-8 md:w-10 h-8 md:h-10" src={asset('/camera-icon.svg')} />
          </a>
          <a href="http://twitter.com/kivlor" target="_blank" alt="twitter">
            <img class="w-8 md:w-10 h-8 md:h-10" src={asset('/chat-bubble-icon.svg')} />
          </a>
        </nav>
      </section>
    </div>
  );
}
