import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './MainContentPage.css'
function MainContentPage({role}) {
  const MOCK_DATA = [{
     name: 'Euclid',
     type: 'Biography',
     about : 'Euclid, sometimes given the name Euclid of Alexandria to distinguish him from Euclides of Megara, was a ....',

  },
  {
    name: 'Euclid',
    type: 'Biography',
    about : 'Euclid, sometimes given the name Euclid of Alexandria to distinguish him from Euclides of Megara, was a ....',

 }]
  return (
    <Container>
    <div className="top-container">
    <div>search...</div>
   {  (role === 'Administrator' ) && <Link to='/add-new' className='add-new'>Add New</Link>}
    </div>
    {MOCK_DATA.map((item) => (
      <div className='content'>
        <h3>{item.name} - {item.type}</h3>
        <p style={{margin: '0.5rem'}}>{(item.about).substring(0,50)} ......</p>
      { (role !== 'Student' ) && <button>Edit</button> }

       <Link className='see-more' to={`/detail-content/${item.name}`} >See More</Link>  
      </div>
      
    ))}
  
    </Container>
  )
}

export default MainContentPage