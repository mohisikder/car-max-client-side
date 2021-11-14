import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';

const ManageProducts = () => {
   const [manageProducts, setManageProducts] = useState([])
   const [control, setControl] =useState(false)

   useEffect(()=>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/products`)
      .then(res=>res.json())
      .then(data=>setManageProducts(data))
   },[])

   // Delete
   const handleDelete = id =>{
      fetch(`https://tranquil-brushlands-41625.herokuapp.com/delete/${id}`,{
         method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
         if(data.deletedCount){
            setControl(!control)
         }
      })
      alert('Are you sure!!!')
      
   }
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
                           <td>{index}</td>
                           <td>{pd?.name}</td>
                           <td>{pd?.description}</td>
                           <td>{pd?.price}</td>
                           <td><img style={{width:"50px"}} src={pd?.imgUrl} /></td>
                           <td>{pd?.status}</td>
                           <td>
                              <Button onClick={()=>handleDelete(pd?._id)} variant="danger">Remove</Button>
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