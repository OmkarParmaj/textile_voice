"use client"


import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


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
                        <div className="">
                            <MdAccountCircle size={30} />


                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 border-end d-flex flex-column align-items-start p-3" style={{ minHeight: "100vh", overflow: "hidden" }}>
                        <div className="card rounded-4 w-100 p-2 pb-5">

                            <div className="row">
                                <div className="col-xxl-6 pt-3 pb-0 mb-0  col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p className="text-dangertext-center">My appliction</p>

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



                        </div>







                    </div>

                    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                        <h4 className="mt-4 ms-4">My application</h4>
                        <p className="ms-4 mt-2">Here is your applied job status</p>

                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-ld-12 col-md-12 col-sm-12">
                                <div className="card m-3 d-flex  rounded-4">
                                   <div className="row">
                                   <div className=" mt-2 ms-3 col-xxl-7 col-xl-7 col-lg-12 col-sm-12 col-md-12">
                                        <h5>Senior software engineer</h5>
                                        <p>Applied on Januwary 30, 2025</p>

                                    </div>

                                    <div className=" mt-2 ms-3 col-xxl-4 col-xl-4 col-lg-12 col-sm-12 col-md-12">
                                        <span className="badge mt-4 rounded-pill float-end text-bg-info">Accepted</span>

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


export default myapplicationEmployee;