import axios from "axios";
import { useState, useEffect, createContext, useContext, useMemo } from "react";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) ? JSON.parse(localStorage.getItem("favorite")) : []);

  const getCryptoName = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCryptos(response.data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const values = useMemo(
    () => ({
      cryptos,
      setCryptos,
      loading,
      search,
      getCryptoName,
      favorite,
      setFavorite,
    }),
    [cryptos, loading, search, favorite]
  );

  return (
    <CryptoContext.Provider value={values}>{children}</CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { CryptoProvider, useCrypto };
