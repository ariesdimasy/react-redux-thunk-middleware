import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../layouts/layout1/Header";
import Nav from "../layouts/layout1/Nav";

import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

import { fetch_contacts, set_page } from "../redux/actions/contactAction";

const Contact = () => {
  const dispatch = useDispatch();
  //const [contacts, setContacts] = useState([]);
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const pages = useSelector((state) => state.contactReducer.pages);
  const page = useSelector((state) => state.contactReducer.page);
  console.log("contacts => ", contacts);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);

  // const handleSearch = () => {
  //   axios
  //     .get(`https://swapi.dev/api/people?search=${search}`, {})
  //     .then((res) => {
  //       setContacts(res.data.results);
  //       console.log(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    dispatch(fetch_contacts({ page: page, search: search }));
  }, []);

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
                  dispatch(set_page(number));
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
            //handleSearch();
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
                  dispatch(set_page(number));
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
