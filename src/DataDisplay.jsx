import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-75 text-center mx-auto">
      <h1>List of countries</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {data.map((item) => (
          <CountryCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
