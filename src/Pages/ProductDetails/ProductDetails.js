import React from 'react';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const ProductDetails = () => {
   const {user} = useAuth()
   return (
      <>
         <Container className="py-5">
            <Row>
               <Col xs={12} md={8}>
                  <h1>This is Product Details</h1>
               </Col>
               <Col xs={12} md={4}>
                  <Card style={{height:"100%", width:"100%"}}  className="text-center">
                     <Card.Header>Check Out</Card.Header>
                        <Card.Body>
                           <Card.Title>Special title treatment</Card.Title>
                              <div>
                                 <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control  name="name" type="text" value={user?.displayName}  />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control name="email" type="email" value={user?.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control name="phone" type="text" placeholder="Phone" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control name="city" type="text" placeholder="City" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control name="address" type="text" placeholder="Address" />
                                    </Form.Group>
                                 </Form>
                              </div>
                           <NavLink to="/payment"><Button variant="danger">Place Order</Button></NavLink>
                        </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default ProductDetails;