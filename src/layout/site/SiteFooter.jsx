/* --- Global Modules --- */
import Link from "next/link";

/* --- Local Modules --- */
import {
  APPLICATION_EMOJI,
  APPLICATION_NAME,
  APPLICATION_TAGLINE,
} from "@constants/config";
import { Spacer } from "@components";

/**
 * @name SiteFooter
 * @param {Object} props
 */
export const SiteFooter = (props) => {
  return (
    <footer
      className="bg-purple-900 border-t-2 border-solid border-top-2 border-white pt-10 pt-10 z-10"
      style={{
        backgroundColor: "#221047",
      }}
    >
      <div className="max-w-screen-xl m-auto text-gray-800 flex flex-wrap items-centers justify-left">
        <div className="pt-2 pr-10 text-white w-1/2 sm:w-4/12 md:w-3/12">
          <span className="card p-2">
            <span className="text-2xl text-shadow-sm">{APPLICATION_EMOJI}</span>
          </span>
          <Spacer className="my-2" />
          <h3 className="font-black text-4xl uppercases text-shadow-md">
            {APPLICATION_NAME}
          </h3>
          <p className="text-sm">
            <span className="font-normal text-shadow-md">
              {APPLICATION_TAGLINE}
            </span>
          </p>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-bold mb-6">
            Overview
          </div>
          <Link href="/article/getting-started">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Getting Started
            </a>
          </Link>
          <Link href="/article/how-it-works">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              How It Works
            </a>
          </Link>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-bold mb-6">
            Application
          </div>

          <Link href="/deposit">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Deposit
            </a>
          </Link>
          <Link href="/prize-history">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Prize History
            </a>
          </Link>
          <Link href="/admin">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Administation
            </a>
          </Link>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-bold mb-6">
            Community
          </div>
          <a
            target="_blank"
            href="https://twitter.com/PoolTogether_"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="flex pb-5 m-auto pt-5  border-t border-gray-500 text-white text-sm flex-col md:flex-row max-w-screen-xl">
        <div className="">
          © Copyright 2020 |{" "}
          <span className="text-white">
            <a target="_blank" href="https://pooltogether.com/">
              PoolTogether
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default SiteFooter;
