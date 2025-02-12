"use client"
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";


import { FaLocationDot } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";



// import '../../styles/employeeaccount.css';
import Footer from "@/components/footer";
import { useState } from "react";
import Profilemodal from "@/components/profilemodal";

const Employeeaccount = () => {

    const [show, setShow] = useState(false);


    const openmodal = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);

    }



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

                <div className="row ">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column  align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div className="">
                            <Link href='/myapplicationEmployee' className="btn w-100 text-start ps-3 mt-4"><MdOutlineSettingsApplications /> <span className="ms-2">My application</span> </Link>
                            <Link href='' className="btn w-100 text-start ps-3 mt-2"><MdLocalActivity /><span className="ms-2">Activity</span> </Link>
                            <Link href='' className="btn w-100 text-start ps-3 mt-2"><IoSettings /><span className="ms-2">Settings</span> </Link>
                            <Link href='' className="btn w-100 text-start ps-3 mt-2"><LuPackageOpen /><span className="ms-2">Packages</span></Link>

                            {/* <Link href="" className="btn btn-outline-primary mt-5 w-100">Build your resume</Link> */}




                            <div className="row d-flex justify-content-center align-items-center  w-100" style={{ marginLeft: "1px" }}>
                                <Link href="/build_your_resume_ai" className="Download-button mt-4 w-100" style={{ textDecoration: "none" }}>
                                    {/* <svg
                                viewBox="0 0 640 512"
                                width="20"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="white"
                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                                ></path>
                            </svg> */}
                                    <span className="ms-3" style={{ fontSize: "15px" }}>Build your resume AI</span>
                                </Link>

                            </div>
                        </div>




                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 border-end">

                                <div className="row mt-4 ps-4 pe-4">
                                    <div className="card rounded-4 p-3">
                                        <div className="row">
                                            <div className="col-xxl-3  col-xl-3 col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
                                                <img src="/test.jpg" className="rounded-circle" style={{ height: "140px", width: "140px" }}>
                                                </img>

                                            </div>
                                            <div className="col-xxl-9  col-xl-9 col-lg-12 col-md-12 col-sm-12 ">

                                                <h3>John Doe</h3>
                                                <h6 className="m-0">Textile Engineer</h6>
                                                <p className="m-0">at Vardhman textile</p>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-6">


                                                        <p className="m-0"><FaLocationDot /><span style={{ fontSize: "13px" }} className="ms-2">8/251, Vikarm ngara, Ichalkaranji</span></p>
                                                        <p className="m-0"><BsSuitcaseLgFill /><span style={{ fontSize: "13px" }} className="ms-2">1 Year 6 Month</span></p>
                                                        <p className="m-0"><IoMdWallet /><span style={{ fontSize: "13px" }} className="ms-2">Rs 2,64,000</span></p>

                                                    </div>
                                                    <div className="col-6 border-start">

                                                        <p className="m-0 ps-3"><FaPhoneAlt /><span style={{ fontSize: "13px" }} className="ms-2">+91-74857485738</span></p>
                                                        <p className="m-0 ps-3"><IoMail /><span style={{ fontSize: "13px" }} className="ms-2">John.doe@icloud.com</span></p>
                                                        <p className="m-0 ps-3"><FaCalendarAlt /> <span style={{ fontSize: "13px" }} className="ms-2">15 Days or less notice period</span></p>

                                                    </div>

                                                </div>


                                            </div>

                                        </div>


                                    </div>

                                </div>

                                <div className="row mt-4 ps-4 pe-4">
                                    <div className="card rounded-4 p-3">
                                        <div className="row">


                                            <h5>Key skills <MdEdit size={20} onClick={() => openmodal()} style={{ cursor: "pointer" }} /></h5>

                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                        </div>


                                    </div>

                                </div>


                                <div className="row mt-4 ps-4 pe-4">
                                    <div className="card rounded-4 p-3">
                                        <div className="row">


                                            <h5>Work Experience <MdEdit size={20} onClick={() => openmodal()} style={{ cursor: "pointer" }} /></h5>

                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                            <span className="border rounded-5 ms-2 mt-4" style={{ display: "inline-block", width: "auto" }} >sdfsf</span>
                                        </div>


                                    </div>

                                </div>
















                                <h4 className="mt-4 ms-4">Profile Information</h4>
                                <div className="row ms-3 mt-4">
                                    <div className=" col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
                                        <div className=" row">
                                            <div className=" col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">

                                                <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle border"
                                                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                                />

                                            </div>

                                            <div className=" col-xxl-8 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                                <p>John Doe</p>
                                                <p>Whatsapp No:- +91-8624934453</p>
                                                <p>Emial Id:- omkarparmaj1@gmail.com</p>

                                                <p>Address: Vikram nagar, Ichalkaranji, Maharashtra, India </p>
                                                <p>Gender:- Male</p>

                                                <p className="">Professional summary: Experienced software engineer with a passion for developing innovation programms that expedite the efficiency and effectiveness of organization success.</p>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                                {/* <div className="row  mt-4 d-flex">
                                    <div className=" ms-5 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                        <span>Upload your resume</span>
                                        <button className="btn btn-danger ms-4">Select file</button>
                                        <button className="btn btn-outline-primary ms-4">Upload</button>

                                    </div>

                                </div> */}

                                <div className="row ms-3 mt-5 ">
                                    <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                        <h5>Add your eduction information</h5>
                                        <input className="form-control form-control-sm mt-3" placeholder="Degree"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="Field study"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="Institution"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="Passing year"></input>

                                    </div>
                                    <div className="col-xxl-5 ms-3 col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                        <h5>Experience information</h5>
                                        <input className="form-control form-control-sm mt-3" placeholder="Job title"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="Company name"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="Number of year of experience"></input>
                                        <input className="form-control form-control-sm mt-3" placeholder="City"></input>

                                    </div>

                                </div>


                                <div className="row ms-3 mb-5 mt-5 ">
                                    <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12">

                                        <h5>Add your skills</h5>

                                        <input className="form-control form-control-sm mt-3" placeholder="add your skills"></input>

                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-primary">weaving</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-secondary">Spinning</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-success">Sizing</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-danger">Jobber</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-warning">Dyer</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-info">Knotter</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-light">Beamgetting</span>
                                        <span className="badge rounded-pill mt-4 ms-2 text-bg-dark">Master</span>
                                    </div>



                                </div>

                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 ">

                                <div className="mt-5" style={{ width: "100%", height: "500px", overflow: "hidden", border: "1px solid #ccc" }}>
                                    <iframe
                                        src="/omkarparmajcv.pdf#toolbar=0&scrollbar=0"
                                        width="100%"
                                        height="100%"
                                        style={{ border: "none", overflow: "hidden" }}
                                    />
                                </div>

                                <div className="row  mt-4 d-flex">
                                    <div className=" ms-5 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                        <span>Upload your resume</span>
                                        <button className="btn btn-danger ms-4">Select file</button>
                                        <button className="btn btn-outline-primary ms-4">Upload</button>

                                    </div>

                                </div>

                            </div>

                        </div>



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

                <Profilemodal show={show} handleClose={handleClose}></Profilemodal>

            </div>



        </>
    );
}


export default Employeeaccount;
