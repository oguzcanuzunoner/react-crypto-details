import { useCrypto } from "../../Context/CryptoContext";
import styled from "./style.module.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const Cryptos = () => {
  const { cryptos, loading, search, getCryptoName } = useCrypto();
  return (
    <>
      {loading && <div>Yükleniyor</div>}
      {!loading && (
        <div>
          <form>
            <div className={styled.search}>
              <input
                className={styled.searchTerm}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={getCryptoName}
              />
            </div>
          </form>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Market Range</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            {cryptos
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
                return false;
              })
              .map((val) => {
                const chart_rank = val.image.match(/[0-9]+/);
                return (
                  <tbody key={val.id}>
                    <tr>
                      <td>
                        <img
                          style={{ width: "40px" }}
                          src={val.image}
                          alt={val.symbol.toUpperCase()}
                        />
                      </td>
                      <td>
                        <Link
                          to={val.id}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {val.name}
                        </Link>
                      </td>
                      <td>{val.symbol.toUpperCase()}</td>
                      <td>{val.current_price}</td>
                      {val.market_cap_change_percentage_24h < 0 ? (
                        <td style={{ color: "#C62A88" }}>
                          {val.market_cap_change_percentage_24h}
                        </td>
                      ) : (
                        <td style={{ color: "#03C4A1" }}>
                          {val.market_cap_change_percentage_24h}
                        </td>
                      )}

                      <td>
                        <img
                          alt={`${val.symbol.toUpperCase()} 7d chart`}
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
