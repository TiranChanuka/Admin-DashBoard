import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import { Expenses } from "./screens/expenses/expenses";
import Layout from "./screens/Layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
