import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(undefined);
  let { id } = useParams();
  const getProductsDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/rimeee/shoping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  };
  useEffect(() => {
    getProductsDetail();
  }, []);
  if (loading || product === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <img
            className="product-detail-img"
            src={product?.img}
            alt="product"
          />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Concious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <DropdownMenu>
              {product?.size.length > 0 &&
                product?.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action">
                    {item}
                  </Dropdown.Item>
                ))}
            </DropdownMenu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
