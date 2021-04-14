import { useMemo } from "react";

/**
 * @name TransactionStatus
 * @param {Object} props
 */
export const TransactionStatus = ({
  className,
  classNameMining,
  classNameSuccess,
  state,
  miningLabel,
  sucessLabel,
}) => {
  return useMemo(() => {
    if (state.status == "Mining")
      return (
        <span className={classNameMining || className}>{miningLabel}</span>
      );
    if (state.status == "Success")
      return (
        <span className={classNameSuccess || className}>{sucessLabel}</span>
      );
    return null;
  }, [state]);
};

TransactionStatus.defaultProps = {
  className: undefined,
  classNameMining: undefined,
  classNameSuccess: undefined,
  miningLabel: "Mining",
  sucessLabel: "Success",
};
export default TransactionStatus;
