import React, { createContext, useState, useContext } from 'react';

const DilKonteksti = createContext();

export const dilKullan = () => useContext(DilKonteksti);

export const DilSaglayici = ({ children }) => {
  const [dil, setDil] = useState('tr');

  const dilDegistir = () => {
    setDil(onceki => onceki === 'tr' ? 'en' : 'tr');
  };

  return (
    <DilKonteksti.Provider value={{ dil, dilDegistir }}>
      {children}
    </DilKonteksti.Provider>
  );
};
