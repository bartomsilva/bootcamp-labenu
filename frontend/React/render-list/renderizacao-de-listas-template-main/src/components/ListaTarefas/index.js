import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [newTask, setNewTask] = useState([
    "fazer os exercícios",
    "estudar",
    "trabalhar no projeto"
  ]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa) {
      setNewTask([...newTask, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const removeTask = (indexTask) => {
    setNewTask(newTask.filter((e, index) => index != indexTask));

  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {newTask.map((task, index) => (
            <Tarefa key={index}>
              <p>{task}</p>
              <RemoveButton onClick={()=> removeTask(index)}>
                <img src={bin} alt="" width="16px" />
            </RemoveButton>
            </Tarefa>
          ))}
      </ul>
    </ListaContainer>
    </ListaTarefasContainer >
  );
}
