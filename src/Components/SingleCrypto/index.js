import { useParams } from "react-router-dom";
import { useCrypto } from "../../Context/CryptoContext";
import LineData from "../LineData/index";
import styled from "./style.module.css";
import Moment from "react-moment";

import * as ReactBootStrap from "react-bootstrap";

const SingleCrypto = () => {
  const { cryptos } = useCrypto();
  const { id } = useParams();
  const filter = cryptos.filter((item) => item.id === id);

  return (
    <>
      {filter.map((item) => (
        <ReactBootStrap.Container key={item.id}>
          <ReactBootStrap.Row className="m-5">
            <ReactBootStrap.Col>
              <div className={styled.nameImg}>
                <h1>Coin Name : {item.name}</h1>
                <img src={item.image} height="75px" alt={item.id} />
              </div>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Table>
                <thead>
                  <tr>
                    <th>Current Price </th>
                    <th>Coin Cap Rank </th>
                    <th>Total Volume </th>
                    <th>Last Updated </th>
                    <th>Price Change Percentage - 24h </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.current_price}</td>
                    <td>{item.market_cap_rank}</td>
                    <td>{item.total_volume}</td>
                    <td>
                      <Moment format="YYYY/MM/DD - hh:mm:ss">
                        {item.last_updated}
                      </Moment>
                    </td>
                    <td>{item.price_change_percentage_24h}</td>
                  </tr>
                </tbody>
              </ReactBootStrap.Table>

              <LineData
                current={item.current_price}
                low_24h={item.low_24h}
                high_24h={item.high_24h}
              />
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      ))}
    </>
  );
};
export default SingleCrypto;
