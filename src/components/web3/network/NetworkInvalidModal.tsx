/* --- Global Modules --- */
import { useEthers } from '@usedapp/core'
import PropTypes from 'prop-types'
import { useEffect, useMemo } from 'react'
import { useModal } from 'react-modal-hook'

/* --- Local Modules --- */
import { Modal } from '@components'

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface NetworkInvalidModalProps {
  className: string
}

/**
 * @name
 * @param {Object} props
 */
export const NetworkInvalidModal = ({ className, ...props }: NetworkInvalidModalProps) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [showModal, hideModal] = useModal(() => {
    return (
      <Modal hideModal={hideModal} className=''>
        <div className='pb-10 pt-6 px-10 bg-purple-900 max-w-lg w-full text-center relative'>
          <img className='inline-block' src='/images/warning-red.svg' width={32} />
          <span className='block text-red-600'>You’re on the wrong network!</span>
          <p className='text-white mt-2'>
            Please switch the to Ethereum mainnet from <br /> inside your wallet to continue.
          </p>
          <span className='absolute top-2 right-3'>
            <span onClick={hideModal} className='cursor-pointer text-white'>
              <img className='inline-block' src='/images/close-white.svg' width={12} />
            </span>
          </span>
        </div>
      </Modal>
    )
  }, [])

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { chainId } = useEthers()

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  useEffect(() => {
    switch (chainId) {
      case 1:
      case 4:
      case 1337:
        hideModal()
        break
      default:
        showModal()
        break
    }
  }, [chainId])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return null
}

NetworkInvalidModal.propTypes = {
  className: PropTypes.string
}

NetworkInvalidModal.defaultProps = {
  className: undefined
}

export default NetworkInvalidModal
