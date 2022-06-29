import React, {useState} from 'react'
import { Button, Container,  Col,  } from 'react-bootstrap';
 
import './LoginPage.css'
function LoginPage({role}) {
  const [username, setUsername ] = useState()
  const [password, setPassword] = useState()

   
  const onSubmit = (e) => {

    e.preventDefault();
 
    //call api auth endpoint pass in {role}
  
  }
  return (
    <Container fluid className="container" >
     <Col ><h1 className="title" >Welcome {role}!</h1></Col>
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
        <Button variant='success' className="btn" type='submit' >Login as {role} </Button>
      </form>
      {/* this part is for testing only  */}
      <div>{username}</div>
      <div>{password}</div>
     
  </Container>  
  )
}

export default LoginPage