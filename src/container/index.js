import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";
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
import Login from "./login";
import Signup from "./signUp";
import Submission from "./submission";
import NewSubmission from "./newSubmission";

const AppRoutes = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div>
      {!isLoginRoute && <Navbar />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about/aims-and-scope" Component={AimsAndScope} />
        <Route path="/about/abstract-indexing" Component={AbstractingIndexing} />
        <Route path="/about/peer-review-process" Component={PeerReviewProcess} />
        <Route path="/about/article-processing-charges" Component={ArticleProcessingCharges} />
        <Route path="/about/publication-ethics" Component={PublicationEthics} />
        <Route path="/guidelines/authors" Component={Authors} />
        <Route path="/guidelines/reviewers-guidelines" Component={ReviewersGuidelinesData} />
        <Route path="/guidelines/editors" Component={Editors} />
        <Route path="/editorial-board" Component={EditorialBoard} />
        <Route path="/archives" Component={Archives} />
        <Route path="/inpress" Component={Inpress} />
        <Route path="/submission" Component={Submission} />
        <Route path="/submission/new" Component={NewSubmission} />

        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />

      </Routes>
      {!isLoginRoute && <Footer />}
    </div>
  );
};

export default AppRoutes;
