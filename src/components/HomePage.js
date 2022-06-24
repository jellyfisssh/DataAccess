import React from 'react'
import {  Container, Row, Col} from 'react-bootstrap';
import {  NavLink } from "react-router-dom";
import './HomePage.css'
function HomePage() {
  return (
    <Container fluid className="container">
    <Row>
      <Col ><h1 className="title" >Welcome to XXX digital resrouces</h1></Col>
      </Row>
      <Row>
      <Col><p  className="caption">some content about the school and the resouces...</p></Col>
      </Row> 
       <Col >
       <NavLink type="button" className="btn" to="/login/student">Log in as student</NavLink>
        
         <NavLink type="button" className="btn" to="/login/admin">Log in as Administrators</NavLink>
  
         <NavLink type="button" className="btn" to="/login/tutor">Log in as Tutors</NavLink>
        </Col> 
  </Container>  
     
  )
}  

export default HomePage