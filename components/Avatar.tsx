import { asset } from "$fresh/runtime.ts";

export default function Avatar() {
  return (
    <div class="pt-12 pb-8">
      <figure class="m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <img src={asset("/avatar.png")} alt="Kivlor" class="w-full h-full" />
      </figure>
    </div>
  );
}
