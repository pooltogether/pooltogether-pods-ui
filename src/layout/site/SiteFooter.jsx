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
      className="bg-purple-900 border-t-2 border-solid border-top-2 border-white pt-10 px-10 z-10"
      style={{
        backgroundColor: "#221047",
      }}
    >
      <div className="max-w-screen-xl m-auto text-gray-800 flex flex-wrap items-centers justify-left">
        <div className="p-5 pr-10 text-white w-1/2 w-full sm:w-4/12 md:w-3/12">
          <h3 className="font-semibold text-4xl uppercases text-teal text-shadow-md">
            {APPLICATION_NAME}
          </h3>
          <p className="font-normal text-xs text-shadow-md">
            {APPLICATION_TAGLINE}
          </p>
        </div>
        <div className="p-5 w-1/2 w-full sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-bold mb-6">
            Resources
          </div>
          <a
            target="_blank"
            href="https://pooltogether.com/"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            PoolTogether
          </a>
          <a
            target="_blank"
            href="https://app.pooltogether.com/"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            Application
          </a>
          <a
            target="_blank"
            href="https://gov.pooltogether.com/"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            Governance
          </a>
          {/* <Link href="/article/getting-started">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Getting Started with Pods
            </a>
          </Link> */}
        </div>
        <div className="p-5 w-1/2 w-full sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-bold mb-6">
            Application
          </div>

          <Link href="/deposit">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Deposit
            </a>
          </Link>
          <Link href="/manage">
            <a className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
              Manage
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
            <img
              className="inline-block mr-1"
              src="/social/twitter-white.svg"
              width={14}
            />
            <span className="inline-block">Twitter</span>
          </a>
          <a
            target="_blank"
            href="https://discord.gg/hxPhPDW"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            <img
              className="inline-block mr-1"
              src="/social/discord-white.svg"
              width={14}
            />
            <span className="inline-block">Discord</span>
          </a>
          <a
            target="_blank"
            href="https://github.com/pooltogether"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            <img
              className="inline-block mr-1"
              src="/social/github-white.svg"
              width={14}
            />
            <span className="inline-block">Github</span>
          </a>
          <a
            target="_blank"
            href="https://medium.com/pooltogether"
            className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
          >
            <img
              className="inline-block mr-1"
              src="/social/medium-white.svg"
              width={14}
            />
            <span className="inline-block">Medium</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default SiteFooter;
