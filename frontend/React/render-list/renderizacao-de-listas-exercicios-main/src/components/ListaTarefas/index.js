import { useState } from "react";
import {
  InputContainer,
  ListContainer,
  ListTasksContainer,
  Task,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LineHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

export function ListTasks() {
  const [list, setList] = useState(["Fazer exercícios", "Estudar React"]);
  const [newTask, setNewTask] = useState("");
  const [listRemovedTask, setListRemovedTask] = useState([])

  const onChangeTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (!newTask) return null
    const newList = [...list, newTask];
    setList(newList);
    setNewTask("");
  };

  const removeTask = (task, taskIndex) => {
    setList(list.filter((item, index) => index !== taskIndex));
    setListRemovedTask([...listRemovedTask, task])
  };
  return (
    <ListTasksContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={newTask}
          onChange={onChangeTask}
          onKeyDown={(key) => key.code === 'Enter' ? addTask() : ""}
        />
        <AddTaskButton onClick={addTask}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListContainer>
        <h3>
          Tarefas a cumprir
        </h3>
        <ul>
          {list.map((task, index) => {
            return (
              <Task key={index}>
                <p>{task}</p>
                <RemoveButton onClick={() => removeTask(task, index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Task>
            );
          })}
        </ul>
      </ListContainer>
      <LineHorizontal />
      <ListContainer>
        <h3>
          Tarefas concluídas
        </h3>
        <ul>
          {listRemovedTask.map((task, index) => {
            return (
              <Task removed={true} color={"#ff0000"} key={index}>
                <p>{task}</p>
              </Task>
            );
          })}
        </ul>
         </ListContainer>
    </ListTasksContainer>
  );
}
