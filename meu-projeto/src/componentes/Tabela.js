import React, { useState, useEffect } from 'react';


import Pesquisar from "./Pesquisar";
import Pokemon from "./Pokemon";


function Tabela () {
    //  variavel, funcao que troca variavel,  valor inicial
    const [page, setPage] = useState(0);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            let pokes= []
    
            for(let i = 0 ; i < response.results.length; i++ ) {
                const poke = response.results[i]
                pokes.push(<Pokemon key={i} nome={poke.name}></Pokemon>)
            }
            setPokemons(pokes)
        });
    }, [page])
  
    return (
        <div className="tabela">
                <Pesquisar/>
                {
                    pokemons
                }
               
        </div>
    ) 
}

export default Tabela;
