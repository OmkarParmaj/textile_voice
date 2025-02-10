
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";

// import { QrCode } from "lucide-react";


const Footer = () => {


    const url = 'https://www.googleplay.com';
    const url2 = 'https://www.apple.com';



    return (
        <>

            <div className="row border-top  pt-4">
                <div className="col-xxl-3  mt-4 mb-5 col-xl-3 col-lg-12 col-lg-12 col-sm-12">
                    <div className="">
                        <h3 className="text-center">Textile Voice</h3>


                    </div>

                    <div className="d-flex mt-3 justify-content-center">
                        <div className="ms-2">
                            <FaFacebookSquare size={25} />

                        </div>
                        <div className="ms-2">

                            <FaXTwitter size={25} />


                        </div>
                        <div className="ms-2">

                            <FaInstagramSquare size={25} />


                        </div>
                        <div className="ms-2">

                            <FaLinkedin size={25} />

                        </div>


                    </div>

                    <div className="" style={{ marginTop: "70px" }}>
                        <h3 className="text-center">Contact us</h3>
                        <p className="text-start ms-5" style={{ fontSize: "14px", margin: "0px" }}>📍 Head Office: 123 Job Street, City, Country</p>
                        <p className="text-start ms-5" style={{ fontSize: "14px", margin: "0px" }}>📞 Phone: +91 98765 43210</p>
                        <p className="text-start ms-5" style={{ fontSize: "14px", margin: "0px" }}>📧 Email: support@jobportal.com</p>

                    </div>


                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <h6 className="mb-3">Information</h6>
                    <p className="" style={{ fontSize: "14px" }}>Home</p>
                    <p className="" style={{ fontSize: "14px" }}>Find jobs</p>
                    <p className="" style={{ fontSize: "14px" }}>Post a job</p>
                    <p className="" style={{ fontSize: "14px" }}>Browse companoies</p>
                    <p className="" style={{ fontSize: "14px" }}>Candidate dashboard</p>
                    <p className="" style={{ fontSize: "14px" }}>Employer dashboard</p>
                    <p className="" style={{ fontSize: "14px" }}>Contact us</p>
                    <p className="" style={{ fontSize: "14px" }}>Home</p>

                </div>

                {/* <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <p className="" style={{ fontSize: "14px" }}>Ginning</p>
                    <p className="" style={{ fontSize: "14px" }}>Spinning</p>
                    <p className="" style={{ fontSize: "14px" }}>Weaving</p>
                    <p className="" style={{ fontSize: "14px" }}>Processing</p>
                    <p className="" style={{ fontSize: "14px" }}>Knitting</p>
                    <p className="" style={{ fontSize: "14px" }}>Technical textile</p>
                    <p className="" style={{ fontSize: "14px" }}>Garmenting</p>
                    <p className="" style={{ fontSize: "14px" }}>Merchandising</p>
                    <p className="" style={{ fontSize: "14px" }}>Marketing</p>

                </div> */}

                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <h6 className="mb-3">Resources & Career Advice</h6>
                    <p className="" style={{ fontSize: "14px" }}>Resume writting tips</p>
                    <p className="" style={{ fontSize: "14px" }}>Interview Preparation</p>
                    <p className="" style={{ fontSize: "14px" }}>Salary Insights</p>
                    <p className="" style={{ fontSize: "14px" }}>Top Companies Hiring</p>
                    <p className="" style={{ fontSize: "14px" }}>Freshers’ Guide</p>
                    <p className="" style={{ fontSize: "14px" }}>AI resume builder</p>


                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <h6 className="mb-3"> Legal & Support</h6>
                    <p className="" style={{ fontSize: "14px" }}>Privacy policy</p>
                    <p className="" style={{ fontSize: "14px" }}>terms & conditions</p>
                    <p className="" style={{ fontSize: "14px" }}>FAQ's</p>
                    <p className="" style={{ fontSize: "14px" }}>Help center</p>

                </div>

                <div className="col-xxl-3 col-xl-3 justify-content-end d-flex  col-lg-12 col-md-12 col-sm-12">
                    <div className="card me-5 rounded-4 p-3 mb-4" style={{ width: "350px" }}>
                        <h4 className="text-center">Apply on the go</h4>
                        <p className="m-0 text-center" style={{ fontSize: "14px" }}>Get real-time job updates on our App</p>
                        <div className="row mt-4">

                            <div className="col-6 ">
                                <div className="row">
                                    <FaApple size={40} />
                                </div>

                                <div className="mt-3 d-flex justify-content-center row">
                                    <div className="d-flex justify-content-center" style={{ width: "300px" }}>
                                        <QRCodeCanvas value={url} level="H" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-6  ">
                                <div className=" row">
                                    <FaGooglePlay size={40} />
                                </div>

                                <div className="mt-3 d-flex justify-content-center row ">
                                    <div className="d-flex justify-content-center" style={{ width: "300px" }}>
                                        <QRCodeCanvas value={url2} level="H" />
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>


            </div>



            <div className="text-center  text-gray-500 text-sm mt-1 border-t border-gray-700 pt-1" style={{fontSize: "11px"}}>
                &copy; 2025 Textilevoice. All rights reserved. All trademarks are the property of their respective owners
            </div>




        </>
    )
}


export default Footer;
