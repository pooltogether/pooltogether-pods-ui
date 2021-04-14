/* --- Global Modules --- */
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  setLogger,
} from "react-query";
import { ModalProvider } from "react-modal-hook";
import { DAppProvider } from "@usedapp/core";

/* --- Local Modules --- */
import { dappConfig } from "@src/constants";

setLogger({
  log: (message) => {
    console.log(message, "message");
    null;
  },
  warn: (message) => {
    null;
  },
  error: (error) => {
    switch (error.message) {
      case "Contract Unavailable":
        return null;
      default:
        console.error(error);
        break;
    }
    null;
  },
});

/**
 * @name ProviderPrimary
 * @param {*} props
 */
const cache = new QueryCache();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }) => {
  // const cache = useMemo(() => new QueryCache(), []);

  return (
    <QueryClientProvider cache={cache} client={queryClient}>
      <DAppProvider config={dappConfig}>
        <ModalProvider>{children}</ModalProvider>
      </DAppProvider>
    </QueryClientProvider>
  );
};

export default Providers;
