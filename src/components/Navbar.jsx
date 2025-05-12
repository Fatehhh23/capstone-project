export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/assets/Logo.png" alt="Logo Eddy Station" />
        <span>Eddy Station</span>
      </div>
      <nav className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  );
}