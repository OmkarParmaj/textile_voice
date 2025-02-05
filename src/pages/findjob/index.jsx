import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


const Findjob = () => {



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
                        <h4 className="mt-4 ms-4">Find job</h4>
                        {/* <p className="ms-4 mt-2">Here is your applied job status</p> */}

                       



                    </div>
                </div>




            </div>

        
        
        
        
        
        
        </>
    );
}


export default Findjob;
