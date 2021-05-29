import { useEthers } from '@usedapp/core'
import { useMemo } from 'react'
import { Address } from '@components/'
/**
 * @name AccountAddress
 * @param {Object} props
 */
export const AccountAddress = ({ className, ...props }) => {
  const { account } = useEthers()

  return useMemo(() => {
    return <Address className={className} address={account} />
  }, [account])
}
export default AccountAddress
