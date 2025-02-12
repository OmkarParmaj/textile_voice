import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Dialog,
} from "@mui/material";

const Experiencemodal = ({ showexperience, handlecloseexperience }) => {
  const [formData, setFormData] = useState({
    years: "",
    months: "",
    companyName: "",
    designation: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyWorking: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === "years" || name === "months") && (value < 0 || value > 50))
      return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      currentlyWorking: !prev.currentlyWorking,
      endMonth: "",
      endYear: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.designation) {
      alert("Company Name and Designation are required!");
      return;
    }
    if (
      !formData.currentlyWorking &&
      formData.startYear &&
      formData.endYear &&
      formData.startYear > formData.endYear
    ) {
      alert("End Year cannot be before Start Year!");
      return;
    }
    console.log("Submitted Data:", formData);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    new Array(50),
    (_, index) => new Date().getFullYear() - index
  );
  if (!showexperience) return null;

  return (
    <div className="modal-over-experience">
       <div className="modal-con-experience ">
       <div className="row d-flex justify-content-end align-items-center">
          <div className="col-2 d-flex justify-content-end align-items-center">
            <span onClick={handlecloseexperience} style={{ cursor: "pointer", fontSize: "21px" }}>X</span>
          </div>
        </div>
  
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Work Experience</h3>
          {/* <p>Adding roles & companies you have worked with help employers understand your background</p> */}
         
        </div>

        <TextField
          label="Total Experience (Years)"
          name="years"
          type="number"
          value={formData.years}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Total Experience (Months)"
          name="months"
          type="number"
          value={formData.months}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          fullWidth
          required
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <TextField
            select
            label="Start Month"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
            fullWidth
            required
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Start Year"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
            fullWidth
            required
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {!formData.currentlyWorking && (
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              select
              label="End Month"
              name="endMonth"
              value={formData.endMonth}
              onChange={handleChange}
              fullWidth
              required
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="End Year"
              name="endYear"
              value={formData.endYear}
              onChange={handleChange}
              fullWidth
              required
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )}

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.currentlyWorking}
              onChange={handleCheckboxChange}
            />
          }
          label="I currently work here"
        />

        <TextField
          label="Job Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
          inputProps={{ maxLength: 4000 }}
          fullWidth
          required
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handlecloseexperience}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
   
    </div>
    </div>
  );
};

export default Experiencemodal;
