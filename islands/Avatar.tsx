/** @jsxImportSource preact */

import { asset } from "$fresh/runtime.ts";

import { hovering } from '../utils/state.ts';

export default function Avatar() {
  let background = 'bg-green-100';
  switch (hovering.value) {
    case 'github':
      background = 'bg-gray-200';
      break;
    case 'instagram':
      background = 'bg-pink-200';
      break;
    case 'linkedin':
      background = 'bg-blue-200';
      break;
  }

  return (
    <figure class={`m-auto rounded-full w-40 md:w-48 h-40 md:h-48 ${background} transition-colors`}>
      <img src={asset('/avatar.png')} alt="Kivlor" />
    </figure>
  );
}
