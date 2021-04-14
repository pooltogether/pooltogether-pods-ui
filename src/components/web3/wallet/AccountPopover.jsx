import { useRef, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useEthers } from "@usedapp/core";
import { Popover } from "react-tiny-popover";
import {
  Address,
  AccountBalance,
  WalletBalance,
  WalletBlockie,
  WalletDisconnect,
  WalletNetwork,
  ChainID,
  Spacer,
} from "../../index";

import {
  AccountConnect,
  AccountAddress,
  NetworkBlockNumber,
  AccountDeactivate,
} from "@components";

/**
 * @name
 * @param {Object} props
 */
export const AccountPopover = (props) => {
  const { account } = useEthers();

  const [isPopoverOpen, isPopoverOpenSet] = useState();

  if (!process.browser) return null;
  if (process.browser) {
    return (
      <div className="flex items-center">
        {/* Popover Component */}
        <div className="relative">
          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom", "top", "right", "left"]}
            onClickOutside={() => isPopoverOpenSet(false)}
            content={({ position, childRect, popoverRect }) => (
              <div
                className="card mr-6 mt-2 p-0 w-72"
                onClick={() => isPopoverOpenSet(!isPopoverOpen)}
              >
                <div className="p-4">
                  <div className="text-center">
                    <span className="font-bold text-xl">
                      <AccountBalance /> ETH
                    </span>
                  </div>
                  <Spacer className="my-1" />
                </div>

                <AccountDeactivate className="tag-red cursor-pointer rounded-none text-xs py-3 w-full flex-center text-center hover:shadow-md" />
                <div className="bg-gray-100 p-2">
                  <span className="text-xs">
                    <span className="font-semibold">ChainID:</span> <ChainID />
                  </span>
                  <Spacer className="inline-block mx-3" />
                  <span className="text-xs">
                    <span className="font-semibold">Blocknumber:</span>{" "}
                    <NetworkBlockNumber />
                  </span>
                </div>
              </div>
            )}
          >
            <div
              className="cursor-pointer bg-purple-900 p-2 rounded-lg text-teal-500 text-xs"
              onClick={() => isPopoverOpenSet(!isPopoverOpen)}
            >
              <div className="flex items-center">
                <span
                  className=""
                  onClick={() => isPopoverOpenSet(!isPopoverOpen)}
                >
                  <AccountConnect>
                    <AccountAddress className="tag-whites text-xs" />
                  </AccountConnect>
                </span>
                <div className="ml-1">
                  <WalletNetwork />
                </div>
                <WalletBlockie
                  width={22}
                  className={
                    " cursor-pointer rounded-full ml-3 z-0 hover:shadow-md"
                  }
                />
              </div>
            </div>
          </Popover>
          {/* <div className="absolute -top-2 -right-4 bg-white rounded-full p-1 w-6 h-6 shadow-md flex items-center justify-center">
            <WalletTypeIcon />
          </div> */}
        </div>
      </div>
    );
  }
};
export default AccountPopover;
