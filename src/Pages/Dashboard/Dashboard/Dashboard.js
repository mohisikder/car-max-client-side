import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
   return (
      <>
         <Container className="py-5">
            <Row>
               <Col xs={12} md={4} style={{backgroundColor:"#fefefe", height:"100%"}}>
                  <h1>Dashboard</h1>
                  <div>
                  <Nav defaultActiveKey="/dashboard" className="flex-column">
                     <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                     <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                     <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                  </Nav>
                  </div>
               </Col>
               <Col xs={12} md={8}>
                  <h1>Dashboard Content Here</h1>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Dashboard;