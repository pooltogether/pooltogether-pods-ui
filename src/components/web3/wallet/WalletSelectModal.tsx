import { useEthers } from '@usedapp/core'
import { useModal } from 'react-modal-hook'
import { metamask, walletconnect, walletlink } from '@src/connectors'
import { Modal } from '@src/components'

const WALLET_OPTIONS = [
  {
    label: 'MetaMask',
    connector: metamask
  },
  {
    label: 'WalletConnect',
    connector: walletconnect
  },
  {
    label: 'Rainbow',
    connector: walletconnect
  },
  {
    label: 'Argent',
    connector: walletconnect
  },
  {
    label: 'TrustWallet',
    connector: walletconnect
  },
  {
    label: 'Coinbase',
    connector: walletlink
  }
]

/**
 * @name WalletSelectModal
 * @param {Object} props
 */
export const WalletSelectModal = ({ className, children }) => {
  const { activate } = useEthers()

  const [showModal, hideModal] = useModal(() => {
    return (
      <Modal hideModal={hideModal} className=''>
        <div className='pb-16 pt-12 px-12 bg-purple-900 max-w-xl w-full rounded-lg'>
          <h4 className='text-teal text-3xl text-center mb-5'>Connect your wallet</h4>
          <div className='grid sm:grid-cols-2 gap-x-3 gap-y-3'>
            {WALLET_OPTIONS.map((wallet) => (
              <WalletSelection {...wallet} activate={activate} />
            ))}
          </div>
        </div>
      </Modal>
    )
  }, [])

  return (
    <span onClick={showModal} className={className}>
      {children}
    </span>
  )
}

const WalletSelection = ({ activate, connector, label, ...props }) => {
  const handleConnect = () => {
    activate(connector)
    localStorage.setItem('wallet-default', label)
  }

  return (
    <div
      className='text-white text-center p-3 cursor-pointer rounded-lg wallet-select-btn duration-200'
      onClick={handleConnect}
    >
      {label}
    </div>
  )
}

export default WalletSelectModal
