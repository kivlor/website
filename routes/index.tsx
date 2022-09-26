/** @jsxImportSource preact */
  
import Bio from '../components/Bio.tsx';
import Avatar from '../islands/Avatar.tsx';
import Links from '../islands/Links.tsx';
import LoadingBar from '../islands/LoadingBar.tsx';

export default function Home() {
  return (
    <>
      <LoadingBar />

      <main class="py-4 md:py-8">
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
