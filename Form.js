import React from 'react'

 function Form() {
  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  }}
>
  <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Agency</label>
  <input
    type="text"
    style={{
      padding: "8px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
    placeholder="Enter agency name"
  />

  <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Department Name</label>
  <input
    type="text"
    style={{
      padding: "8px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
    placeholder="Enter department name"
  />

  <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Location</label>
  <input
    type="text"
    style={{
      padding: "8px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
    placeholder="Enter location"
  />
</div>

  )
} 
export default  Form;
