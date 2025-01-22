import { getUserInfo } from "@/apis/user";
import Link from "next/link";

export default async function Index() {
  const userInfo = await getUserInfo("Bearer 1");

  return (
    <div>
      <div>Welcome to Web Builder</div>
      <div>
        <div>
          Available Pages for {userInfo.Store.Name}{" "}
          <span className="capitalize">
            ({userInfo.Store.Category}
            {userInfo.Store.Niche && " - " + userInfo.Store.Niche})
          </span>
        </div>
        <div className="mt-4 pl-5">
          {userInfo.Store.Pages.map((page) => (
            <div key={page.ID}>
              <Link
                href={`/web-builder/page/${page.ID}`}
                className="text-blue-600 hover:underline"
              >
                /{page.Name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
