/** @jsxImportSource preact */

import { asset } from "$fresh/runtime.ts";

import { Camera, ChatBubble, CommandLine } from '../components/icons.tsx';

export default function Home() {
  return (
    <div class="m-auto py-4 md:py-8 w-screen h-screen bg-white border-t-4 border-blue-200">
      <section class="py-8">
        <figure class="m-auto rounded-full w-40 md:w-48 h-40 md:h-48 bg-blue-200">
          <img src={asset('/avatar.png')} alt="Kivlor" />
        </figure>
      </section>

      <section class="py-4 md:py-8">
        <p class="mb-2 font-semibold text-center text-2xl md:text-3xl">
          Andrew Gallagher, <em class="font-normal">aka</em> Kivlor
        </p>

        <p class="mb-2 font-light text-center text-xl md:text-2xl text-gray-400">
          Maker, Coder, Tourist, Geek.
        </p>

        <nav class="flex justify-center space-x-6 py-4">
          <a href="http://github.com/kivlor" target="_blank" alt="github">
            <CommandLine class="w-10 h-10 stroke-current stroke-1 text-gray-600" />
          </a>
          <a href="http://instagram.com/kivlor" target="_blank" alt="instagram">
            <Camera class="w-10 h-10 stroke-current stroke-1 text-gray-600" />
          </a>
          <a href="http://twitter.com/kivlor" target="_blank" alt="twitter">
            <ChatBubble class="w-10 h-10 stroke-current stroke-1 text-gray-600" />
          </a>
        </nav>
      </section>
    </div>
  );
}
