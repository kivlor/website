import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'
import { Suspense } from 'solid-js'
import { HydrationScript } from 'solid-js/web'
import { Lightbar } from '../components/lightbar'
import styleCss from '../styles.css?url'
import { themeInitScript } from '../theme'

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{ rel: 'stylesheet', href: styleCss }],
  }),
  shellComponent: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <script innerHTML={themeInitScript}></script>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <div>
          <Lightbar />
          <Suspense>
            <Outlet />
            <TanStackRouterDevtools />
          </Suspense>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
