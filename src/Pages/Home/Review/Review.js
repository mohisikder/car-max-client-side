import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';

const Review = () => {
   const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   return (
      <>
         <Container className="py-5">
            <h1 className="text-center">Reviews</h1>
            <hr className="w-25 m-auto text-center" />
            <Row className="my-5">
               <Col xs={12} md={9}>
                  <Row>
                     <Col xs={12} md={2}>
                     <img style={{height:"100px", width:"100px", backgroundColor:"tomato"}} src={`https://via.placeholder.com/150

C/O https://placeholder.com/`} className="rounded-circle" alt="userPhoto"/>
                     </Col>
                     <Col xs={12} md={10}>
                        <h5>userName</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque autem laborum odio. Cumque vel impedit ipsam perferendis voluptatibus possimus, sint sequi veritatis illum necessitatibus eum accusamus itaque dolore earum vero.</p>
                     </Col>
                  </Row>
               </Col>
               <Col xs={12} md={3}>
                  <div className="rating-box text-center">
                     <h1 className="pt-4">4.0</h1>
                     <p className="">out of 5</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Review;