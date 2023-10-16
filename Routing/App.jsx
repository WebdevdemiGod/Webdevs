import { useState } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <h2>WELCOME TO THE CHAMBER OF SECRETS</h2>
      <button onClick={loggedIn ? handleLogout : handleLogin}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
      {loggedIn ? (
        <div>
          <LandingPage handleLogout={handleLogout} />
        </div>
      ) : (
        <h5>Login to have access</h5>
      )}
    </div>
  );
}

export default App;
