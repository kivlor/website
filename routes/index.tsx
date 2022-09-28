/** @jsxImportSource preact */
  
import Bio from '../components/Bio.tsx';
import Avatar from '../islands/Avatar.tsx';
import Links from '../islands/Links.tsx';

export default function Home() {
  return (
    <>
      <main class="py-4 md:py-8 border-t-4 border-green-100">
        <section class="py-8">
          <Avatar />
        </section>

        <section class="py-4 md:py-8">
          <Bio />
          <Links />
        </section>
      </main>
    </>
  );
}
