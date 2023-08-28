export default function InfosUsuario(props){

    return (
        <div id='infoUser'>
            <span>{props.info.authorName} </span>
            <img id='autor' src={props.info.authorPhoto} alt="author photo" /> 
        </div>
    )
}