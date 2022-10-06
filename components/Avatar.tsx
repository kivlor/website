/** @jsxImportSource preact */

import { asset } from '$fresh/runtime.ts';

export default function Avatar() {
  return (
    <figure class={`m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-200 dark:bg-gray-800 rounded-full`}>
      <img src={asset('/avatar.png')} alt="Kivlor" />
    </figure>
  );
}
