import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    event.target.reset();
  };
  return (
    <div>
      <h1 className="text-5xl font-bold mt-10">Contact Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="form-control">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Message</span>
              </label>
              <textarea
                class="textarea h-24 textarea-bordered"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <button class="btn btn-wide btn-sm text-white font-bold">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 justify-center items-center">
          <h1 className="text-4xl">Your feedback is always welcome</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
