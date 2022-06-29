import React, {useState} from 'react';
import { Button, Container,  Col,  } from 'react-bootstrap';
import axios from "axios";
 
 
function AddNewPage() {
  const [input, setInput] = useState({
    category: '',
    type: '',
    name: ''
  })

  function handleChange(e) {
    const {name, value} = e.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

   const onSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      category: input.category,
      type: input.type,
      name: input.name
    }

    axios.post('http://localhost:3001/add-new', newArticle)
  }

  return (
    <Container fluid className="container" >
     <Col ><h1 className="title" >Add New Resource</h1></Col>
     <form onSubmit={ onSubmit }>
        <label>Category *</label>
        <br />
      
        <select className="input" name='category' value={input.category}  onChange={handleChange}>
          <option value="arts">Arts</option>
          <option value="mathematics">Mathematics</option>
          <option  value="technology">Technology</option>
        </select>
        <br/>
        <label>Type *</label>
        <br />
        <input 
         className="input"
          name='type' 
          type='text' 
          value={input.type}
          onChange={handleChange}
        />
        <br />
        <label>Name *</label>
        <br />
        <input
         className="input"
          name='name' 
          type='text'
          value={input.name}
          onChange={handleChange}
        /> 
        <br/>
        <Button variant='success' className="btn" type='submit' >Add New Resource </Button>
      </form>
      
     
  </Container>  
  )
}

export default AddNewPage