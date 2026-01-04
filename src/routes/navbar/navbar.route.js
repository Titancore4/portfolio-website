import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong><i className="fa-solid fa-circle-nodes fa-spin"></i> My Website</strong>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">My Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Renders the child routes */}
      <Outlet />
    </div>
  );
};

export default Navbar;
