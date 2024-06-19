import { applyJob } from "@utils/consts";
import React, { useState } from "react";

const CareerRequestForm = ({ job }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    job: job,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = files ? files[0] : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    setSuccessMessage(""); // Clear success message

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("job_title", job);
    try {
      const response = await fetch(applyJob, {
        method: "POST",
        body: formDataToSend,
      });
      console.log(response.body);
      if (response.ok) {
        console.log("Career form submitted successfully!");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          resume: null,
        });
        setSuccessMessage("Job Applied Successfully"); // Set success message
      } else {
        console.error("Error submitting career form.");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error submitting career form:", error);
      // Handle error scenario
    } finally {
      setLoading(false); // Set loading to false after form submission
    }
  };

  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1 career-wrapper">
        <div className="career-apply-section p-5 bg-white shadow rounded-custom mt-4">
          <h3 className="fw-medium text-primary">
            Fill out the form and we will be in touch as soon as possible.
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 register-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Job"
                name="Job Title"
                disabled
                value={formData.job}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <p>Upload Resume</p>
              <input
                type="file"
                className="form-control"
                accept=".pdf"
                name="resume"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            {successMessage && (
              <p className="text-success mt-3">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default CareerRequestForm;
