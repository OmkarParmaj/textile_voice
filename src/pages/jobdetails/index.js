import Link from "next/link";
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

const Jobdetails = () => {


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
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12  d-flex flex-column align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        {/* <div className="card rounded-4 w-100 p-2 pb-5">

                            <div className="row  mb-0">
                                <div className="col-xxl-6 pt-2  pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-danger ms-3 text-start">Filters</p>

                                </div>
                                <div className="col-xxl-6 pt-2  pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-end me-3">Clear all</p>

                                </div>

                            </div>

                            <hr className="m-0"></hr>




                            <h4 className="ms-3 mt-2">Job type</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Fulltime</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Internship</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Freelance</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Contractual</label>
                            </div>


                            <h4 className="ms-3 mt-3">On Site/Remote</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">On site</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Hybrid</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Remote</label>
                            </div>

                            <h4 className="ms-3 mt-3">Salary range</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Under $ 1000</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">$2500 - $5000</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">$1000 - $2500</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Above $2500</label>
                            </div>

                            <h4 className="ms-3 mt-3">Others</h4>
                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">On site</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Hybrid</label>
                            </div>

                            <div className="form-check form-check-inline mt-3 ms-3">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label ms-2" for="inlineCheckbox1">Remote</label>
                            </div>





                        </div> */}







                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">

                                {/* <h4 className="mt-4 ms-4">Job Details</h4> */}

                                <div className="row mt-5">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12  col-sm-12">
                                        <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3">
                                            <div className="row">
                                                <div className="mt-2  col-xxl-2  d-flex justify-content-center align-items-center col-xl-2 col-lg-12 col-sm-12 col-md-12">
                                                    <img
                                                        src='/vardhman.png'
                                                        alt="profile image"
                                                        className="rounded-circle border"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                    />

                                                </div>
                                                <div className=" mt-2  col-xxl-7  col-xl-7 col-lg-12 col-sm-12 col-md-12">
                                                    <h3 className="m-0 text-danger">Dyeing machine operator</h3>


                                                    <h5>Vardhman textile</h5>

                                                </div>
                                                <div className="mt-2 d-flex justify-content-end  col-xxl-3  col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                                    <div>

                                                        <FcBookmark size={25} />
                                                    </div>
                                                    <div className="ms-3 me-2">

                                                        <FcShare size={25} />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                                    <span><RiSuitcaseFill /><span className="ms-2">0-1 years</span></span><span className="ms-3 border-start ps-3"><MdCurrencyRupee /> not disclosed</span>

                                                    <p className="m-0"><FaLocationDot /><span className="ms-2">Mumbai, Pune</span></p>
                                                    <p className="m-0"><IoTime /><span className="ms-2">Working time: 11:00 AM to 5:00 PM</span></p>

                                                </div>


                                            </div>

                                            <div className="row mt-4 ">
                                                <div className="col-xxl-12 col-xl-12  col-lg-12 col-md-12 col-sm-12">
                                                    <span>Posted on: 30+ days ago</span><span className="ms-3 border-start ps-3">Openings: 3</span><span className="ms-3 border-start ps-3">Applicants: 307</span>

                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-xxl-12 col-xl-12 col-ld-12 col-md-12 col-sm-12">
                                        <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-4">
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">

                                                    <h4>Job Description </h4>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 d-flex justify-content-end col-lg-12 col-md-12 col-sm-12">

                                                    <p className="d-flex justify-content-end mt-0 " style={{ fontSize: "12px" }}>Posted job: 27th feb 2025</p>
                                                </div>

                                            </div>


                                            <h4 className="mt-4">Description</h4>
                                            <p>join our dynamic team as a software engineer, where you will be responsible for developing innovative software solution and collaboration with cross-funcational teams.</p>



                                            <h4 className="mt-3">Experience required</h4>
                                            <p>Any | Fresher only | Experience only</p>

                                            <h4 className="mt-3">Required skills</h4>
                                            <p>Javascript, php, Python</p>



                                            <h4 className="mt-3">Benifits</h4>
                                            <p>Health insurance, flexible works hours, opportunities for professional development</p>

                                            <div className="row">
                                                <div className="col-xxl-7  col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                                    <Link href='' className="btn btn-outline-success"><FaWhatsapp /><span className="ms-2">Whatsapp</span></Link>
                                                    <Link href='' className="btn ms-3 btn-outline-danger"><GiElectric /><span className="ms-2">Easy Apply</span></Link>
                                                    <Link href='' className="btn ms-3 btn-danger">Apply now</Link>


                                                </div>

                                            </div>

                                        </div>

                                    </div>



                                </div>

                                <div className="row mt-5 d-flex justify-content-center align-items-center">
                            <div className="col-xxl-12  col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <p className="text-center" style={{ fontSize: "10px" }}>Textilevoice is a platform that connects job seekers with employers. While we strive to verify the legitimacy of companies and job postings, we do not guarantee the authenticity, reliability, or legality of any job listing. Job seekers are advised to conduct their own due diligence before applying for a position or sharing personal information.By using this platform, you acknowledge that you apply for jobs at your own risk, and for more information read <Link href=""><span>Terms & conditions</span></Link> and <Link href=""><span>Privacy policy</span></Link>.

                                </p>

                            </div>

                        </div>

                            </div>

                            <div className="col-xxl-4  col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                {/* <h4 className="text-center mt-5">Advertise here</h4> */}

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

                    <div className="row   d-flex justify-content-center" style={{ marginTop: "150px" }}>
                        <div className="col-10 flex justify-content-center">
                            <button className="btn btn-danger border w-100">LOG OUT</button>

                        </div>

                    </div>
                </div>



            </div>







        </>
    );
}



export default Jobdetails;