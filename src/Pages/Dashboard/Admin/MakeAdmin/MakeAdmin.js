import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

const MakeAdmin = () => {
   const [email, setEmail] = useState('');
   const [success, setSuccess] = useState(false);

   const handleOnBlur = e => {
       setEmail(e.target.value);
   }
   const handleAdminSubmit = e => {
       const user = { email };
       fetch(`https://tranquil-brushlands-41625.herokuapp.com/users/admin`, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                   console.log(data);
                   setSuccess(true);
               }
           })

       e.preventDefault()
   }
   return (
      <>
         <Container className="py-5">
                  <h5>Make An Admin</h5>
            <Row>
               <Col xs={12} md={6}>
                  <form onSubmit={handleAdminSubmit}>
                     <input
                        type="email"
                        onBlur={handleOnBlur}
                        placeholder="Email"
                     />
                     <input
                        type="submit"
                        value="Make Admin"
                        className="btn btn-danger w-50"
                     />
                  </form>
                  {success && <Alert variant="success">Made Admin successfully!</Alert>}
               </Col>
            </Row>
         </Container>  
      </>
   );
};

export default MakeAdmin;