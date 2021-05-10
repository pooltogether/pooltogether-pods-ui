import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { ChainId } from '../constants';
export declare type TransactionStatus = {
    status: 'None';
} | {
    status: 'Mining';
    chainId: ChainId;
    transaction: TransactionResponse;
} | {
    status: 'Success';
    chainId: ChainId;
    transaction: TransactionResponse;
    receipt: TransactionReceipt;
} | {
    status: 'Fail';
    transaction: TransactionResponse;
    receipt: TransactionReceipt;
    chainId: ChainId;
    errorMessage: string;
} | {
    status: 'Exception';
    chainId: ChainId;
    errorMessage: string;
};
interface Options {
    signer?: Signer;
    transactionName?: string;
}
export declare function connectContractToSigner(contract: Contract, options?: Options, library?: Web3Provider): Contract;
export declare function useContractFunction(contract: Contract, functionName: string, options?: Options): {
    send: (...args: any[]) => Promise<void>;
    state: TransactionStatus;
};
export {};
//# sourceMappingURL=useContractFunction.d.ts.map