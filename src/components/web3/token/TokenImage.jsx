import { useMemo, useEffect, useState } from 'react'
import { utils } from 'ethers'

/**
 * @name TokenImage
 * @param {Object} props
 */
export const TokenImage = ({ address, width, className, classNameContainer }) => {
  const [image, setImage] = useState(undefined)

  useEffect(() => {
    if (utils.isAddress(address)) {
      const addressChecksum = utils.getAddress(address)
      setImage(
        `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${addressChecksum}/logo.png`
      )
    } else {
      setImage(false)
    }
  }, [address])

  // if (error) return null;
  return useMemo(() => {
    if (image) {
      return (
        <span className={classNameContainer}>
          <img className={className} src={image} onError={() => setImage(false)} width={width} />
        </span>
      )
    }
    return null
  }, [image])
}

TokenImage.defaultProps = {
  width: 22
}
