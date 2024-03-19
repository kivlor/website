import Avatar from "../components/Avatar.tsx";
import Bio from "../components/Bio.tsx";
import Lightbar from "../components/Lightbar.tsx";
import Links from "../components/Links.tsx";
import Resume from "../components/Resume.tsx";

export default function Index() {
  return (
    <div class="h-full">
      <Lightbar />

      <div class="m-auto md:max-w-3xl">
        <Avatar />
        <Bio />
        <Links />
      </div>
    </div>
  );
}
