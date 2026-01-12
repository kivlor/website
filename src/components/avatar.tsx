import { onCleanup, onMount } from 'solid-js'

export function Avatar() {
  let container: HTMLDivElement | undefined
  let teardown: (() => void) | undefined

  onMount(async () => {
    if (!container) return
    const { mountAvatar } = await import('./avatar-r3f.tsx')
    teardown = mountAvatar(container)
  })

  onCleanup(() => {
    teardown?.()
  })

  return (
    <div class="pt-12 pb-8">
      <figure
        class={`m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-900/90 rounded-full overflow-hidden shadow-xl`}
      >
        <div
          ref={(element) => {
            container = element
          }}
          class="h-full w-full"
          role="img"
          aria-label="Kivlor 3D avatar"
        />
      </figure>
    </div>
  )
}
