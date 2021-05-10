// secondsPerBlock = 14
// underlyingTokenValueUsd = UsdT price from uniswap subgraph
// totalSupply = ticketSupply + sponsorshipSupply
// blocksRemaining = remainingSeconds / secondsPerBlock
// additionalYield = (totalSupply _ (blocksRemaining _ supplyRatePerBlock))
// .div(1000000000000000000)
//
// estimatedPrize = (awardBalance + additionalYield) \* underlyingTokenValueUsd
