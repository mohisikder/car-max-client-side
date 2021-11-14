import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AddProduct = () => {
   const [product, setProduct] = useState({})

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newProduct = { ...product };
      newProduct[field] = value;
      setProduct(newProduct);
  }

   const handleAddProduct = e =>{
      const addNewProduct ={
         ...product,
      }
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/addproduct`,{
         method: 'POST',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(addNewProduct)
      })
      .then(res=> res.json())
      .then(result=>{
         if(result.insertedId){
            alert('Product Successfully Added')
            e.reset()
         }
      })
      e.preventDefault()
   }
   return (
      <>
         <Container className="py-5">
            <Row>
               <Col>
                  <Card style={{height:"100%", width:"60%", margin:"0 auto"}} >
                     <Card.Header><NavLink to="/dashboard"><Button variant="danger">Back</Button></NavLink></Card.Header>
                        <Card.Body>
                           <Card.Title className="text-center my-4">Add a Product</Card.Title>
                              <div>
                                 <Form onSubmit={handleAddProduct}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur}  name="name" type="text"  placeholder="Product Name..."/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="description" type="text" placeholder="Product Description..."/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="price" type="text" placeholder="Product Price" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control onBlur={handleOnBlur} name="imgUrl" type="text" placeholder="Product Image url..." />
                                    </Form.Group>
                                    <Button variant="danger" type="submit">Add Product</Button>
                                 </Form>
                              </div>
                        </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default AddProduct;