import React from "react";
import "./styles.css";
import imgBtnClose from './assets/close.png'
import CardVideo from "./components/CardVideo";
import { myVideos } from "./components/Data"; 

export default function App() {

  function closeMovie() {    
    document.querySelector(".video").innerHTML = "" 
    document.querySelector('#container-trailer').classList.toggle('hide')
    document.querySelector('body').classList.toggle('fix')
  }


  return (
    <div>
      <span id="foo"></span>

      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
       
        <section id="container-trailer" className="trailer hide">
          <div id='control'>
            <div id="video" className="video hide">
            </div>
            <img className="btnClose" onClick={closeMovie} src={imgBtnClose} />
          </div>
        </section>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <CardVideo myVideo={myVideos} />

        </main>
        <footer>
          <h4>Sucesso não vem, temos que ir buscar!</h4>
          <h4>OZEMELA é top das galáxias!</h4>
        </footer>
      </div>
    </div>
  );
}


