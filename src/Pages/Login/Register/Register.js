import React, {useState} from 'react';
import { Col, Container, Row, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
   const [loginData, setLoginData] = useState({});
   const history = useHistory();

   const {user, handleRegister, isLoading, error}= useAuth()

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }

  const handleRegisterWithEmail= e =>{
   handleRegister(loginData.email, loginData.password, loginData.name, history)
     e.preventDefault()
  }
   
   return (
      <>
         <Container className="text-center py-5">
            <Row>
               <Col xs={12} md={5}>
                  <div style={{backgroundColor:"#f8f8f8", height:"100%"}} className="shadow pb-4">
                     <h3 className="py-4">Register</h3>
                     <div className="d-flex justify-content-center align-items-center">
                        { !isLoading && <form onSubmit={handleRegisterWithEmail}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Enter Name" />
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" />
                           </Form.Group>

                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
                           </Form.Group>
                           <Form.Group>
                              <Button className="w-100" variant="danger" type="submit">Register</Button>
                           </Form.Group> <br />
                           
                           <NavLink
                                 style={{ textDecoration: 'none' }}
                                 to="/login">
                                 <Button variant="text">Already Registered? <strong>Please Login</strong></Button>
                           </NavLink>
                        </form>}
                        { isLoading && <Spinner animation="grow" /> }
                        {
                           user?.email && <div class="alert alert-success" role="alert">
                           Successfully Register!
                         </div>
                        }
                        {
                           error && <div class="alert alert-danger" role="alert">
                              {error}
                         </div>
                        }
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={7}>
                  <img className="w-75" src={`https://i.ibb.co/k6zhSk1/undraw-secure-login-pdn4.png`} alt="" />
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Register;