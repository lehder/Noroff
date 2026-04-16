import { useEffect, useState } from "react";

export function PokemonCard() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState("Bulbasaur");
  const [imageUrl, setImageUrl] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  );
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await res.json();
      console.log(data);
      setPokemon(data.name);
      setImageUrl(data.sprites.front_default);
    }
    getPokemon();
  }, [id]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h2>{pokemon}</h2>
      <img src={imageUrl} alt="" />
    </div>
  );
}