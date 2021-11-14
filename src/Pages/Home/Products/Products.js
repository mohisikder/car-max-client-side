import React, { useEffect, useState } from 'react';
import './Products.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Products = () => {
   const [products, setProducts] = useState([])
   const {user} = useAuth()

   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/products`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[])

   // Handle Add to Cart
const handleAddToCart = (index) =>{
   const data = products[index]
   data.email = user?.email
   data.name = user?.displayName
   data.status = 'pending'
   
   fetch(`https://tranquil-brushlands-41625.herokuapp.com/addorder`,{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
   })
   .then(res=> res.json())
   .then(result=>{
      if(result.insertedId){
         alert('Order Added Successfully')
         
      }
   })
}
   return (
      <>
         <div className="bg-products">
            <Container className="py-5">
               <h1 className="text-center">Featured Products</h1>
               <hr className="w-25 m-auto text-center" />
               <Row xs={1} md={3} className="g-4 mt-5">
                  {
                     products.slice(0, 6).map((product, index)=><Col>
                        <Card className="rounded h-100">
                        <Card.Img variant="top" className="w-75 m-auto pt-2" src={product?.imgUrl} />
                        <Card.Body className="text-left">
                           <Card.Title>{product?.name}</Card.Title>
                           <Card.Text>{product?.description}</Card.Text>
                           <Card.Text>$ {product?.price}</Card.Text>
                           <Link to={`/productdetails/${product?._id}`}>
                              <Button variant="danger" onClick={()=>handleAddToCart(index)}>Buy Now</Button>
                           </Link>
                        </Card.Body>
                        </Card>
                     </Col>)
                  }
               </Row>
            </Container>
         </div>
      </>
   );
};

export default Products;