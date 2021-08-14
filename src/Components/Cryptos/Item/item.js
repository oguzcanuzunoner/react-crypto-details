import { Link } from "react-router-dom";
import Style from "./item.module.css";
import * as ReactBootStrap from "react-bootstrap";

function Item({val}) {
    return(
      <Link
        to={val.id}
        className={Style.link}
      >
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
        </tr>
      </Link>
    )
}

export default Item