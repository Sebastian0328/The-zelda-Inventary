import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Main } from "./Componets/Main";
import { InventaryConextProvider } from "./Componets/InventaryConextProvider";
import { Nav } from "./Componets/Nav";
import { Character } from "./Componets/Character";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Information } from "./Componets/Information";

function App() {
  return (
    <>
      <BrowserRouter>
        <InventaryConextProvider>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Main />} />
              <Route path="/character" element={<Character />} />
              <Route path="/character" element={<Information />} />
            </Route>
          </Routes>
        </InventaryConextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
