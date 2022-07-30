import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import WebRoutes from "./router/Routes";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      <WebRoutes />
    </>
  );
};

export default App;