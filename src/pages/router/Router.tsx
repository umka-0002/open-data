import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "widgets/header";
import MainPage from "pages/main/ui/MainPage";
import Organization from "pages/organization/ui/Organization";
import NotFound from "pages/not-found/ui/NotFoundPage";
import RegionPage from "pages/RegionPage/ui/RegionPage";
import MapWithRegions from "pages/MapWithRegions/ui/MapWithRegions";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="organization" element={<Organization />} />
        <Route path="region-page" element={<RegionPage />} />
        <Route path="MapWithRegions" element={<MapWithRegions />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
