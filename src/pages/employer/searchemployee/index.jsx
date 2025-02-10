"use client"

import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
// import { IoLocationOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { FcBookmark } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

import '../../../styles/findjob.module.css'
import Footer from "@/components/footer";

const Searchemployee = () => {

    const [searchData, setSearchData] = useState({
        skill: "",
        experience: "",
        location: "",
    });

    const handleChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        console.log("Searching Jobs:", searchData);
        // You can integrate an API call here
    };



    return (
        <>

            <div className="container-fluid" >

                <div className="row pt-2 pb-2 border-bottom" >
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
                        <div className=" me-3">
                            <IoIosNotifications size={30} />
                        </div>
                        <div className="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ cursor: "pointer" }}>
                            <MdAccountCircle size={30} />


                        </div>
                    </div>
                </div>

                <div className="row pb-5 ps-0 pe-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#F2F2F2" }}>
                    <h1 className="text-center mt-4">Find your Right candidate Now</h1>
                    <p className="text-center">Hire Smarter, Faster, and Better with Our Recruitment Solutions!</p>

                    <div className=" d-flex justify-content-center align-items-center col-xxl-12 pt-4 pb-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card rounded-5 border-0 shadow-sm">
                            <div className="row ps-3 ">
                                <div className="col-12 d-flex align-items-center  ">
                                    <div className="d-flex   pt-2 pb-2 ">
                                        <input className=" ms-0 me-4  searchbarinput " style={{ height: "45px" }} placeholder="   Job title, Destignation"></input>
                                        <input className=" ps-3 ms-3  searchbarinput" style={{ height: "45px" }} placeholder="Years of experience"></input>
                                        <input className=" ps-3 ms-3 searchbarinput" style={{ height: "45px" }} placeholder="    Location"></input>
                                        <button className="btn me-3 ms-3 btn-primary rounded-5 m-0 p-0" style={{ width: "120px", height: "50px" }}>SEARCH</button>
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>



                </div>

                <div className="row border-top">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div className="card rounded-4 w-100 p-2 pb-5">

                            <div className="row  mb-0">
                                <div className="col-xxl-6 pt-2  pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-danger ms-3 text-start">Filters</p>

                                </div>
                                <div className="col-xxl-6 pt-2  pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-end me-3">Clear all</p>

                                </div>

                            </div>

                            <hr className="m-0"></hr>




                            <h6 className="ms-3 mt-2">Job Role</h6>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Fulltime</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Internship</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Freelance</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Contractual</label>
                            </div>


                            <h6 className="ms-3 mt-3">Location</h6>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">On site</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Hybrid</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Remote</label>
                            </div>

                            <h6 className="ms-3 mt-3">Salary range</h6>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Under $ 1000</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">$2500 - $5000</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">$1000 - $2500</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Above $2500</label>
                            </div>

                            <h6 className="ms-3 mt-3">Skills</h6>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Javascript</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">Python</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-1" for="inlineCheckbox1">PHP</label>
                            </div>





                        </div>







                    </div>

                    <div className=" col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 ">
                        <h6 className="mt-4 ms-4">Search candidate</h6>

                        <div className="row d-flex">
                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>


                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body  border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>

                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body  border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>

                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body  border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>

                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body  border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>

                            <div className="card ms-3 shadow-sm mt-4" style={{ width: "400px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                <div className="card-body  border-0 m-2" style={{ backgroundColor: "#D2F4EA", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}>

                                    <div className="row  mb-3 ">
                                        <div className="col-12 d-flex  ">
                                            <div>
                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle "
                                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                />

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className="ms-4" style={{ fontSize: "20px" }}>John Doe</span><span className="ms-2">,Kolhapur</span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>johndoe@gmail.com</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            <span style={{fontSize: "15px"}}>Phone:- 7364758493</span>

                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6 mb-0 d-flex justify-content-start align-items-center ">
                                            <span style={{fontSize: "15px"}}>Resume.pdf</span>


                                        </div>
                                        <div className="col-6 mb-0 d-flex justify-content-end align-items-center ">
                                            {/* <span style={{fontSize: "15px"}}>Phone:- 7364758493</span> */}

                                        </div>

                                    </div>

                                    <div className="row mt-3 mb-0">
                                   
                                    <p style={{fontSize: "15px"}} className="m-0">Translation | Front | endGITWeb | technologies | Javascript | HTML | JSON</p>

                                </div>

                                </div>

                                {/* <div className="row mt-2 ps-3 pb-3">
                                    <div className="col-6  d-flex align-items-center">
                                        <h5>2.5k <span style={{ fontSize: "15px" }}>/Monthy</span></h5>

                                    </div>
                                    <div className="col-6 ">
                                        <Link href="/jobdetails" className="btn btn-secondary rounded-5 ms-3">See Details</Link>

                                    </div>

                                </div> */}


                            </div>

                            

                            

                            




                        </div>








                    </div>

                    <div className="border-start col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 ">
                        <h3 className="text-center mt-5">Advertise tab</h3>

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

                    <div className="row   d-flex justify-content-center" style={{ marginTop: "80px" }}>
                        <div className="col-10 flex justify-content-center">
                            <button className="btn btn-danger border w-100">LOG OUT</button>

                        </div>

                    </div>
                </div>


            </div>









        </>
    );
}


export default Searchemployee;
