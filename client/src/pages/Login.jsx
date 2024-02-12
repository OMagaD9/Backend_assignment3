import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <form onSubmit={loginUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontWeight: 'bold' }}>Email</label>
        <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label style={{ fontWeight: 'bold' }}>Password</label>
        <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type='submit' style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
      </form>

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        <p>&copy; Magzhan Torebek SE-2205</p>
      </footer>
    </div>
  );
}

