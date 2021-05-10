import "../public/css/tailwind.css";
import "../public/css/styles.css";
import "tailwindcss/tailwind.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import { Providers } from "../src/providers/Providers";
import SiteLayout from "../src/layout/site/site";
import ArticleLayout from "../src/layout/article";

import {
  APPLICATION_NAME,
  APPLICATION_TAGLINE,
  APPLICATION_EMOJI,
} from "../src/constants/config";

import { NetworkInvalidModal } from "@components";

/**
 * @name Application
 */
class Application extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const isArticleRoute = router.pathname.startsWith("/article")
      ? true
      : false;
    return (
      <>
        <Head>
          <title>
            {APPLICATION_NAME} - {APPLICATION_TAGLINE}
          </title>
          <link
            rel="icon"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${APPLICATION_EMOJI}</text></svg>`}
          ></link>
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700,800,900&amp;lang=en"
          />
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Roboto:300,400,600,700,800,900&amp;lang=en"
          />
        </Head>
        <Providers>
          <NetworkInvalidModal />
          {isArticleRoute && (
            <ArticleLayout>
              <Component {...pageProps} key={router.route} />
            </ArticleLayout>
          )}
          {!isArticleRoute && (
            <SiteLayout>
              <Component {...pageProps} key={router.route} />
            </SiteLayout>
          )}
        </Providers>
      </>
    );
  }
}

export default Application;
