/* --- Global Modules --- */
import { Interface } from "@ethersproject/abi";

/* --- Local Modules --- */
import ERC20_ABI from "@contracts/ERC20";
import POD_ABI from "@contracts/Pod_ABI";
import PODMANAGER_ABI from "@contracts/PodManager_ABI";
import PrizePool_ABI from "@contracts/PrizePool_ABI.json";
import PrizePoolFaucet_ABI from "@contracts/PrizePoolFaucet.json";
import CompoundPrizePool_ABI from "@contracts/CompoundPrizePool_ABI.json";
import TokenFaucet_ABI from "@contracts/TokenFaucet_ABI";
import TokenDrop_ABI from "@contracts/TokenDrop_ABI";

/* --- Constants --- */
export const ERC20Interface = new Interface(ERC20_ABI);
export const PodInterface = new Interface(POD_ABI);
export const PodManagerInterface = new Interface(PODMANAGER_ABI);
export const PrizePoolInterface = new Interface(PrizePool_ABI);
export const PrizePoolFaucetInterface = new Interface(PrizePoolFaucet_ABI);
export const CompoundPrizePoolInterface = new Interface(CompoundPrizePool_ABI);
export const TokenFaucetInterface = new Interface(TokenFaucet_ABI);
export const TokenDropInterface = new Interface(TokenDrop_ABI);
