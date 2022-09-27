import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Create } from "../pages/Create";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};