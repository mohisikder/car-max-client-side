import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Explore = () => {
   return (
      <>
         <div className="bg-products">
            <Container className="py-5">
               <h1 className="text-center">Explore Products</h1>
               <hr className="w-25 m-auto text-center" />
               <Row xs={1} md={3} className="g-4 mt-5">
                  {Array.from({ length: 12 }).map((_, idx) => (
                     <Col>
                        <Card className="rounded">
                        <Card.Img variant="top" className="w-50 m-auto" src={`https://i.ibb.co/wSyvgwC/4-bmw-png-image-download.png`} />
                        <Card.Body className="text-left">
                           <Card.Title>Hyundai i30</Card.Title>
                           <Card.Text>
                           Hyundai’s warmed-over small sedan brings space aplenty, with an enticing sporty bent
                           </Card.Text>
                           <Button variant="danger">Buy Now</Button>
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

export default Explore;