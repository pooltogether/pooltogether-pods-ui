import React from "react";
import { useMediaQuery } from "react-responsive";
import { ArticleHeader } from "./article/ArticleHeader";
import { SiteFooter } from "./site/SiteFooter";

/**
 * @name ArticleLayout
 * @param {Object} props
 */
export const ArticleLayout = ({ children, ...props }) => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden min-h-full">
      <ArticleHeader />
      <div className="flex-1">
        <div className="container max-w-3xl mx-auto py-10">{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default ArticleLayout;
