import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCrypto } from "../../Context/CryptoContext";
import cn from "classnames";
import LineData from "../LineData/index";
import Moment from "react-moment";
import { Up, Down } from "../icons";
import Style from "./style.module.css";

const SingleCrypto = () => {
  const [item, setItem] = useState();
  const { cryptos } = useCrypto();
  const { id } = useParams();

  useEffect(() => {
    setItem(cryptos && cryptos.filter((item) => item.id === id)[0]);
  }, [cryptos, id]);

  const isUp = item && item.price_change_percentage_24h >= 0;

  return (
    item !== undefined && (
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.head}>
            <img src={item.image} height="100px" alt={item.id} />,
            <div className={Style.headText}>
              <h1 className={Style.name}>
                {item.name} <span>#{item.market_cap_rank}</span>
              </h1>

              <div className={Style.prince}>
                <h1 className={cn(isUp ? Style.up : Style.down)}>
                  $ {item.current_price}
                </h1>

                <span className={cn(isUp ? Style.up : Style.down)}>
                  {Math.floor(item.price_change_percentage_24h)}%
                  {isUp ? <Up /> : <Down />}
                </span>
              </div>

              <span className={Style.volume}>
                {" "}
                Total Volume : $ {item.total_volume}
              </span>
            </div>
          </div>

          <LineData
            low={item.low_24h}
            high={item.high_24h}
            current={item.current_price}
            isUp={isUp}
          />

          <small>
            Last Updated :
            <Moment format="YYYY/MM/DD - hh:mm:ss">{item.last_updated}</Moment>
          </small>
        </div>
      </div>
    )
  );
};
export default SingleCrypto;
