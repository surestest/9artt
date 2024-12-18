import React, { useState } from "react";

function Body() {
  const [collections, setCollections] = useState([
    { id: 1, name: "Collection #1" },
    { id: 2, name: "Collection #2" },
  ]);

  const [newCollection, setNewCollection] = useState({
    name: "",
    slug: "",
    description: "",
    active: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCollection({
      ...newCollection,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    const updatedCollections = [
      ...collections,
      { id: collections.length + 1, name: newCollection.name },
    ];
    setCollections(updatedCollections);
    setNewCollection({ name: "", slug: "", description: "", active: false });
  };

  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      {}
      <div
        style={{
          width: "25%",
          border:"1px solid gray",
          color: "#fff",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
       <div style={{display:"flex",justifyContent:"space-between"}}> <h3 style={{color:"black"}}>Manage Collections</h3>
       <button style={{width:"70px",height:"40px"}}>add</button></div>
        {collections.map((col) => (
          <div
            key={col.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              border:"1px solid gray",
              backgroundColor:"black",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <span>{col.name}</span>
            <div>
              <button style={{ marginRight: "5px" }}>✏️</button>
              <button>🗄️</button>
            </div>
            
          </div>
        ))}
      </div>

      {/* Right Pane - Form */}
      <div style={{ width: "75%", padding: "20px" }}>
        <h3>New Collection</h3>
        <div style={{display:"flex"}}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={newCollection.name}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", width: "200px",gap:"10px" }}
          />
        </div>
        <div>
          <label>Slug Name: </label>
          <input
            type="text"
            name="slug"
            value={newCollection.slug}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", width: "200px" }}
          />
        </div>
        </div>
        <div>
          <label>Description: </label><br></br>
          <textarea
            name="description"
            value={newCollection.description}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", width: "100%" }}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="active"
            checked={newCollection.active}
            onChange={handleInputChange}
          />
          <label> Active/InActive</label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSave} style={{ marginRight: "10px" }}>
            Save
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
