import { useState } from "react";

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
    companyWebsite: "",
  });

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
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4 text-danger">Employer Registration</h2>
              <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-danger"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                  />
                </div>

                {/* Company Domain (Dropdown) */}
                <div className="mb-3">
                  <label htmlFor="companyDomain" className="form-label">
                    Company Domain
                  </label>
                  <select
                    className="form-select border-danger"
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

                {/* Designation */}
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="form-control border-danger"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    placeholder="Your job title"
                  />
                </div>

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

                {/* Company Description */}
                <div className="mb-3">
                  <label htmlFor="companyDescription" className="form-label">
                    Company Description
                  </label>
                  <textarea
                    className="form-control border-danger"
                    id="companyDescription"
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your company"
                  />
                </div>

                {/* Number of Employees */}
                <div className="mb-3">
                  <label htmlFor="numberOfEmployees" className="form-label">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    className="form-control border-danger"
                    id="numberOfEmployees"
                    name="numberOfEmployees"
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    required
                    placeholder="Enter number of employees"
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control border-danger"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company address"
                  />
                </div>

                {/* Company Website */}
                <div className="mb-3">
                  <label htmlFor="companyWebsite" className="form-label">
                    Company Website
                  </label>
                  <input
                    type="url"
                    className="form-control border-danger"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company website URL"
                  />
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-danger px-4 py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
