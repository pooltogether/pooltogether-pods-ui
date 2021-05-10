import React from "react";
import { useRouter } from "next/router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/**
 * @name SiteLayout
 * @param {Object} props
 */
export const SiteLayout = ({ children, ...props }) => {
  const router = useRouter();
  const isDepositRoute =
    router.pathname.startsWith("/deposit") ||
    router.pathname.startsWith("/prize-history") ||
    router.pathname.startsWith("/manage")
      ? true
      : false;

  return (
    <div className="flex flex-col h-screen gradient-purple bg-gradient-to-b min-h-full">
      {isDepositRoute ? (
        <>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-purple-1000 opacity-100 z-1"
            style={{
              backgroundColor: "#322153",
            }}
          ></div>
          <div className="bg-internal bg-bottom bg-cover fixed top-0 bottom-0 left-0 right-0 opacity-80 z-1"></div>
        </>
      ) : (
        <>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-purple-1000 opacity-100 z-1"
            style={{
              backgroundColor: "#322153",
            }}
          />
          <div className="bg-bg-home bg-bottom bg-cover fixed top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
        </>
      )}
      <SiteHeader />
      <div className="flex-1 z-200">
        <div className="relative px-10 lg:px-0 z-100">{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
