"use client"


import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import Footer from "@/components/footer";

const myapplicationEmployee = () => {




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

                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div className="card rounded-4 w-100 p-2 pb-5">

                            <div className="row">
                                <div className="col-xxl-6 pt-3 pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-dangertext-center ">Applied jobs</p>

                                </div>
                                <div className="col-xxl-6 pt-3 pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-center">Saved jobs</p>

                                </div>

                            </div>

                            <hr></hr>




                            <h4 className="ms-3">Filters</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Fulfullied</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Accepted</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Pending</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Rejected</label>
                            </div>

                            <h4 className="mt-4 ms-3">Sorted by</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Newsest first</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Oldest first</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">A-Z</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Z-A</label>
                            </div>



                        </div>







                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <h4 className="mt-4 ms-4">Applied jobs</h4>
                        <p className="ms-4 mt-2">Here is your applied job status</p>

                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-ld-12 col-md-12 col-sm-12">
                                <div className="card m-3 d-flex  rounded-4" style={{cursor: "pointer"}}>
                                   <div className="row">
                                    <div className="mt-2 ms-3 d-flex justify-content-center align-items-center col-xxl-2  col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                    <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle border"
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />

                                    </div>
                                   <div className=" mt-2 ms-3 col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                        <h4>TCS </h4>
                                        <h5>Senior software engineer</h5>
                                        <p>Applied on Januwary 30, 2025</p>

                                    </div>

                                    <div className=" mt-2 ms-3 col-xxl-4  col-xl-4 col-lg-12 col-sm-12 col-md-12">
                                        <span className="badge  rounded-pill float-end text-bg-success text-light align-items-center d-flex justify-content-center" style={{width: "100px", height: "25px"}}>Viewed</span>

                                    </div>

                                   </div>

                                </div>

                                <div className="card m-3 d-flex  rounded-4" style={{cursor: "pointer"}}>
                                   <div className="row">
                                    <div className="mt-2 ms-3 d-flex justify-content-center align-items-center col-xxl-2  col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                    <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle border"
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />

                                    </div>
                                   <div className=" mt-2 ms-3 col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                        <h4>TCS </h4>
                                        <h5>Senior software engineer</h5>
                                        <p>Applied on Januwary 30, 2025</p>

                                    </div>

                                    <div className=" mt-2 ms-3 col-xxl-4  col-xl-4 col-lg-12 col-sm-12 col-md-12">
                                        <span className="badge  rounded-pill float-end text-bg-info text-light align-items-center d-flex justify-content-center" style={{width: "100px", height: "25px"}}>Pending</span>

                                    </div>

                                   </div>

                                </div>

                                <div className="card m-3 d-flex  rounded-4" style={{cursor: "pointer"}}>
                                   <div className="row">
                                    <div className="mt-2 ms-3 d-flex justify-content-center align-items-center col-xxl-2  col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                    <img
                                                    src='/test.jpg'
                                                    alt="profile image"
                                                    className="rounded-circle border"
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />

                                    </div>
                                   <div className=" mt-2 ms-3 col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                        <h4>TCS </h4>
                                        <h5>Senior software engineer</h5>
                                        <p>Applied on Januwary 30, 2025</p>

                                    </div>

                                    <div className=" mt-2 ms-3 col-xxl-4  col-xl-4 col-lg-12 col-sm-12 col-md-12">
                                        <span className="badge  rounded-pill float-end text-bg-danger text-light align-items-center d-flex justify-content-center" style={{width: "100px", height: "25px"}}>pending</span>

                                    </div>

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

                    <div className="row   d-flex justify-content-center" style={{marginTop: "80px"}}>
                        <div className="col-10 flex justify-content-center">
                            <button className="btn btn-danger border w-100">LOG OUT</button>

                        </div>

                    </div>
                </div>



            </div>









        </>

    );
}


export default myapplicationEmployee;