/* --- Component Interface --- */
export interface IToastTransactionRejected {
  label: string
}

export const ToastTransactionRejected = ({ label }: IToastTransactionRejected) => {
  return (
    <div>
      <h3 className='font-normal text-lg'>{label}</h3>
      <span className='mt-1 text-xxxs tag-whsite'>Resend Transaction</span>
    </div>
  )
}

ToastTransactionRejected.defaultProps = {
  label: 'Transaction Rejected'
}

export default ToastTransactionRejected
