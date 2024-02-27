import React from "react";

const Shimmer = () => {
  return (
    <div style={{width: "18vw", height: "30vh", backgroundColor: "#C7C8CC", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: "10px"}}>
        <div style={{width: "100%", height: "60%", backgroundColor: "#dadada", borderRadius: "10px"}}></div>
        <div style={{width: "80%", height: "10%", backgroundColor: "#dadada", borderRadius: "10px"}}></div>
        <div style={{width: "60%", height: "10%", backgroundColor: "#dadada", borderRadius: "10px"}}></div>
        <div style={{width: "40%", height: "10%", backgroundColor: "#dadada", borderRadius: "10px"}}></div>
    </div>
  );
};

export default Shimmer;
