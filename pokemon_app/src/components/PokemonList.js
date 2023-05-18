import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const handleDetailClick = (url) => {
    const pokemonName = url.split('/').slice(-2, -1)[0];
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
              <td>{pokemon.url}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDetailClick(pokemon.url)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
