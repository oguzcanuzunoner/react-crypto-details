import "./App.css";
import Cryptos from "./Components/Cryptos/Cryptos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleCrypto from "./Components/SingleCrypto";
import { CryptoProvider } from "./Context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <Router>
        <Switch>
          <Route path="/" component={Cryptos} exact />
          <Route path="/:id" component={SingleCrypto} />
        </Switch>
      </Router>
    </CryptoProvider>
  );
}

export default App;
