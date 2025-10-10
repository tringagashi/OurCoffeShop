import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner.jsx";
import Layout from "./components/layout/Layout";

const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const BrandsPage = React.lazy(() => import("./pages/brands/BrandsPage"));
const AboutPage = React.lazy(() => import("./pages/about/AboutPage"));
const LavazzaPage = React.lazy(() => import("./pages/lavazza/LavazzaPage.jsx"));
const StarbucksPage = React.lazy(() =>
  import("./pages/starbucks/StarbucksPage.jsx")
);
const PrincCaffePage = React.lazy(() =>
  import("./pages/PrincCaffe/PrincCaffePage.jsx")
);
const NespressoPage = React.lazy(() =>
  import("./pages/nespresso/NespressoPage.jsx")
);
const SegafredoPage = React.lazy(() =>
  import("./pages/segafredo/SegafredoPage.jsx")
);
const IllyPage = React.lazy(() => import("./pages/illy/IllyPage.jsx"));
const NescafePage = React.lazy(() => import("./pages/nescafe/nescafePage.jsx"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/brandspage" element={<BrandsPage />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/lavazza" element={<LavazzaPage />} />
          <Route exact path="/starbucks" element={<StarbucksPage />} />
          <Route exact path="/princcaffe" element={<PrincCaffePage />} />
          <Route exact path="/nespresso" element={<NespressoPage />} />
          <Route exact path="/segafredo" element={<SegafredoPage />} />
          <Route exact path="/illy" element={<IllyPage />} />
          <Route exact path="/nescafe" element={<NescafePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
