import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event" // lembre-se desse import <<<
import Counter from "../components/Counter"

describe("Teste do Counter", () => {
  test("o componente dever ser renderizado com o título", () => {
    // carregar o render()
    render(<Counter />)

    // selecionar o elemento
    const title = screen.getByText("Counter")

    // avalia a assertiva esperanda
    expect(title).toBeInTheDocument()
  })

  test("deve iniciar com valor 0", () => {
    // carregar o render()
    render(<Counter />)

    // selecionar o elemento
    const title = screen.getByText("0")

    // avalia a assertiva esperanda
    expect(title).toBeInTheDocument()
  })

  test("deve aumentar o valor do contador para 2 ao clicar em +",
    async () => {
      // configuração do simulador antes de tudo
      const user = userEvent.setup()

      // renderização do componente
      render(<Counter />)

      // selecionamos o elemento que será interagido
      const incrementButton = screen.getByText("+")

      // simula o clique da pessoa
      await user.click(incrementButton)
      await user.click(incrementButton)

      // o valor do contador foi pra 2, então selecionamos via "2"
      const value = screen.getByText("2")
      expect(value).toBeInTheDocument()

    })

  test("deve dminiuir o valor do contador para -2 ao clicar em -",
    async () => {
      // configuração do simulador antes de tudo
      const user = userEvent.setup()

      // renderização do componente
      render(<Counter />)

      // selecionamos o elemento que será interagido
      const decrementButton = screen.getByText("-")

      // simula o clique da pessoa
      await user.click(decrementButton)
      await user.click(decrementButton)

      // o valor do contador foi pra -2, então selecionamos via "-2"
      const value = screen.getByText("-2")
      expect(value).toBeInTheDocument()

    })

  test("quando o botão do encremento for clicado duas vezes seguidas, o contador deve aumentar para 2",
    async () => {

      const user = userEvent.setup()

      render(<Counter />)
      //screen.debug()  // logo do que ocorreu no html
      screen.logTestingPlaygroundURL()

      const incrementButton = screen.getByRole('button', { name: /\+/i })

      await user.click(incrementButton)
      await user.click(incrementButton)
      //screen.debug()

      const value = screen.getByText(/2/i)
      expect(value).toBeInTheDocument()



    })

})