"use client"

const EducationAndTraining = ({ education, addeducation, deleteeducation }) => {




    return (
        <>
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
                    <h3>Education and training</h3>
                    {education.map((_, index) => (
                        <div key={index} className="row mt-4  p-3 ">
                            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex justify-content-between">
                                    <h5>Education {index + 1}</h5>
                                    <button className="btn btn-danger" onClick={() => deleteeducation(index)}>Delete</button>
                                </div>

                                <label className="form-label">Titile of qualification/credential awarded</label>
                                <input className="form-control" type="text" placeholder="Title of the qualification" />

                                <label className="form-label mt-3">Organisation providing education and training 
                                </label>
                                <input className="form-control" type="text" placeholder="Name of organisation" />

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Level of EQF</label>
                                        <input className="form-control" type="text" placeholder="7" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Percentage</label>
                                        <input className="form-control" type="text" placeholder="95%" />
                                    </div>
                                </div>

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
                                    <label className="form-label">Main subject / occupational skills covered</label>
                                    <textarea className="form-control" style={{ height: "200px" }}></textarea>
                                </div>

                            </div>
                        </div>
                    ))}

                    <div className="row mt-4 mb-4">
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="card rounded-2 pt-1 pb-1 w-100 text-center border-dashed"
                                style={{ cursor: "pointer", border: "2px dotted black" }}
                                onClick={addeducation}>
                                <h6>+ Add Education</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}


export default EducationAndTraining;
