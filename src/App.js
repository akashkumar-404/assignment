import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./components/login'));
const Dashboard = lazy(() => import('./components/dashboard'));

const App = () => {
  // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
