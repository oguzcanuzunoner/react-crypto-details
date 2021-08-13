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
        <ReactBootStrap.Container>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <form>
                <div className={styled.search}>
                  <input
                    className={styled.searchTerm}
                    type="text"
                    placeholder="Search..."
                    value={search.toUpperCase()}
                    onChange={getCryptoName}
                  />
                </div>
              </form>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Table responsive size="sm">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    {/* <th>Symbol</th> */}
                    <th>Price</th>
                    <th>Market Range</th>
                    {/* <th>Last 7 Days</th> */}
                    <th>Details</th>
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
                          <td>{val.name}</td>
                          {/* <td>{val.symbol.toUpperCase()}</td> */}
                          <td>{val.current_price}</td>
                          {val.market_cap_change_percentage_24h < 0 ? (
                            <td style={{ color: "#C62A88" }}>
                              {val.market_cap_change_percentage_24h.toFixed(2)}
                            </td>
                          ) : (
                            <td style={{ color: "#03C4A1" }}>
                              {val.market_cap_change_percentage_24h.toFixed(2)}
                            </td>
                          )}

                          {/* <td>
                        <img
                          alt={`${val.symbol.toUpperCase()} 7d chart`}
                          data-src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
                          data-srcset={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
                          src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
                          srcSet={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
                        ></img>
                      </td> */}
                          <td>
                            <Link
                              to={val.id}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <ReactBootStrap.Button
                                style={{
                                  backgroundColor: "#1E5F74",
                                  border: "none",
                                }}
                                size="sm"
                              >
                                Click
                              </ReactBootStrap.Button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </ReactBootStrap.Table>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      )}
    </>
  );
};

export default Cryptos;
