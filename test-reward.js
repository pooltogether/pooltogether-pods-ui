const { BigNumber } = require("@ethersproject/bignumber");

// DAI;

const price = "1.00";

const sponsorTicketTotalSupply = 253821482766163126362001;
const normalTicketTotalSupply = 89511179281822553577040906;
const accountedBalance = 89807772499364675783139207;
const blocksLeft = 81090;

const calculate = () => {
  const priceBG = BigNumber.from(price);
  const sT = BigNumber.from(sponsorTicketTotalSupply);
  const nT = BigNumber.from(normalTicketTotalSupply);
  const supplyRatePerBlock = BigNumber.from(1);

  const totalSupply = sT.add(nT);
  const addYield = totalSupply.mul(blocksLeft.mul(supplyRatePerBlock));
};

// secondsPerBlock = 14
// underlyingTokenValueUsd = UsdT price from uniswap subgraph
// totalSupply = ticketSupply + sponsorshipSupply
// blocksRemaining = remainingSeconds / secondsPerBlock
// additionalYield = (totalSupply _ (blocksRemaining _ supplyRatePerBlock))
// .div(1000000000000000000)
//
// estimatedPrize = (awardBalance + additionalYield) \* underlyingTokenValueUsd
