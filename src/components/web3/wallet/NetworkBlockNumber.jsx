import { useMemo } from 'react'
import { useBlockNumber, useChainState } from '@usedapp/core'

/**
 * @name
 * @param {Object} props
 */
export const NetworkBlockNumber = ({ className, ...props }) => {
  const blocknumber = useBlockNumber()

  return useMemo(() => {
    return (
      <>
        <span className={className}>{blocknumber}</span>
      </>
    )
  }, [blocknumber])
}
export default NetworkBlockNumber
