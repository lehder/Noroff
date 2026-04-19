import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
export function PokemonContainer() {
  type Pokemon = {
    name: string;
    url: string;
  };
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPokemon(data.results);
      setNextUrl(data.next);
    }
    getPokemon();
  }, [url]);

  return (
    <div className="flex justify-evenly gap-4 flex-wrap pb-4">
      {pokemon.map((item) => (
        <PokemonCard pokemon={item} key={item.name} />
      ))}
      <button
        className="w-3xs bg-linear-to-r from-orange-900 to-orange-800 text-white text-4xl font-bold"
        onClick={() => {
          setUrl(nextUrl);
        }}
      >
        Next
      </button>
    </div>
  );
}
