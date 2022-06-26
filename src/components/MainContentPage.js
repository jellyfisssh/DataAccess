import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './MainContentPage.css'
function MainContentPage({role}) {
  const [query, setQuery] = useState("")
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
    <div><input 
    placeholder="Enter a category or keyword to search..."
     className="search"
    onChange={event => setQuery(event.target.value)}
     /></div>  
   {  (role === 'Administrator' ) && <Link to='/add-new' className='add-new'>Add New</Link>}
    </div>
    
  { MOCK_DATA.filter(item => {
  if (query === '') {
    return item;
  } else if (item.type.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }else if (item.name.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }else if (item.about.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }
 }).map((item) => (
      <div className='content'>
        <h3>{item.name} - {item.type}</h3>
        <p style={{margin: '0.5rem'}}>{(item.about).substring(0,50)} ......</p>
      { (role !== 'Student' ) && <Link className='edit-link' to='/add-new'>Edit</Link> }

       <Link className='see-more' to={`/detail-content/${item.name}`} >See More</Link>  
      </div>
      
    ))}
  
    </Container>
  )
}

export default MainContentPage