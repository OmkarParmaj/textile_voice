"use client"
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { FcBookmark } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { FcEditImage } from "react-icons/fc";
import { BsFilePersonFill } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
// import { IoSettings } from "react-icons/io5";

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

// import '../../../styles/employeeaccount.css'
import { useState } from "react";
import Footer from "@/components/footer";

const Postjob = () => {

    const [language, setLanguage] = useState(false);
    const [age, setAge] = useState(false);
    const [degree, setDegree] = useState(false);


    const showlangauage = () => {
        setLanguage(prelan => !prelan);

    }

    const showage = () => {
        setAge(preage => !preage);
    }

    const showdegree = () => {
        setDegree(predegree => !predegree);
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
                        <button className="btn ms-2">Post job</button>
                        <button className="btn ms-2">Article</button>
                        <button className="btn ms-2">Blog</button>
                        <button className="btn ms-2">Community</button>
                        <button className="btn ms-2">Textile Exhibitions</button>
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
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column  align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div>
                        <Link href='/employer/profile' className="btn w-100 text-start ps-3 mt-4"><IoSettings /><span className="ms-2">Profile</span> </Link>
                            <Link href='/employer/postjob' className="btn btn-primary w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Post job</span> </Link>
                            <Link href='/employer/searchemployee' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Search employee</span> </Link>
                            <Link href='/employer/activejobs' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Active jobs</span> </Link>
                            <Link href='/employer/inactivejobs' className="btn w-100 text-start ps-3 mt-2"><MdLocalActivity /><span className="ms-2">Inactive jobs</span> </Link>
                            <Link href='' className="btn w-100 text-start ps-3 mt-2"><LuPackageOpen /><span className="ms-2">Packages</span></Link>
                            {/* <Link href='' className="btn w-100 text-start ps-3 mt-2"><IoSettings /><span className="ms-2">Settings</span> </Link> */}
                            {/* <Link href='' className="btn w-100 text-start ps-3 mt-2"><BsFilePersonFill  /><span className="ms-2">Candidate list</span> </Link> */}
                            <Link href='/employer/savedcandidates' className="btn w-100 text-start ps-3 mt-2"><BsFilePerson /><span className="ms-2">Saved candidate list</span> </Link>
                            <Link href='/employer/savedcandidates' className="btn w-100 text-start ps-3 mt-2"><BsFilePerson /><span className="ms-2">Deleted jobs</span> </Link>

                            {/* <Link href="" className="btn btn-outline-primary mt-5 w-100">Build your resume</Link> */}





                        </div>




                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 border-end">
                                <h6 className="mt-5 ms-4 mb-3">Basic information</h6>

                                <div className="row ">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12  col-sm-12">
                                        <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3">
                                        <div className="row ">
                                                <div className="col-xxl-1  d-flex align-items-center m-0 col-xl-1 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Industry</span>

                                                </div>
                                                <div className="col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="Ginning, spinning" type="text"></input>

                                                </div>
                                                <div className="col-xxl-1  d-flex align-items-center col-xl-1 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Domain</span>

                                                </div>
                                                <div className="col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="Production" type="text"></input>

                                                </div>
                                                <div className="col-xxl-1  d-flex align-items-center col-xl-1 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Job title</span>

                                                </div>
                                                <div className="col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="Executive" type="text"></input>

                                                </div>


                                            </div>



                                            <div className="row mt-3">
                                                <div className="col-xxl-2 d-flex align-items-center m-0 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Designation</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="textile merchandizer" type="text"></input>

                                                </div>
                                                <div className="col-xxl-2 d-flex align-items-center col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Company Name</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="vardhman textile" type="text"></input>

                                                </div>


                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-xxl-2 d-flex align-items-center m-0 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Job title</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="text"></input>

                                                </div>
                                                <div className="col-xxl-2 d-flex align-items-center col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Job location</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="Baddi, Himachal pradesh" type="text"></input>

                                                </div>


                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-xxl-2 d-flex align-items-center m-0 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>Years of experience</span>

                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="text" placeholder="min"></input>


                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="text" placeholder="max"></input>


                                                </div>
                                                <div className="col-xxl-2 d-flex align-items-center col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>No of Vacancies</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="number" placeholder="3"></input>

                                                </div>


                                            </div>

                                            <div className="row mt-4">


                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <h6 className="mt-2 ms-4 mb-3">Candidate requirement</h6>

                                <div className="row ">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12  col-sm-12">
                                        <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3">
                                            <div className="row ">
                                                <div className="col-xxl-8 d-flex align-items-center m-0 col-xl-8 col-lg-6 col-md-6 col-sm-6">
                                                    <button className="btn btn-sm border">Any</button>
                                                    <button className="btn btn-sm ms-2 border">Fresher only</button>
                                                    <button className="btn btn-sm ms-2 border">Experience only</button>
                                                    <button className="btn btn-sm ms-2 border">Internship</button>
                                                    <button className="btn btn-sm ms-2 border">Part-time</button>

                                                </div>



                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-xxl-2 d-flex align-items-center m-0 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>CTC (min)</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="text"></input>

                                                </div>
                                                <div className="col-xxl-2 d-flex align-items-center col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span style={{ fontSize: "14px" }}>CTC (max)</span>

                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" placeholder="" type="text"></input>

                                                </div>


                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-xxl-12  align-items-center m-0 col-xl-12 col-lg-6 col-md-6 col-sm-6">
                                                    <p>Job Description</p>
                                                    <textarea className="form-control" style={{ height: "250px" }}>

                                                    </textarea>

                                                </div>



                                            </div>

                                            <div className="row mt-4">

                                                <div className="col-xxl-2 d-flex align-items-center m-0 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                                    <span>Skills</span>


                                                </div>

                                                <div className="col-xxl-10  align-items-center m-0 col-xl-10 col-lg-6 col-md-6 col-sm-6">
                                                    <input className="form-control" type="text"></input>

                                                </div>



                                            </div>

                                        </div>

                                    </div>

                                </div>



                                <h6 className="mt-2 ms-4 mb-3">Educational, additional information</h6>

                                <div className="row ">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12  col-sm-12">
                                        <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3">
                                            <div className="row ">
                                                <div className="col-xxl-8 d-flex align-items-center m-0 col-xl-8 col-lg-6 col-md-6 col-sm-6">
                                                    {
                                                        language === true ? (
                                                            <button className="btn btn-sm border" onClick={() => showlangauage()}>Prefered language  X</button>
                                                        ) : (
                                                            <button className="btn btn-sm border" onClick={() => showlangauage()}>Prefered language</button>
                                                        )
                                                    }

                                                    {
                                                        age === true ? (
                                                            <button className="btn btn-sm border ms-2" onClick={() => showage()}>Age  X</button>
                                                        ) : (
                                                            <button className="btn btn-sm border ms-2" onClick={() => showage()}>Age</button>
                                                        )
                                                    }

{
                                                        degree === true ? (
                                                            <button className="btn btn-sm border ms-2" onClick={() => showdegree()}>Degree amd specialisation  X</button>
                                                        ) : (
                                                            <button className="btn btn-sm border ms-2" onClick={() => showdegree()}>Degree and specialisation</button>
                                                        )
                                                    }
                                                   
                                                </div>



                                            </div>

                                            <hr></hr>

                                            <div className="row mt-3">
                                                {
                                                    language === true ? (
                                                        <div>
                                                            <h6>Prefered Language</h6>
                                                            <button className="btn border btn-sm mt-2">+ English</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Hindi</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Marathi</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Punjabi</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Kannada</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Bengali</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Telgu</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Tamil</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Gujrati</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Malyalam</button>
                                                            <button className="btn border ms-2 mt-2 btn-sm">+ Malyalam</button>

                                                            
                                                        </div>
                                                    ) : (<h6></h6>)
                                                }



                                            </div>

                                            <div className="row mt-3">
                                                {
                                                    age === true ? (
                                                       <div>
                                                         <h6 className="mt-3">Age block</h6>
                                                         <div className="row mt-3">
                                                            <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                                                <label className="form-label">Minimum age</label>
                                                                <input className="form-control" type="number" />
                                                            </div>
                                                            <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                                                <label className="form-label">Maximum age</label>
                                                                <input className="form-control" type="number" />
                                                            </div>

                                                         </div>
                                                       </div>


                                                    ) : (<h6></h6>)
                                                }

                                               



                                            </div>

                                            <div className="row mt-3">
                                               

                                                {
                                                    degree === true ? (
                                                        <div>
                                                        <h6 className="mt-3">Degree Block</h6>
                                                        <div className="row mt-3">
                                                           <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                                               <label className="form-label">Degree and specialisation</label>
                                                               <input className="form-control" type="number" />
                                                           </div>
                                                           {/* <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                                               <label className="form-label">Maximum age</label>
                                                               <input className="form-control" type="number" />
                                                           </div> */}

                                                        </div>
                                                      </div>
                                                    ) : (<h6></h6>)
                                                }



                                            </div>





                                        </div>

                                    </div>

                                </div>


                                <div className="row mb-5 d-flex justify-content-end align-items-center">
                                    <div className="col-xxl-4 d-flex justify-content-end col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <button className="btn me-3 mt-3 btn-primary">SUBMIT</button>

                                    </div>
                                    
                                </div>











                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 ">



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
                            src='/vardhman.png'
                            alt="profile image"
                            className="rounded-circle "
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />

                    </div>
                    <div>
                        <h4 className="text-center mt-3">Vardhman textile</h4>
                        <p className=" text-center">care@vardhmantextile.com</p>
                    </div>

                    <div className="row mt-5 d-flex justify-content-center">

                        <div className="col-8 flex justify-content-start ">
                            <Link href="/employer/activejobs" className="btn mt-2 text-start w-100"><MdOutlineSettingsApplications /><span className="ms-3">Active jobs</span> </Link>
                            <Link href="/employer/inactivejobs" className="btn mt-2 text-start w-100"><MdLocalActivity /><span className="ms-3">Inactive jobs</span> </Link>
                            <Link href="/employeeaccount" className="btn mt-2 text-start w-100"><BsFilePersonFill /><span className="ms-3">Candidate list</span> </Link>
                            <Link href="/findjob" className="btn mt-2 text-start w-100"><LuPackageOpen /><span className="ms-3">Packages</span></Link>
                            <Link href="/employer/profile" className="btn mt-2 text-start w-100"><IoSettings /><span className="ms-3">Settings</span></Link>
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


export default Postjob;
