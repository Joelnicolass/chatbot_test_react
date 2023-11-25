import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: "red",
          display: "flex",
          borderRadius: "50%",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 100,
          pointerEvents: "all",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: "white",
            borderRadius: "50%",
            alignSelf: "center",
          }}
          onClick={() => setOpen(!open)}
        ></div>
      </div>

      {
        <div
          style={{
            padding: 20,
            position: "absolute",
            bottom: 60,
            right: 60,
            width: open ? 400 : 0,
            height: open ? 600 : 0,
            backgroundColor: "white",
            display: "flex",
            borderRadius: "25px",
            flexDirection: "column",
            gap: 20,
            justifyContent: "flex-start",
            transition: "all 0.4s ease",
            opacity: open ? 1 : 0,
            backdropFilter: "blur(10px)",
            webkitBackdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              padding: 20,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 50,
              borderRadius: "25px",
              backgroundColor: "red",
            }}
          >
            <p>Hola!</p>
          </div>

          <div
            style={{
              padding: 20,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 50,
              borderRadius: "25px",
              backgroundColor: "red",
            }}
          >
            <p>Bienvenido al super chat!</p>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
