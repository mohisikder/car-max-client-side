import React from 'react';
import { Container, Row } from 'react-bootstrap';

const NewsLatter = () => {
   return (
      <div className="my-5" style={{backgroundColor:"skyblue"}}>
         <Container>
         <Row className="py-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
               <div className="news-letter-img h-25">
                  <img className="img-fluid w-75" src={`https://i.ibb.co/P5Jm3QT/12-2-car-png-image.png`} alt="" srcset="" />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
               <h2 className="display-6 my-4">Sign Up For Our Newsletter</h2>
               <p className="lead">Seared scallops on a bed of creamy corn spiked with poblano chiles borders on fancy Car.</p>
               <form action="#" className="form-controll">
                  <input class="form-control w-75" type="text" placeholder="Your Email" />
                  <div><button className="btn bg-primary mt-1 text-white">Subscribe</button></div>
               </form>
            </div>
         </Row>
         </Container>
      </div>
   );
};

export default NewsLatter;