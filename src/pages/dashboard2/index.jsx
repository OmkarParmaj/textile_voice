
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { FcBookmark } from "react-icons/fc";
import { FcShare } from "react-icons/fc";

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import Footer from "@/components/footer";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

// import '../../styles/dashboard.css';







const Dashboard2 = () => {

  const [experience, setExperience] = useState([
    "Fresher",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
    "11 years",
    "12 years",
    "13 years",
    "14 years",
    "15 years",
    "16 years",
    "17 years",
    "18 years",
    "19 years",
    "20 years",
    "21 years",
    "22 years",
    "23 years",
    "24 years",
    "25 years",
    "26 years",
    "27 years",
    "28 years",
    "29 years",
    "30 years",
    "30+ years"
  ])



  return (
    <>

      <div className="container-fluid">
        <div className="row pt-2 pb-2 border-bottom" >
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-sm-12 col-md-12">
            <h2>
              <span className="text-danger">Textile</span>
              <span style={{ fontSize: "13px" }}>Voice</span>
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
            <div className=" me-3">
              <IoIosNotifications size={30} />
            </div>
            <div className="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ cursor: "pointer" }}>
              <MdAccountCircle size={30} />


            </div>
          </div>
        </div>




        <div className="row pb-5 mt-5 ps-0 pe-0 d-flex justify-content-center align-items-center" >
          <h1 className="text-center mt-4">Find your dream job now</h1>
          <p className="text-center"> Explore top opportunities, grow your career, and take the next step toward success.</p>

          <div className=" d-flex justify-content-center align-items-center col-xxl-12 pt-4 pb-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card rounded-5 border shadow-sm">
              <div className="row ps-3 ">
                <div className="col-12 d-flex align-items-center  ">
                  <div className="d-flex   pt-2 pb-2 ">
                    <input className=" ms-0 me-4  searchbarinput " style={{ height: "45px" }} placeholder="   Job title, Destignation"></input>
                    <select className="ps-3 ms-3  searchbarinput" style={{ height: "45px" }} aria-label="Default select example">
                      <option selected>Years of experience</option>
                      {
                        experience.map((value, index) => (
                          <option>{value}</option>
                        ))
                      }
                      {/* <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option> */}
                    </select>
                    {/* <input className=" ps-3 ms-3  searchbarinput" style={{ height: "45px" }} placeholder="Years of experience"></input> */}
                    <input className=" ps-3 ms-3 searchbarinput" style={{ height: "45px" }} placeholder="    Location"></input>
                    <button className="btn me-3 ms-3 btn-danger rounded-5 m-0 p-0" style={{ width: "120px", height: "50px" }}>SEARCH</button>
                  </div>

                </div>



              </div>

            </div>

          </div>



        </div>

        <div className="row mb-5" style={{ marginTop: "30px" }}>
          <h4 className="text-center mb-5">ADVERTISING SECTION</h4>
          <div id="carouselExampleCaptions3" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className="row mb-4">
          <h3 className="text-center mt-5">Explore job opportunities across different roles</h3>

        </div>

        <div className="row d-flex  mb-5 justify-content-center align-items-center">
          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Ginning</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Spinning</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Weaving</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Processing</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Garment</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Technical textile</Link>

          </div>





        </div>

        <div className="row d-flex  justify-content-center align-items-center">
          <div className="card rounded-3 ms-4 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Marketing</Link>

          </div>

          <div className="card rounded-3 ms-3 shadow-lg d-flex justify-content-center align-items-center" style={{ width: "160px", height: "50px" }}>
            <Link href="" className="text-decoration-none " style={{ color: "black", fontSize: "13px" }}>Job for Merchandising</Link>

          </div>

        </div>


        {/* hothiring */}

        <div className="row mb-5" style={{ marginTop: "130px" }}>
          <h4 className="text-center mb-5">HOT HIRINGS</h4>
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className="row mb-5 justify-content-center" style={{ marginTop: "130px" }}>
          <h4 className="text-center mb-5">TOP COMPANIES HIRING</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {["trident.png", "welspun.png", "vardhman.png", "shahiexports.jpg", "raymond.png", "arvind.png"].map((src, index) => (
              <div key={index} className="card rounded-3 d-flex align-items-center justify-content-center" style={{ width: "200px", height: "80px" }}>
                <img src={src} className="company-logo" alt="Company Logo" />
              </div>
            ))}
          </div>
        </div>




        <div className="row mb-5" style={{ marginTop: "130px" }}>
          <div className="col-xxl-6 d-flex  justify-content-center  align-items-center col-xl-6 col-lg-12 col-md-12 col-sm-12 ps-5">

            <img src="/man2.jpg" style={{ height: "450px", width: "420px" }}>
            </img>

          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12  col-sm-12 ps-5">

            <h4 className="text-start mb-5 mt-5">Sign Up & Find Your Dream Job Today!</h4>
            <h5>Create Your Free Account</h5>
            <p>Simply enter your email address to sign up and start crafting your job listing.</p>

            <h5>Craft Your Job Post</h5>
            <p>Add a title, description, and location to your job post—it's quick and easy!</p>

            <h5>Publish & Hire</h5>
            <p>Once your job is live, leverage our advanced tools to connect with top talent effortlessly.</p>
            <div className="d-flex mt-5 justify-content-center align-items-center">
              <button className="btn btn-primary btn-sm rounded-4 ps-3 pe-3">Get Going Now</button>

            </div>

          </div>

        </div>

        <div className="row mb-5" style={{ marginTop: "130px" }}>
          <h4 className="text-center mb-5">JOBS IN MAJOR CITIES</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "mumbai.jpg",
              "ahmedabad.webp",
              "bangalore.png",
              "chennai.png",
              "delhi.png",
              "hydrabad.png",
              "kolkata.png",
              "pune.png",
              "Lucknow.webp",
            ].map((src, index) => (
              <div
                key={index}
                className="card rounded-3 d-flex flex-column align-items-center justify-content-center text-center p-2"
                style={{ width: "200px", height: "180px" }}
              >
                <img src={src} className="city-logo mb-2" alt="City Logo" />
                <h3 className="city-name">{src.split(".")[0]}</h3>
              </div>
            ))}
          </div>


        </div>




        <div className="row mb-5" style={{ marginTop: "130px" }}>
          <h4 className="text-center mb-5">UPCOMING EXHIBITION</h4>
          <div id="carouselExampleCaptions2" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className="row mb-5 d-flex justify-content-around" style={{ marginTop: "130px" }}>
          <h4 className="text-center">MAJOR INSTITUTATIONS ARE CONNECTED WIHT US</h4>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/dkte.jpg' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">DKTE, ICHALKARANJI</h3>
          </div>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/icy.webp' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">ICT, MUMBAI</h3>
          </div>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/mlvte.png' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">MLVTE, BHILWARA</h3>
          </div>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/nift.jpg' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">NIFT, BANGLURU</h3>
          </div>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/uttarpradesh.jpeg' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">UPTTI, KANPUR</h3>
          </div>

          <div

            className="card rounded-3 mt-5 d-flex flex-column align-items-center justify-content-center text-center p-2"
            style={{ width: "200px", height: "180px" }}
          >
            <img src='/jutekolkata.jpg' className="collage-logo mb-2" alt="City Logo" />
            <h3 className="collage-name">DJFT, Kolkata</h3>
          </div>

        </div>









        <Footer></Footer>





        <div className="offcanvas offcanvas-end    " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "300px" }}>
          {/* <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                       
                    </div>
                    <div class="offcanvas-body">
                        
                    </div> */}
          <h4 className="text-center mt-4">PROFILE</h4>

          <div className="d-flex justify-content-center align-items-center mt-2 ">
            <img
              src='/test.jpg'
              alt="profile image"
              className="rounded-circle "
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />

          </div>
          <div>
            <h4 className="text-center mt-3">Omkar Parmaj</h4>
            <p className=" text-center">omkarparmaj1@gmail.com</p>
          </div>

          <div className="row mt-5 d-flex justify-content-center">

            <div className="col-8 flex justify-content-start ">
              <Link href="/myapplicationEmployee" className="btn mt-2 text-start w-100"><VscGitStashApply /><span className="ms-3">Applied jobs</span> </Link>
              <Link href="/myapplicationEmployee" className="btn mt-2 text-start w-100"><CiBookmark /><span className="ms-3">Saved jobs</span> </Link>
              <Link href="/employeeaccount" className="btn mt-2 text-start w-100"><GrDocumentUser /><span className="ms-3">My Resume</span> </Link>
              <Link href="/findjob" className="btn mt-2 text-start w-100"><LuPackage2 /><span className="ms-3">Packages</span></Link>
              <Link href="/employeeaccount" className="btn mt-2 text-start w-100"><CiSettings /><span className="ms-3">Settings</span></Link>
            </div>
          </div>

          <div className="row   d-flex justify-content-center" style={{ marginTop: "150px" }}>
            <div className="col-10 flex justify-content-center">
              <button className="btn btn-danger border w-100">LOG OUT</button>

            </div>

          </div>
        </div>

      </div>





    </>
  );
};

export default Dashboard2;