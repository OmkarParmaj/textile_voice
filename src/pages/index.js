"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

import { FcBusinessman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [showNextModal, setShowNextModal] = useState(false);
  const [showEmployerModal, setShowEmployerModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleNext = (e) => {
    e.preventDefault();
    setShowSignup(false);
    setShowNextModal(true);
  };

  // const handleRoleSelection = (role) => {
  //   setUserData({ ...userData, role });
  //   setShowNextModal(false);
  //   role === "employer" ? setShowEmployerModal(true) : setShowEmployeeModal(true);
  // };

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-2 pb-2 border-bottom">
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-sm-12 col-md-12">
            <h2>
              <span className="text-danger">Textile</span>
              <span>Voice</span>
            </h2>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center">
            <button className="btn ms-2">Home</button>
            <button className="btn ms-2">Article</button>
            <button className="btn ms-2">Blog</button>
            <button className="btn ms-2">Community</button>
            <button className="btn ms-2">Exhibitions</button>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-12 col-sm-12 col-md-12 d-flex justify-content-end align-items-center">
            <button className="btn btn-danger ms-2" onClick={() => setShowSignup(true)}>
              Sign Up
            </button>
            <button className="btn btn-danger ms-2 me-4">Sign In</button>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form onSubmit={handleNext}>
                  <div className="row justify-content-end">
                    <button className="btn-close me-3" onClick={() => setShowSignup(false)}></button>
                  </div>
                  <h5 className="modal-title text-center">Sign Up</h5>
                  <p className="mt-5">
                    Discover and land your perfect job from any location. Sign up and get started now!
                  </p>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="John Doe"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      required
                    />
                    <label htmlFor="nameInput">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      placeholder="name@example.com"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      required
                    />
                    <label htmlFor="emailInput">Email</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      placeholder=""
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      required
                    />
                    <label htmlFor="passwordInput">Password</label>
                  </div>

                  <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" id="termsCheck" required />
                    <label className="form-check-label" htmlFor="termsCheck">
                      By creating an account, I confirm that I agree to the Terms of Service and have reviewed the User Agreement and Privacy Policy.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-danger w-100 mt-5">Next</button>
                  <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <span className="ms-2 text-danger">
                      <Link href="">Login</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Step Modal */}
      {showNextModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div className="row d-flex justify-content-end">

                  <button className="btn-close me-3" onClick={() => setShowNextModal(false)}></button>
                </div>
                <h5 className="modal-title mt-3">Tell us who you are?</h5>
                <div className="d-flex justify-content-around mt-5 mb-4">
                  <Link href="/employeedetails">
                    <div className="card p-3 " style={{ cursor: "pointer" }}>
                      <div className="justify-content-center">

                        <FcBusinessman size={65} />
                      </div>
                      <h6 className="mt-3">I am an Employer</h6>
                    </div>
                  </Link>
                  <Link href="/employerdetails">
                    <div className="card p-3 " style={{ cursor: "pointer" }}>
                      <div className="justify-content-center">

                        <FcManager size={65} />
                      </div>
                      <h6 className="mt-3">I am an Employee</h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
