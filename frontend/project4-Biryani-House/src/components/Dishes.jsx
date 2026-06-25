import React from "react";
import { Link } from "react-router-dom";

const Dishes = ({ dishes }) => {
  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "50px 0",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">

          <h1
            style={{
              color: "#ffb703",
              fontWeight: "800",
            }}
          >
            Our Special Dishes 🍛
          </h1>

          <p style={{ color: "#cfcfcf" }}>
            Freshly prepared with authentic flavors
          </p>

        </div>

        <div className="row g-4">

          {dishes.map((d) => (

            <div className="col-lg-4 col-md-6" key={d.id}>

              <div
                className="card border-0 rounded-5 overflow-hidden h-100"
                style={{
                  background: "#1a1a1a",
                  color: "white",
                }}
              >

                <Link to={`/detail-info/${d.id}`}>

                  <img
                    src={d.image}
                    alt={d.title}
                    className="card-img-top"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                </Link>

                <div className="card-body">

                  <div className="d-flex justify-content-between">

                    <h4
                      style={{
                        color: "#ffb703",
                      }}
                    >
                      {d.title}
                    </h4>

                    <span>
                      {d.icon}
                    </span>

                  </div>

                  <p
                    style={{
                      color: "#c7c7c7",
                    }}
                  >
                    {d.ingredients}
                  </p>

                  <div
                    className="d-flex justify-content-between mb-3"
                  >

                    <h5>
                      ₹ {d.price}
                    </h5>

                    <span>
                      ⭐ {d.ratings}
                    </span>

                  </div>

                  <div className="d-flex gap-2">

                    <button
                      className="btn btn-warning w-100"
                    >
                      Order Now
                    </button>

                    <button
                      className="btn btn-outline-light w-100"
                    >
                      Add Cart
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};

export default Dishes;