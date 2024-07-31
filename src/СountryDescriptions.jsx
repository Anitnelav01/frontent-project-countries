import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const CountryDescriptions = ({ country }) => {
  return (
    <Card className="w-50" style={{ margin: "2rem auto", padding: "0 2rem" }}>
      <h1 className="text-center">{country.name.common}</h1>
      <Image
        src={country.flags.png}
        alt={`Флаг ${country.name.common}`}
        width="300"
        height="280"
        className="img-fluid mb-3"
      />
      <Card.Text>{country.flags.alt}</Card.Text>
      <div>
        <h3>General information:</h3>
        <ul>
          <li>Name: {country.name.common}</li>
          <li>Official name: {country.name.official}</li>
          <li>Country code (CCA2): {country.cca2}</li>
          <li>Country code (CCA3): {country.ccn3}</li>
          <li>Country code (CCN3): {country.cca3}</li>
          <li>IOC code: {country.cioc}</li>
          <li>Status: {country.status}</li>
          <li>
            Main language:
            <ul>
              {Object.entries(country.languages).map((item) => (
                <li>{item[1]}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Geography:</h3>
        <ul>
          <li>Continent: {country.continents}</li>
          <li>Region: {country.region}</li>
          <li>Subregion: {country.subregion}</li>
          <li>Square: {country.area}</li>
          <li>Population: {country.population}</li>
          <li>Timezone: {country.timezones}</li>
        </ul>
      </div>
    </Card>
  );
};

export default CountryDescriptions;
