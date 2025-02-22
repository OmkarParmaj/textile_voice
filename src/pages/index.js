// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
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
                            <Link href="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/article" className="nav-link">Article & Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/exhibitions" className="nav-link">Exhibitions</Link>
                        </li>
                    </ul>
                    <span className="navbar-text me-2">00 0000</span>
                    <Link href="/signup" className="btn btn-primary me-2">Sign Up</Link>
                    <Link href="/signin" className="btn btn-primary">Sign In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
