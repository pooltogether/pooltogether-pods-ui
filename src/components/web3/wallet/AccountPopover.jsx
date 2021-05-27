/* --- Global Modules --- */
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { WalletNetwork, ChainID, Spacer } from '../../index'
import { useGetContractAddress } from '@hooks/useGetContractAddress'
import {
  AccountConnect,
  AccountAddress,
  NetworkBlockNumber,
  AccountDeactivate,
  WalletSelectModal
} from '@components'

/* --- Dynamic Module --- */

// Popover Rendered in Browser
const Popover = dynamic(
  () => {
    return import('react-tiny-popover').then((mod) => mod.Popover)
  },
  { ssr: false }
)

/**
 * @name
 * @param {Object} props
 */
export const AccountPopover = (props) => {
  const { account } = useEthers()
  const [isPopoverOpen, setIsPopoverOpen] = useState()
  const POOL_TOKEN = useGetContractAddress('ERC20POOL')

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  // Close Popover when Web3 connection is disabled
  useEffect(() => {
    if (!account) {
      setIsPopoverOpen(false)
    }
  }, [account])

  return (
    <div className='flex items-center'>
      {/* Popover Component */}
      <div className='relative'>
        <Popover
          isOpen={isPopoverOpen}
          positions={['bottom', 'top', 'right', 'left']}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={<PopoverInner POOL_TOKEN={POOL_TOKEN} account={account} />}
        >
          <div className='flex items-center'>
            <AccountConnect>
              {/* Account Disconnected */}
              <WalletSelectModal>
                <div className='wallet-select-btn cursor-pointer p-2 px-3 rounded-lg text-teal-500 text-xs'>
                  <span className='flex items-center'>
                    <div className='mr-2'>
                      <WalletNetwork />
                    </div>
                    Connect wallet
                  </span>
                </div>
              </WalletSelectModal>

              {/* Account Connected */}
              <div
                className='wallet-select-btn cursor-pointer p-2 px-3 rounded-lg text-teal-500 text-xs'
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              >
                <div className='flex items-center'>
                  <div className='mr-2'>
                    <WalletNetwork />
                  </div>
                  <AccountAddress className='tag-whites text-xs' />
                </div>
              </div>
            </AccountConnect>
          </div>
        </Popover>
      </div>
    </div>
  )
}

const PopoverInner = (props) => {
  return (
    <div className='card bg-purple-600 border-purple-700 text-white mr-6 mt-2 p-0 w-72'>
      <div className='p-3'>
        <AccountDeactivate className='tag-teal cursor-pointer rounded-xl text-xs text-purple-700 py-3 w-full flex-center text-center hover:shadow-md' />
      </div>
      {/* <Spacer className="inline-block mx-3" /> */}
      <div className='bg-purple-900 p-2'>
        <span className='text-xs'>
          <span className='font-semibold'>ChainID:</span> <ChainID />
        </span>
        <Spacer className='inline-block mx-3' />
        <span className='text-xs'>
          <span className='font-semibold'>Blocknumber:</span> <NetworkBlockNumber />
        </span>
      </div>
    </div>
  )
}

export default AccountPopover
