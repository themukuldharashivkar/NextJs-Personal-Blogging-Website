import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-light">
              mukul.<span className="text-amber-500 font-bold">blog</span>
            </h1>
          </Link>

          <div className="flex items-center space-x-2 md:space-x-5">
            <div className="">
              <Link
                href="https://mukuldharashivkar.vercel.app/"
                className="dark:text-white text-neutral-900 px-4 py-2.5 rounded-md dark:bg-neutral-800 bg-slate-200"
              >
                Website
              </Link>
            </div>

            <Themebutton />
          </div>
        </div>
      </div>
    </div>
  );
}
