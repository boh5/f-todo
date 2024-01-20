import Search from "@/app/components/page/Search";
import Overlay from "@/components/Overlay";
import SiteHeader from "@/components/SiteHeader";
import { useSearchStore } from "@/store/searchStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function PageHeader() {
  const focused = useSearchStore((state) => state.focused);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div ref={parent}>
      {focused && <Overlay />}
      {!focused && <SiteHeader />}
      <Search />
    </div>
  );
}
