import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginActions } from '../store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSignUp, setisSignUp] = useState(false);
  const handleChange = (e) => {
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  const sendRequest = async (type="login")=> {
    const res = await axios.post(`https://blog-application-api.herokuapp.com/api/user/${type}`,{
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err=>console.log(err))
    const data = await res.data
    console.log(data);
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    if(isSignUp){
      sendRequest("signup").then(data=>localStorage.setItem("userId",data.user._id)).then(()=>dispatch(loginActions.login())).then(data=>console.log(data)).then(()=>navigate("/blogs"));
    }else{
      sendRequest().then(data=>localStorage.setItem("userId",data.user._id)).then(()=>dispatch(loginActions.login())).then(data=>console.log(data)).then(()=>navigate("/blogs"));
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
        maxWidth={400}
          display="flex"
          flexDirection={'column'}
          alignItems='center'
          justifyContent={'center'}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
          
        >
          <Typography variant='h2' padding={3} textAlign="center">{isSignUp ? "Signup" : "Login"}</Typography>
          {isSignUp && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin='normal'  />}
          <TextField name='email' type={'email'} onChange={handleChange} value={inputs.email} placeholder='Email' margin='normal'  />
          <TextField name='password' type={'password'} onChange={handleChange} value={inputs.password} placeholder='Password' margin='normal'  />
          <Button type='submit' variant='contained' sx={{borderRadius:3,marginTop:3}} color='warning'>Submit</Button>
          <Button onClick={()=>setisSignUp(!isSignUp)} sx={{borderRadius:3,marginTop:3}}>Change to {isSignUp ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login