import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

export interface User {
  name: string;
  email: string;
  picture: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLoginSuccess = useCallback((loggedInUser: User) => {
    setUser(loggedInUser);
  }, []);
  
  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {user ? (
        <MainPage user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;