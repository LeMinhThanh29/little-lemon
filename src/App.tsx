import React from "react";
import "./App.css";
import Heading from "./components/Header/Heading";
import { Route, Routes } from "react-router-dom";
import { routers, Layout } from "./routers/Router";
import AppContext from "./context/AppContext";

const App = () => {
  return (
    <AppContext>
      <div className="App">
        {/* Router Here */}
        <Routes>
          {routers.map((router, index) => (
            <Route element={<Layout type={router.layout} />} key={index}>
              <Route path={router.path} element={router.element} />
            </Route>
          ))}
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
