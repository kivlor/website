export function Avatar() {
  return (
    <div class="pt-12 pb-8">
      <figure
        class={`m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-300 dark:bg-gray-700 rounded-full`}
      >
        <img src={'/avatar.png'} alt="Kivlor" />
      </figure>
    </div>
  )
}
