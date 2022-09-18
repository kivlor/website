/** @jsxImportSource preact */

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  const plausibleSite = Deno.env.get('PLAUSIBLE_SITE')

  return (
    <>
      <Head>
        <title>Maker, Coder, Tourist, Geek.</title>

        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

        {plausibleSite && (<script defer data-domain={plausibleSite} src="https://plausible.io/js/plausible.js"></script>)}
      </Head>

      <Component />
    </>
  );
}
