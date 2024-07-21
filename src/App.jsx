import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import Amperajes from "./pages/admin/Amperajes";
import Estadisticas from "./pages/admin/Estadisticas";
import Calendario from "./pages/admin/Calendario";
import Precio from "./pages/admin/Precio";
import Configuracion from "./pages/admin/Configuracion";
import Camaras from "./pages/admin/Camaras";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="amperajes" element={<Amperajes />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="precio" element={<Precio />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="camaras" element={<Camaras />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
