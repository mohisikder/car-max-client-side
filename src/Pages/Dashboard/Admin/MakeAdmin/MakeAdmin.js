import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
       console.log(data);
    }
   return (
      <>
         <Container className="py-5">
                  <h5>Make An Admin</h5>
            <Row>
               <Col xs={12} md={6}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input
                        {...register("email")}
                        placeholder="Email"
                        className="p-2 m-2 w-100 input-field"
                     />
                     <input
                        {...register("role")}
                        placeholder="Role"
                        className="p-2 m-2 w-100 input-field"
                     />
                     <input
                        type="submit"
                        value="Make An Admin"
                        className="btn btn-danger w-50"
                     />
                  </form>
               </Col>
            </Row>
         </Container>  
      </>
   );
};

export default MakeAdmin;