/* --- Global Modules --- */
import idx from "idx";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Confetti from "react-confetti";

/* --- Local Modules --- */

/**
 * @name TransactionConfetti
 * @param {Object} props
 */
export const TransactionConfetti = ({
  state,
  amount,
  label,
  tokenSymbol,
  ...props
}) => {
  const confettiRef = useRef();
  const [isRewarded, isRewardedSet] = useState(false);
  const [isConfettiEnabled, isConfettiEnabledSet] = useState(true);

  useEffect(() => {
    if (idx(state, (_) => _.status) == "Success") {
      isConfettiEnabledSet(true);
      setTimeout(() => isConfettiEnabledSet(false), 8000);
    }
  }, [state]);

  useEffect(() => {
    if (!isRewarded && confettiRef.current && confettiRef.current.rewardMe) {
      setTimeout(() => {
        isRewardedSet(true);
        confettiRef.current.rewardMe({
          elementSize: 250,
        });
        return isRewardedSet(false);
      }, 800);
    }
  }, [confettiRef]);

  return useMemo(() => {
    if (idx(state, (_) => _.status) == "Success") {
      return (
        <>
          <span className="absolute top-0 left-60 right-60 bottom-0 overflow-hidden mx-auto z--1">
            {idx(state, (_) => _.status) == "Success" && isConfettiEnabled && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
          </span>
          <div className="text-center">
            <img
              className="inline-block"
              src="/images/checkmark.png"
              width={98}
            />
            <span className="block mt-3 text-2xl">
              <span className="mr-1">{label}</span>
              <span className="mr-1">{amount}</span>
              <span className="mr-1">{tokenSymbol}</span>
            </span>
          </div>
        </>
      );
    }
    return null;
  }, [state]);
};
export default TransactionConfetti;
