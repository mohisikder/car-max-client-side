import React from 'react';
import './Products.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
   return (
      <>
         <div className="bg-products">
            <Container className="py-5">
               <h1 className="text-center">Featured Products</h1>
               <hr className="w-25 m-auto text-center" />
               <Row xs={1} md={3} className="g-4 mt-5">
                  {Array.from({ length: 6 }).map((_, idx) => (
                     <Col>
                        <Card className="rounded">
                        <Card.Img variant="top" className="w-50 m-auto" src={`https://i.ibb.co/wSyvgwC/4-bmw-png-image-download.png`} />
                        <Card.Body className="text-left">
                           <Card.Title>Hyundai i30</Card.Title>
                           <Card.Text>
                           Hyundai’s warmed-over small sedan brings space aplenty, with an enticing sporty bent
                           </Card.Text>
                           <Link to={`/product/`}>
                              <Button variant="danger">Buy Now</Button>
                           </Link>
                        </Card.Body>
                        </Card>
                     </Col>
                  ))}
               </Row>
            </Container>
         </div>
      </>
   );
};

export default Products;