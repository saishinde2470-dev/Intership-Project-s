import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailInfoDish({ biryanis }) {

  const { ID } = useParams();

  const dish = biryanis.find((v) => v.id == ID);

  if (!dish) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          background: "#111",
          color: "white",
        }}
      >
        <h1>Dish Not Found 🍛</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "white",
        padding: "70px 0",
      }}
    >
      <div className="container">

        <Link
          to="/order-now"
          className="btn btn-outline-warning mb-5"
        >
          ← Back To Menu
        </Link>

        <div className="row g-5 align-items-center">

          {/* Image */}

          <div className="col-lg-6">

            <img
              src={dish.image}
              alt={dish.title}
              className="img-fluid w-100 rounded-5"
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />

          </div>

          {/* Content */}

          <div className="col-lg-6">

            <span
              className={`badge fs-6 mb-3 ${
                dish.type === "Veg"
                  ? "bg-success"
                  : "bg-danger"
              }`}
            >
              {dish.icon} {dish.type}
            </span>

            <h1
              style={{
                color: "#ffb703",
                fontWeight: "800",
              }}
            >
              {dish.title}
            </h1>

            <h3 className="my-3">
              ₹ {dish.price}
            </h3>

            <div className="mb-3">
              ⭐ {dish.ratings}
            </div>

            <p
              style={{
                color: "#d0d0d0",
              }}
            >
              {dish.ingredients}
            </p>

            <div
              className="rounded-5 p-4 mb-4"
              style={{
                background: "#1a1a1a",
              }}
            >

              <h4
                style={{
                  color: "#ffb703",
                }}
              >
                Why People Love This
              </h4>

              <p>
                Fresh ingredients • Rich flavor • Perfect spices • Hot serving
              </p>

            </div>

            <div className="d-flex gap-3">

              <button
                className="btn btn-warning btn-lg"
              >
                Order Now
              </button>

              <button
                className="btn btn-outline-light btn-lg"
              >
                Add Cart
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="row mt-5 g-4">

          {[
            ["🍚", "Premium Rice"],
            ["🌶️", "Balanced Spices"],
            ["🔥", "Fresh Daily"],
          ].map((v) => (
            <div className="col-md-4">

              <div
                className="text-center p-4 rounded-5"
                style={{
                  background: "#1a1a1a",
                }}
              >

                <h1>{v[0]}</h1>

                <h4
                  style={{
                    color: "#ffb703",
                  }}
                >
                  {v[1]}
                </h4>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default DetailInfoDish;