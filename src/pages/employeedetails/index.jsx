import { useEffect, useState } from "react";

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
   
    fullName: "",
    mobileNumber: "",
    gender: "",
    age: "",

   
    country: "",
    state: "",
    city: "",
    email: "",
  
    address1: "",
    address2: ""
   
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
        <div className="d-flex justify-content-center align-items-center   col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12" style={{ height: "100vh" }}>
          <img
            src="/emplyee.png"
            className="rounded-5"
            width={580}
            height={580}
          >
          </img>

        </div>

        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12    pt-5" style={{ height: "100vh" }}>
          


          <h2 className="text-center mb-4 text-danger">Employee Registration</h2>

          <div className="row mt-5 d-flex justify-content-center ">
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <p>Hi {name}</p>
            </div>

          </div>
          



          <div className="row  d-flex justify-content-center ">
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              

            </div>
            {/* <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        
            </div> */}

          </div>

          <div className="row  d-flex justify-content-center ">
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Mobile number
                </label>
                <input
                  type="number"
                  className="form-control border-danger"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Mobile number"
                />
              </div>

              

            </div>
            {/* <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
              
              


            </div> */}

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
                  className="form-control border-danger"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

            </div>

            {/* <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
             

            </div> */}


          </div>

          <div className="row  d-flex justify-content-center ">
            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Age
                </label>
                <input
                  type="email"
                  className="form-control border-danger"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="Enter your age"
                />
              </div>

            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  placeholder="Select gender"
                />
              </div>

            </div>


          </div>

          <div className="row  d-flex justify-content-center ">
            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Current address
                </label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="address1"
                  name="address1"
                  value={formData.address1}
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
                  Permanent address
                </label>
                <input
                  type="text"
                  className="form-control border-danger"
                  id="address2"
                  name="address2"
                  value={formData.address2}
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
                  className="form-control border-danger"
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
                  className="form-control border-danger"
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
                  className="form-control border-danger"
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







          <form onSubmit={handleSubmit}>
















            {/* Company Description */}








            {/* Submit Button */}
            <div className="row d-flex justify-content-center mt-4 ">
              <div className="col-xxl-8 col-xl-8 d-flex justify-content-center col-lg-12  col-md-12 col-sm-12">
                <button type="submit" className="btn btn-danger w-100 px-4 py-2 mb-4" >
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

export default EmployeeDetails;
