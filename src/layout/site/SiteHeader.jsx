/* --- Global Modules --- */
import React from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

/* --- Local Modules --- */

import { APPLICATION_NAME } from '@constants/config'
import { AccountPopover } from '@components'
import { SiteMenu } from './SiteMenu'
import { MobileMenu } from './MobileMenu'

/**
 * @name
 * @param {Object} props
 */
export const SiteHeader = (props) => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 980px)'
  })
  return (
    <div className='max-w-screen-xl w-full mx-auto z-500'>
      <div className={'flex items-center justify-between text-gray-400 px-4 py-3'}>
        <div className={'flex items-center'}>
          {!isTabletOrMobile ? null : <MobileMenu />}
          <Link href='/'>
            <a className='text-xs sm:text-xl flex items-center font-barlow font-semibold text-white hover:text-teal-300 duration-200 ml-2'>
              {APPLICATION_NAME}
            </a>
          </Link>
        </div>
        <div className={'flex items-center'}>
          {!isTabletOrMobile ? (
            <>
              <SiteMenu />
              <div className='mx-3' />
            </>
          ) : (
            <div></div>
          )}
          <AccountPopover className='btn btn-blue gradient-green-to-blue' />
        </div>
      </div>
    </div>
  )
}
export default SiteHeader
