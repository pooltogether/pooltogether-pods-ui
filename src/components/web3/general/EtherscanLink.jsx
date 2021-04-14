/**
 * @name
 * @param {Object} props
 */
export const EtherscanLink = ({
  address,
  hash,
  type,
  transaction,
  ...props
}) => {
  if (transaction)
    return (
      <a target="_blank" href={`https://etherscan.io/tx/${hash}`} {...props} />
    );

  return (
    <a
      target="_blank"
      href={`https://etherscan.io/address/${address}`}
      {...props}
    />
  );
};

EtherscanLink.defaultProps = {
  address: undefined,
  hash: undefined,
  type: "address",
};

export default EtherscanLink;
