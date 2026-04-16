import { useState } from "react";
import { Counter } from "./components/Counter";
import { ChangeName } from "./components/ChangeName";
import { PokemonCard } from "./components/PokemonCard";
function App() {
  const [name, setName] = useState("guest");

  return (
    <div>
      <h1>Hello {name}</h1>
      <Counter color={"blue"} />
      <Counter color="red" />
      <br />
      <ChangeName setName={setName} />
      <PokemonCard />
    </div>
  );
}

export default App;