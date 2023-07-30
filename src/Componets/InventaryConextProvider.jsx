import React, { Children, createContext, useState } from "react";
export const InventaryContext = createContext();
export const InventaryConextProvider = ({ children }) => {
  const [invenraty, setInventary] = useState({});
  const [items, setItems] = useState([]);
  const [state, setState] = useState({});
  const [number, setNumber] = useState(10);
  return (
    <>
      <InventaryContext.Provider
        value={{
          invenraty,
          setInventary,
          items,
          setItems,
          state,
          setState,
          number,
          setNumber,
        }}
      >
        {children}
      </InventaryContext.Provider>
    </>
  );
};
