import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div>Please wait while we scaffold your Store</div>
      <div>
        <Link href={"/web-builder"} className="text-blue-600 hover:underline">
          Visit Website
        </Link>
      </div>
    </div>
  );
}
