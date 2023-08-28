import axios from "axios";
import React, { useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import { BASE_URL } from '../../constantes/BASE_URL'
import { HEADERS } from '../../constantes/AUTH_TOKEN'
import { Header } from "./styled";

function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [playListName, setPlayListName] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const response =
                    await
                        axios.get(BASE_URL, HEADERS)
                setPlaylists(response.data.result.list)

            } catch (error) {
                alert('Volte mais tarde, ocorreu eu erro!')
            }
        })()
    }, [])

    function handleOnchange(ev) {
        setPlayListName(ev.target.value)
    }

    async function searchPlayList() {
        let response = null
        try {
            if (playListName) {
                response = await axios.get(BASE_URL + '/search?name=' + playListName, HEADERS)
                const result = response.data.result.playlist
                if (!result  || result.length===0){
                    alert(`Playlist ${playListName} não encontrada!`)
                } 
                setPlaylists(result)
                
            } else {
                response = await axios.get(BASE_URL, HEADERS)
                setPlaylists(response.data.result.list)
            }
            setPlayListName('')
        } catch (error) {
            alert('algo deu errado!')
        }
    }

    async function createPlaylist() {
        try {
            await axios.post(BASE_URL
                , { name: playListName }
                , HEADERS)
            const response = await axios.get(BASE_URL, HEADERS)
            setPlaylists(response.data.result.list)
            setPlayListName('')
            alert(`A Playlist ${playListName}, criada com sucesso!`)
        } catch (error) {
            alert('algo deu errado!')
        }
    }


    return (
        <>
            <Header>
                <input type="text" value={playListName} onChange={handleOnchange} />
                <button onClick={searchPlayList}>procurar Playlist</button>
                <button onClick={() => createPlaylist()}>Adicionar Playlist</button>
            </Header>
            <div>
                {playlists.map((playlist) => {
                    return <Musicas key={playlist.id} playlist={playlist} playlists={playlists} setPlaylists={setPlaylists} />
                })}

            </div>
        </>
    );
}

export default Playlists;
