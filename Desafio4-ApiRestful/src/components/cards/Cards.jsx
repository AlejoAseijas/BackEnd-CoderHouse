import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormApiData from "../form/FormApiData";
const baseUrl = "http://localhost:8080/api/productos";

function Cards() {
  const [dataCard, setDataCard] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseUrl);
      setDataCard(response.data);
    };
    getData();
  }, []);
  return (
    <>
      {dataCard.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <Container className="d-flex flex-row flex-wrap  justify-content-center mt-2 mb-2 border border-dark">
          {dataCard.map((dat) => {
            return (
              <Card style={{ width: "18rem" }} key={dat.id} className="m-2">
                <Card.Img
                  variant="top"
                  src={dat.thumbnail}
                  style={{ height: "40vh" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{dat.title}</Card.Title>
                  <Card.Text className="text-center">{dat.price}$</Card.Text>
                </Card.Body>
                <Container className="text-center  mb-2 ">
                  <Link to="/edit">
                    <Button variant="outline-primary" data-id={dat.id}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    data-id={dat.id}
                    onClick={(e) => {
                      axios.delete(`${baseUrl}/${e.target.dataset.id}`);
                      window.location.reload();
                    }}
                  >
                    Delete
                  </Button>
                </Container>
              </Card>
            );
          })}
        </Container>
      )}
    </>
  );
}

export default Cards;
