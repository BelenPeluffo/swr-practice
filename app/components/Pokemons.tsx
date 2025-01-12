"use client";
import { usePokemon } from "../services/queries";

const Pokemons = () => {
  const { data, isLoading } = usePokemon();
  console.log("data!", data);
  return (
    <div>
      <ul>
        {!isLoading
          ? data?.results?.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Pokemons;
