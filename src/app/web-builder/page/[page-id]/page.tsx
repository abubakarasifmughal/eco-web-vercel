import { getPageById } from "@/apis/page";
import { DynamicRenderer } from "@/libs/dynamic-renderer";

export interface NavbarProps {
  links: { href: string; label: string }[];
}

export default async function Index({
  params,
}: {
  params: { "page-id": number };
}) {
  const pageId = params["page-id"];
  const page = await getPageById(pageId, "Bearer 1");

  return (
    <div>
      {page.Elements?.map((pageElement) => {
        const Renderer = DynamicRenderer(pageElement.Element.PathAlias);
        const props = { links: [{ href: "/", label: "Home" }] };
        return (
          <div key={pageElement.ID}>
            <p>{pageElement.Element.PathAlias}</p>
            {Renderer ? (
              <Renderer {...props} />
            ) : (
              <p>Component not found: {pageElement.Element.PathAlias}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
