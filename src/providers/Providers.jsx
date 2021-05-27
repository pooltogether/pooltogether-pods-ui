/* --- Global Modules --- */
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ModalProvider } from 'react-modal-hook'
import { DAppProvider } from '@usedapp/core'

/* --- Local Modules --- */
import { dappConfig } from '@src/constants'

/**
 * @name ProviderPrimary
 * @param {*} props
 */
const cache = new QueryCache()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
})

export const Providers = ({ children }) => {
  return (
    <QueryClientProvider cache={cache} client={queryClient}>
      <DAppProvider config={dappConfig}>
        <ModalProvider>{children}</ModalProvider>
      </DAppProvider>
    </QueryClientProvider>
  )
}

export default Providers
