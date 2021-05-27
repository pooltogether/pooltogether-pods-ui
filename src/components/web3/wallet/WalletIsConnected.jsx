import { useEthers } from '@usedapp/core'

import { WalletSelectModal } from '@components/'
import { useMemo } from 'react'

/**
 * @name
 * @param {Object} props
 */
export const WalletIsConnected = ({ children, button }) => {
  const { account, active } = useEthers()

  return useMemo(() => {
    if (account && active) return children

    return (
      <WalletSelectModal>
        {button ? (
          button
        ) : (
          <button className='btn bg-purple-300 font-bold text-black rounded-lg p-2 w-full'>
            Connect Wallet
          </button>
        )}
      </WalletSelectModal>
    )
  }, [account, active, children])
}

export default WalletIsConnected
