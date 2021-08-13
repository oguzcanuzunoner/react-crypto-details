import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const getCryptoName = (e) => {
    setSearch(e.target.value);
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

  const values = {
    cryptos,
    setCryptos,
    loading,
    search,
    getCryptoName,
  };

  return (
    <CryptoContext.Provider value={values}>{children}</CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { CryptoProvider, useCrypto };
