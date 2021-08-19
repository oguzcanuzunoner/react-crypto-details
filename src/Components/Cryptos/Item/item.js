// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useCrypto } from "../../../Context/CryptoContext";
// import Style from "./item.module.css";

// function Item({ val }) {
//   const history = useHistory();
//   const handleRowClick = (row) => {
//     history.push(`/${row.id}`);
//   };
//   const { favorite, setFavorite } = useCrypto();

//   useEffect(() => {
//     console.log(favorite);
//   }, [favorite]);

//   return (
//     <tr className={Style.item}>
//       <td onClick={() => handleRowClick(val)}>
//         <img src={val.image} alt={val.symbol.toUpperCase()} />
//       </td>
//       <td onClick={() => handleRowClick(val)}>{val.name}</td>
//       <td onClick={() => handleRowClick(val)}>{val.current_price}</td>
//       {val.market_cap_change_percentage_24h < 0 ? (
//         <td style={{ color: "#C62A88" }}>
//           {val.market_cap_change_percentage_24h.toFixed(2)}
//         </td>
//       ) : (
//         <td onClick={() => handleRowClick(val)} style={{ color: "#03C4A1" }}>
//           {val.market_cap_change_percentage_24h.toFixed(2)}
//         </td>
//       )}
//       <td onClick={() => setFavorite(val.id)}>
//         {/* <img src={val.image} alt={val.symbol.toUpperCase()} /> */}
//         Favori
//       </td>
//     </tr>
//   );
// }

// export default Item;
