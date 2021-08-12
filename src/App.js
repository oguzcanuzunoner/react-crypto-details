import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Crypto from './Components/Crypto';

function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCryptos(res.data)
      })
      .catch(err => alert(err))
  }, []);

  const list = cryptos.filter(crypto => crypto.name);

  return (
    <div className="App">
      <div className="container" align="center">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th className="col">Image</th>
                    <th className="col">Name</th>
                    <th className="col">Symbol</th>
                    <th className="col">Price</th>
                    <th className="col">Market Range</th>
                    <th className="col">Last 7 Days</th>
                  </tr>
                </thead>

                {list.map(crypto => {
                  return (
                    <tbody key={crypto.id}>
                      <Crypto
                        name={crypto.name}
                        image={crypto.image}
                        price={crypto.current_price}
                        symbol={crypto.symbol}
                        market_percentage={crypto.market_cap_change_percentage_24h}
                      />
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
