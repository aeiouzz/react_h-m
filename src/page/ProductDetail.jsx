import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

// url 통신 규칙 경로 ? query String(옵션)

const ProductDetail = () => {
  const [product, setProduct]=useState(null);
  const {id}= useParams();
  
  const getProductDetail=async()=>{
    let url=`http://localhost:3004/products/${id}`;
    let response=await fetch(url);
    let data=await response.json();
    setProduct(data)
    console.log(data)
  }

useEffect(()=>{
  getProductDetail();
},[])

  return (
    <Container>
      <Row>
        <Col className='product-img' md={7}>
        <img src={product?.img} alt="" />
        </Col>
        <Col className='product-desc' md={5}>
        <div className='product-title'>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.choice ? "Conscious choice": ""}</div>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        사이즈 선택
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
        product?.size.length>0 &&
          product?.size.map((item)=>
          <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
          )
          }
        
      </Dropdown.Menu>
    </Dropdown>

    <Button variant="info">Info</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail