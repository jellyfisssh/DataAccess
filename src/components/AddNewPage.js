import React, {useState} from 'react'
import { Button, Container,  Col,  } from 'react-bootstrap';
 
 
function AddNewPage() {
  const [category, setCategory ] = useState()
  const [type, setType] = useState()
  const [name, setName] = useState()

   
  const onSubmit = (e) => {

    e.preventDefault();
 
    //call api endpint  
  
  }
  return (
    <Container fluid className="container" >
     <Col ><h1 className="title" >Add New Resource</h1></Col>
     <form onSubmit={ onSubmit }>
        <label>Category *</label>
        <br />
      
        <select className="input" value={category}  onChange={e => setCategory(e.target.value)}>
          <option value="grapefruit">Arts</option>
          <option value="lime">Mathematics</option>
          <option  value="coconut">Technology</option>
        </select>
        <br/>
        <label>Type *</label>
        <br />
        <input 
         className="input"
          name='type' 
          type='text' 
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <br />
        <label>Name *</label>
        <br />
        <input
         className="input"
          name='name' 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        /> 
        <br/>
        <Button variant='success' className="btn" type='submit' >Add New Resource </Button>
      </form>
      
     
  </Container>  
  )
}

export default AddNewPage