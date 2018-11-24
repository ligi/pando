/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface PandoLineageContract
  extends Truffle.Contract<PandoLineageInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<PandoLineageInstance>;
}

export interface PandoLineageInstance extends Truffle.ContractInstance {
  allowRecoverability(
    token: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  canPerform(
    _sender: string | BigNumber,
    _role: string | BigNumber,
    _params: (number | BigNumber | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getExecutor(
    _script: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  transferToVault(
    _token: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  initialize(
    _token: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mint(
    _receiver: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  burn(
    _holder: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  proxyPayment(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  onTransfer(
    _from: string | BigNumber,
    _to: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  onApprove(
    arg0: string | BigNumber,
    arg1: string | BigNumber,
    arg2: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  hasInitialized(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  KERNEL_APP_ID(txDetails?: Truffle.TransactionDetails): Promise<string>;
  APP_ADDR_NAMESPACE(txDetails?: Truffle.TransactionDetails): Promise<string>;
  getRecoveryVault(txDetails?: Truffle.TransactionDetails): Promise<string>;
  EVMSCRIPT_REGISTRY_APP_ID(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;
  CORE_NAMESPACE(txDetails?: Truffle.TransactionDetails): Promise<string>;
  appId(txDetails?: Truffle.TransactionDetails): Promise<string>;
  ETH(txDetails?: Truffle.TransactionDetails): Promise<string>;
  getInitializationBlock(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
  BURN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;
  ACL_APP_ID(txDetails?: Truffle.TransactionDetails): Promise<string>;
  kernel(txDetails?: Truffle.TransactionDetails): Promise<string>;
  APP_BASES_NAMESPACE(txDetails?: Truffle.TransactionDetails): Promise<string>;
  isPetrified(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  MINT_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;
  token(txDetails?: Truffle.TransactionDetails): Promise<string>;
}