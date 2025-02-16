import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const EducationModal = ({ showEducation, handleCloseEducation }) => {
  const [formData, setFormData] = useState({
    qualification: "",
    courseName: "",
    collegeName: "",
    gradingSystem: "",
    passRequired: false,
    startYear: "",
    endYear: "",
    courseType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      passRequired: !prev.passRequired,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.qualification ||
      !formData.courseName ||
      !formData.collegeName
    ) {
      alert("Please fill all required fields!");
      return;
    }
    console.log("Education Details Submitted:", formData);
  };

  const qualifications = ["Graduate", "Post Graduate", "Doctorate"];
  const courses = ["M.Tech", "B.Tech", "BCA", "MCA"];
  const gradingSystems = ["GPA out of 10", "GPA out of 4", "Percentage"];
  const years = Array.from(
    new Array(50),
    (_, index) => new Date().getFullYear() - index
  );
  const courseTypes = ["Full Time", "Part Time", "Correspondence"];

  if (!showEducation) return null;

  return (
    <div className="modal-over-education">
      <div className="modal-con-education">
        {/* Header with Proper Alignment */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h3 style={{ margin: 0 }}>Education</h3>
          <span
            onClick={handleCloseEducation}
            style={{
              cursor: "pointer",
              fontSize: "21px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            X
          </span>
        </div>

        <p>
          Adding your educational details helps recruiters know your value as a
          potential candidate.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <TextField
            select
            label="Qualification/Degree"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            fullWidth
            required
          >
            {qualifications.map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Course Name"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            fullWidth
            required
          >
            {courses.map((course) => (
              <MenuItem key={course} value={course}>
                {course}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="College Name"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            select
            label="Grading System"
            name="gradingSystem"
            value={formData.gradingSystem}
            onChange={handleChange}
            fullWidth
            required
          >
            {gradingSystems.map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </TextField>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.passRequired}
                onChange={handleCheckboxChange}
              />
            }
            label="Course requires a pass"
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              select
              label="Starting Year"
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

            <TextField
              select
              label="Ending Year"
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

          <TextField
            select
            label="Course Type"
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
            fullWidth
            required
          >
            {courseTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Button
              onClick={handleCloseEducation}
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

export default EducationModal;
