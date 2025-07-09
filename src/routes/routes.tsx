import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
