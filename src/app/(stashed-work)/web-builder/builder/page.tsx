import BuilderLeftPanel from "@/components/BuilderLeftPanel";
import BuilderRightPanel from "@/components/BuilderRightPanel";
import { Header } from "@/components/Header";
import { CanvasLayout } from "@/components/layouts/CanvasLayout";
import { DropZone } from "@/components/DropZone";

export default async function Index() {
  return (
    <CanvasLayout
      leftPanel={<BuilderLeftPanel isCollapsed={false} />}
      rightPanel={<BuilderRightPanel themes={[]} />}
    >
      <div className="p-3 flex flex-col gap-10 text-white">
        <Header />
        <DropZone />
        <div></div>
      </div>
    </CanvasLayout>
  );
}
