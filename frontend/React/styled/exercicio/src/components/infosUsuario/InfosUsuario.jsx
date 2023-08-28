import { InfoUser } from "./styled"

export default function InfosUsuario(props){
    
    return (
        <InfoUser>
            <span>{props.info.authorName} </span>
            <img id='autor' src={props.info.authorPhoto} alt="author photo" /> 
        </InfoUser>
    )
}