import React from 'react';

export default function Home() {
  return (
    <div>
      <h1 style={{ color: '#55d6e2'}}>Welcome to our Website!</h1>
      <p>
        Thank you for visiting our site. Please log in to access exclusive content and features.
      </p>

      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
        <h2 style={{ color: '#55d6e2'}}>How is our website useful?</h2>
        <p>
        "Finding Meals For Your Ingredients" streamlines your cooking process by offering a quick and efficient way to discover recipes based on the ingredients you already have. Say goodbye to last-minute grocery store runs and food waste – our platform helps you make the most of what's in your kitchen, turning every meal into a delightful and sustainable experience.
        </p>
        {/* Add more content or elements as needed */}
      </div>

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        <p>&copy; Magzhan Torebek SE-2205</p>
      </footer>
    </div>
  );
}

