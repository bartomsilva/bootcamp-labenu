import { render, screen } from "@testing-library/react"
import ProductsList from "../components/ProductsList/ProductsList"

const productsMock = [
  {
    id: "p001",
    image: "img1",
    title: "Produto-1",
    price: 101.01
  },
  {
    id: "p002",
    image: "img2",
    title: "Produto-2",
    price: 102.02
  }, {
    id: "p003",
    image: "img3",
    title: "Produto-3",
    price: 103.03
  }, {
    id: "p004",
    image: "img4",
    title: "Produto-4",
    price: 104.04
  }
]

const addToCart = jest.fn()

describe("Card", () => {

  test("Deve renderizar os cards com título, preço e imagem", () => {
    render(<ProductsList
      products={productsMock}
      addToCart={addToCart}
    />)

    //screen.logTestingPlaygroundURL()

    const title = screen.getByRole('heading', { name: /produto-1/i })
    const price = screen.getByText(/\$103\.03/i)
    const image = screen.getByRole('img', { name: /produto\-1/i })

    // expect(title).toBeInTheDocument()
    // expect(price).toBeInTheDocument()
    // expect(image).toBeInTheDocument()
  })

  test("Deve renderizar os cards com título, preço, imagem, e botão de comprar",
    () => {
      render(<ProductsList
        products={productsMock}
        addToCart={addToCart}
      />)

      screen.logTestingPlaygroundURL()

      const title = screen.getByRole('heading', { name: /produto-1/i })
      const price = screen.getByText(/\$103\.03/i)
      const image = screen.getByRole('img', { name: /produto\-1/i })
      const bbuy = screen.getByRole('button', {name: /buy/i});

      console.log(bbuy)

      expect(title).toBeInTheDocument()
      expect(price).toBeInTheDocument()
      expect(bbuy).toBeInTheDocument()
      // expect(image).toBeInTheDocument()
    })
})