import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const Airdrop = ()=>{

  const wallet = useWallet()  
  const {connection} = useConnection() ;
  const [input , setInput ] = useState(0) ; 

  async function HandleAirdrop(){
      await connection.requestAirdrop(wallet.publicKey , input*1000000000)
      alert(`${input} Sol Airdrops in your devnet wallet !!`) 
  
}

  return (
    <>
    <div className="flex flex-col gap-4 mt-8">
      <input type="text" placeholder="Airdrop sol" value={input} className="text-xl text-black p-2 rounded-xl" onChange={(e)=>setInput(e.target.value)} />
      </div>
      <button onClick={HandleAirdrop} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl">
          Airdrop
        </button>
        </>
  )
}

export default Airdrop ; 


