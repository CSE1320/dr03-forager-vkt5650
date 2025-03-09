import Link from "next/link";

export default function TopMenu() {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 z-50">
      <Link href="/dashboard" passHref>
        <button className="flex items-center justify-center p-3 text-white text-3xl cursor-pointer focus:outline-none">
            <img src="/icons/back.svg" alt="back button"/>
        </button>
      </Link>
      <div className="flex items-center justify-center p-3 text-white text-2xl cursor-pointer">
            <img src="/icons/flash.svg" alt="flash icon"/>
      </div>
    </div>
  );
}