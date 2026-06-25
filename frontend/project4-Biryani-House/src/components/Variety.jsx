import React from "react";

const biryaniVarieties = [
  {
    id: 1,
    title: "Chicken Dum Biryani",
    type: "Non-Veg",
    price: 229,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  },
  {
    id: 2,
    title: "Mutton Royal Biryani",
    type: "Non-Veg",
    price: 349,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
  },
  {
    id: 3,
    title: "Egg Special",
    type: "Non-Veg",
    price: 189,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1642821373181-696a54913e93",
  },
  {
    id: 4,
    title: "Paneer Delight",
    type: "Veg",
    price: 199,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b",
  },
  {
    id: 5,
    title: "Veg Classic",
    type: "Veg",
    price: 169,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },
  {
    id: 6,
    title: "Hyderabadi Special",
    type: "Non-Veg",
    price: 289,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
];

function Variety() {
  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: "70px 0",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">

          <span
            className="badge fs-6"
            style={{
              background: "#ffb703",
              color: "black",
            }}
          >
            Explore Menu
          </span>

          <h1
            className="mt-4"
            style={{
              color: "#ffb703",
              fontWeight: "800",
            }}
          >
            Biryani Collection 🍛
          </h1>

          <p style={{ color: "#bdbdbd" }}>
            Fresh • Premium • Delicious
          </p>

        </div>

        <div className="row g-4">

          {biryaniVarieties.map((item) => (

            <div
              className="col-md-6 col-lg-4"
              key={item.id}
            >

              <div
                className="card border-0 rounded-5 overflow-hidden h-100"
                style={{
                  background: "#181818",
                  color: "white",
                }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "260px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <div className="d-flex justify-content-between">

                    <span
                      className={`badge ${
                        item.type === "Veg"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {item.type}
                    </span>

                    <span>
                      ⭐ {item.rating}
                    </span>

                  </div>

                  <h3
                    className="mt-3"
                    style={{
                      color: "#ffb703",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#cfcfcf",
                    }}
                  >
                    Rich spices and fresh ingredients.
                  </p>

                  <div className="d-flex justify-content-between">

                    <h4>
                      ₹{item.price}
                    </h4>

                    <button
                      className="btn btn-warning"
                    >
                      Order
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div
          className="mt-5 rounded-5 p-5 text-center"
          style={{
            background:
              "linear-gradient(135deg,#ffb703,#fb8500)",
          }}
        >

          <h2 style={{ color: "black" }}>
            Crafted For Real Biryani Lovers
          </h2>

          <p style={{ color: "#222" }}>
            Enjoy every bite with authentic taste and premium quality.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Variety;