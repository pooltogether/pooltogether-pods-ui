export interface IToastTransactionError {
  label: string;
  errorMessage: string;
}

export const ToastTransactionError = ({
  label,
  errorMessage,
}: IToastTransactionError) => {
  return (
    <div>
      <h3 className="font-normal text-lg">{label}</h3>
      <p className="block text-xs">{errorMessage}</p>
    </div>
  );
};

ToastTransactionError.defaultProps = {
  label: undefined,
  errorMessage: undefined,
};

export default ToastTransactionError;
