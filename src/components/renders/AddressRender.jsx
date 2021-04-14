/* --- Global Modules  --- */
import { constants } from "ethers";

/* --- Local Modules  --- */
import { EtherscanLink } from "../index";
import { shortenAddress } from "@helpers/blockchain";

/**
 * @name AddressRender
 * @param {Object} props
 */
export const AddressRender = ({ data, isLink, className, trim, ...props }) => {
  if (isLink) {
    return (
      <EtherscanLink address={address}>
        <span className={className} {...props}>
          {shortenAddress(data, trim)}
        </span>
      </EtherscanLink>
    );
  }

  console.log(trim, props, "trimtrim");

  return !data ? null : (
    <span className={className} {...props}>
      {shortenAddress(data, trim)}
    </span>
  );
};

export default AddressRender;

AddressRender.defaultProps = {
  address: constants.AddressZero,
  trim: 0,
  className: "",
};
