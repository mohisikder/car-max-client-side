import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
   const [myOrders, setMyOrders] = useState([])
   const {user} = useAuth()

   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/orders?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>setMyOrders(data))
   },[])

   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h4 className="text-center">My Orders : {myOrders?.length}</h4>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Product Name</th>
                           <th>Description</th>
                           <th>Price</th>
                           <th>Photo</th>
                           <th>Status</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     {
                        myOrders?.map((pd,index)=><tbody>
                        <tr>
                           <td>{index}</td>
                           <td>{pd?.name}</td>
                           <td>{pd?.description}</td>
                           <td>{pd?.price}</td>
                           <td><img style={{width:"50px"}} src={pd?.imgUrl} /></td>
                           <td>{pd?.status}</td>
                           <td>
                              <Button>Remove</Button>
                           </td>
                        </tr>
                     </tbody>)
                     }
                  </Table>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default MyOrders;