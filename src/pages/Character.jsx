import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      console.log(res);
      setCharacters(res.data);
    };
    getCharacters();
  }, []);
  return (
    <div>
      <h1>Personajes:</h1>
      <div className="personajes">
        {characters &&
          characters.map((character) => {
            return (
              <div className="card">
                <h2>{character.name}</h2>
                <img
                  className={character.name}
                  src={character.imageUrl}
                  alt={character.name}
                />
                <p>Especie: {character.specie}</p>
                <Link to={`/characters/${character.name}`}>Mas Detalles</Link>
              </div>
            );
          })}
      </div> 
    </div>
  );
};

export default Character;
