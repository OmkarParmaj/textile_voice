

const LanguageSkills = ({ motherTongues, handleChange, removeLanguage, addLanguage, otherLanguages }) => {





    return (
        <>

            {/* Mother Tongues Section */}
            <h4>Mother Tongue's</h4>

            {motherTongues && motherTongues.map((tongue, index) => (
                <div key={index} className="row  d-flex align-items-center mt-2">
                    <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 ">
                        <input
                            type="text"
                            value={tongue}
                            onChange={(e) => handleChange(index, e.target.value, "motherTongue")}
                            className="form-control"
                            placeholder="Enter mother tongue"
                        />


                    </div>
                    <div className="col-xxl-1 col-xl-1 col-lg-12 col-md-1 col-sm-1">
                        {motherTongues && motherTongues.length > 1 && (
                            <button className="btn btn-danger ms-2" onClick={() => removeLanguage(index, "motherTongue")}>
                                ❌
                            </button>
                        )}

                    </div>
                </div>
            ))}
            <div className="row mb-4 mt-3">
                <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 ">
                    <button className="btn btn-outline-primary mt-3 w-100" onClick={() => addLanguage("motherTongue")}>
                        + Add Another Mother Tongue
                    </button>

                </div>

            </div>

            {/* <hr /> */}

            {/* Other Languages Section */}
            <h4>Other Language(s)</h4>
            {otherLanguages && otherLanguages.map((language, index) => (
                <div key={index} className="d-flex align-items-center mt-2">
                    <input
                        type="text"
                        value={language}
                        onChange={(e) => handleChange(index, e.target.value, "otherLanguage")}
                        className="form-control"
                        placeholder="Enter other language"
                    />
                    {otherLanguages && otherLanguages.length > 1 && (
                        <button className="btn btn-danger ms-2" onClick={() => removeLanguage(index, "otherLanguage")}>
                            ❌
                        </button>
                    )}
                </div>
            ))}
            <button className="btn btn-primary mt-3" onClick={() => addLanguage("otherLanguage")}>
                + Add Another Other Language
            </button>





        </>
    );
}


export default LanguageSkills;
