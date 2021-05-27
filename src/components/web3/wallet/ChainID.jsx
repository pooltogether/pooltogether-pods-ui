import { useMemo } from 'react'
import { useEthers } from '@usedapp/core'

/**
 * @name ChainID
 * @param {Object} props
 */
export const ChainID = ({ className, ...props }) => {
  const { chainId } = useEthers()

  return useMemo(() => {
    return (
      <>
        <span className={className}>{chainId}</span>
      </>
    )
  }, [chainId])
}
export default ChainID
