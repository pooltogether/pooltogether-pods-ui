/* --- Global Modules --- */
import { useMemo, useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { isPositiveBigNumber } from "@src/utils/is";
import { podWinningOdds } from "@src/utils/calculations/pod";
import { usePodContractCall } from "@hooks/useContractPod";
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { commifyTokenBalanceFromHuman } from "@src/helpers/blockchain";
import { Tooltip } from "@components";
import classNames from "classnames";

/**
 * @name PodWinningOdds
 * @param {Object} props
 */
export const PodWinningOdds = ({ className, address, addressTicket }) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podWinningOddsCalculated, podWinningOddsCalculatedSet] = useState(
    "Make Deposit"
  );

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const [userBalanceOf] = usePodContractCall(address, "balanceOf", [account]);
  const [podTotalBalance] = usePodContractCall(address, "balance");
  const [podTicketsTotalSupply] = useERC20ContractCall(
    addressTicket,
    "totalSupply"
  );

  // TODO: Use active tickets, instead of "presumed" tickets using prebatch token balance.
  const [podTickets] = useERC20ContractCall(addressTicket, "balanceOf", [
    address,
  ]);

  useEffect(() => {
    if (
      isPositiveBigNumber(userBalanceOf) &&
      isPositiveBigNumber(podTotalBalance) &&
      isPositiveBigNumber(podTicketsTotalSupply)
    ) {
      const calculation = podWinningOdds(
        podTotalBalance,
        podTicketsTotalSupply
      );
      podWinningOddsCalculatedSet(
        `1 in ${commifyTokenBalanceFromHuman(calculation, 0)}`
      );
    }
  }, [userBalanceOf, podTotalBalance, podTicketsTotalSupply]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  const style = classNames("flex-inline items-center", className);
  return useMemo(() => {
    return (
      <span className={style}>
        {podWinningOddsCalculated}{" "}
        <Tooltip className="mt-0">
          <TooltipContainer />
        </Tooltip>
      </span>
    );
  }, [podWinningOddsCalculated]);
};

PodWinningOdds.defaultProps = {
  address: undefined,
  addressTicket: undefined,
};

const TooltipContainer = (props) => {
  return (
    <div className="card bg-purple-500 text-white max-w-sm ">
      <h4 className="text-xl border-bottom">Pod Winning Odds</h4>
      <p className="text-xs">
        Pod winning odds are calculated using a post-batch ticket balance. Pods
        at times will temporarily have a float (i.e. DAI or USDC) which has not
        been deposited into the PrizePool.
      </p>
      <p className="text-xs">
        However, once the deposit batch (
        <span className="italic">minimum once per day</span>) has been run, the
        float tokens will be converted into PrizePool tickets. Tickets are used
        to calculate a Pods exact chances of winning.
      </p>
      <p className="text-xs">
        In other words, the Pod's float (token balance), plus the ticket balance
        is used when calculating the Pods odds of winning, even though the batch
        amount (float) is excluded from the PrizePools calculations.
      </p>
    </div>
  );
};

export default PodWinningOdds;
