import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const ProductDetails = () => {
   const [products, setProducts] = useState({})
   const {user} = useAuth()
   const {productId} = useParams()

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      data.email = user?.email;
      fetch("https://tranquil-brushlands-41625.herokuapp.com/addorder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
      //   .then((result) => console.log(result));
        alert('Order Successfully')
    };

   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/singleProduct/${productId}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[])

   return (
      <>
         <Container className="py-5">
            <Row>
               <Col xs={12} md={8}>
                  <Row className="g-4 d-flex justify-content-center">
                     <Col>
                        <Card className="h-100 w-100 shadow">
                        <Card.Title className="p-5 text-center">{products?.name}</Card.Title>
                        <Card.Img variant="top" className="h-50" src={products?.imgUrl} />
                        <Card.Body>
                           <Card.Text className="fw-bold display-5">$ {products?.price}</Card.Text>
                           <Card.Text>{products?.description}</Card.Text>
                        </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col xs={12} md={4}>
                  <Card style={{height:"100%", width:"100%"}}  className="text-center">
                     <Card.Header>Check Out</Card.Header>
                        <Card.Body>
                              <div>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                 <input
                                    {...register("name")}
                                    placeholder="Name"
                                    defaultValue={user?.displayName}
                                    className="p-2 m-2 w-100 input-field"
                                 />
                                 <input
                                    {...register("email")}
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                    className="p-2 m-2 w-100 input-field"
                                 />
                                 <input
                                    {...register("phone")}
                                    placeholder="Phone Number"
                                    className="p-2 m-2 w-100 input-field"
                                 />
                                 <input
                                    {...register("city")}
                                    placeholder="City"
                                    className="p-2 m-2 w-100 input-field"
                                 />
                                 <input
                                    {...register("address")}
                                    placeholder="Address"
                                    className="p-2 m-2 w-100 input-field"
                                 />
                                 <input
                                    {...register("productName")}
                                    placeholder="Product Name"
                                    defaultValue={products?.name}
                                    className="p-2 m-2 w-100 input-field"
                                 />

                                 <input
                                    {...register("description")}
                                    placeholder="Description"
                                    defaultValue={products?.description}
                                    className="p-2 m-2 w-100 input-field"
                                 />

                                 <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    defaultValue={products?.price}
                                    className="p-2 m-2 w-100 input-field"
                                 />

                                 <input
                                    {...register("imgUrl", { required: true })}
                                    placeholder="Image Link"
                                    defaultValue={products?.imgUrl}
                                    className="p-2 m-2 w-100 input-field"
                                 />

                                 <select {...register("status")} className="p-2 m-2 w-100">
                                    <option value="pending">Pending</option>
                                    <option value="delivery">Delivery</option>
                                    <option value="done">Done</option>
                                 </select>
                                 <br />

                                 {errors.exampleRequired && <span>This field is required</span>}

                                 <input
                                    type="submit"
                                    value="Order now"
                                    className="btn btn-danger w-50"
                                 />
                                 </form>
                              </div>
                        </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default ProductDetails;