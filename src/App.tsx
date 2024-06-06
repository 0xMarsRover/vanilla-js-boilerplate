import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  THEME,
  TonConnectButton,
  TonConnectUIProvider,
} from "@tonconnect/ui-react";

import WebApp from "@twa-dev/sdk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TonConnectUIProvider
        // https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json
        // https://kaiqiangh.github.io/vanilla-js-boilerplate/
        manifestUrl="https://kaiqiangh.github.io/vanilla-js-boilerplate/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: "safepalwallet",
              name: "SafePal",
              imageUrl:
                "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
              tondns: "",
              aboutUrl: "https://www.safepal.com",
              universalLink: "https://link.safepal.io/ton-connect",
              jsBridgeKey: "safepalwallet",
              bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
              platforms: ["ios", "android", "chrome", "firefox"],
            },
            {
              appName: "tonwallet",
              name: "TON Wallet",
              imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
              aboutUrl:
                "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
              universalLink: "https://wallet.ton.org/ton-connect",
              jsBridgeKey: "tonwallet",
              bridgeUrl: "https://bridge.tonapi.io/bridge",
              platforms: ["chrome", "android"],
            },
          ],
        }}
        actionsConfiguration={{
          // https://t.me/TWA_CG_BOT
          // https://t.me/DemoDappWithTonConnectBot/demo
          twaReturnUrl: "https://t.me/TWA_CG_BOT",
        }}
      >
        <TonConnectButton />
      </TonConnectUIProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
