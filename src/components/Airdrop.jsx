import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const Airdrop = () => {

  const wallet = useWallet();
  const { connection } = useConnection();
  const [input, setInput] = useState(""); 

  async function HandleAirdrop() {
    const amount = parseFloat(input);
    if (wallet.publicKey && amount > 0) {
      try {
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL); 
        alert(`${input} Sol Airdropped into your Devnet wallet!`);
      } catch (error) {
        console.error("Airdrop failed:", error);
        alert("Airdrop failed, please enter a valid amount");
      }
      setInput(""); 
    } else {
      alert("Please  ensure the wallet is connected.");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 mt-10">
        <input
          type="number"  // Input type is number
          placeholder="Airdrop SOL"
          value={input}
          className="text-xl text-black p-2 rounded-xl"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        onClick={HandleAirdrop}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl mb-10"
      >
        Airdrop
      </button>
    </>
  );
}

export default Airdrop;
