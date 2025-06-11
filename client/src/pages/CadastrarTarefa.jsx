import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CadastrarTarefa() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/usuarios")
      .then((response) => setUsuarios(response.data))
      .catch((error) => {
        console.error("Erro ao carregar usuários:", error);
        alert("Erro ao carregar usuários.");
      });
  }, []);

  const onSubmit = async (data) => {
    try {
      const hoje = new Date().toISOString().split("T")[0];
      const novaTarefa = {
        ...data,
        dataCriacao: hoje,
      };
      await axios.post("http://localhost:5000/tarefas", novaTarefa);
      alert("Tarefa cadastrada com sucesso!");
      reset();
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
      alert("Erro ao cadastrar tarefa.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <Card>
        <Card.Body>
          <h3 className="mb-4 text-center">Cadastrar Tarefa</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                {...register("descricao", { required: true })}
                isInvalid={errors.descricao}
                placeholder="Digite a descrição da tarefa"
              />
              <Form.Control.Feedback type="invalid">
                Descrição é obrigatória.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Setor</Form.Label>
              <Form.Control
                type="text"
                {...register("setor", { required: true })}
                isInvalid={errors.setor}
                placeholder="Digite o setor da tarefa"
              />
              <Form.Control.Feedback type="invalid">
                Setor é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Funcionário Responsável</Form.Label>
              <Form.Select
                {...register("nomeUsuario", { required: true })}
                isInvalid={errors.nomeUsuario}
              >
                <option value="">Selecione um funcionário</option>
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.nome}>
                    {usuario.nome}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Selecione um funcionário.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prioridade</Form.Label>
              <Form.Select
                {...register("prioridade", { required: true })}
                isInvalid={errors.prioridade}
              >
                <option value="">Selecione a prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Prioridade é obrigatória.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                {...register("status", { required: true })}
                isInvalid={errors.status}
                disabled
              >
                <option value="A fazer">A fazer</option>{" "}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Selecione um status.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" variant="primary">
                Salvar Produto
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CadastrarTarefa;
