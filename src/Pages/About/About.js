import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
   return (
      <>
         <div className="about-img"></div>
         <Container>
            <Row>
               <Col xs={12}>
                  <div className="py-5">
                     <h2>Our Company</h2>
                     <p>Carmax Ltd (ASX: CAR) is the largest online automotive classifieds business in Australia. Attracting more Australians interested in buying or selling cars, motorcycles, trucks, caravans and boats than any other classified group of websites. Together with its subsidiaries employing over 600 people in Australia, carsales develops world leading technology and advertising solutions that drive its business around the world. carmax.com Ltd has operations across the Asia Pacific region and has interests in leading online automotive classified businesses in Brazil, South Korea, Malaysia, Indonesia, Thailand and Mexico.</p>
                     <h2>The Carmax Vision</h2>
                     <p>Our vision is to provide a smooth car buying and selling journey for all Australians. At carsales, everything we do from product development to marketing & communications aims to empower our customers and give them greater confidence when it comes to trading cars – regardless of how much they know about cars or how engaged they might be in the process.</p>

                     <h2>Our Products & Services</h2>
                     <p>Our product portfolio continues to expand and diversify, allowing us to grow with the evolving needs of our customers and provide support during every step of their journey.</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default About;