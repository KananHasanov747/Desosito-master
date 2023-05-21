import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Missig from "./components/Missig";
import Public from "./components/Public";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account/register" element={<Register />} />

        {/* catch all */}
        <Route path="*" element={<Missig />} />
      </Route>
    </Routes>
    // <h1>Hello world</h1>
  );
}
