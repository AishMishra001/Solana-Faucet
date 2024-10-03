import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Airdrop from "./components/Airdrop" 
import "./index.css"

import '@solana/wallet-adapter-react-ui/styles.css';
import { LampContainer } from "./components/ui/Lamp";
import { motion } from "framer-motion";

const SOLANA_RPC_URL = import.meta.env.VITE_SOLANA_RPC_URL || "https://api.devnet.solana.com";

function App() {

  return (
    <div>
       <LampContainer>
<motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
>

  <p className="marcellus-regular pt-28">
    <div className="sm:flex justify-center">
      <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" className="h-16 w-14 pt-2 ml-28 mr-4"/>
      <div className="text-md sm:text-7xl text-slate-300 mr-14">Solana Airdrop  </div>
    </div>
      <div className="text-md sm:text-7xl tracking-wide">for your devnet Wallet</div>
        
  </p>
<ConnectionProvider endpoint={SOLANA_RPC_URL}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <div className="flex gap-4 mt-10 justify-around">
            <WalletMultiButton/>
            <WalletDisconnectButton/>

          </div>
               <Airdrop/>
          </WalletModalProvider>
        </WalletProvider>
        </ConnectionProvider> 
        <div className="text-gray-300 text-5xl marcellus-regular">
  Solana-Faucet
</div>
<div className="text-2xl pt-4">
   We are not giving real  <span> Solana here </span>
</div>

</motion.h1>
</LampContainer>
    </div>
  )
}

export default App



