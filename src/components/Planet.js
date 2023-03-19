import axios from "axios";
import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Planet = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        setPlanets(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ListGroup>
        {planets.map((item, index) => {
          return <ListGroup.Item key={index}>{item.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
};

export default Planet;
