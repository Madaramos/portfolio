import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    
    <footer   className=" text-dark py-3">
      
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">madaradouaibi@gmail.com</p>
                         
            <a href="https://github.com/Madaramos" >
                        <img src="https://img.icons8.com/windows/32/null/github.png" /></a>
          </div>
        </div>
      </div>

    </footer>
  );
};


export default Footer;