import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../componets/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = match && products.find((p) => p._id === match.params.id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductScreen;
