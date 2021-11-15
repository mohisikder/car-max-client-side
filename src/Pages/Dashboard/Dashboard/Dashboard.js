import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';
import AddProduct from '../Admin/AddProduct/AddProduct';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Review from '../../Home/Review/Review';
import Payment from '../Payment/Payment';

const Dashboard = () => {
   const { user, logout, admin} = useAuth();
   const [control, setControl] = useState('addproduct')

   return (
      <>
         <div className="py-5 container">
            <Row>
               <Col xs={12} md={4} style={{backgroundColor:"#EFEFEF", height:"100vh", width:"25%", padding:"15px 40px"}}>
                  <h4 className="text-center">Dashboard</h4>
                  <hr />
                  <div style={{cursor:"pointer"}}>
                     <div>
                        <div className="mb-2" onClick={()=>setControl('myorders')}>
                           My Orders
                        </div>
                        <div className="mb-2" onClick={()=>setControl('review')}>
                           Review
                        </div>
                        <div className="mb-2" onClick={()=>setControl('payment')}>
                           Payment
                        </div>
                     </div>
                     <hr />
                     <div>
                        { admin && <div className="mb-2" onClick={()=>setControl('addproduct')}>
                           Add Product
                        </div>}
                        {admin && <div className="mb-2" onClick={()=>setControl('manageallorder')}>
                           Manage All Order
                        </div>}
                        {admin && <div className="mb-2" onClick={()=>setControl('manageproducts')}>
                           Manage Products
                        </div>}
                        {admin && <div className="mb-2" onClick={()=>setControl('makeadmin')}>
                           Make An Admin
                        </div>}
                     </div>
                     <div className="mt-5">
                        {user?.email && <Button onClick={logout} variant="danger">Logout</Button>}
                     </div>
                  </div>
               </Col>
               <Col xs={12} md={8}>
                  {control === 'myorders' && <MyOrders/>}
                  {control === 'review' && <Review/>}
                  {control === 'payment' && <Payment/>}
                  {control === 'addproduct' && <AddProduct/>}
                  {control === 'manageallorder' && <ManageAllOrder/>}
                  {control === 'manageproducts' && <ManageProducts/>}
                  {control === 'makeadmin' && <MakeAdmin/>}
               </Col>
            </Row>
         </div>
      </>
   );
};

export default Dashboard;