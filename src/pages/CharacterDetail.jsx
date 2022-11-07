import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({})
    useEffect(() => {
        const getCharacter = async () => {
            const res = await axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
            console.log(res);
            setCharacter(res.data); 
        }
        getCharacter();
    })
    console.log(character)
  return (
    <div className='detail'>
      <h1>{character.name}</h1>
      <img className='imgdetails' src={character.imageUrl} alt={character.name}/>
      <p>Especie: {character.specie}</p>
      <p>Role: {character.role}</p>
      <p>Universo: {character.universe}</p>
      <p>Planeta: {character.originplanet}</p>
      <button onClick={()=>navigate("/characters")}>Volver a todos los personajes</button>
    </div>
  )
}

export default CharacterDetail;