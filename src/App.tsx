import React from "react";
import "./App.css";
import Heading from "./components/Header/Heading";
import { Route, Routes } from "react-router-dom";
import { routers, Layout } from "./routers/Router";

const App = () => {
  return (
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
  );
};

export default App;
