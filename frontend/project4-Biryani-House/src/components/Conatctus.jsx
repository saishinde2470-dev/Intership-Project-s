import React from "react";

function Contactus() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Contact Us</h1>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="card border-0 shadow-lg"
              style={{
                backgroundColor: "#1E1E1E",
                color: "#fff",
              }}
            >
              <div className="card-body p-4">
                <h3 className="mb-4">Send Us a Message</h3>

                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="5"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button className="btn btn-primary px-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <div
              className="card border-0 shadow-lg h-100"
              style={{
                backgroundColor: "#1E1E1E",
                color: "#fff",
              }}
            >
              <div className="card-body p-4">
                <h3 className="mb-4">Get In Touch</h3>

                <div className="mb-4">
                  <h5>📍 Address</h5>
                  <p className="text-light-emphasis">
                    Biryani House
                    <br />
                    Kandivali Industrial Estate, Mumbai – 400067
                  </p>
                </div>

                <div className="mb-4">
                  <h5>📞 Phone</h5>
                  <p className="text-light-emphasis">8080801984</p>
                </div>

                <div className="mb-4">
                  <h5>📧 Email</h5>
                  <p className="text-light-emphasis">
                    customercare@biryanihouse.in
                  </p>
                </div>

                <div>
                  <h5>🕒 Working Hours</h5>
                  <p className="text-light-emphasis">
                    Monday - Sunday
                    <br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="card border-0 shadow-lg overflow-hidden"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <iframe
                title="Biryani House Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60542.3277029978!2d73.82669044313435!3d18.488392926554823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb0002407455%3A0xbe9ef8deac9783ce!2sBiryani%20House!5e0!3m2!1sen!2sin!4v1782429118529!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;