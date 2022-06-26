import React from 'react'
import {  Container, Row, Col} from 'react-bootstrap';
import {  NavLink } from "react-router-dom";
import './HomePage.css'
function HomePage() {
  return (
    <Container fluid className="container">
    <Row>
      <Col ><h1 className="title">Welcome to the Student Reference Database</h1></Col>
      </Row>
      <Row>
      <Col><p  className="caption">Here you will find resources related to Art, Mathematics and Technology.<br/>Each subject has articles with biographies of the key people as well as articles on the major art objects, events and important concepts.</p></Col>
      </Row> 
       <Col >
       <NavLink type="button" className="btn" to="/login/student">Log in as Student</NavLink>
        
         <NavLink type="button" className="btn" to="/login/admin">Log in as Administrator </NavLink>
  
         <NavLink type="button" className="btn" to="/login/tutor">Log in as Tutor </NavLink>
        </Col> 
  </Container>  
     
  )
}  

export default HomePage