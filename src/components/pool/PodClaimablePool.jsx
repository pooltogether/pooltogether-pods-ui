/* --- Global Modules --- */
import { useEffect, useMemo, useState } from "react";

/* --- Local Modules --- */
import { commifyTokenBalance } from "@helpers/blockchain";
import { useGetPodContract } from "@src/hooks/contracts";

/**
 * @name PodClaimablePool
 * @param {Object} props
 */
export const PodClaimablePool = ({ address, label, ...props }) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podClaimableAmount, podClaimableAmountSet] = useState("0.00");

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const contract = useGetPodContract(address);

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract && address) {
      (async () => {
        try {
          const amount = await contract.callStatic.drop(true);
          podClaimableAmountSet(commifyTokenBalance(amount, 18, 8));
        } catch (error) {
          // TODO Add error logging
        }
      })();
    }
  }, [contract]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <span className="">{podClaimableAmount}</span>;
  }, [podClaimableAmount]);
};

PodClaimablePool.defaultProps = {
  label: "Claim Pool",
};

export default PodClaimablePool;
