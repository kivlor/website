/** @jsxImportSource preact */

import Github from '../components/Github.tsx';
import Instagram from '../components/Instagram.tsx';
import LinkedIn from '../components/LinkedIn.tsx';

import { hovering } from '../utils/state.ts';

export default function Links() {
  return (
    <nav class="flex justify-center space-x-8 py-4">
      <a
        href="http://github.com/kivlor"
        target="_blank"
        alt="github"
        onMouseOver={() => { hovering.value = 'github' }}
        onMouseOut={() => { hovering.value = '' }}
      >
        <Github class="w-8 h-8 fill-current text-gray-400 hover:text-black transition-colors" />
      </a>

      <a
        href="http://instagram.com/kivlor"
        target="_blank"
        alt="instagram"
        onMouseOver={() => { hovering.value = 'instagram' }}
        onMouseOut={() => { hovering.value = '' }}
      >
        <Instagram class="w-8 h-8 fill-current text-gray-400 hover:text-pink-700 transition-colors" />
      </a>

      <a
        href="https://www.linkedin.com/in/andrew-gallagher-a09218250"
        target="_blank"
        alt="linkedin"
        onMouseOver={() => { hovering.value = 'linkedin' }}
        onMouseOut={() => { hovering.value = '' }}
      >
        <LinkedIn class="w-8 h-8 fill-current text-gray-400 hover:text-blue-800 transition-colors" />
      </a>
    </nav>
  );
}
