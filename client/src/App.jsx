import NavbarComponent from "./components/NavbarComponent";
import { Routes, Route } from "react-router-dom";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import CadastrarTarefa from "./pages/CadastrarTarefa";
import GerenciadorTarefas from "./pages/GerenciadorTarefas";
import EditarTarefa from "./pages/EditarTarefa";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<GerenciadorTarefas />} />
          <Route path="/cadastrar" element={<CadastrarUsuario />} />
          <Route path="/cadastrar-tarefa" element={<CadastrarTarefa />} />
          <Route path="/editar-tarefa/:id" element={<EditarTarefa />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
