import InfoUser from "./InfosUsuario";

export default function Cardvideo() {

    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfoUser/>
            </div>
        </section>
    )
}