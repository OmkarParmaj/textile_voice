import { useEffect, useState } from "react";

const EmployerLogin = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDomain: "",
    fullName: "",
    designation: "",
    country: "",
    state: "",
    city: "",
    email: "",
    companyDescription: "",
    numberOfEmployees: "",
    address: "",
    mobileNumber: "",
  });
  // const [companyName, setCompnayName] = useState("");
  // const [companyDomain, setCompnayDomain] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  // const [email, setEmail] = useState("");
  // const [companyDescription, setCompanyDescription] = useState("");
  // const [numberOfEmployees, setNumberOfEmployees] = useState("");
  // const [address, setAddress] = useState("");
  // const [companyWebsite, setCompanyWebsite] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");




  useEffect(() => {
    const data = localStorage.getItem("userData");
    console.log(data);
    if (data) {
      const parsedData = JSON.parse(data);

      setFormData((prevFormData) => ({
        ...prevFormData,
        fullName: parsedData.name,

      }));

      setName(parsedData.name);
      setEmail(parsedData.email);
      setPassword(parsedData.password);
      setRole(parsedData.role);


    }
  }, []);





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
    localStorage.clear();
  };





  return (

    <div className="container-fluid " style={{ height: "100vh" }}>
      {/* <div className="d-flex justify-content-center mt-3">
    <button type="button" className="btn btn-danger px-4 py-2" onClick={handleclear}>
      Submit
    </button>
  </div> */}

      <div className="row ">
        <div className="d-flex justify-content-center align-items-center  col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12" style={{ height: "100vh" }}>
          <img
            src="/empolyer.png"
            className="rounded-5"
            width={380}
            height={480}

          >
          </img>

        </div>

        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 pe-5  pt-3" style={{ height: "100vh" }}>



          <h2 className="text-center mb-4 text-danger">Employer Registration</h2>

          <div className="row   d-flex justify-content-start ">
            <div className="col-xxl-8  col-xl-8 col-lg-12 col-md-12 col-sm-12">
              <p>Hi {name}</p>
            </div>

          </div>

          <h6>Personal details</h6>
          <div className="card rounded-4 shadow-lg border-0 pt-3 pb-3">

            <div className="row  d-flex justify-content-center ">
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>



              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Designation */}
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation (In company)
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    placeholder="Your job title"
                  />
                </div>


              </div>

            </div>
          </div>

          <h6 className="mt-5">Company details</h6>

          <div className="card    rounded-4 shadow-lg border-0 pt-3 pb-3">
            <div className="row  d-flex justify-content-center ">
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Company Name */}
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name/Consultant
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                  />
                </div>

              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Company Domain (Dropdown) */}
                <div className="mb-3">
                  <label htmlFor="companyDomain" className="form-label">
                    Company Domain
                  </label>
                  <select
                    className="form-select border-black"
                    id="companyDomain"
                    name="companyDomain"
                    value={formData.companyDomain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Domain</option>
                    <option value="it">IT</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                  </select>
                </div>

              </div>

            </div>

            {/* <div className="row d-flex justify-content-center">
            <div className="col-8">
              <hr></hr>
            </div>

          </div> */}

            <div className="row mb-3 d-flex justify-content-center ">
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="companyDescription" className="form-label">
                  Company Description
                </label>
                <textarea
                  className="form-control border-black"
                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your company"
                />

              </div>
            </div>

            <div className="row d-flex justify-content-center ">
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Number of Employees */}
                <div className="mb-3">
                  <label htmlFor="numberOfEmployees" className="form-label">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    className="form-control border-black"
                    id="numberOfEmployees"
                    name="numberOfEmployees"
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    required
                    placeholder="Enter number of employees"
                  />
                </div>

              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Company Website */}
                <div className="mb-3">
                  <label htmlFor="companyWebsite" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control border-black"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter your mobile number"
                  />
                </div>

              </div>

            </div>

            <div className="row  d-flex justify-content-center ">
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-black"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

              </div>


            </div>

          </div>


          <h6 className="mt-5">Address details</h6>
          <div className="card shadow-lg border-0 rounded-4 pt-3 pb-3">

            <div className="row  d-flex justify-content-center ">
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company address"
                  />
                </div>

              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company address"
                  />
                </div>

              </div>
              {/* <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">


            </div> */}

            </div>

            <div className="row d-flex justify-content-center ">
              <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                {/* Country */}
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Country name"
                  />
                </div>

              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                {/* State */}
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="State name"
                  />
                </div>

              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                {/* City */}
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City name"
                  />
                </div>

              </div>

            </div>
          </div>









          <form onSubmit={handleSubmit}>



            {/* Submit Button */}
            <div className="row d-flex justify-content-center mt-4 ">
              <div className="col-xxl-8 col-xl-8 d-flex justify-content-center col-lg-12  col-md-12 col-sm-12">
                <button type="submit" className="btn btn-danger  px-4 py-2 mb-4" >
                  REGISTER
                </button>
                {/* <button type="submit" className="btn btn-danger ms-3  px-4 py-2 mb-4" >
                  Clear data
                </button> */}

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default EmployerLogin;
