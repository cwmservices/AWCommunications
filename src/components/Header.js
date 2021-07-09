function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Mobile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Repair</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Unlock</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Accessories</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">SmartPhone</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Tablets</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Laptops</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
