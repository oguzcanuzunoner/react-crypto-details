import { useHistory } from "react-router-dom";
import Style from "./item.module.css";

function Item({ val }) {
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/${row.id}`);
  };
  return (
    <tr onClick={() => handleRowClick(val)} className={Style.item}>
      <td>
        <img src={val.image} alt={val.symbol.toUpperCase()} />
      </td>
      <td>{val.name}</td>
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
  );
}

export default Item;