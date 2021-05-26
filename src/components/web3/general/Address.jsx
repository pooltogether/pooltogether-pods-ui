import { EtherscanLink } from "@src/components";
import { shortenAddress } from "@src/utils/convert";
import { constants } from "ethers";

/**
 * @name Address
 * @param {Object} props
 */
export const Address = ({ address, isLink, className, trim, ...props }) => {
  if (isLink) {
    return (
      <EtherscanLink address={address}>
        <span className={className} {...props}>
          {shortenAddress(address, trim)}
        </span>
      </EtherscanLink>
    );
  }
  return !address ? null : (
    <span className={className} {...props}>
      {shortenAddress(address, trim)}
    </span>
  );
};

export default Address;

Address.defaultProps = {
  address: constants.AddressZero,
  trim: 7,
  className: "",
};
