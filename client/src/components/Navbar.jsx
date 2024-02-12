import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <nav style={{ backgroundColor: '#f8f9fa', padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'center' }}>
      <Link to='/' style={linkStyle}>Home</Link>
      <Link to='/register' style={linkStyle}>Register</Link>
      <Link to='/login' style={linkStyle}>Login</Link>
    </nav>
  );
}

