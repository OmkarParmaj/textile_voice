
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

import { VscGitStashApply } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { GrDocumentUser } from "react-icons/gr";
import { LuPackage2 } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { GiPerson } from "react-icons/gi";

import '../../../styles/employeeaccount.module.css'
import Footer from "@/components/footer";

const Appliedcandidates = () => {



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
                        <Link href='/employer/profile' className="btn btn-primary w-100 text-start ps-3 mt-4"><IoSettings /><span className="ms-2">Profile</span> </Link>
                            <Link href='/employer/postjob' className="btn w-100 text-start ps-3 mt-2"><MdOutlineSettingsApplications /> <span className="ms-2">Post job</span> </Link>
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
                        <h5 className="mt-4 ms-3">Filters</h5>

                        <div className="row mt-1 w-100 ms-1 p-2">
                            <div className="card rounded-3 p-3">
                                <h6>Applications</h6>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        All candidates
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        viewed
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Pending
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Rejected
                                    </label>
                                </div>



                            </div>

                        </div>




                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">

                        <div className="row">
                            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 border-end">

                                <div className="row mt-4 d-flex justify-content-center align-items-center">
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="row mb-4  d-flex justify-content-end align-items-center">
                                            <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
                                                <span className="me-3">Sort by</span>
                                                <button className="btn border btn-sm">Newest first</button>
                                                <button className="btn border btn-sm ms-2">Oldest first</button>
                                                {/* <button className="btn border btn-sm ms-2">A-Z</button> */}
                                                {/* <button className="btn border btn-sm ms-2">Z-A</button> */}

                                            </div>

                                        </div>
                                        <h4 className="mt-4 mb-4">Applied candidates list</h4>
                                        <table className="table table-hovered text-center" >
                                            <thead className="border">
                                                <tr>
                                                    <th></th>
                                                    <th>Date</th>
                                                    <th>Candidate Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>View profile</th>
                                                    <th>Resume</th>
                                                    <th>Select</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border">
                                                <tr>
                                                    <td>
                                                        <img
                                                            src='/test.jpg'
                                                            alt="profile image"
                                                            className="rounded-circle "
                                                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td><p style={{fontSize: "14px"}}>23th Feb 2025</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>Alice Johnson</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>alicejohnson@gmail.com</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>+92-3435454353</p></td>

                                                    <td>
                                                        <button className="btn btn-danger btn-sm">View</button>
                                                    </td>
                                                    <td>
                                                        <span class="badge rounded-pill text-bg-success">resume</span>
                                                    </td>
                                                    <td>
                                                        
                                                        <button className="btn btn-warning btn-sm ms-2">Pending</button>
                                                        <button className="btn btn-success btn-sm ms-2">view</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src='/test.jpg'
                                                            alt="profile image"
                                                            className="rounded-circle "
                                                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td><p style={{fontSize: "14px"}}>23th Feb 2025</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>Alice Johnson</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>alicejohnson@gmail.com</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>+92-3435454353</p></td>
                                                   
                                                    <td>
                                                        <button className="btn btn-danger btn-sm">View</button>
                                                    </td>
                                                    <td>
                                                        <span class="badge rounded-pill text-bg-success">resume</span>
                                                    </td>
                                                    <td>
                                                        
                                                        <button className="btn btn-warning btn-sm ms-2">Pending</button>
                                                        <button className="btn btn-success btn-sm ms-2">view</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src='/test.jpg'
                                                            alt="profile image"
                                                            className="rounded-circle "
                                                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td><p style={{fontSize: "14px"}}>23th Feb 2025</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>Alice Johnson</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>alicejohnson@gmail.com</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>+92-3435454353</p></td>

                                                    <td>
                                                        <button className="btn btn-danger btn-sm">View</button>
                                                    </td>
                                                    <td>
                                                        <span class="badge rounded-pill text-bg-success">resume</span>
                                                    </td>
                                                    <td>
                                                        
                                                        <button className="btn btn-warning btn-sm ms-2">Pending</button>
                                                        <button className="btn btn-success btn-sm ms-2">view</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src='/test.jpg'
                                                            alt="profile image"
                                                            className="rounded-circle "
                                                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td><p style={{fontSize: "14px"}}>23th Feb 2025</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>Alice Johnson</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>alicejohnson@gmail.com</p></td>
                                                    <td><p style={{ fontSize: "14px" }}>+92-3435454353</p></td>

                                                    <td>
                                                        <button className="btn btn-danger btn-sm">View</button>
                                                    </td>
                                                    <td>
                                                        <span class="badge rounded-pill text-bg-success">resume</span>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success btn-sm">Viewed</button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>

                                    </div>

                                </div>



                            </div>

                            {/* <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 ">
                                <h4 className="text-center mt-3">Easy applied candidates list</h4>

                                <h4 className="mt-4 text-center">Advertising section</h4>

                            </div> */}

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


export default Appliedcandidates;
