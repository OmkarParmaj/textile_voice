import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

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
                        <div className="">
                            <MdAccountCircle size={30} />


                        </div>
                    </div>
                </div>

                <div className="row">
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


                            <h4 className="ms-3">On Site/Remote</h4>
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

                            <h4 className="ms-3">Salary range</h4>
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

                            <h4 className="ms-3">Others</h4>
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





                        </div>







                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <h4 className="mt-4 ms-4">Job Details</h4>
                        {/* <p className="ms-4 mt-2">Here is your applied job status</p> */}

                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-ld-12 col-md-12 col-sm-12">
                                <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-3">
                                    <div className="row">
                                        <div className=" mt-2 ms-2 col-xxl-7 col-xl-7 col-lg-12 col-sm-12 col-md-12">
                                            <p>Job title</p>
                                            <h5>Frontend Developer</h5>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-ld-12 col-md-12 col-sm-12">
                                <div className="card ms-3 me-3 mb-3 mt-0 d-flex  rounded-4 p-4">
                                    <h4>Job Description</h4>

                                    <h4 className="mt-3">Software Engineer</h4>
                                    <p>Salary: $1.5 k - $1.8 k </p>
                                    <p>Location: New York, NY</p>

                                    <h4 className="mt-4">Description</h4>
                                    <p>join our dynamic team as a software engineer, where you will be responsible for developing innovative software solution and collaboration with cross-funcational teams.</p>

                                    <h4 className="mt-3">Requirements</h4>
                                    <p>Bachelor's degree in computer science or realted field, 3+ year experience as a software developer, proficiency in Java, Python or C++</p>

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




                    </div>
                </div>




            </div>







        </>
    );
}



export default Jobdetails;