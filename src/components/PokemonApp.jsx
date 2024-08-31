import { useState } from "react"

export const PokemonApp = () => {

    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const reqPokemon = () => {
        try {
             fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>{
                 resp.json().then((data)=>{
                    const {id, sprites, types} = data
                    console.log(id, sprites.other['official-artwork'].front_default,["types"])
                    setUrl(sprites.other['official-artwork'].front_default)
                    setId(id)
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
    <>
    <h1>Id: {id}</h1>
    <img src={url}></img>
    <input className="form-floating mb-3" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
    <button className="btn btn-success" onClick={reqPokemon}>Buscar Pokemón</button>
    </>
  )
}