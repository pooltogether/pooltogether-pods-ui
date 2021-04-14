/* --- Global Modules --- */
import { useEffect, useMemo, useState } from "react";

/* --- Local Modules --- */
import { commifyTokenBalance } from "@helpers/blockchain";
import { useGetPodContract } from "@src/hooks/contracts";
import { useEthers } from "@usedapp/core";

/**
 * @name UserClaimablePool
 * @param {Object} props
 */
export const UserClaimablePool = ({ address, label, ...props }) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podClaimableAmount, podClaimableAmountSet] = useState("0.000");

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const contract = useGetPodContract(address);

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (account && contract && address) {
      (async () => {
        const claimPOOLAmount = await contract.callStatic.claim(account);
        podClaimableAmountSet(commifyTokenBalance(claimPOOLAmount, 18, 8));
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

UserClaimablePool.defaultProps = {
  label: "Claim Pool",
};

export default UserClaimablePool;
