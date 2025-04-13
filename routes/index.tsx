import Avatar from "../components/Avatar.tsx";
import Bio from "../components/Bio.tsx";
import Links from "../components/Links.tsx";
import LowPolyAvatar from "../islands/LowPolyAvatar.tsx";

export default function Index() {
  return (
    <div class="mx-auto md:max-w-3xl">
      <LowPolyAvatar />
      <Bio />
      <Links />
    </div>
  );
}
