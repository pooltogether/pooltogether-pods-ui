/* --- Global Modules --- */
import { Interface } from "@ethersproject/abi";

/* --- Local Modules --- */
import ERC20_ABI from "@contracts/ERC20";
import POD_ABI from "@contracts/Pod_ABI";
import PODMANAGER_ABI from "@contracts/PodManager_ABI";
import CompoundPrizePool_ABI from "@contracts/CompoundPrizePool_ABI.json";

/* --- Constants --- */
export const ERC20Interface = new Interface(ERC20_ABI);
export const PodInterface = new Interface(POD_ABI);
export const PodManagerInterface = new Interface(PODMANAGER_ABI);
export const CompoundPrizePoolInterface = new Interface(CompoundPrizePool_ABI);
