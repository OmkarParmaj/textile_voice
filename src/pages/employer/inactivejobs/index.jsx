
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
import { FcFullTrash } from "react-icons/fc";

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { GiPerson } from "react-icons/gi";

// import '../../../styles/employeeaccount.css'
import { useState } from "react";
import DeleteModal from "@/components/deletemodal/DeleteModal";
import Footer from "@/components/footer";

const Inactivejobs = () => {

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        console.log("Deleted!");
        setShowModal(false);
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
                        <button className="btn ms-2">Post job</button>
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
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column  align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div>
                        <Link href='/employer/profile' className="btn  w-100 text-start ps-3 mt-4"><IoSettings /><span className="ms-2">Profile</span> </Link>
                            <Link href='/employer/postjob' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Post job</span> </Link>
                            <Link href='/employer/searchemployee' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Search employee</span> </Link>
                            <Link href='/employer/activejobs' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Active jobs</span> </Link>
                            <Link href='/employer/inactivejobs' className="btn btn-primary w-100 text-start ps-3 mt-2"><MdLocalActivity /><span className="ms-2">Inactive jobs</span> </Link>
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

                                <div className="row mt-5">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12  col-sm-12">
                                        <div className="card shadow-sm ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3" >
                                            <div className="row ">
                                                <div className="mt-2  col-xxl-2  d-flex justify-content-center align-items-center col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                                    <img
                                                        src='/vardhman.png'
                                                        alt="profile image"
                                                        className="rounded-circle border"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                    />

                                                </div>
                                                <div className=" mt-2  col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                                    <h3>Weaving Supervisor</h3>

                                                    <p className="m-0">Vardhaman textile</p>
                                                    <p className="m-0">Textile indsutry</p>
                                                    <p className="m-0">posted on:- 23th Feb 2025</p>
                                                    {/* <p className="m-0">Gandhi Road, Himachal Pradesh - 454 454</p> */}


                                                </div>
                                                <div className="mt-2 d-flex justify-content-end  col-xxl-5  col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                                    <div>

                                                        <FcFullTrash size={25} onClick={() => setShowModal(true)} style={{cursor: "pointer"}} />

                                                    </div>
                                                    {/* <div className="ms-3 me-2">

                                                        <FcShare size={25} />
                                                    </div>
                                                    <div className="ms-3 me-2">
                                                    <FcEditImage size={25} />

                                                    </div> */}

                                                </div>

                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-6 ">
                                                    <p className="m-0 fw-bolder" >Number of opening's:- 5 No's</p>
                                                    {/* <span style={{ fontSize: "14px" }}> contact person:- Purshottam vardhan</span> */}
                                                </div>

                                                <div className="col-6  border-start">

                                                    <p className="m-0 fw-bolder" >Job location:- Himachal pradesh</p>

                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <p className="m-0">Description:- The candidate should know about rapier weaving machine operations...</p>
                                                <p style={{ fontSize: "15px" }} className="m-0">Skills:- beamgetting | pickfinding | machine panel | stoke adjustment | pattern fedding | starting mark setting</p>

                                            </div>

                                            <div className="row  mt-3 d-flex   align-items-center">
                                                <div className="col-10  d-flex justify-content-start align-items-center">
                                                    <Link href="" className="btn btn-outline-primary "><GiPerson /><span className="ms-2">Applied candidates</span></Link>


                                                </div>
                                                <div className="col-2  d-flex justify-content-end align-items-center">
                                                    <span class="badge rounded-pill text-bg-danger d-flex justify-content-center align-items-center" style={{ width: "80px", height: "25px" }}>Inactive</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="card shadow-sm ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3" >
                                            <div className="row ">
                                                <div className="mt-2  col-xxl-2  d-flex justify-content-center align-items-center col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                                    <img
                                                        src='/vardhman.png'
                                                        alt="profile image"
                                                        className="rounded-circle border"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                    />

                                                </div>
                                                <div className=" mt-2  col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                                    <h3>Printing operator</h3>

                                                    <p className="m-0">Vardhaman textile</p>
                                                    <p className="m-0">Textile indsutry</p>
                                                    <p className="m-0">posted on:- 23th Jan 2025</p>
                                                    {/* <p className="m-0">Gandhi Road, Himachal Pradesh - 454 454</p> */}


                                                </div>
                                                <div className="mt-2 d-flex justify-content-end  col-xxl-5  col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                                    <div>

                                                        <FcFullTrash size={25} onClick={() => setShowModal(true)} style={{cursor: "pointer"}} />
                                                    </div>
                                                    {/* <div className="ms-3 me-2">

                                                        <FcShare size={25} />
                                                    </div>
                                                    <div className="ms-3 me-2">
                                                    <FcEditImage size={25} />

                                                    </div> */}

                                                </div>

                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-6 ">
                                                    <p className="m-0 fw-bolder" >Number of opening's:- 1 No's</p>
                                                    {/* <span style={{ fontSize: "14px" }}> contact person:- Purshottam vardhan</span> */}
                                                </div>

                                                <div className="col-6  border-start">

                                                    <p className="m-0 fw-bolder" >Job location:- Himachal pradesh</p>

                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <p className="m-0">Description:- The candidate should know about rapier weaving machine operations...</p>
                                                <p style={{ fontSize: "15px" }} className="m-0">Skills:- beamgetting | pickfinding | machine panel | stoke adjustment | pattern fedding | starting mark setting</p>

                                            </div>

                                            <div className="row  mt-3 d-flex   align-items-center">
                                                <div className="col-10  d-flex justify-content-start align-items-center">
                                                    <Link href="" className="btn btn-outline-primary "><GiPerson /><span className="ms-2">Applied candidates</span></Link>


                                                </div>
                                                <div className="col-2  d-flex justify-content-end align-items-center">
                                                    <span class="badge rounded-pill text-bg-danger d-flex justify-content-center align-items-center" style={{ width: "80px", height: "25px" }}>Active</span>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="card mb-5 shadow-sm ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3" >
                                            <div className="row ">
                                                <div className="mt-2  col-xxl-2  d-flex justify-content-center align-items-center col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                                    <img
                                                        src='/vardhman.png'
                                                        alt="profile image"
                                                        className="rounded-circle border"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                    />

                                                </div>
                                                <div className=" mt-2  col-xxl-5  col-xl-5 col-lg-12 col-sm-12 col-md-12">
                                                    <h3>Dyeing Operator</h3>

                                                    <p className="m-0">Vardhaman textile</p>
                                                    <p className="m-0">Textile indsutry</p>
                                                    <p className="m-0">posted on:- 23th Dec 2024</p>
                                                    {/* <p className="m-0">Gandhi Road, Himachal Pradesh - 454 454</p> */}


                                                </div>
                                                <div className="mt-2 d-flex justify-content-end  col-xxl-5  col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                                    <div>

                                                        <FcFullTrash size={25} onClick={() => setShowModal(true)} style={{cursor: "pointer"}} />
                                                    </div>
                                                    {/* <div className="ms-3 me-2">

                                                        <FcShare size={25} />
                                                    </div>
                                                    <div className="ms-3 me-2">
                                                    <FcEditImage size={25} />

                                                    </div> */}

                                                </div>

                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-6 ">
                                                    <p className="m-0 fw-bolder" >Number of opening's:- 2 No's</p>
                                                    {/* <span style={{ fontSize: "14px" }}> contact person:- Purshottam vardhan</span> */}
                                                </div>

                                                <div className="col-6  border-start">

                                                    <p className="m-0 fw-bolder" >Job location:- Himachal pradesh</p>

                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <p className="m-0">Description:- The candidate should know about rapier weaving machine operations...</p>
                                                <p style={{ fontSize: "15px" }} className="m-0">Skills:- beamgetting | pickfinding | machine panel | stoke adjustment | pattern fedding | starting mark setting</p>

                                            </div>

                                            <div className="row  mt-3 d-flex   align-items-center">
                                                <div className="col-10  d-flex justify-content-start align-items-center">
                                                    <Link href="" className="btn btn-outline-primary "><GiPerson /><span className="ms-2">Applied candidates</span></Link>


                                                </div>
                                                <div className="col-2  d-flex justify-content-end align-items-center">
                                                    <span class="badge rounded-pill text-bg-danger d-flex justify-content-center align-items-center" style={{ width: "80px", height: "25px" }}>Active</span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>








                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 ">

                                <h4 className="mt-4 text-center">Advertising section</h4>

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
                            <Link href="/employer/profile" className="btn mt-2 text-start w-100"><IoSettings  /><span className="ms-3">Settings</span></Link>
                        </div>
                    </div>

                    <div className="row   d-flex justify-content-center" style={{ marginTop: "80px" }}>
                        <div className="col-10 flex justify-content-center">
                            <button className="btn btn-danger border w-100">LOG OUT</button>

                        </div>

                    </div>
                </div>


                <DeleteModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    handleConfirm={handleDelete}
                />

            </div>



        </>
    );
}


export default Inactivejobs;
