import React, { useState } from "react";

const DashBoard = () => {
  const [available, setAvailable] = useState(["9 arts","drog and drop"]);
  const [associated, setAssociated] = useState([]);

  const handleDragStart = (e, item, source) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ item, source }));
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { item, source } = data;

    if (source === "available" && target === "associated") {
      setAvailable(available.filter((data) => data !== item));
      setAssociated([...associated, item]);
    } else if (source === "associated" && target === "available") {
      setAssociated(associated.filter((data) => data !== item));
      setAvailable([...available, item]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h3 style={{ color: "blue", textAlign: "center" }}>Associate Datasources</h3>
      <div style={{ position: "relative", left: "660px" }}>
        <label>Collection Name: </label>
        <br />
        <br />
        <input type="text" style={{ marginBottom: "10px" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {/* Available Datasources */}
        <div style={{ textAlign: "center", marginRight: "20px" }}>
          <h4>Available</h4>
          <div
            style={{
              border: "1px solid gray",
              width: "150px",
              height: "200px",
              overflowY: "auto",
            }}
            onDrop={(e) => handleDrop(e, "available")}
            onDragOver={handleDragOver}
          >
            {available.map((item) => (
              <div
                key={item}
                style={{
                  cursor: "pointer",
                  padding: "5px",
                  border: "1px solid lightgray",
                  margin: "2px",
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, item, "available")}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <button style={{ margin: "5px" }}>➡️</button>
          <button style={{ margin: "5px" }}>⬅️</button>
        </div>

        {/* Associated Datasources */}
        <div style={{ textAlign: "center", marginLeft: "20px" }}>
          <h4>Associated</h4>
          <div
            style={{
              border: "1px solid gray",
              width: "150px",
              height: "200px",
              overflowY: "auto",
            }}
            onDrop={(e) => handleDrop(e, "associated")}
            onDragOver={handleDragOver}
          >
            {associated.map((item) => (
              <div
                key={item}
                style={{
                  cursor: "pointer",
                  padding: "5px",
                  border: "1px solid lightgray",
                  margin: "2px",
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, item, "associated")}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "550px", padding: "20px" }}>
        <button style={{ marginRight: "10px" }}>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default DashBoard;
