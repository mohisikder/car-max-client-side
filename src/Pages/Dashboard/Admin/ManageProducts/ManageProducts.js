import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';

const ManageProducts = () => {
   const [manageProducts, setManageProducts] = useState([])

   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/products`)
      .then(res=>res.json())
      .then(data=>setManageProducts(data))
   },[])
   return (
      <>
         <Container className="py-5">
            <h4 className="text-center py-3">Manage All Products</h4>
            <Row>
               <Col xs={12}>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Product Name</th>
                           <th>Description</th>
                           <th>Price</th>
                           <th>Photo</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     {
                        manageProducts?.map((pd,index)=><tbody>
                        <tr>
                           <td>1</td>
                           <td>Mark</td>
                           <td>Otto</td>
                           <td>@mdo</td>
                           <td>@mdo</td>
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

export default ManageProducts;