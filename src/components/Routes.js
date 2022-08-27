import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Results } from "../components";

const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search"  element={<Results/>} />
        <Route exact path="/image"  element={<Results/>} />
        <Route exact path="/video"  element={<Results/>} />
        <Route exact path="/news"  element={<Results/>} />
      </Switch>
    </div>
  );
};

export default Routes;
