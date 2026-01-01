import React from "react";
import { Routes, Route } from "react-router";
import { routesConfig } from "./Config/Rooting";
import { NotFound } from "./Layout/Index";
import UnderConstruction from "./Layout/UnderConstruction/UnderConstruction";

const App = () => {
  return (
    <Routes>
      {routesConfig.map(({ path, element, maintenance }) => (
        <Route
          key={path}
          path={path}
          element={maintenance ? <UnderConstruction /> : element}
        />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
