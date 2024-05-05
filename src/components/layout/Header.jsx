import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="alert alert-primary shadow">
      <ul className="d-flex align-items-center justify-content-center gap-5">
        <li className="list-unstyled">
          <Link className="text-decoration-none fs-5 fw-bold">Product</Link>
        </li>
        <li className="list-unstyled">
          <Link className="text-decoration-none fs-5 fw-bold">AddProduct</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
