import InfoUser from "../infosUsuario/InfosUsuario";
import { useId } from 'react';
import { PainelDeVideos,BoxPaginaPrincipal, Cover } from "./styled";
import { }  from './styled'

export default function Cardvideo(props) {

    const reproduzVideo = (e) => {
        let nVideo = +e.target.parentNode.id[1];
        if (nVideo >= 0) {
            props.setView(true)
            document.querySelector('body').classList.toggle('fix')
            document.querySelector("#video").innerHTML = props.myVideo[nVideo].link
            window.location.href = '#foo';
        }
    }

    return (
        <PainelDeVideos>
            {props.myVideo.map((video, index) => (
                <BoxPaginaPrincipal id={"i" + index} key={useId()}>
                    <Cover src={video.image} alt="" onClick={(event) => reproduzVideo(event)}/>
                    <h4>{video.filmTitle}</h4>
                    <InfoUser info={video} />
                </BoxPaginaPrincipal>
            ))}

        </PainelDeVideos>
    )
}