import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Airdrop from "./components/Airdrop" 
import "./index.css"

import '@solana/wallet-adapter-react-ui/styles.css';
import { LampContainer } from "./components/ui/Lamp";
import { motion } from "framer-motion";

function App() {

  return (
    <>
       <LampContainer>
<motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
>

  <p className="marcellus-regular">
      <div className="text-7xl text-slate-300">Solana Airdrop  </div>
      <div className="text-7xl tracking-wide">for your devnet Wallet</div>
        
  </p>
<ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
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
</motion.h1>
</LampContainer>
    </>
  )
}

export default App



