import { Link } from "react-router-dom";
import Style from "./item.module.css";
import * as ReactBootStrap from "react-bootstrap";

function Item({val}) {
    return(
        <tr className={Style.item}>
          <td>
            <img
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
    )
}

export default Item