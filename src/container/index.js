import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AimsAndScope from "./about/aimsAndScope";
import Home from "./home";
import PeerReviewProcess from "./about/peerReviewProcess";
import PublicationEthics from "./about/publicationEthics";
import AbstractingIndexing from "./about/abstractingIndexing";
import ArticleProcessingCharges from "./about/articleProcessingCharges";
import Authors from "./guidelines/authors";
import ReviewersGuidelinesData from "./guidelines/reviewersGuidelines";
import Editors from "./guidelines/editors";
import EditorialBoard from "./editorialBoard";
import Archives from "./archives";
import Inpress from "./inpress";

const AppRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about/aims-and-scope" Component={AimsAndScope} />
        <Route
          path="/about/abstract-indexing"
          Component={AbstractingIndexing}
        />
        <Route
          path="/about/peer-review-process"
          Component={PeerReviewProcess}
        />
        <Route
          path="/about/article-processing-charges"
          Component={ArticleProcessingCharges}
        />
        <Route path="/about/publication-ethics" Component={PublicationEthics} />
        <Route path="/guidelines/authors" Component={Authors} />
        <Route
          path="/guidelines/reviewers-guidelines"
          Component={ReviewersGuidelinesData}
        />
        <Route path="/guidelines/editors" Component={Editors} />
        <Route path="/editorial-board" Component={EditorialBoard} />
        <Route path="/archives" Component={Archives} />
        <Route path="/inpress" Component={Inpress} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoutes;
