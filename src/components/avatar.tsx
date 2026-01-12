import { createSignal, onMount, type Component } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export function Avatar() {
  const [Scene, setScene] = createSignal<Component | null>(null)

  onMount(async () => {
    const { AvatarScene } = await import('./avatar-three.tsx')
    setScene(() => AvatarScene)
  })

  return (
    <div class="pt-12 pb-8">
      <figure
        class={`m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-900/90 rounded-full overflow-hidden shadow-xl`}
      >
        <div class="h-full w-full" role="img" aria-label="Kivlor 3D avatar">
          <Dynamic component={Scene() ?? undefined} />
        </div>
      </figure>
    </div>
  )
}
