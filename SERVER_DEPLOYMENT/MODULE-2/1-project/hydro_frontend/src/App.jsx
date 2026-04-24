import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="max-w-7xl m-auto flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="bg-white grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;