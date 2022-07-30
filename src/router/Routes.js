import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeVideoLight from "../views/all-home-version/HomeVideoLight";
import HomeVideoDark from "../views/all-home-version/HomeVideoDark";
import NotFound from "../views/NotFound";
import { BrowserRouter, Routes,  Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const WebRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
        {/* <ScrollTopBehaviour /> */}
          <Route path="/" element={<Preview />} />
          <Route path="/home-light" element={<HomeLight />} />
          <Route path="/home-light-animation" element={<HomeLightAnimation />} />
          <Route path="/home-dark-animation" element={<HomeDarkAnimation />} />
          <Route path="/home-dark" element={<HomeDark />} />
          <Route path="/home-video-light" element={<HomeVideoLight />} />
          <Route path="/home-video-dark" element={<HomeVideoDark />} /> 
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default WebRoutes;
