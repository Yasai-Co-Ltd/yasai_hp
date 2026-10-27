import Contact from "@/components/sections/Contact";
import ServicePromo from "@/components/works/ServicePromo";
import WorksCatalog from "@/components/works/WorksCatalog";
import WorksPageIntro from "@/components/works/WorksPageIntro";
import { works } from "@/data/works";

export const metadata = {
  title: "制作実績一覧 | YASAI株式会社",
};

export default function WorksPage() {
  return (
    <>
      <WorksPageIntro variant="list" />
      <WorksCatalog works={works} />
      <ServicePromo />
      <Contact />
    </>
  );
}
