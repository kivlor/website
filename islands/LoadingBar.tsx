/** @jsxImportSource preact */

import { asset } from "$fresh/runtime.ts";

import { hovering, loading } from '../utils/state.ts';

export default function LoadingBar() {
  let border = 'border-green-100';
  switch (hovering.value) {
    case 'github':
      border = 'border-gray-200';
      break;
    case 'instagram':
      border = 'border-pink-200';
      break;
    case 'linkedin':
      border = 'border-blue-200';
      break;
  }

  return (
    <div class={`border-t-4 ${border} transition-colors`}></div>
  );
}
