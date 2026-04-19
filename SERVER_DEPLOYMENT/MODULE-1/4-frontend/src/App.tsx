import { Header } from "./components/Header";
import { PokemonContainer } from "./components/PokemonContainer";
function App() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl m-auto bg-neutral-300">
        <h1 className="font-bold text-4xl text-center p-4">
          <span className="text-red-700">Poke</span>
          <span className="text-blue-700">dex</span>
        </h1>
        <PokemonContainer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
