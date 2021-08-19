import { useHistory } from "react-router-dom";
import Style from "./item.module.css";
import { useCrypto } from "../../../Context/CryptoContext";


function Item({ val }) {
  const { getFavorite } = useCrypto();
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/${row.id}`);
  };

  return (
    <tr className={Style.item}>
      <td onClick={() => handleRowClick(val)}>
        <img src={val.image} alt={val.symbol.toUpperCase()} />
      </td>
      <td onClick={() => handleRowClick(val)}>{val.name}</td>
      <td onClick={() => handleRowClick(val)}>{val.current_price}</td>
      {val.market_cap_change_percentage_24h < 0 ? (
        <td onClick={() => handleRowClick(val)} style={{ color: "#C62A88" }}>
          {val.market_cap_change_percentage_24h.toFixed(2)}
        </td>
      ) : (
        <td onClick={() => handleRowClick(val)} style={{ color: "#03C4A1" }}>
          {val.market_cap_change_percentage_24h.toFixed(2)}
        </td>
      )}
      <td><img onClick={() => getFavorite(val)}
        src={val.image}
        alt={val.symbol.toUpperCase()} /></td>
    </tr>
  );

}

export default Item;