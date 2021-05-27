import '../public/css/tailwind.css'
import '../public/css/styles.css'
import 'tailwindcss/tailwind.css'

import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { Providers } from '../src/providers/Providers'
import SiteLayout from '../src/layout/site/site'
import ArticleLayout from '../src/layout/article'

import { APPLICATION_NAME, APPLICATION_TAGLINE, APPLICATION_EMOJI } from '../src/constants/config'

import { NetworkInvalidModal } from '@components'

import 'react-toastify/dist/ReactToastify.css'

/**
 * @name Application
 */
class Application extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const isArticleRoute = router.pathname.startsWith('/article') ? true : false
    return (
      <>
        <Head>
          <title>
            {APPLICATION_NAME} - {APPLICATION_TAGLINE}
          </title>
          <link rel='icon' href={`/favicon.png`}></link>
          <link
            rel='stylesheet'
            href='//fonts.googleapis.com/css?family=Barlow:300,400,600,700,800,900&amp;lang=en'
          />
          <link
            rel='stylesheet'
            href='//fonts.googleapis.com/css?family=Inter:300,400,600,700,800,900&amp;lang=en'
          />
        </Head>
        <Providers>
          <ToastContainer className='pod-toast' position='top-center' autoClose={7000} />
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
    )
  }
}

export default Application
