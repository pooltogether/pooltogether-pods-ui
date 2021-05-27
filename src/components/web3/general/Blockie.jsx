import React from 'react'
import { constants } from 'ethers'
import makeBlockie from 'ethereum-blockies-base64'

/**
 * @name Blockie
 * @param {Object} props
 */
export const Blockie = ({ address, width, ...props }) => {
  return !address ? (
    <img src={makeBlockie(constants.AddressZero)} width={width} {...props} />
  ) : (
    <img src={makeBlockie(address)} width={width} {...props} />
  )
}

Blockie.defaultProps = {
  width: 22
}

export default Blockie
