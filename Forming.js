import React from 'react'

 function Forming() {
  return (
    <>
    <div style={{height:"100vh", marginLeft:"500px"}}>
    <div style={{ marginBottom: "10px", width:"500px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
           
            placeholder="Enter your name"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px", width:"500px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
           
            placeholder="Enter your email"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px", width:"500px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
           
            placeholder="Enter your password"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px", width:"500px" }}>
          <label>Father's Name:</label>
          <input
            type="text"
            name="father"
            
            placeholder="Enter your father's name"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px", width:"500px" }}>
          <label>Address:</label>
          <textarea
            name="address"
           
            placeholder="Enter your address"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
        </div>
     
          
    </div>

    </>
  )
}

export default Forming