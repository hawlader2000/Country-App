import React, { useEffect, useState } from "react";
const url = "https://restcountries.com/v3.1/all";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isloadding, setIsloadding] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsloadding(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setIsloadding(false);
      setError(null);
    } catch (error) {
      setIsloadding(false);
      setError("Error are occures", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(countries);
};

export default Country;
