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
      {/* NOTE TO SELF: Moved to the query */}
      {/* .sort((a, b) => (a.SortIndex > b.SortIndex ? 1 : -1)) */}
      {page.Elements.map((pageElement) => (
        <div key={pageElement.ID}>
          {pageElement.Element.PathAlias}
          {DynamicRenderer("Footer")()}
          {/* {DyanmicRenderer(pageElement.Element.PathAlias)(prop)} */}
        </div>
      ))}
    </div>
  );
}
