/* --- Global Modules --- */
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

/* --- Local Modules --- */

import { APPLICATION_NAME, APPLICATION_EMOJI } from "@constants/config";
import { AccountPopover } from "@components";
import { SiteMenu } from "./SiteMenu";

/**
 * @name
 * @param {Object} props
 */
export const SiteHeader = (props) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 980px)",
  });
  return (
    <div className="max-w-screen-xl w-full mx-auto z-500">
      <div
        className={"flex items-center justify-between text-gray-400 px-4 py-3"}
      >
        <div className={"flex items-center"}>
          <Link href="/">
            <a className="flex items-center font-bold text-gray-s700 hover:text-gray-100 mr-5">
              <span className="text-lg text-gray mr-2">
                {APPLICATION_EMOJI}
              </span>
              <span className="text-teal-500 text-xl">{APPLICATION_NAME}</span>
            </a>
          </Link>
        </div>
        <div className={"flex items-center"}>
          {!isTabletOrMobile ? (
            <>
              <SiteMenu />
              <AccountPopover className="btn-blue gradient-green-to-blue" />
              {/* <WalletIsEnabled className="btn-teal bg-purple-800 text-white rounded-sm">
                <WalletConnectedDetails />
              </WalletIsEnabled> */}
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SiteHeader;
