import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useToggle } from '@src/hooks/helpers/useToggle'
import dynamic from 'next/dynamic'

// Popover Rendered in Browser
const Popover = dynamic(
  () => {
    return import('react-tiny-popover').then((mod) => mod.Popover)
  },
  { ssr: false }
)

/**
 * @name Tooltip
 * @param {Object} props
 */
export const Tooltip = ({ className, children, label }) => {
  const [open, toggle] = useToggle()
  const tooltipClasses = classnames('cursor-pointer inline-flex', className)

  return (
    <Popover
      isOpen={open}
      align='start'
      padding={10}
      positions={['right', 'left', 'top', 'bottom']}
      onClickOutside={toggle}
      content={({ position, nudgedLeft, nudgedTop, ...rest }) => (
        <TooltipInner
          position={position}
          nudgedLeft={nudgedLeft}
          nudgedTop={nudgedTop}
          {...rest}
          children={children}
        />
      )}
    >
      <TooltipToggleWrapper onClick={toggle} className={tooltipClasses}>
        {label ? label : <img className='inline-block' src='/images/info.png' width={12} />}
      </TooltipToggleWrapper>
    </Popover>
  )
}

const TooltipInner = ({ children, ...props }) => {
  return <div>{children}</div>
}

const TooltipToggleWrapper = React.forwardRef((props, ref) => (
  <span className={props.className} ref={ref} onClick={props.onClick}>
    {props.children}
  </span>
))

export default Tooltip
