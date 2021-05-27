import { useGetPodPoolAPR, useGetPodPoolUserAPR, useGetPodPOOLAPY } from '@hooks/pod'

/**
 * @name
 * @param {Object} props
 */
export const PodPrizePoolPoolAPR = ({
  addressPrizePool,
  addressFaucet,
  addressToken,
  addressTicket,
  addressPrizePoolTicket,
  addressPrizePoolTicketSponsored
}) => {
  const APR = useGetPodPOOLAPY({
    addressPrizePool,
    addressFaucet,
    addressToken,
    addressTicket: addressPrizePoolTicket,
    addressSponsoredTicket: addressPrizePoolTicketSponsored
  })
  const prizePoolAPR = useGetPodPoolUserAPR({
    addressPrizePool,
    addressFaucet,
    addressToken,
    addressTicket: addressPrizePoolTicket,
    addressSponsoredTicket: addressPrizePoolTicketSponsored
  })

  console.log(APR, 'APR')

  return <div className=''></div>
}
export default PodPrizePoolPoolAPR
