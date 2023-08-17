import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (status) => {
    // console.log('them',theme);
    setLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
