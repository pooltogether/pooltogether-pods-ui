/* --- Global Modules --- */
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { WalletNetwork, ChainID, Spacer } from "../../index";
import { useGetContractAddress } from "@hooks/useGetContractAddress";
import {
  AccountConnect,
  AccountAddress,
  NetworkBlockNumber,
  AccountDeactivate,
  WalletSelectModal,
} from "@components";

/* --- Dynamic Module --- */

// Popover Rendered in Browser
const Popover = dynamic(
  () => {
    return import("react-tiny-popover").then((mod) => mod.Popover);
  },
  { ssr: false }
);

/**
 * @name
 * @param {Object} props
 */
export const AccountPopover = (props) => {
  const { account } = useEthers();
  const [isPopoverOpen, isPopoverOpenSet] = useState();
  const POOL_TOKEN = useGetContractAddress("ERC20POOL");

  return (
    <div className="flex items-center">
      {/* Popover Component */}
      <div className="relative">
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom", "top", "right", "left"]}
          onClickOutside={() => isPopoverOpenSet(false)}
          content={<PopoverInner POOL_TOKEN={POOL_TOKEN} account={account} />}
        >
          <div
            // className="cursor-pointer bg-teal-500 p-2 rounded-lg text-teal-500 text-xs"
            style={{ backgroundColor: "rgba(14, 163, 164, 0.2" }}
          >
            <div className="flex items-center">
              <span className="">
                <AccountConnect>
                  {/* Account Disconnected */}
                  <div
                    className="cursor-pointer bg-teal-500 p-2 rounded-lg text-teal-500 text-xs hover:shadow-md"
                    style={{ backgroundColor: "rgba(14, 163, 164, 0.2" }}
                  >
                    <span className="flex items-center">
                      <div className="mr-2 mt-1">
                        <WalletNetwork />
                      </div>
                      <WalletSelectModal>
                        <span className="">Connect to Network</span>
                      </WalletSelectModal>
                    </span>
                  </div>

                  {/* Account Connected */}
                  <div
                    className="cursor-pointer bg-teal-500 p-2 rounded-lg text-teal-500 text-xs hover:shadow-md"
                    style={{ backgroundColor: "rgba(14, 163, 164, 0.2" }}
                    onClick={() => isPopoverOpenSet(!isPopoverOpen)}
                  >
                    <div className="flex items-center">
                      <div className="mr-2 mt-1">
                        <WalletNetwork />
                      </div>
                      <AccountAddress className="tag-whites text-xs" />
                    </div>
                  </div>
                </AccountConnect>
              </span>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

const PopoverInner = (props) => {
  return (
    <div className="card bg-purple-600 border-purple-700 text-white mr-6 mt-2 p-0 w-72">
      {/* <div className="p-4">
        <div className="text-center">
          <span className="flex items-center justify-center font-bold text-xl">
            <ERC20Balance
              className="inline-block"
              account={props.account}
              address={props.POOL_TOKEN}
            />{" "}
          </span>
          <div className="flex items-center justify-center">
            <img
              className="inline-block mr-1"
              src="/tokens/token-pool.png"
              width={18}
            />
            <span className="inline-block text-lg">POOL</span>
          </div>
          <Spacer className="my-1" />
          <span className="font-normal text-sm">
            <AccountBalance /> ETH
          </span>
        </div>
      </div> */}

      <div className="p-3">
        <AccountDeactivate className="tag-teal cursor-pointer rounded-xl text-xs text-purple-700 py-3 w-full flex-center text-center hover:shadow-md" />
      </div>
      {/* <Spacer className="inline-block mx-3" /> */}
      <div className="bg-purple-900 p-2">
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
  );
};

export default AccountPopover;
