import { useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [shiny, setShiny] = useState(false);
  const splitString = pokemon.url.split("/");
  const id = splitString[splitString.length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const shinyImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
  return (
    <div className="w-3xs bg-white flex flex-col justify-center items-center">
      <h2>{pokemon.name}</h2>
      <img src={shiny ? shinyImageUrl : imageUrl} alt="" />
      <button
        className={"w-full " + (shiny ? "bg-yellow-500" : "bg-blue-700")}
        onClick={() => {
          setShiny(!shiny);
        }}
      >
        {shiny ? "shiny" : "normal"}
      </button>
    </div>
  );
}
