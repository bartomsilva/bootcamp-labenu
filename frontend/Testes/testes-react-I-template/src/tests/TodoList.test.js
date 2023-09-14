import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event" // lembre-se desse import <<<
import TodoList  from "../components/TodoList"


describe("Teste do TODO LIST",()=>{

  test("O título deve conter TODO LIST",()=>{
    render(<TodoList/>)
    const title = screen.getByText("Todo List")
    expect(title).toBeInTheDocument()

  })

  test("O imput vazio",()=>{
    render(<TodoList/>)
    const title = screen.getByPlaceholderText("Enter a todo")
    expect(title).toHaveValue("")
  })

  test("deve atualizar o valor do input ao digitar", async()=>{
    const user = userEvent.setup()
    render(<TodoList/>)
    const input = screen.getByPlaceholderText("Enter a todo")
    await user.type(input,"bananinha")
    expect(input).toHaveValue("bananinha")
  })

  test("deve criar uma nova tarefa ao digitar e teclar enter",async()=>{
    const user = userEvent.setup()
    render(<TodoList/>)
    const input = screen.getByPlaceholderText("Enter a todo")
    await user.type(input,"bananinha{enter}")
    const result = screen.getByText("bananinha")
    expect(result).toBeInTheDocument()
  })

  test("deve alterar o staus da tarefe quando o botão toggle for clicado",async()=>{
    const user = userEvent.setup()
    render(<TodoList/>)
    
    const input = screen.getByPlaceholderText("Enter a todo")
    await user.type(input,"bananinha{enter}")
    const todoItem = screen.getByText("bananinha")
    const buttonTogle = screen.getByRole("button", { name: /toggle/i})
    await user.click(buttonTogle)
    expect(todoItem).toHaveStyle("text-decoration: line-through")
    await user.click(buttonTogle)
    expect(todoItem).toHaveStyle("text-decoration: none")

  })

  test("deve remover a tarefa quando o botão delete for clicado",async()=>{
    const user = userEvent.setup()
    render(<TodoList/>)
    
    const input = screen.getByPlaceholderText("Enter a todo")

    await user.type(input,"bananinha{enter}")
    const buttonDelete = screen.getByRole('button', { name: /delete/i })

    await user.click(buttonDelete)
    const todoItem = screen.queryByText(/bananinha/i)
    
    expect(todoItem).not.toBeInTheDocument()
  })


})