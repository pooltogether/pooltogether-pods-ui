import { useEthers } from "@usedapp/core";
import { useModal } from "react-modal-hook";
import { metamask, walletconnect, walletlink } from "@src/connectors";
import { Modal } from "@src/components";

const WALLET_OPTIONS = [
  {
    label: "MetaMask",
    connector: metamask,
  },
  {
    label: "WalletConnect",
    connector: walletconnect,
  },
  {
    label: "Rainbow",
    connector: walletconnect,
  },
  {
    label: "Argent",
    connector: walletconnect,
  },
  {
    label: "TrustWallet",
    connector: walletconnect,
  },
  {
    label: "Coinbase",
    connector: walletlink,
  },
];

/**
 * @name WalletSelectModal
 * @param {Object} props
 */
export const WalletSelectModal = ({ className, children }) => {
  const { activate } = useEthers();

  const [showModal, hideModal] = useModal(() => {
    return (
      <Modal hideModal={hideModal} className="">
        <div className="pb-10 pt-6 px-10 bg-purple-900 max-w-xl w-full">
          <h4 className="text-teal text-3xl text-center mb-5">
            Connect your wallet
          </h4>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            {WALLET_OPTIONS.map((wallet) => (
              <WalletSelection {...wallet} activate={activate} />
            ))}
          </div>
        </div>
      </Modal>
    );
  }, []);

  return (
    <span onClick={showModal} className={className}>
      {children}
    </span>
  );
};

const WalletSelection = ({ activate, connector, label, ...props }) => {
  const handleConnect = () => {
    activate(connector);
    localStorage.setItem("wallet-default", label);
  };

  return (
    <div
      className="bg-blue-700 text-white text-center p-3 cursor-pointer "
      style={{ backgroundColor: "rgba(14, 163, 164, 0.2)" }}
      onClick={handleConnect}
    >
      {label}
    </div>
  );
};

export default WalletSelectModal;
