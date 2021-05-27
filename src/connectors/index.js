import { ethers } from 'ethers'
import { UnsupportedChainIdError } from '@web3-react/core'
import { NetworkConnector } from '@web3-react/network-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'

/* --- Network Default Configurations --- */
export const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID
export const NETWORK_CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID ?? '1')

export const NETWORK_URL_MAINNET =
  process.env.NEXT_PUBLIC_NETWORK_URL_MAINNET || `https://mainnet.infura.io/v3/${INFURA_ID}`

export const NETWORK_URL_RINKEBY =
  process.env.NEXT_PUBLIC_NETWORK_URL_RINKEBY || `https://rinkeby.infura.io/v3/${INFURA_ID}`

export const NETWORK_URL_KOVAN =
  process.env.NEXT_PUBLIC_NETWORK_URL_KOVAN || `https://kovan.infura.io/v3/${INFURA_ID}`

export const NETWORK_URL_GOERLI =
  process.env.NEXT_PUBLIC_NETWORK_URL_GOERLI || `https://goerli.infura.io/v3/${INFURA_ID}`

export const NETWORK_URL_HARDHAT =
  process.env.NEXT_PUBLIC_NETWORK_URL_HARDHAT || 'http://127.0.0.1:8545'

// Invalid Network Configuration
if (typeof NETWORK_URL_MAINNET === 'undefined' && typeof INFURA_ID === 'undefined') {
  throw new Error(`NEXT_PUBLIC_NETWORK_URL_MAINNET must be a defined environment variable`)
}

/* --- Network Connectors --- */

/**
 * @name NETWORK
 * @description NetworkConnector
 */
export const NETWORK = new NetworkConnector({
  defaultChainId: 1,
  urls: {
    [1]: NETWORK_URL_MAINNET,
    [4]: NETWORK_URL_RINKEBY,
    [5]: NETWORK_URL_GOERLI,
    [42]: NETWORK_URL_KOVAN,
    [1337]: NETWORK_URL_HARDHAT
  }
})

/**
 * @name injected
 * @description InjectedConnector
 */
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337]
})

/**
 * @name metamask
 * @description InjectedConnector
 */
export const metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337]
})

/**
 * @name walletconnect
 * @description WalletConnectConnector
 */
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: NETWORK_URL_MAINNET },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000
})

/**
 * @name walletlink
 * @description WalletLinkConnector (// mainnet only)
 */
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL_MAINNET,
  appName: 'PoolTogether',
  appLogoUrl: '/favicon.png'
})

export function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    return 'An unknown error occurred. Check the console for more details.'
  }
}

export function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider)
}

export function getNetworkProvider(network) {
  return new ethers.getDefaultProvider(network || 'mainnet')
}
