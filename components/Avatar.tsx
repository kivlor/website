import { asset } from "$fresh/runtime.ts";

export default function Avatar() {
  return (
    <div class="pt-12 pb-8">
      <figure
        class="m-auto w-36 md:w-44 h-36 md:h-44"
      >
        <img
          class="w-full h-full"
          src={asset("/avatar-3d.svg")}
          alt="Kivlor 3D avatar"
        />
      </figure>
    </div>
  );
}
