import React, {useState} from 'react'
import { Button, Container,  Col,  } from 'react-bootstrap';
 
import './StudentLoginPage.css'
function StudentLoginPage() {
  const [username, setUsername ] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

   
  const onSubmit = (e) => {

    e.preventDefault();
 
    //call api auth endpint 
  }
  return (
    <Container fluid className="container" >
     <Col ><h1 className="title" >welcome student!</h1></Col>
     <form onSubmit={ onSubmit }>
        <label>Username</label>
        <br />
        <input 
          className="input"
          name='username' 
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label>Email</label>
        <br />
        <input 
         className="input"
          name='email' 
          type='text' 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
         className="input"
          name='password' 
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <Button variant='success' className="btn" type='submit' >Login</Button>
      </form>
      {/* this part is for testing only  */}
      <div>{username}</div>
      <div>{email}</div>
      <div>{password}</div>
     
  </Container>  
  )
}

export default StudentLoginPage