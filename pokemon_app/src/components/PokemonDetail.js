import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokemonName]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const abilities = pokemon.abilities.map((ability) => ability.ability.name);

  return (
    <div className="container">
      <h1>Pokemon Details</h1>
      <div className="pokemon-details">
        <label htmlFor="pokemon-name">Pokemon Name: </label>
        <span id="pokemon-name">{pokemon.name}</span>
      </div>
      <h2>Abilities:</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default PokemonDetail;
