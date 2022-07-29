import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <Link to="/">Home</Link>
      <Link to="/new-blog">New Blog</Link>
    </nav>
  );
}

export default Navbar;