import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div>Some landing page here</div>
      <div>
        <Link href={'/create-store'} className="text-blue-600 hover:underline">Create Store</Link>
      </div>
    </div>
  );
}
