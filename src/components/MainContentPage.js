import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './MainContentPage.css'

function MainContentPage({role}) {
  const [query, setQuery] = useState("")

  const [articles, setArticles] = useState([{
    category: '',
    type: '',
    name: '',
    born: '',
    died: '',
    nationality: '',
    known_for: '',
    notable_work: '',
    about: '',
    year: '',
    medium: '',
    dimensions: '',
    location: '',
    designed_by: '',
    developer: ''
  }])

  useEffect(() => {
    fetch("/main-content").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setArticles(jsonRes));
  })

  return (
    <Container>
    <div className="top-container"> 
      <div>
        <input 
        placeholder="Enter a category or keyword to search..."
        className="search"
        onChange={event => setQuery(event.target.value)}
        />
      </div>
      <div>
        {  (role === 'Administrator' ) && <Link to='/add-new' className='add-new'>Add New</Link>}
      </div> 
    </div>
    
  { articles.filter(item => {
  if (query === '') {
    return item;
  } else if (item.type.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }else if (item.name.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }else if (item.category.toLowerCase().includes(query.toLowerCase())) {
    return item;
  }
 }).map((item) => (
      <div className='content'>
        <h2>{item.name}</h2>
        <div className='innerContent'>
          <h5>Category: {item.category}<br/> Type: {item.type}</h5>
          <div>
          { (role !== 'Student' ) && <Link className='edit-link' to='/add-new'>Edit</Link> }
          <Link className='see-more' to={`/detail-content/${item.name}`} >See More</Link> 
          </div>
       </div> 
      </div>
      
    ))}
  
    </Container>
  )
}

export default MainContentPage