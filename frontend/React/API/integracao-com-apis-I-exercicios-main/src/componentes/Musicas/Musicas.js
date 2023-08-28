import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'


export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    const {id} = props.playlist
    const [newMusic, setNewMusic]=useState([{artist:'', music:'', url:''}])
    
    useEffect(()=>{
        const headers = {
            headers: {
                Authorization: 'bart-silva-ozemela'
            } }
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'+id+"/tracks", headers)
        .then((response)=>{
            setMusicas(response.data.result.tracks)
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })    
    },[])


    function handleOnchange(ev){
        const {name, value} = ev.target
        setNewMusic({...newMusic, [name]: value})
    }


    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica placeholder="artista"
                name='artist' value={newMusic.artist} onChange={handleOnchange} />
                <InputMusica placeholder="musica"
                name='music' value={newMusic.music} onChange={handleOnchange}/>
                <InputMusica placeholder="url" 
                name='url' value={newMusic.url} onChange={handleOnchange}/>
                <Botao>Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}

