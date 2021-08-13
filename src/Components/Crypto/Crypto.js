function Crypto({ name, image, symbol, price, market_percentage }) {
  const chart_rank = image.match(/[0-9]+/);
  return (
    <tr>
      <td>
        <img style={{ width: "40px" }} src={image} alt={symbol.toUpperCase()} />
      </td>
      <td>{name}</td>
      <td>{symbol.toUpperCase()}</td>
      <td>{price}</td>
      {market_percentage < 0 ? (
        <td style={{ color: "#C62A88" }}> {market_percentage} </td>
      ) : (
        <td style={{ color: "#03C4A1" }}> {market_percentage} </td>
      )}
      <td>
        <img
          alt={`${symbol.toUpperCase()} 7d chart`}
          data-src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
          data-srcset={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
          src={`https://www.coingecko.com/coins/${chart_rank}/sparkline`}
          srcSet={`https://www.coingecko.com/coins/${chart_rank}/sparkline 1x`}
        ></img>
      </td>
    </tr>
  );
}

export default Crypto;
