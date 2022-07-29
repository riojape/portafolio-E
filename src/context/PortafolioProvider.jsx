import React, { createContext, useState } from "react";

export const PortafolioContext = createContext();

export const PortafolioProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);

  const pages = ["Products", "Pricing", "Blog"];
  return (
    <PortafolioContext.Provider value={{ pages, drawer, setDrawer }}>
      {children}
    </PortafolioContext.Provider>
  );
};
