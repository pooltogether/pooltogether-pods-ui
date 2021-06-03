import classnames from 'classnames'
import { useToggle } from '@src/hooks/helpers/useToggle'
import dynamic from 'next/dynamic'
// import { Popover } from "react-tiny-popover";

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
      align='center'
      padding={10}
      positions={['right', 'left']}
      onClickOutside={toggle}
      content={children}
    >
      <span onClick={toggle} className={tooltipClasses}>
        {label ? (
          label
        ) : (
          <img className='inline-block' src='/images/info.png' width={12} height={12} />
        )}
      </span>
    </Popover>
  )
}

export default Tooltip
