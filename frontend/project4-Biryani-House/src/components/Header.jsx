function Header() {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1563379091339-03246963d29b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "800",
          color: "#ffb703",
        }}
      >
        Biryani House
      </h1>

      <p
        style={{
          maxWidth: "700px",
          fontSize: "20px",
          marginTop: "15px",
        }}
      >
        Fresh • Hot • Authentic Taste <br />
        Discover delicious biryanis made with rich spices and unforgettable flavor.
      </p>

      <button
        style={{
          marginTop: "25px",
          border: "none",
          padding: "14px 30px",
          borderRadius: "12px",
          background: "#ffb703",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Order Now
      </button>
    </div>
  );
}

export default Header;