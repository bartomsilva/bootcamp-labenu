import photo from '../assets/foto.jpg'
export default function InfosUsuario(){

    return (
        <div id='infoUser'>
            <span>Alfred Hitchcock </span>
            <img id='autor' src={photo} alt="" />
        </div>
    )
}