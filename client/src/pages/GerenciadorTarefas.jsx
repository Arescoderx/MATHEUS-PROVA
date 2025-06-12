import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GerenciadorTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const navigate = useNavigate();

  const carregarTarefas = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/tarefas");
      setTarefas(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      alert("Erro ao carregar tarefas.");
    }
  };

  const infoTarefa = (id) => {
    const tarefa = tarefas.find((t) => t.id === id);
    if (tarefa) {
      alert(
        `ID: ${tarefa.id}\nDescrição: ${tarefa.descricao}\nSetor: ${tarefa.setor}\nVeinculado a: ${tarefa.nomeUsuario}\nPrioridade: ${tarefa.prioridade}\nStatus: ${tarefa.status}\nData de Criação: ${tarefa.dataCriacao}`
      );
    } else {
      alert("Tarefa não encontrada.");
    }
  };

  const deletarTarefa = async (id) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (!confirmacao) return;

    try {
      await axios.delete(`http://localhost:5000/tarefas/${id}`);
      alert("Tarefa excluída com sucesso!");
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      alert("Erro ao excluir tarefa.");
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const Afazer = tarefas.filter((t) => t.status === "a fazer");
  const Fazendo = tarefas.filter((t) => t.status === "fazendo");
  const Pronto = tarefas.filter((t) => t.status === "pronto");

  const tabelaKanban = () => (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <div
        style={{
          flex: 1,
          background: "#f8f9fa",
          borderRadius: "8px",
          padding: "16px",
          minWidth: "300px",
        }}
      >
        <h4 className="text-center mb-3">A fazer</h4>
        {Afazer.length === 0 ? (
          <div className="text-center text-muted">
            Nenhuma tarefa encontrada.
          </div>
        ) : (
          Afazer.map((tarefa) => (
            <div
              key={tarefa.id}
              style={{
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 1px 4px #0001",
                marginBottom: "16px",
                padding: "12px",
              }}
            >
              <div>
                <strong>Descrição:</strong> {tarefa.descricao}
              </div>
              <div>
                <strong> Setor: </strong> {tarefa.setor}
              </div>
              <div>
                <strong>Prioridade:</strong> {tarefa.prioridade}
              </div>
              <div>
                <strong>Veinculado a:</strong> {tarefa.nomeUsuario}
              </div>
              <div className="mt-2 d-flex gap-2">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate(`/editar-tarefa/${tarefa.id}`)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deletarTarefa(tarefa.id)}
                >
                  Excluir
                </Button>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => infoTarefa(tarefa.id)}
                >
                  Detalhes
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        style={{
          flex: 1,
          background: "#f8f9fa",
          borderRadius: "8px",
          padding: "16px",
          minWidth: "300px",
        }}
      >
        <h4 className="text-center mb-3">Fazendo</h4>
        {Fazendo.length === 0 ? (
          <div className="text-center text-muted">
            Nenhuma tarefa encontrada.
          </div>
        ) : (
          Fazendo.map((tarefa) => (
            <div
              key={tarefa.id}
              style={{
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 1px 4px #0001",
                marginBottom: "16px",
                padding: "12px",
              }}
            >
              <div>
                <strong>Descrição:</strong> {tarefa.descricao}
              </div>
              <div>
                <strong> Setor: </strong> {tarefa.setor}
              </div>
              <div>
                <strong>Prioridade:</strong> {tarefa.prioridade}
              </div>
              <div>
                <strong>Veinculado a:</strong> {tarefa.nomeUsuario}
              </div>
              <div className="mt-2 d-flex gap-2">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate(`/editar-tarefa/${tarefa.id}`)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deletarTarefa(tarefa.id)}
                >
                  Excluir
                </Button>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => infoTarefa(tarefa.id)}
                >
                  Detalhes
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        style={{
          flex: 1,
          background: "#f8f9fa",
          borderRadius: "8px",
          padding: "16px",
          minWidth: "300px",
        }}
      >
        <h4 className="text-center mb-3">Pronto</h4>
        {Pronto.length === 0 ? (
          <div className="text-center text-muted">
            Nenhuma tarefa encontrada.
          </div>
        ) : (
          Pronto.map((tarefa) => (
            <div
              key={tarefa.id}
              style={{
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 1px 4px #0001",
                marginBottom: "16px",
                padding: "12px",
              }}
            >
              <div>
                <strong>Descrição:</strong> {tarefa.descricao}
              </div>
              <div>
                <strong> Setor: </strong> {tarefa.setor}
              </div>
              <div>
                <strong>Prioridade:</strong> {tarefa.prioridade}
              </div>
              <div>
                <strong>Veinculado a:</strong> {tarefa.nomeUsuario}
              </div>
              <div className="mt-2 d-flex gap-2">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate(`/editar-tarefa/${tarefa.id}`)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deletarTarefa(tarefa.id)}
                >
                  Excluir
                </Button>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => infoTarefa(tarefa.id)}
                >
                  Detalhes
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <Container>
      <h2 className="mt-4 text-center">Gerenciador de Tarefas</h2>
      {tabelaKanban()}
    </Container>
  );
}

export default GerenciadorTarefas;
