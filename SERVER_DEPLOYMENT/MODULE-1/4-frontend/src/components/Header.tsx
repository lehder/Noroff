export function Header() {
  return (
    <header className="bg-black text-white flex justify-between p-4">
      <div className="font-bold text-xl">Logo</div>
      <nav className="flex gap-4">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    </header>
  );
}
