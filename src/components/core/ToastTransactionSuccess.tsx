/* --- Global Modules --- */
import { BigNumber } from '@ethersproject/bignumber/lib/bignumber'

/* --- Local Modules --- */
import { Balance, EtherscanLink } from '@src/components'
import { shortenAddress } from '@src/utils/convert'

/* --- Component Interface --- */
export interface IToastTransactionSuccess {
  label: string
  to: string
  value: BigNumber
  blockHash: string
}

export const ToastTransactionSuccess = ({
  label,
  to,
  value,
  blockHash
}: IToastTransactionSuccess) => {
  return (
    <div>
      <h3 className='font-normal text-lg'>{label}</h3>
      <span className='block text-xs'>
        Amount: <Balance balance={value} />
      </span>
      <span className='block text-xs'>To: {shortenAddress(to, 10)}</span>
      <EtherscanLink className='text-xs mt-2' hash={blockHash}>
        Etherscan
      </EtherscanLink>
    </div>
  )
}

ToastTransactionSuccess.defaultProps = {
  label: undefined,
  to: undefined,
  value: undefined,
  blockHash: undefined
}

export default ToastTransactionSuccess
