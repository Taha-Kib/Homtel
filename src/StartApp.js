import React from "react";
import Navbar from "./components/NavBar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
// import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function StartApp() {

//   const { showLoading } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default StartApp;
