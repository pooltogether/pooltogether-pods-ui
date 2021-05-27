import idx from 'idx'
import classnames from 'classnames'
import { useEffect, useState, useRef } from 'react'
import { useModal } from 'react-modal-hook'
import Modal from './Modal'

/**
 * @name ModalTemplate
 * @param {Object} props
 */
export const ModalTemplate = ({ className, openModal, label, ...props }) => {
  const [showModal, hideModal] = useModal(() => {
    return <Modal hideModal={hideModal} className=''></Modal>
  }, [transaction])

  useEffect(() => {
    if (openModal) showModal()
  }, [openModal])

  return (
    <span onClick={showModal} className=''>
      {label}
    </span>
  )
}

ModalTemplate.defaultProps = {
  label: 'Open Modal'
}

export default ModalTemplate
