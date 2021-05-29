import Link from 'next/link'

/**
 * @name SiteMenu
 */
export const SiteMenu = () => {
  return (
    <div className='flex gap-x-4 my-3 text-right'>
      <Link href='/'>
        <a className='text-sm text-teal-300 hover:text-teal-600 duration-200 mr-2'>Deposit</a>
      </Link>
      <Link href={`/manage?tab=0`}>
        <a className='text-sm text-teal-300 hover:text-teal-600 duration-200 mr-2'>Manage</a>
      </Link>
      <Link href='/prize-history'>
        <a className='text-sm text-teal-300 hover:text-teal-600 duration-200'>Prize History</a>
      </Link>
    </div>
  )
}

export default SiteMenu
