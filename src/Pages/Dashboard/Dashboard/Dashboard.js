import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams,
   useRouteMatch,
   NavLink
 } from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddProduct from '../Admin/AddProduct/AddProduct';

const Dashboard = () => {
   let { path, url } = useRouteMatch();
   return (
      <>
         <Container className="py-5">
            <Row>
               <Col xs={12} md={4} style={{backgroundColor:"#EFEFEF", height:"100vh", width:"20%", padding:"15px 20px"}}>
                  <h3>Dashboard</h3>
                  <div>
                     <Nav>
                        <NavLink as={Link} to={`${url}`}>Dashboard</NavLink>
                        <NavLink as={Link} to={`${url}/myorders`}>My Orders</NavLink>
                        <NavLink as={Link} to={`${url}/addproduct`}>Add Product</NavLink>
                        <NavLink as={Link} to={`${url}/manageproducts`}>Manage Products</NavLink>
                     </Nav>
                  </div>
               </Col>
               <Col xs={12} md={8}>
               <Switch>
                     <Route exact path={path}>
                        <DashboardHome/>
                     </Route>
                     <Route path={`${path}/myorders`}>
                        <MyOrders/>
                     </Route>
                     <Route path={`${path}/addproduct`}>
                        <AddProduct/>
                     </Route>
                  </Switch>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Dashboard;