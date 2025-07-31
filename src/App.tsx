import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/public/index";
import { Home } from "./pages/private/home";
import Login from "./pages/public/login";
import CreateUser from "./pages/public/createUser";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<CreateUser />} path="/signup" />

      {/* rotas Privadas Gestor */}
      <Route element={<Home />} path="/client/main" />
      <Route element={<Home />} path="/gestor/main" />
    </Routes>
  );
}

export default App;
