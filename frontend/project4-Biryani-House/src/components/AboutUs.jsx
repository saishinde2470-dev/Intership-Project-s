import React from "react";

function AboutUs() {
  return (
    <div
      style={{
        background: "#0d0d0d",
        color: "white",
        minHeight: "100vh",
        padding: "70px 0",
      }}
    >
      <div className="container">

        {/* Hero */}

        <div className="row align-items-center mb-5">

          <div className="col-lg-6">

            <span
              className="badge mb-4"
              style={{
                background: "#ffb703",
                color: "black",
              }}
            >
              Since 2024
            </span>

            <h1
              style={{
                fontSize: "60px",
                fontWeight: "800",
              }}
            >
              About
              <span
                style={{
                  color: "#ffb703",
                }}
              >
                {" "}Biryani House
              </span>
            </h1>

            <p
              style={{
                color: "#c7c7c7",
                fontSize: "20px",
              }}
            >
              We believe great food creates unforgettable moments.
            </p>

            <p
              style={{
                color: "#bdbdbd",
              }}
            >
              Every biryani is prepared using premium rice,
              traditional spices and fresh ingredients to
              create a rich and memorable experience.
            </p>

            <button
              className="btn btn-warning btn-lg mt-3"
            >
              Explore Menu
            </button>

          </div>

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
              className="img-fluid rounded-5"
              alt=""
              style={{
                height: "480px",
                width: "100%",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

        {/* Stats */}

        <div className="row g-4 mb-5">

          {[
            ["15+", "Special Dishes"],
            ["2500+", "Happy Customers"],
            ["100%", "Fresh Ingredients"],
            ["4.9★", "Customer Rating"],
          ].map((v) => (

            <div className="col-md-3">

              <div
                className="text-center rounded-5 p-4"
                style={{
                  background: "#181818",
                }}
              >

                <h1
                  style={{
                    color: "#ffb703",
                  }}
                >
                  {v[0]}
                </h1>

                <p>{v[1]}</p>

              </div>

            </div>

          ))}

        </div>

        {/* Story */}

        <div
          className="rounded-5 p-5 mb-5"
          style={{
            background: "#181818",
          }}
        >

          <h2
            style={{
              color: "#ffb703",
            }}
          >
            Our Story
          </h2>

          <p
            style={{
              color: "#cfcfcf",
            }}
          >
            Started with passion for authentic flavors,
            Biryani House focuses on delivering fresh
            meals with premium ingredients and a taste
            people remember.
          </p>

        </div>

        {/* Features */}

        <div className="row g-4">

          {[
            ["🍚", "Premium Rice"],
            ["🌶️", "Authentic Spices"],
            ["🚚", "Quick Delivery"],
          ].map((v) => (

            <div className="col-md-4">

              <div
                className="text-center rounded-5 p-5"
                style={{
                  background: "#181818",
                }}
              >

                <h1>{v[0]}</h1>

                <h3
                  style={{
                    color: "#ffb703",
                  }}
                >
                  {v[1]}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div
          className="mt-5 rounded-5 text-center p-5"
          style={{
            background:
              "linear-gradient(135deg,#ffb703,#fb8500)",
          }}
        >

          <h1 style={{ color: "black" }}>
            Every Plate Has A Story 🍛
          </h1>

          <p style={{ color: "#222" }}>
            Taste tradition with every bite.
          </p>

        </div>

      </div>
    </div>
  );
}

export default AboutUs;