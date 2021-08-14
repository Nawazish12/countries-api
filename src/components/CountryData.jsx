import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CountryData.css";
const CountryData = () => {
  const [countries, setCountries] = useState([]);

  const apiCal = async () => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const countries = await res.json();
      setCountries(countries);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };
  // filtering
  const filerItem = (marchFilter) => {
    const updated = countries.filter((curElem) => {
      return curElem.region === marchFilter;
    });
    setCountries(updated);
  };

  useEffect(() => {
    apiCal();
  }, []);

  // remove item
  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((county) => {
      return county.numericCode !== numericCode;
    });
    setCountries(newCountry);
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#202d36",
          marginTop: "10px",
        }}
      >
        <h5 style={{ color: "white", marginTop: "10px" }}>
          Where in the World ?
        </h5>
        <h6 style={{ color: "white" }}>Dark Mode</h6>
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
        className="display-content"
      >
        <Form style={{ width: "30%" }}>
          <Form.Group className="mb" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="enter something..." />
          </Form.Group>
        </Form>
        {/* filter by origin */}

        <div>
          {/* dropdown */}
          <NavDropdown title="Choose by Reigon" className="change-position">
            <NavDropdown.Item
              onClick={() => {
                filerItem("Africa");
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              Africa
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                filerItem("Asia");
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              Asia
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                filerItem("Americas");
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              Americas
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                filerItem("Europe");
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              Europe
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                filerItem("Oceania");
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              Oceania
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                setCountries(countries);
              }}
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "blue",
              }}
            >
              All
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>

      <Container>
        <Row>
          {countries.map((country) => {
            const { name, population, region, capital, numericCode } = country;
            return (
              <>
                <Col md={4}>
                  <article key={numericCode}>
                    <Card
                      style={{
                        width: "100%",

                        marginTop: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={country.flag}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <div>
                        <Card.Body>
                          <Card.Title>{name}</Card.Title>
                          <br />

                          <Card.Title>Population : {population}</Card.Title>
                          <Card.Title>Region : {region}</Card.Title>
                          <Card.Title>Capital : {capital}</Card.Title>
                          {/* <Link to="/">MOVE</Link> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Link
                              to={`/countries/${name}`}
                              style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "22px",
                              }}
                            >
                              See Details{" "}
                              <i
                                class="fas fa-angle-double-right"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </Link>
                            <Button
                              onClick={() => {
                                removeCountry(numericCode);
                              }}
                            >
                              remove
                            </Button>
                          </div>
                        </Card.Body>
                      </div>
                    </Card>
                  </article>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CountryData;
