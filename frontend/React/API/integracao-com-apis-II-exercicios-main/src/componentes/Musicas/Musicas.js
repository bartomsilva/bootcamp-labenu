import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'
import { TitlePlaylist } from './styled'
import { BASE_URL } from '../../constantes/BASE_URL'
import { HEADERS } from '../../constantes/AUTH_TOKEN'

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    const { id } = props.playlist
    const [newMusic, setNewMusic] = useState({ artist: '', music: '', url: '' })

    useEffect(() => {
        (async () => {
            try {
                const response = 
                await 
                axios.get(BASE_URL + '/' + id + "/tracks", HEADERS)
                setMusicas(response.data.result.tracks)
            } catch (error) {
                console.log(error.response)
            }
        })()
    }, [])

    function deletePlayList(playlist) {
        const { id, name } = playlist
        try {
            (async () => {
                await axios.delete(BASE_URL + '/' + id, HEADERS)
                const newPlaylist = props.playlists.filter(pl => pl.id !== id)
                props.setPlaylists(newPlaylist)
                alert(`A Playlist ${name}, for excluida com sucesso!`)
            })()
        } catch (error) {
            alert('Algo deu errado!', error.response)
        }
    }

    async function addTrackToPlaylist(playlist) {
        try {
            const body = {
                name: newMusic.music,
                artist: newMusic.artist,
                url: newMusic.url
            }
            console.log(body)
            const path = BASE_URL+'/'+playlist.id+'/tracks'
            await axios.post(path,body,HEADERS)
            const response = await axios.get(path,HEADERS)  
            setMusicas(response.data.result.tracks)
            alert(`Musica ${newMusic.music} incluida com sucesso!`)

        } catch (error) {
            alert('ocorreu um erro!')
            console.log(error)
        }
    }

    function handleOnchange(ev) {
        const { name, value } = ev.target
        setNewMusic({...newMusic, [name]:value })
    }
    
    // https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId
    async function removeTrackFromPlaylist(musicId,playlistId){
        try {
            await axios.delete(BASE_URL+'/'+playlistId.id+'/tracks/'+musicId, HEADERS)
            const response = await axios.get(BASE_URL+'/'+playlistId.id+'/tracks',HEADERS)
            setMusicas(response.data.result.tracks)
            alert('Musica Excluida com sucesso!')            
        } catch (error) {
            alert('aldo deu errado!')            
        }
    }
    return (
        <ContainerMusicas>
            <TitlePlaylist onClick={() => deletePlayList(props.playlist)}><h2>{props.playlist.name}</h2></TitlePlaylist>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={()=>removeTrackFromPlaylist(musica.id,props.playlist)}>X</button>

                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica placeholder="artista"
                    name='artist' value={newMusic.artist} onChange={handleOnchange} />
                <InputMusica placeholder="musica"
                    name='music' value={newMusic.music} onChange={handleOnchange} />
                <InputMusica placeholder="url"
                    name='url' value={newMusic.url} onChange={handleOnchange} />
                <Botao onClick={()=>addTrackToPlaylist(props.playlist)}>Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}

