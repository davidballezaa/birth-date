export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand ms-3" href="/">
        Birth-Date
      </a>
      <a className="btn btn-primary" href="/create">
        Create Profile
      </a>
    </nav>
  );
}
