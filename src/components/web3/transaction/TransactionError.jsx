import { useMemo } from 'react'

/**
 * @name TransactionError
 * @param {Object} props
 */
export const TransactionError = ({ className, state }) => {
  return useMemo(() => {
    if (state.status == 'Exception') return <span className={className}> {state.errorMessage}</span>
    return null
  }, [state])
}

export default TransactionError
