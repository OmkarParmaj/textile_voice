import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip, Button } from "@mui/material";

const Experiencemodal = ({ showexperience, handlecloseexperience }) => {
  const [skills] = useState([
    "Fabric Selection",
    "Textile Design",
    "Weaving Techniques",
    "Knitting Techniques",
    "Dyeing and Printing",
    "Embroidery",
    "Garment Construction",
    "Quality Control",
    "Textile Testing",
    "Pattern Making",
    "Sewing and Stitching",
    "Surface Ornamentation",
    "Technical Textiles",
    "Sustainable Textiles",
    "Fiber Science",
    "Non-woven Fabrics",
    "Textile Chemistry",
    "Fabric Finishing",
    "Digital Textile Printing",
    "Merchandising and Sourcing"
  ]);

  const [selectedSkills, setSelectedSkills] = useState([]);

  // Function to remove a skill from the selectedSkills array
  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
  };

  // Function to add skill from suggested skills
  const handleAddSuggestedSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  if (!showexperience) return null;

  return (
    <div className="modal-over-experience">
      <div className="modal-con-experience p-5">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-2 d-flex justify-content-end align-items-center">
            <span onClick={handlecloseexperience} style={{ cursor: "pointer", fontSize: "21px" }}>X</span>
          </div>
        </div>
        <h3>Work Experience</h3>
        <p style={{ fontSize: "13px" }}>
          Provide skills that best showcase your expertise, such as textile marketing, merchandising, weaving design, etc. (At least one required).
        </p>

        <h6 className="mt-4">Added Skills</h6>
        <div className="added-skills mt-2 d-flex flex-wrap">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={() => handleRemoveSkill(skill)}
                color="primary"
                variant="outlined"
                className="me-2 mb-2"
              />
            ))
          ) : (
            <p>No skills added yet</p>
          )}
        </div>

        <div className="col-8 mt-4">
          <Autocomplete
            options={skills}
            sx={{ width: 800 }}
            onChange={(event, newValue) => {
              if (newValue && !selectedSkills.includes(newValue)) {
                setSelectedSkills([...selectedSkills, newValue]);
              }
            }}
            renderInput={(params) => <TextField {...params} label="Select Skill" />}
          />

          <p className="mt-4">Or you can select from the suggested set of skills</p>

          {/* Suggested Skills Section */}
          <div className="suggested-skills mt-3 d-flex flex-wrap">
          {skills.slice(0, 5).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                className="me-2 mb-2"
                onClick={() => handleAddSuggestedSkill(skill)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencemodal;
