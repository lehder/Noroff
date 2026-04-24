import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-amber-600 flex justify-between">
      <Link to="/">
        <div class="text-3xl font-extrabold uppercase tracking-widest">
             <span class="bg-clip-text text-transparent bg-gradient-to-r from-
             cyan-400 to-blue-600">
    LOGO
             </span>
         </div>
      </Link>

      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products/add">Add Product</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}