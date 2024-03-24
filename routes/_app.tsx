import { type PageProps } from "$fresh/server.ts";

import Lightbar from "../components/Lightbar.tsx";

export default function App({ Component }: PageProps) {
  const plausibleSite = Deno.env.get("PLAUSIBLE_SITE");

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andrew Gallagher, aka Kivlor</title>

        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="stylesheet" href="/styles.css" />

        {plausibleSite && (<script defer data-domain={plausibleSite} src="https://plausible.io/js/plausible.js"></script>)}
      </head>
      <body>
        <div>
          <Lightbar />
          <Component />
        </div>
      </body>
    </html>
  );
}
