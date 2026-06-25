import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ background: "#0d0d0d", color: "white" }}>

      {/* Hero */}
      <section
        style={{
          minHeight: "92vh",
          background:
            "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1563379091339-03246963d29b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">

          <div style={{ maxWidth: "700px" }}>

            <h1
              style={{
                fontSize: "70px",
                fontWeight: "800",
                color: "#ffb703",
              }}
            >
              Biryani House 🍛
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#ddd",
              }}
            >
              Fresh • Authentic • Loaded with Flavor
            </p>

            <p style={{ color: "#bdbdbd" }}>
              Experience rich spices, premium rice and unforgettable taste.
            </p>

            <div className="d-flex gap-3 mt-4">

              <Link
                to="/order-now"
                className="btn btn-warning btn-lg"
              >
                Order Now
              </Link>

              <Link
                to="/variety"
                className="btn btn-outline-light btn-lg"
              >
                Explore
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">

            <div
              className="p-4 rounded-4 text-center"
              style={{
                background: "#1a1a1a",
              }}
            >
              <h1>🍽️</h1>
              <h4>Premium Taste</h4>
              <p>Prepared using rich spices and quality ingredients.</p>
            </div>

          </div>

          <div className="col-md-4">

            <div
              className="p-4 rounded-4 text-center"
              style={{
                background: "#1a1a1a",
              }}
            >
              <h1>🚚</h1>
              <h4>Fast Delivery</h4>
              <p>Hot and fresh meals delivered quickly.</p>
            </div>

          </div>

          <div className="col-md-4">

            <div
              className="p-4 rounded-4 text-center"
              style={{
                background: "#1a1a1a",
              }}
            >
              <h1>⭐</h1>
              <h4>Top Rated</h4>
              <p>Most loved biryani experience.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Specials */}

      <section className="container py-5">

        <h2
          className="text-center mb-5"
          style={{
            color: "#ffb703",
            fontWeight: "700",
          }}
        >
          Chef Specials
        </h2>

        <div className="row g-4">

          {[
            [
              "Chicken Special",
              "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
              "₹249",
            ],
            [
              "Mutton Royal",
              "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
              "₹349",
            ],
            [
              "Veg Classic",
              "https://images.unsplash.com/photo-1596797038530-2c107229654b",
              "₹179",
            ],
          ].map((item) => (
            <div className="col-lg-4">

              <div
                className="card border-0 rounded-5 overflow-hidden"
                style={{
                  background: "#181818",
                }}
              >

                <img
                  src={item[1]}
                  style={{
                    height: "260px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h3 style={{ color: "#ffb703" }}>
                    {item[0]}
                  </h3>

                  <p style={{ color: "#cfcfcf" }}>
                    Rich aroma with unforgettable taste.
                  </p>

                  <h5>{item[2]}</h5>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Banner */}

      <section className="container pb-5">

        <div
          className="rounded-5 text-center p-5"
          style={{
            background:
              "linear-gradient(135deg,#ffb703,#fb8500)",
          }}
        >

          <h1 style={{ color: "black" }}>
            Get Your Favourite Biryani Today
          </h1>

          <p style={{ color: "#222" }}>
            Delicious meals made fresh every day.
          </p>

          <Link
            to="/order-now"
            className="btn btn-dark btn-lg"
          >
            Order Plate
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;