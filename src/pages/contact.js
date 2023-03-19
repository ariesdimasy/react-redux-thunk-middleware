import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/layout1/Header";
import Nav from "../layouts/layout1/Nav";

import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://swapi.dev/api/people?search=${search}`, {})
      .then((res) => {
        setContacts(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // akan dijalankan kalau component telah selesai di render / ( nilai state berubah )
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people?page=${page}`, {})
      .then((res) => {
        var items2 = [];

        for (var i = 1; i <= Math.ceil(res.data.count / 10); i++) {
          items2.push(i);
        }

        setPages(items2);
        setContacts(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <Header title="Contact"></Header>
      <Nav></Nav>
      <div className="container" style={{ marginTop: 20 }}>
        <Pagination>
          {pages.map((number) => {
            return (
              <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => {
                  setPage(number);
                }}
              >
                {number}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
      <div className="container" style={{ marginTop: 20 }}>
        <Form.Control
          style={{ width: "80%", float: "left" }}
          type="text"
          value={search}
          name="search"
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></Form.Control>
        <Button
          variant="primary"
          style={{ marginLeft: 10 }}
          onClick={() => {
            handleSearch();
          }}
        >
          {" "}
          Search{" "}
        </Button>
        <div className="clearfix"></div>
        {contacts.map((item, index) => {
          return (
            <Card
              style={{
                width: "15rem",
                float: "left",
                marginRight: 10,
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              <Card.Img variant="top" src="https://picsum.photos/200" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.homeworld}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div style={{ clear: "both" }}></div>
      <div className="container" style={{ marginTop: 20 }}>
        <Pagination>
          {pages.map((number) => {
            return (
              <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => {
                  setPage(number);
                }}
              >
                {number}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
    </>
  );
};

export default Contact;
