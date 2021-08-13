import { useParams } from "react-router-dom";
import { useCrypto } from "../../Context/CryptoContext";
const SingleCrypto = () => {
  const { cryptos } = useCrypto();
  const { id } = useParams();
  const filter = cryptos.filter((item) => item.id === id);
  return (
    <>
      {filter.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} height="100px" alt={item.id} />
          </div>
          <h5> Current Price : {item.current_price}</h5>
          <h5>Coin Name : {item.name}</h5>
          <h5>Coin Cap Rank : {item.market_cap_rank}</h5>
          <h5> Total Volume : {item.total_volume}</h5>
          <h5>Last Updated : {item.last_updated}</h5>
          <h5>
            Price Change Percentage - 24h :{item.price_change_percentage_24h}
          </h5>
        </div>
      ))}
    </>
  );
};
export default SingleCrypto;
