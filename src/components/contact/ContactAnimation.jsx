import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              <label className="form-label">Name</label>
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              <label className="form-label">Email</label>
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              <label className="form-label">Subject</label>
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <textarea
                rows="4"
                className="form-control"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              <label className="form-label">Comment</label>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="btn-bar">
              <button className="px-btn px-btn-theme">Send your message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
