"use client"

import EducationAndTraining from "@/components/educationAndTraining";
import LanguageSkills from "@/components/languageSkills";
import Link from "next/link";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Buildyourresumeai = () => {
    const [activeSection, setActiveSection] = useState("profile");
    const [experiences, setExperiences] = useState([{}]);
    const [education, setEducation] = useState([{}]);

    const [motherTongues, setMotherTongues] = useState([""]);
    const [otherLanguages, setOtherLanguages] = useState([""]);


    const handleChange = (index, value, type) => {
        if (type === "motherTongue") {
            const updated = [...motherTongues];
            updated[index] = value;
            setMotherTongues(updated);
        } else {
            const updated = [...otherLanguages];
            updated[index] = value;
            setOtherLanguages(updated);
        }
    };

    // Add a new empty input field
    const addLanguage = (type) => {
        if (type === "motherTongue") {
            setMotherTongues([...motherTongues, ""]);
        } else {
            setOtherLanguages([...otherLanguages, ""]);
        }
    };

    // Remove an input field
    const removeLanguage = (index, type) => {
        if (type === "motherTongue" && motherTongues.length > 1) {
            setMotherTongues(motherTongues.filter((_, i) => i !== index));
        } else if (type === "otherLanguage" && otherLanguages.length > 1) {
            setOtherLanguages(otherLanguages.filter((_, i) => i !== index));
        }
    };

    const addExperience = () => {
        setExperiences([...experiences, {}]);
    };

    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const addEducation = () => {
        setEducation([...education, {}]);
    };

    const deleteEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row pt-2 pb-2 border-bottom">
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
                    <div className="me-3">
                        <IoIosNotifications size={30} />
                    </div>
                    <div>
                        <MdAccountCircle size={30} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="row">
                {/* Sidebar Navigation */}
                <div className="col-xxl-2 border-end col-xl-2 col-lg-12 col-md-12 col-sm-12" style={{ height: "91.7vh" }}>
                    <div className="row ps-3 mt-3 pe-3">
                        {[
                            { key: "profile", label: "PROFILE" },
                            { key: "workExperience", label: "Work Experience" },
                            { key: "education", label: "Education and Training" },
                            { key: "languageSkills", label: "Language Skills" },
                            { key: "digitalSkills", label: "Digital Skills" },
                            { key: "conferences", label: "Conferences and Seminars" },
                            { key: "creativeWorks", label: "Creative Works" },
                            { key: "hobbies", label: "Hobbies and Interests" },
                            { key: "organizationalSkills", label: "Organizational Skills" },
                            { key: "projects", label: "Projects" },
                            { key: "publications", label: "Publications" },
                            { key: "recommendations", label: "Recommendations" },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                className={`btn text-start ps-4 mt-2 ${activeSection === key ? "btn-danger text-white" : ""}`}
                                onClick={() => setActiveSection(key)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 p-4">
                    {activeSection === "profile" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row ">
                                <h3>Personal information</h3>
                                <div class="row mt-4">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>

                                <div className="row ms-1 mt-4 me-1">
                                    <h6>About me</h6>

                                    <textarea className="form-control">

                                    </textarea>

                                </div>

                                <div className="row mt-4 ">
                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">

                                        <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com" />

                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select your gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>



                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Nationality</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>



                                    </div>

                                </div>

                                <div className="row mt-4">
                                    <h6>Contact</h6>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="text" placeholder="Email address"></input>


                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="number" placeholder="Phone number"></input>

                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="text" placeholder="social meadia"></input>

                                    </div>


                                </div>

                                <div className="row mt-4">
                                    <h6>Address</h6>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select address type</option>
                                            <option value="1">Home</option>
                                            <option value="2">Office</option>
                                            <option value="3">Other</option>
                                        </select>


                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="number" placeholder="Address line 1"></input>

                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="text" placeholder="Address line 2"></input>

                                    </div>


                                </div>

                                <div className="row mt-4">
                                    <h6>Contact</h6>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="number" placeholder="Pincode"></input>


                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="text" placeholder="City"></input>

                                    </div>

                                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                        <input className="form-control" type="text" placeholder="Country"></input>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === "workExperience" && (
                        <div className="">
                            <div className="row border-bottom">
                                <div className="col-2 pt-3  pb-3">
                                    <div className="card rounded-4 pt-2 pb-2">
                                        <h3 className="text-center mt-2">Profile</h3>
                                        <h5 className="text-center">80%</h5>

                                    </div>

                                </div>

                            </div>

                            <div className="row mt-4">
                                <h3>Work Experience</h3>
                                {experiences.map((_, index) => (
                                    <div key={index} className="row mt-4  p-3 ">
                                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div className="d-flex justify-content-between">
                                                <h5>Experience {index + 1}</h5>
                                                <button className="btn btn-danger" onClick={() => deleteExperience(index)}>Delete</button>
                                            </div>

                                            <label className="form-label">Occupation or position held</label>
                                            <input className="form-control" type="text" placeholder="Title of the occupation" />

                                            <label className="form-label mt-3">Employer</label>
                                            <input className="form-control" type="text" placeholder="Name of employer" />

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="form-label">City</label>
                                                    <input className="form-control" type="text" placeholder="Mumbai" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Country</label>
                                                    <input className="form-control" type="text" placeholder="India" />
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-md-4">
                                                    <label className="form-label">From</label>
                                                    <input className="form-control" type="date" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">To</label>
                                                    <input className="form-control" type="date" />
                                                </div>
                                                <div className="col-md-4 d-flex align-items-end">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label">Present</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <label className="form-label">Main activity and responsibilities</label>
                                                <textarea className="form-control" style={{ height: "200px" }}></textarea>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                                <div className="row mt-4 mb-4">
                                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                        <div className="card rounded-2 pt-1 pb-1 w-100 text-center border-dashed"
                                            style={{ cursor: "pointer", border: "2px dotted black" }}
                                            onClick={addExperience}>
                                            <h6>+ Add Experience</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>






                    )}
                    {activeSection === "education" && (
                        <div>
                          

                            <div className="row ">
                                {/* <h3>Education and Training</h3> */}
                                <EducationAndTraining education={education} addeducation={addEducation} deleteeducation={deleteEducation}></EducationAndTraining>
                            </div>
                        </div>
                    )}
                    {activeSection === "languageSkills" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row ">
                               
                            <LanguageSkills motherTongues = {motherTongues} handleChange = {handleChange} removeLanguage = {removeLanguage} addLanguage = {addLanguage} otherLanguages= {otherLanguages}></LanguageSkills>
                            </div>
                        </div>
                    )}
                    {activeSection === "digitalSkills" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Digital Skills</h3>
                                <p>Highlight your technical and digital skills.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "conferences" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Conferences and Seminars</h3>
                                <p>Detail the conferences and seminars you've attended.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "creativeWorks" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Creative Works</h3>
                                <p>Showcase your creative projects and artworks.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "hobbies" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Hobbies and Interests</h3>
                                <p>List your hobbies and interests outside of work.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "organizationalSkills" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Organizational Skills</h3>
                                <p>Describe your leadership and management skills.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "projects" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Projects</h3>
                                <p>Share details of the projects you have worked on.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "publications" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Publications</h3>
                                <p>List your research papers, books, or blog posts.</p>
                            </div>
                        </div>
                    )}
                    {activeSection === "recommendations" && (
                        <div>
                            <div className="row">
                                <div className="col-2 pt-3 pb-3">
                                    <div className="card rounded-4">
                                        <h6 className="text-center">Profile</h6>
                                        <h3 className="text-center">80%</h3>

                                    </div>

                                </div>

                            </div>

                            <div className="row border">
                                <h3>Recommendations</h3>
                                <p>Include recommendations from colleagues or mentors.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Buildyourresumeai;
