// components/Header.js
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <span className="text-primary">Textile</span>Voice
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/article" className="nav-link">
                  Article & Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/community" className="nav-link">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/exhibitions" className="nav-link">
                  Exhibitions
                </Link>
              </li>
            </ul>
            <span className="navbar-text me-2">00 0000</span>
            <Link href="/signup" className="btn btn-primary me-2">
              Sign Up
            </Link>
            <Link href="/signin" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      {/* *********Next page****** */}
      <Container fluid className="text-center mt-5">
        <h1 className="mb-4">
          <span style={{ color: "blue" }}>Textile</span>Voice
        </h1>
        <p className="mb-5">
          Bridging the gap between textile talent and industry leaders.
          <br />
          Find your perfect opportunity today!
        </p>
        <Row>
          <Col>
            <img src="/4.png" className="" width={400} height={250}></img>
            <div className="p-3 rounded bg-primary text-white">
              <h2>Looking for a Job?</h2>
            </div>
            <div className="mt-4 d-flex gap-3 justify-content-center">
              <Button variant="outline-primary" size="lg" className="w-100">
                Sign In
              </Button>
              <Button variant="outline-primary" size="lg" className="w-100">
                Sign Up
              </Button>
            </div>
          </Col>
          <Col>
            <img src="/5.png" className="" width={400} height={250}></img>
            <div className="p-3 rounded bg-primary text-white">
              <h2>Looking to Hire?</h2>
            </div>
            <div className="mt-4 d-flex gap-3 justify-content-center">
              <Button variant="outline-primary" size="lg" className="w-100">
                Sign In
              </Button>
              <Button variant="outline-primary" size="lg" className="w-100">
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
