import React from 'react'
import Carro from './Carro'

export default function Garagem() {

    return (
        <>
            <h1>Garagem de Bart Silva</h1>
            <div className="cars">
                <Carro />
                <Carro />
                <Carro />
                <Carro />
            </div>
        </>
    )
}