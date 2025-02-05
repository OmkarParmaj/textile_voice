
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";

import '../../styles/employeeaccount.css';

const Employeeaccount = () => {



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
                        <div className="">
                            <MdAccountCircle size={30} />


                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <Link href='' className="btn w-100 text-start ps-3 mt-4"><MdOutlineSettingsApplications /> <span className="ms-2">My application</span> </Link>
                        <Link href='' className="btn w-100 text-start ps-3 mt-2"><MdLocalActivity /><span className="ms-2">Activity</span> </Link>
                        <Link href='' className="btn w-100 text-start ps-3 mt-2"><IoSettings /><span className="ms-2">Settings</span> </Link>
                        <Link href='' className="btn w-100 text-start ps-3 mt-2"><LuPackageOpen /><span className="ms-2">Packages</span></Link>

                        <Link href="" className="btn btn-outline-primary mt-5 w-100">Build your resume</Link>



                        <button className="uiverse mt-4">
                            <div className="wrapper">
                                <span>Build your resume AI</span>
                                <div className="circle circle-12"></div>
                                <div className="circle circle-11"></div>
                                <div className="circle circle-10"></div>
                                <div className="circle circle-9"></div>
                                <div className="circle circle-8"></div>
                                <div className="circle circle-7"></div>
                                <div className="circle circle-6"></div>
                                <div className="circle circle-5"></div>
                                <div className="circle circle-4"></div>
                                <div className="circle circle-3"></div>
                                <div className="circle circle-2"></div>
                                <div className="circle circle-1"></div>
                            </div>
                        </button>

                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 border-end">
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

                                                <p>Location: New York, USA</p>

                                                <p className="">Professional summary: Experienced software engineer with a passion for developing innovation programms that expedite the efficiency and effectiveness of organization success.</p>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                                <div className="row  mt-4 d-flex">
                                    <div className=" ms-5 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                        <span>Upload your resume</span>
                                        <button className="btn btn-danger ms-4">Select file</button>
                                        <button className="btn btn-outline-primary ms-4">Upload</button>

                                    </div>

                                </div>

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


                                <div className="row ms-3 mt-5 ">
                                    <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12">

                                        <h5>Add your skills</h5>

                                        <input className="form-control form-control-sm mt-3" placeholder="add your skills"></input>

                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-primary">weaving</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-secondary">Spinning</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-success">Sizing</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-danger">Jobber</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-warning">Dyer</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-info">Knotter</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-light">Beamgetting</span>
                                        <span class="badge rounded-pill mt-4 ms-2 text-bg-dark">Master</span>
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

                            </div>

                        </div>

                    </div>
                </div>




            </div>



        </>
    );
}


export default Employeeaccount;
