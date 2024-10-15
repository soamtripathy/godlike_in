import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Layout"; 


function App() {
  const appStyle = {
    backgroundImage: "url('../public/bg.jpg')",
    backgroundSize: "cover",
    height : "100%"
  };

  return (
    <div style={appStyle}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
