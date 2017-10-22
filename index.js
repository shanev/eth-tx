/*
This library is a combination based on the work of Jordi Baylina
- https://github.com/jbaylina/ethconnector
- https://github.com/jbaylina/runethtx
*/

const {
  connect,
  useConnection,
  getCurrentWeb3,
  deployContract,
  delay,
  rpcSend,
  sendTransaction,
  sendContractTransaction,
  sendContractConstantTransaction,

  // using the currently active web3
  getBalance,
  getTransactionReceipt,
  getBlock,
  getAccounts,
  estimateGas
} = require("./lib/rpc.js");

const {
  compileTo,
  compileBundled,
  bundleContractFile,
  wrapContract
} = require("./lib/compile.js");

module.exports = {
  connect,
  useConnection,
  getCurrentWeb3,
  delay,
  rpcSend,

  compileTo,
  compileBundled,
  bundleContractFile,
  wrapContract,

  deployContract,
  sendTransaction,
  sendContractTransaction,
  sendContractConstantTransaction,

  // using the currently active web3
  getBalance,
  getAccounts,
  getBlock,
  getTransactionReceipt,
  estimateGas
};
