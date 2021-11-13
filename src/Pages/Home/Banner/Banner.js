import React from 'react';
import './Banner.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
   return (
      <>
         <div className="banner-img text-center">
         <Container>
            <Row>
               <Col>
                  <div className="pt-200">
                     <h1 className="banner-title">Let Us Find <br /> What You’re Looking For</h1>
                     <p className="w-50 text-center m-auto my-4">A car dealership, or vehicle local distribution, is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary.</p>
                     <Link><Button variant="danger" className="px-5">Explore</Button></Link>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
      </>
   );
};

export default Banner;