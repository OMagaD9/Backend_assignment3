import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function Register() {
  const registerFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    margin: '5px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  
  const registerUser = async (e) => {
    e.preventDefault();
    const {name, email, password} = data  
    try {
    const {data} = await axios.post('/register', {
      name, email, password
    })
    if(data.error) {
      toast.error(data.error)
    } else {
      setData({})
      toast.success('Login successful. Welcome!')
      navigate('/login')
    }
   } catch (error) {
    console.log(error)
   }  
  }

  return (
    <div>
      <form style={registerFormStyle} onSubmit={registerUser}> 
        <label>Name</label>
        <input type='text' placeholder='enter name...' style={inputStyle} value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email</label>
        <input type='email' placeholder='enter email...' style={inputStyle} value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='enter password...' style={inputStyle} value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit' style={inputStyle }>Submit</button>
      </form>
        {
         <footer>
         <p>&copy; Magzhan Torebek SE-2205</p>
         </footer>
       }
    </div>
  )
}
