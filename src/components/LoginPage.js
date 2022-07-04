import React, {useState} from 'react'
import { Button, Container,  Col,  } from 'react-bootstrap';
import server from '../server'
import { Navigate } from "react-router-dom";
 
import './LoginPage.css'
function LoginPage({role}) {
  const [username, setUsername ] = useState()
  const [password, setPassword] = useState()
  const [redirect, setRedirect] = useState(undefined);
  
  const onSubmit = async (e) => {

    e.preventDefault();
 
    try {
      const response = await server.post('/signin', {username, password, role});
    //  localStorage.setItem('token', response.data.token);
      setRedirect(role);
    } catch (error) {
      console.log(error);
      
    }
  
  }
  return (
    <Container fluid className="container" >
     <Col ><h1 className="title" >Welcome {role}!</h1></Col>
     {redirect === 'Student' && (
          <Navigate to="/main-content/student" replace={true} />
        )}
        {redirect === 'Administrator' && (
          <Navigate to="/main-content/admin" replace={true} />
        )}
        {redirect === 'Tutor' && (
          <Navigate to="/main-content/tutor" replace={true} />
        )}
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
    
     
  </Container>  
  )
}

export default LoginPage