import { useCrypto } from "../../Context/CryptoContext";
import styled from "./style.module.css";
import * as ReactBootStrap from "react-bootstrap";
import Item from "./Item/item";
import { useState } from "react"

const Cryptos = () => {
  const { cryptos, loading, search, getCryptoName } = useCrypto();
  const [isFavorite, setIsFavorite] = useState(false)

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
              <form onSubmit={e => e.preventDefault()}>
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
          <button style={{ width: "100%", height: "30px" }}
            onClick={() => setIsFavorite(!isFavorite)}>
            {!isFavorite ? "Get Favorite List" : "Get All Crypto"}
          </button>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Table responsive size="sm">
                <thead>
                  <tr className={styled.tableHead}>
                    <th>Image</th>
                    <th>Name</th>
                    {/* <th>Symbol</th> */}
                    <th>Price</th>
                    <th>Market Range</th>
                    {/* <th>Last 7 Days</th> */}
                    <th>Favorite</th>
                  </tr>
                </thead>

                {!isFavorite && <tbody>
                  {
                    cryptos.filter((val) => {
                      if (search === "") return val;
                      else return val.name.toLowerCase().includes(search.toLowerCase());
                    })
                      .map((val) => {
                        return (
                          <Item
                            key={val.id}
                            val={val}
                          />
                        );
                      })
                  }
                </tbody>}
                {isFavorite && <tbody>
                  {
                    cryptos.filter((val) => {
                      if (search === "") return val.favorite === true;
                      else return val.favorite === true && val.name.toLowerCase().includes(search.toLowerCase());
                    })
                      .map((val) => {
                        return (
                          <Item
                            key={val.id}
                            val={val}
                          />
                        );
                      })
                  }
                </tbody>}
              </ReactBootStrap.Table>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      )}
    </>
  );
};

export default Cryptos;
