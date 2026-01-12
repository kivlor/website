import { createFileRoute } from '@tanstack/solid-router'

import { Avatar } from '../components/avatar.tsx'
import { Bio } from '../components/bio.tsx'
import { Links } from '../components/links.tsx'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div class="mx-auto md:max-w-3xl">
      <Avatar />
      <Bio />
      <Links />
    </div>
  )
}
