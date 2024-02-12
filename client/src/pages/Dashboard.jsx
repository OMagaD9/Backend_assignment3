import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFindMealsClick = () => {
    // Navigate to the desired route (e.g., index.ejs)
    navigate('../main/index');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#007BFF', cursor: 'pointer' }} onClick={handleFindMealsClick}>
        Find Meals For Your Ingredients
      </h1>
      {!!user && (
        <div>
          <h2 style={{ color: '#4CAF50' }}>Hi, {user.name}!</h2>
          {/* Add more content or elements as needed */}
        </div>
      )}
      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        <p>&copy; Magzhan Torebek SE-2205</p>
      </footer>
    </div>
  );
}

