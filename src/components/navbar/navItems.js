// navItems.js
const navItems = [
  { label: "Home", link: "/" },

  {
    label: "About",
    children: [
      { label: "Aims & Scope", link: "/about/aims-and-scope" },
      { label: "Abstracting / Indexing", link: "/about/abstract-indexing" },
      { label: "Peer Review Process", link: "/about/peer-review-process" },
      {
        label: "Article Processing Charges",
        link: "/about/article-processing-charges",
      },
      { label: "Publication Ethics", link: "/about/publication-ethics" },
    ],
  },

  {
    label: "Guidelines",
    children: [
      { label: " Authors", link: "/guidelines/authors" },
      { label: "Reviewers", link: "/guidelines/reviewers-guidelines" },
      { label: "Editors", link: "/guidelines/editors" },
    ],
  },

  { label: "Editorial Board", link: "/editorial-board" },
  { label: "Inpress", link: "/archives" },
  { label: "Archives", link: "/inpress" },
  { label: "Submission", link: "#" },
];
  
  export default navItems;
  