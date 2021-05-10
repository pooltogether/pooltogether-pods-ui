/// <reference types="react" />
import { ChainCall } from './callsReducer';
import { ChainState } from './model';
export declare const ChainStateContext: import("react").Context<{
    value?: {
        blockNumber: number;
        state?: ChainState | undefined;
        error?: unknown;
    } | undefined;
    multicallAddress: string | undefined;
    addCalls(calls: ChainCall[]): void;
    removeCalls(calls: ChainCall[]): void;
}>;
export declare function useChainState(): {
    value?: {
        blockNumber: number;
        state?: ChainState | undefined;
        error?: unknown;
    } | undefined;
    multicallAddress: string | undefined;
    addCalls(calls: ChainCall[]): void;
    removeCalls(calls: ChainCall[]): void;
};
//# sourceMappingURL=context.d.ts.map