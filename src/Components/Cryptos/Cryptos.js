import { useCrypto } from "../../Context/CryptoContext";
import styled from "./style.module.css";
import * as ReactBootStrap from "react-bootstrap";
import Item from "./Item/item";

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
                  <tr className={styled.tableHead}>
                    <th>Image</th>
                    <th>Name</th>
                    {/* <th>Symbol</th> */}
                    <th>Price</th>
                    <th>Market Range</th>
                    {/* <th>Last 7 Days</th> */}
                  </tr>
                </thead>

                <tbody>
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
