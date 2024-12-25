import { getAllThemes } from "@/apis/themes";
import Link from "next/link";

export default async function Index() {
  const themes = await getAllThemes("Bearer 1");

  return (
    <div>
      <div>Choose a Theme</div>
      {themes.map((theme) => (
        <div key={theme.ID} className="mb-4">
          <Link
            href={"/scaffolding-store"}
            className="text-blue-600 hover:underline"
          >
            <pre>{theme.Name}</pre>
          </Link>

          <pre className="text-orange-700">Elements {">>"}</pre>
          <div className="pl-6">
            {theme.Elements.map((element) => (
              <div key={element.ID}>
                <pre>{JSON.stringify(element, null, 2)}</pre>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
