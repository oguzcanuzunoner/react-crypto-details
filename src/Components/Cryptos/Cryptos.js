import { useCrypto } from "../../Context/CryptoContext";
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";

const Cryptos = () => {
  const { cryptos, loading } = useCrypto();
  return (
    <>
      {loading && <div>Yükleniyor</div>}
      {!loading && (
        <div>
          <ReactBootStrap.Table striped bordered hover responsive>
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
            {cryptos &&
              cryptos.map((crypto) => {
                const chart_rank = crypto.image.match(/[0-9]+/);
                return (
                  <tbody key={crypto.id}>
                    <tr>
                      <td>
                        <img
                          style={{ width: "40px" }}
                          src={crypto.image}
                          alt={crypto.symbol.toUpperCase()}
                        />
                      </td>
                      <td>{crypto.name}</td>
                      <td>{crypto.symbol.toUpperCase()}</td>
                      <td>{crypto.current_price}</td>
                      {crypto.market_cap_change_percentage_24h < 0 ? (
                        <td style={{ color: "#C62A88" }}>
                          {crypto.market_cap_change_percentage_24h}
                        </td>
                      ) : (
                        <td style={{ color: "#03C4A1" }}>
                          {crypto.market_cap_change_percentage_24h}
                        </td>
                      )}

                      <td>
                        <img
                          alt={`${crypto.symbol.toUpperCase()} 7d chart`}
                          data-src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
                          data-srcset={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
                          src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
                          srcSet={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
                        ></img>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </ReactBootStrap.Table>
        </div>
      )}
    </>
  );
};

export default Cryptos;
