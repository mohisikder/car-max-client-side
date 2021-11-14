import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useParams } from "react-router";

const ProductDetails = () => {
   const [products, setProducts] = useState([])
   const [singleProducts, setSingleProducts] = useState([])
   const {user, saveUser} = useAuth()
   const {productId} = useParams()
   const initialInfo ={name: user?.displayName, email: user?.email, phone: '', city: '', address: ''}
   const [orderInfo, setOrderInfo] = useState(initialInfo)
   
   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/products`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[])

   useEffect(()=>{
      const foundProduct = products.find(
         (product)=>(product._id == productId))
         setSingleProducts(foundProduct)
   },[products])

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...orderInfo };
      newInfo[field] = value;
      setOrderInfo(newInfo);
  }

   const handleOrderSubmit = (e) =>{
      const order = {
         ...orderInfo,
      }
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/addorder`,{
         method: 'PUT',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(order)
      })
      .then(res=> res.json())
      .then(result=>{
         saveUser(order, 'PUT')
         if(result.insertedId){
            e.reset()
         }
      })
      e.preventDefault()
   }

   return (
      <>
         <Container className="py-5">
            <Row>
               <Col xs={12} md={8}>
                  <Row className="g-4 d-flex justify-content-center">
                     <Col>
                        <Card className="h-100 w-100 shadow">
                        <Card.Title className="p-5 text-center">{singleProducts?.name}</Card.Title>
                        <Card.Img variant="top" className="h-50" src={singleProducts?.imgUrl} />
                        <Card.Body>
                           <Card.Text className="fw-bold display-5">$ {singleProducts?.price}</Card.Text>
                           <Card.Text>{singleProducts?.description}</Card.Text>
                        </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col xs={12} md={4}>
                  <Card style={{height:"100%", width:"100%"}}  className="text-center">
                     <Card.Header>Check Out</Card.Header>
                        <Card.Body>
                           <Card.Title>Special title treatment</Card.Title>
                              <div>
                                 <Form onSubmit={handleOrderSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur}  name="name" type="text" defaultValue={user?.displayName}  />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="email" type="email" defaultValue={user?.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="phone" type="text" placeholder="Phone" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="city" type="text" placeholder="City" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="address" type="text" placeholder="Address" />
                                    </Form.Group>
                                 </Form>
                              </div>
                           <NavLink to="/payment"><Button variant="danger" type="submit">Place Order</Button></NavLink>
                        </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default ProductDetails;