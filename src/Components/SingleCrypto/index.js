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
                <h1>
                  Coin Name : <b> {item.name} </b>
                </h1>
                <img src={item.image} height="50px" alt={item.id} />
              </div>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Table responsive size="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ fontSize: "12px" }}>Current Price </th>
                    <th style={{ fontSize: "12px" }}>Coin Cap Rank </th>
                    <th style={{ fontSize: "12px" }}>Total Volume </th>
                    <th style={{ fontSize: "12px" }}>Last Updated </th>
                    <th style={{ fontSize: "12px" }}>
                      Price Change Percentage - 24h{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "11px" }}>{item.current_price}</td>
                    <td style={{ fontSize: "11px" }}>{item.market_cap_rank}</td>
                    <td style={{ fontSize: "11px" }}>{item.total_volume}</td>
                    <td style={{ fontSize: "11px" }}>
                      <Moment format="YYYY/MM/DD - hh:mm:ss">
                        {item.last_updated}
                      </Moment>
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {item.price_change_percentage_24h}
                    </td>
                  </tr>
                </tbody>
              </ReactBootStrap.Table>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
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
