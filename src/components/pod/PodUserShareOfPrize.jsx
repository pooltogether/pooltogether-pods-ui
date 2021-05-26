/* --- Global Modules --- */
import idx from "idx";
import { useMemo, useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { convertNumberToBigNumber } from "@src/utils/convert";
import { isBigNumber, isPositiveBigNumber } from "@src/utils/is";
import { calculateUserPrizeWinningsFromWinningPod } from "@src/utils/calculations/pod";
import { usePodContractCall } from "@hooks/useContractPod";
import { usePoolTogetherPoolData } from "@src/hooks/usePoolTogetherPoolData";

import {
  commifyTokenBalanceFromHuman,
  transformTokenToHuman,
} from "@src/utils/convert";

/**
 * @name PodUserShareOfPrize
 * @param {Object} props
 */
export const PodUserShareOfPrize = ({
  className,
  address,
  addressPrizePool,
  decimals,
  ...props
}) => {
  const cacheQuery = usePoolTogetherPoolData(addressPrizePool);
  const [userPrizeShareCalculated, userPrizeShareCalculatedSet] = useState("0");

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const [balanceOf] = usePodContractCall(address, "balanceOf", [account]);
  const [totalSupply] = usePodContractCall(address, "totalSupply", []);

  useEffect(() => {
    if (
      isBigNumber(balanceOf) &&
      isBigNumber(totalSupply) &&
      isPositiveBigNumber(balanceOf)
    ) {
      const share = calculateUserPrizeWinningsFromWinningPod(
        balanceOf.mul(10),
        totalSupply,
        convertNumberToBigNumber(
          idx(cacheQuery, (_) => _.data.prize.totalValueUsd),
          2
        )
      ).div(10);

      console.log(share, "shareshare");

      const transformed = commifyTokenBalanceFromHuman(
        transformTokenToHuman(share, 2),
        2
      );
      userPrizeShareCalculatedSet(transformed);
    }
  }, [balanceOf, cacheQuery.isFetching]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <span className={className}>{userPrizeShareCalculated}</span>;
  }, [userPrizeShareCalculated]);
};

PodUserShareOfPrize.defaultProps = {
  address: undefined,
  decimals: 18,
};

export default PodUserShareOfPrize;
