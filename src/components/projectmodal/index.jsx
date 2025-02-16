import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const ProjectModal = ({ showProject, handleCloseProject }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    description: "",
    keySkills: "",
    projectURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.projectName || !formData.startYear || !formData.endYear) {
      alert("Project Name and Duration are required!");
      return;
    }
    if (formData.startYear > formData.endYear) {
      alert("End Year cannot be before Start Year!");
      return;
    }
    console.log("Submitted Data:", formData);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const years = Array.from(new Array(50), (_, index) => new Date().getFullYear() - index);

  if (!showProject) return null;

  return (
    <div className="modal-over-project">
      <div className="modal-con-project">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-2 d-flex justify-content-end align-items-center">
            <span onClick={handleCloseProject} style={{ cursor: "pointer", fontSize: "21px" }}>X</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <h3>Projects</h3>

          <TextField
            label="Project Name"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            fullWidth
            required
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <TextField select label="Start Month" name="startMonth" value={formData.startMonth} onChange={handleChange} fullWidth required>
              {months.map((month) => <MenuItem key={month} value={month}>{month}</MenuItem>)}
            </TextField>
            <TextField select label="Start Year" name="startYear" value={formData.startYear} onChange={handleChange} fullWidth required>
              {years.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </TextField>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <TextField select label="End Month" name="endMonth" value={formData.endMonth} onChange={handleChange} fullWidth required>
              {months.map((month) => <MenuItem key={month} value={month}>{month}</MenuItem>)}
            </TextField>
            <TextField select label="End Year" name="endYear" value={formData.endYear} onChange={handleChange} fullWidth required>
              {years.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </TextField>
          </div>

          <TextField
            label="Project Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            inputProps={{ maxLength: 1000 }}
            fullWidth
            required
          />

          <TextField
            label="Key Skills (Optional)"
            name="keySkills"
            value={formData.keySkills}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Project URL (Optional)"
            name="projectURL"
            value={formData.projectURL}
            onChange={handleChange}
            fullWidth
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleCloseProject} variant="outlined" color="secondary">
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

export default ProjectModal;
