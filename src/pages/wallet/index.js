import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/wallet/connectors";
import WalletCard from "./second-example";
const Wallet = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  }
  async function disconnect() {
    try {
      await deactivate();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <WalletCard />
      {/* <button onClick={connect}>Connect to MetaMask</button> */}
      {/* {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>Not Connected</span>
      )} */}
      {/* <button onClick={disconnect}>Disconnect to MetaMask</button> */}
    </div>
  );
};

export default Wallet;
