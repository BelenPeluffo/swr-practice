"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/Pokemon";
import { PaginatedResponse } from "../types/api/PaginatedResponse";

export default function Old() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data: PaginatedResponse<Pokemon>) => setPokemon(data.results));
  }, []);

  if (!pokemon.length) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
