import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import CategoryPage from './pages/Category';
import Navbar from './component/Navbar';
import ProtectedRoute from './component/ProtectedRoute';
import { AppProvider } from './context/AppContext';


const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;
