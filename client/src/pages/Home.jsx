import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to our Website!</h1>
      <p>
        Thank you for visiting our site. Please log in to access exclusive content and features.
      </p>

      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
        <h2>Featured Section</h2>
        <p>
          Explore our latest articles, exciting news, and much more in our featured section. Log in to unlock the full experience!
        </p>
        {/* Add more content or elements as needed */}
      </div>

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        <p>&copy; Magzhan Torebek SE-2205</p>
      </footer>
    </div>
  );
}

