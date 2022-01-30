import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
  };

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
     <Component {...pageProps}/>
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
