import { React, useState } from "react";
import CardVideo from "./components/cardVideo/CardVideo";
import imgBtnClose from './assets/close.png'
import { myVideos } from "./components/Data";
// import { ContainerTrailer, ImgBtn, Control } from "./appstyled";
// import { TelaInteira, Main, Header, Footer,Video } from "./appstyled";
// import { MenuVertical } from "./appstyled";
// import { BotoesMeunuVertical } from "./appstyled";
import * as S from './appstyled'

export default function App() {

  const [visivel, setVisivel] = useState(false)

  function closeMovie() {
    document.querySelector("#video").innerHTML = ""
    document.querySelector('body').classList.toggle('fix')
    setVisivel(false)
  }


  return (
    <S.TelaInteira>

      <S.Header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </S.Header>
      
      <span id="foo"></span>

      <S.ContainerTrailer ver={visivel}>
        
        <S.Control>          
          <S.Video id="video"></S.Video>
          <S.ImgBtn onClick={closeMovie} src={imgBtnClose}/>            
        </S.Control>

      </S.ContainerTrailer>

      <S.Main>
        <S.MenuVertical>
          <ul>
            <S.BotoesMeunuVertical>Início</S.BotoesMeunuVertical>
            <S.BotoesMeunuVertical>Em alta</S.BotoesMeunuVertical>
            <S.BotoesMeunuVertical>Inscrições</S.BotoesMeunuVertical>
            <hr />
            <S.BotoesMeunuVertical>Originais</S.BotoesMeunuVertical>
            <S.BotoesMeunuVertical>Histórico</S.BotoesMeunuVertical>
          </ul>
        </S.MenuVertical>
        <>
          <CardVideo myVideo={myVideos} visible={visivel} setView={setVisivel} />
        </>
      </S.Main>

      <S.Footer>
        <h4>Sucesso não vem, temos que ir buscar!</h4>
        <h4>OZEMELA é top das galáxias!</h4>
      </S.Footer>

    </S.TelaInteira>
  );
}


