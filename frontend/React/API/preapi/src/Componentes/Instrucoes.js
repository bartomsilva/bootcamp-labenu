export default function Instrucoes() {
  return (
    <div>
      <h1>Exercício para testar</h1>
      <p>
        Para este exercício, usaremos a{" "}
        <a
          href={
            "https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2"
          }
          target="_blank"
          rel="noreferrer"
        >
          API pública de Game of Thrones!
        </a>
        <h4>URL base: https://thronesapi.com/api/v2</h4>
      </p>
      <p>
        A documentação está em inglês, mas caso você prefira, pode traduzir com
        o tradutor automático do Google
      </p>
      <ol>
        <li>
          Explore a documentação, nela podemos testar os endpoints e verificar a
          resposta deles, assim como a URL das requisições
        </li>
        <li>Faça um fork deste codesandbox ou baixe o arquivo em zip</li>
        <li>Importe o axios (já está adicionado)</li>
        <li>
          Consuma o endpoint Characters (/Characters) e veja quais dados e qual
          o formato deles
        </li>
        <li>
          Exiba na tela a imagem de cada personagem, seguida pelo seu nome
          completo e família
        </li>
      </ol>
    </div>
  );
}
