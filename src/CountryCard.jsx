import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CountryCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "2rem" }}>
      <Link to={`/country/${item.cca3}`}>
        <Card.Title>{item.name.common}</Card.Title>
        <Card.Img
          variant="top"
          src={item.flags.png}
          alt={`Флаг ${item.name.common}`}
          height="180"
        />
      </Link>
    </Card>
  );
};

export default CountryCard;
