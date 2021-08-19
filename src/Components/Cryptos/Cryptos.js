import { useCrypto } from "../../Context/CryptoContext";
import styled from "./style.module.css";
import * as ReactBootStrap from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cryptos = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { cryptos, loading, search, getCryptoName, favorite, setFavorite } =
    useCrypto();
  useEffect(() => {
    console.log(favorite);
  }, [favorite]);
  return (
    <>
      {loading && (
        <div>
          <ReactBootStrap.Container>
            <ReactBootStrap.ProgressBar now={50} />
          </ReactBootStrap.Container>
        </div>
      )}
      {!loading && (
        <ReactBootStrap.Container>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <form onSubmit={(e) => e.preventDefault()}>
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
          <button
            style={{ width: "100%", height: "30px" }}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {!isFavorite ? "Get Favorite List" : "Get All Crypto"}
          </button>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Table responsive size="sm">
                <thead>
                  <tr className={styled.tableHead}>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Range</th>
                    <th>Favorite</th>
                  </tr>
                </thead>

                <tbody>
                  {cryptos
                    .filter((val) => {
                      if (search === "") return val;
                      else
                        return val.name
                          .toLowerCase()
                          .includes(search.toLowerCase());
                    })
                    .map((val) => (
                      // return <Item key={val.id} val={val} />;
                      <tr className={styled.item} key={val.id}>
                        <td>
                          <Link to={val.id} className={styled.linkStyle}>
                            <img
                              src={val.image}
                              alt={val.symbol.toUpperCase()}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link to={val.id} className={styled.linkStyle}>
                            {val.name}
                          </Link>
                        </td>
                        <td>
                          <Link to={val.id} className={styled.linkStyle}>
                            {val.current_price}
                          </Link>
                        </td>
                        {val.market_cap_change_percentage_24h < 0 ? (
                          <td style={{ color: "#C62A88" }}>
                            <Link to={val.id} className={styled.linkStyle}>
                              {val.market_cap_change_percentage_24h.toFixed(2)}
                            </Link>
                          </td>
                        ) : (
                          <td style={{ color: "#03C4A1" }}>
                            <Link to={val.id} className={styled.linkStyle}>
                              {val.market_cap_change_percentage_24h.toFixed(2)}
                            </Link>
                          </td>
                        )}

                        <td
                          onClick={() =>
                            setFavorite((prev) => [...prev, val.id])
                          }
                        >
                          {/* <img src={val.image} alt={val.symbol.toUpperCase()} /> */}
                          Favori
                        </td>
                      </tr>
                    ))}
                </tbody>
              </ReactBootStrap.Table>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      )}
    </>
  );
};

export default Cryptos;
