import Link from 'next/link'
import { Fragment } from 'react'
import { useModal } from 'react-modal-hook'
import menu from '../../constants/menu'
import Menu from '../../../public/images/menu.svg'
import Close from '../../../public/images/close.svg'
/**
 * @name MobileMenu
 * @param {Object} props
 */
export const MobileMenu = ({ className, ...props }) => {
  // Modal : Component
  const [showModal, hideModal] = useModal(() => {
    const handleHideModal = () => {
      hideModal()
      document.querySelector('body').classList.remove('overflow-hidden')
    }

    return (
      <ModalMenuMobile hideModal={handleHideModal}>
        <MobileMenuItems hideModal={handleHideModal} />
      </ModalMenuMobile>
    )
  }, [])

  const handleShowModal = () => {
    showModal()
    document.querySelector('body').classList.add('overflow-hidden')
  }

  // Action : Component
  return (
    <span onClick={handleShowModal} className='text-gray-500 font-semibold cursor-pointer mt-2'>
      <Menu height={22} width={22} fill='#35F0D0' />
    </span>
  )
}

/**
 * @name Modal
 * @param {Object} props
 */
export const ModalMenuMobile = ({ children, className, hideModal }) => {
  return (
    <>
      <div
        onClick={hideModal}
        className={'bg-gray-900 fixed top-0 bottom-0 left-0 right-0 z-500'}
        style={{ backgroundColor: 'rgba(59, 66, 86, 1)' }}
      />
      <div
        className={`bg-white absolute top-0 bottom-0 left-0 right-0 text-white p-8 px-4 z-500 shadow-lg overflow-auto`}
        style={{ backgroundColor: 'rgba(59, 66, 86, 1)' }}
      >
        <div>
          <div className=' flex justify-between p-4 px-8 -mt-8 -mx-8'>
            <span className='text-teal text-xl font-bold'>PoolTogether Pods</span>
            <span onClick={hideModal} className='cursor-pointer text-md'>
              <Close height={22} width={22} fill='#35F0D0' />
            </span>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

const MobileMenuItems = ({ hideModal }) => {
  return (
    <div className='overflow-auto max-h-full'>
      {menu.map((category, index) => (
        <Fragment key={index}>
          <Link href={category.url}>
            <a onClick={hideModal} className={'flex items-center pb-3 mt-3'}>
              <h3 className={'text-md'}>{category.label}</h3>
            </a>
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default MobileMenu
