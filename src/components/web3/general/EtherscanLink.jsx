import { getExplorerTransactionLink, useEthers } from '@usedapp/core'

/**
 * @name EtherscanLink
 * @param {Object} props
 */
export const EtherscanLink = ({ address, hash, ...props }) => {
  const { chainId } = useEthers()

  if (hash) {
    const etherscanLink = getExplorerTransactionLink(hash, chainId)

    return (
      <a target='_blank' href={etherscanLink} {...props} />
      // <a target="_blank" href={`https://etherscan.io/tx/${hash}`} {...props} />
    )
  }

  return <a target='_blank' href={`https://etherscan.io/address/${address}`} {...props} />
}

EtherscanLink.defaultProps = {
  address: undefined,
  hash: undefined
}

export default EtherscanLink
