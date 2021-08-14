import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const CountryDatas = async () => {
      try {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${name}`
        );
        const country = await res.json();
        setCountry(country);
        console.log(country);
      } catch (error) {
        console.log(error);
      }
    };
    CountryDatas();
  }, []);
  return (
    <>
      <Container>
        {country.map((c, index) => {
          const {
            numericCode,
            name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            area,
            currencies,
            languages,
          } = c;
          return (
            <>
              <Row
                style={{
                  marginTop: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={numericCode}
              >
                <Col md={5}>
                  <img src={flag} alt="flag-img" className="img-fluid" />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <i
                      class="fas fa-angle-double-left"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </Link>
                </Col>
                <Col md={4}>
                  <h1 style={{ color: "white" }}>{name}</h1>
                  <h5 style={{ color: "white" }}>
                    Native Name :<span> {nativeName}</span>
                  </h5>
                  <h5 style={{ color: "white" }}>Region : {region}</h5>
                  <h5 style={{ color: "white" }}>Sub Region : {subregion}</h5>
                  <h5 style={{ color: "white" }}>Capital : {capital}</h5>
                  <h5 style={{ color: "white" }}>
                    Top Level Domain : {topLevelDomain}
                  </h5>
                </Col>
                <Col md={3}>
                  <h5 style={{ color: "white" }}>Population : {population}</h5>
                  <h5 style={{ color: "white" }}>Area : {area}</h5>
                  <h5 style={{ color: "white" }}>
                    Currencies : {currencies[0].name}
                  </h5>
                  <h5 style={{ color: "white" }}>
                    Code : {currencies[0].code}
                  </h5>
                  <h5 style={{ color: "white" }}>
                    Symbol : {currencies[0].symbol}
                  </h5>

                  <h5 style={{ color: "white" }}>
                    Languages : {languages[0].iso639_1},
                  </h5>
                  <h5 style={{ color: "white" }}>
                    NumericCode : {numericCode}
                  </h5>
                </Col>
              </Row>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Country;
