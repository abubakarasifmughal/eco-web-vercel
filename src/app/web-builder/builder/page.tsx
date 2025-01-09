import BuilderLeftPanel from "@/components/BuilderLeftPanel";
import BuilderRightPanel from "@/components/BuilderRightPanel";
import { Header } from "@/components/Header";
import { CanvasLayout } from "@/components/layouts/CanvasLayout";
import { getAllThemes } from "@/apis/themes";
import { DropZone } from "@/components/DropZone";

export default async function Index() {
  const elements = await getAllThemes("Bearer 1");

  return (
    <CanvasLayout
      leftPanel={<BuilderLeftPanel isCollapsed={false} />}
      rightPanel={<BuilderRightPanel themes={elements} />}
    >
      <div className="p-3 flex flex-col gap-10 text-white">
        <Header />
        <DropZone />
        <div></div>
      </div>
    </CanvasLayout>
  );
}
