// data.js

const authorsData = {
  sections: [
    {
      id: "scripts",
      title: "Scripts/submission of papers",
      content:
        "Papers, written in English, must be submitted for review at https:. The preferred word processing packages are Word, and the preferred graphics package is TIFF, JPEG. Please indicate the file format used. Authors are requested to submit manuscript without authors name and affiliation and must provide the authors’ name along with affiliation while submitting the manuscripts in metadata.",
    },
    {
      id: "layout",
      title: "Layout and style",
      content:
        "The journal’s system of refereeing is single blind and protects the identity of reviewers. The full name and address of the institution where the research was done should be stated. Change of address may be given as a footnote. Indicate the name and address of corresponding author with '*' to which proofs should be sent and the e-mail address.",
      details: [
        { label: "Font type", value: "Times New Roman" },
        { label: "Font size", value: "12" },
        { label: "Line space", value: "1.5" },
        {
          label: "Line Numbers",
          value:
            "Continuous line numbers from start of article to end of the document are compulsory",
        },
      ],
    },
    {
      id: "title",
      title: "Title page",
      content:
        "The title should be informative but concise and should not contain abbreviations. Title should be written in title case. It should name the organism studied, where relevant. A short title, not exceeding 50 characters, should be provided for the running headlines.",
    },
    {
      id: "abstract",
      title: "Abstract",
      content:
        "Placed at the beginning of the text, should briefly indicate the background and purpose, methodology, results, and conclusion without subheadings in the sequence mentioned in this sentence. Failing to develop such abstract will lead to rejection without review.",
    },
    {
      id: "main-text",
      title: "Main Text",
      content:
        "It is usually convenient to divide the paper into 4 main sections, viz. Introduction, Materials and Methods, Results, Discussion, and References in the end. Combined Results and Discussion are not acceptable. Too many subheadings should be avoided. Before the references ‘conflict of interest’ and authors’ contribution statement must be declared.",
      additionalContent: [
        "The Introduction should set the work in context, present only essential background, and include a concise statement of the objectives; a detailed review of the literature is not necessary. Relevant details should be given of the experimental materials and design, and the techniques and statistical methods used. Statistical guidelines are available on request. Numerical results should be shown in the tables and should not be repeated in the text. SI units should be used exclusively e.g. kg ha-1, mg L-1. Be sure that abbreviation of liter is capital ‘L’ even when used as ‘mL’. Use of % should be restricted and used only to describe relative changes in responses. Experimental details and results should be reported in the past tense. The discussion should draw together the results, briefly relate the author's results to other work on the subject, summarize any implications and applications and give the author's conclusions. Results repetition in discussion section will lead towards negative outcome of the submission. Footnotes should not be used. All abbreviations used should be fully explained at first mention. No sentence should not be started with abbreviation.",
      ],
    },

    {
      id: "tables",
      title: "Tables",
      content:
        "Must be numbered consecutively in the order in which they are cited in the text. Numerical results should be displayed as means with their relevant standard errors. Least significant difference (LSD) values should be mentioned in the table or in the food note and alphabets should be used with means to compare ethe significant differences. Normally a mean should be rounded to one-tenth of its standard error and the standard error given to one place of decimals more than the mean. The title should fully describe the contents of the table and explain any abbreviations used in it. The Journal prefers not to have a proliferation of asterisks, superscript letters, etc. in tables. Asterisks should not be used to denote statistical significance. However, if footnotes are necessary, the following symbols may be used in this order: * † ‡ §.",
    },
    {
      id: "figures",
      title: "Figures",
      content:
        "Should be restricted to the display of results where many values are presented, and interpretation would be more difficult in a table. Figures may not reproduce the same data presented in tables and must be cited in the text. Figures should be embedded (in pic format) in the text at appropriate position, however separate files must be provided on demand of editorial office for high quality figures production. All files to be clearly named. The legend of every figure should be in detail enough to make the figure self-explanatory. The legend should explain the parameters and treatments, and statistical analysis used. LSD value must be provided where needed. Failing to provide such figures will not be proceeded for publication.",
    },
    {
      id: "references",
      title: "References",
      content:
        "In the text, a reference should be quoted by the author's name and date in parentheses, in date order, e.g. (Jarvis, 1994; Edmondson, 1998). Where there are three or more authors, the first name followed by et al. should be used. A list of references should be given at the end of the text listing, in alphabetical order as per following examples:",
    },
    {
      id: "in-text",
      title: "In text",
      content:
        "Jarvis (1994); Jarvis (1994a,b); Scott and Jaggard (1993); (Edmondson, 1998); (Scott and Jaggard, 1993; Jarvis, 1994; Edmondson, 1998); Ferris et al. (1990); (Ferris et al., 1990)",
    },
    {
      id: "article",
      title: "Article in journal, magazine, and serial publication",
      content:
        "Altaf, S., M.M. Khan, M.J. Jaskani, I.A. Khan, M. Usman, B. Sadia, F.S. Awan, A. Ali and I.A. Khan. 2014. Morphogenetic characterization of seeded and seedless varieties of Kinnow mandarin (Citrus reticulata Blanco). Pakistan Journal of Crop Science 8:1542-1549.",
      additionalContent: [
        "Aslam, M., M. Ismat, R.H. Qureshi, S. Nawaz and I.A. Mehmood. 1994. Paddy yield affected by planting techniques in a salt-affected soil. Pakistan Journal of Agricultural Sciences 31:401-405.",
      ],
    },
    {
      id: "books",
      title:
        "Books (including bulletins, reports, multi-volume works, series)oks",
      content:
        "Steel, R.G.D. and J.H. Torrie. 1980. Principles and Procedures of Statistics: A biometrical approach, 2nd Ed. McGraw Hill Book Co., New York.",
    },
    {
      id: "chapter-book",
      title: "Chapter in a book",
      content:
        "Jaskani, M.J., M. Omura and I.A. Khan. 2007. Cytogenetics. In: I.A. Khan (ed.), Citrus Genetics, Breeding and Biotechnology. CAB International, UK. pp.151-166.",
      additionalContent: [
        "Wiseman, J. 1990. Variability in the nutritive value of fats and non-ruminants. In: J. Wiseman and J.A. Cole (eds.), Feedstuffs Evaluation. Butterworths, London. pp.232-234.",
      ],
    },

    {
      id: "conference",
      title: "Conference, symposium, or workshop proceedings",
      content:
        "Khan, I.A., M.J. Jaskani, M.M. Khan and B. Fatima. 2002. Breeding for triploid seedless citrus fruits-A biotechnology approach. In: Y.A. Al-Shayji, J.S. Sidhu, M. Saleem and K. Guerinik (eds.), Biotechnology Applications for the Arid Regions. Kuwait Institute for Scientific Research, Kuwait. pp.229-234.",
      additionalContent: [
        "Jaskani, M.J. and I.A. Khan. 2000. Characterization of interploid hybrids of Kinnow mandarin. Proc. Int. Soc. Citriculture 1:165-166. Muhammad, S. and A. Ghafoor. 1986. Reclamation of two saline-sodic soil series through subsoiling and gypsum application using marginal water for leaching. In: R. Ahmad and A.S. Pietro (eds.), Prospects for Biosaline Research. Proc. US-Pak Biosaline Res. Workshop; Sept. 22-26, 1985. University of Karachi, Karachi, Pakistan. p.221-223.",
      ],
    },

    {
      id: "software-and-websites",
      title: "Software and websites",
      content:
        "National Agricultural Statistics Service. 1997. Crops county data. Available online with updates at https://usda.mannlib.comell. edu/data-sets/crops/9X100",
    },

    {
      id: "organizations",
      title: "Organization/ Govt. department documents",
      content:
        "Anonymous. 2014-15. Pakistan Economic Survey 2014-15. Finance and Economic Affairs Division, Ministry of Finance, Govt. of Pakistan, Islamabad, Pakistan.",
      additionalContent: [
        "GOP. 2013-14. Agricultural Statistics Yearbook 2013-14. Ministry of National Food Security and Research, Islamabad, Pakistan.",
        "Authors should check that all references in the text appear at the end of the paper and vice versa, and that the names and dates correspond in the two places. The accuracy of presentation of each reference in the list should be carefully checked.",
      ],
    },

    {
      id: "article-proofs",
      title: "Article Proofs",
      content:
        "Proofs are sent to authors as pdfs to enable them to check the correctness of the typesetting and must be returned within 2-3 days. After acceptance, the content of the manuscript cannot be changed. The author list and order will remain same as in accepted article.",
    },

    {
      id: "style-and-editorial",
      title: "Style and Editorial Conventions",
      content: "Only SI units will be accepted in the manuscript.",
      additionalContent: [
        "Use full stops after words cut off short of their end, e.g. Fig., Ed.",
      ],
    },
    {
      id: "abbreviations",
      title: "Abbreviations",
      content: "Only SI units will be accepted in the manuscript.",
      additionalContent: [
        "Give cation exchange capacity in mmol (+)/kg not meq. Please use g kg-1, mg kg-1, mg L-1, μM, mL L-1, dS m-1 etc.",
        "Use kg ha-1, or t ha-1, not quintals.",
        "Use 'litres' in full after numbers where confusion could arise with the numeral L; e.g. use 5 litres/day but 5 mL L-1.",
        "Rates should be expressed by a solidus, e.g. kg ha-1, 6 kg ha-1, 3 plants m-² (not 3 plants m-²), 7 kg ha-1 per year.",
        "Do not repeat units in lists, e.g. 3, 10, 17 and 30°C; 20 or 30% more with no space. Use % after numbers, not per cent, e.g. 7%.",
      ],
    },

    {
      id: "quotations",
      title: "Quotations",
      content: "In general, use single quotes, e.g. 'headland'.",
    },
    {
      id: "statistical-note",
      title: "Statistical Note for Authors",
      content:
        "The Pakistan Journal of Agricultural Sciences has a tradition of setting high standards regarding the statistical methods contained in its papers. Although it is impracticable to present here a comprehensive survey of acceptable statistical analyses, it is nevertheless useful to point out some common practices which have and have not found favor with the editors. To speed up assessment of submitted papers, authors are advised to pay particular attention to the following.",
      experimentalData: [
        "The description of the experimental designs and statistical analyses should be clear and concise. From this description, readers must be able to understand exactly how the experiment was conducted and how the data were analyzed. When presenting initial numerical summaries of the experimental material (e.g., starting weights, ages) variation should be represented by ranges or standard deviations.",
        "The favored method of presenting experimental results is by quoting estimated values of the relevant statistics (mean values, regression coefficients, etc.), together with the appropriate standard errors of those estimates. The degrees of freedom (D.F.) on which the standard errors (S.E.) are based should also be quoted. This will usually assist the referees and the general reader in understanding the experimental procedure.",
        "Each statistical method has its own assumptions and should be used only if all its requirements are fulfilled. Analysis of Variance (ANOVA) requires that the response variable should be normally distributed and uncorrelated with equal variance at each level of the qualitative factor.",
        "Authors should make every effort to ensure that the standard errors which are quoted are suitable for the comparisons which they wish to make. When in doubt, authors should seek the guidance of a statistician.",
        "Repeated measurements over time or spatial data from, for example, crop disease or competition studies often give rise to correlated data that require special methods of analysis. Usually, it will be necessary to seek specialist advice before attempting an analysis of data of this type. A standard reference book is Diggle, P.J., K-Y. Liang, and S.L. Zeger. 1994. The Analysis of Longitudinal Data. Oxford: Oxford University Press.",
        "The Journal will not publish tables containing a proliferation of asterisks or other indicators of statistical significance. Although statistically appropriate tests of hypotheses are acceptable, they should be employed sparingly and with discretion. Probability values (e.g. P less than 0.01) may be quoted in the text.",
        "Standard statistical models should be fully described using correct terminology so that the reader can understand the techniques that were used to model the data. Normally, this will involve some discussion of the data and some explanation of the choice of statistical model used.",
        "The uncritical and indiscriminate use of 'multiple comparison' procedures, particularly when the treatment structure provides a logical basis for testing, is inappropriate. Since the researchers always strive for planned comparisons, therefore, whenever the treatments have intrinsic structure only the contrast analysis address such research hypotheses.",
        "Whenever a researcher uses a quantitative treatment, the objective is to find the level of the quantitative treatment which gives the optimum value of the response and this can be achieved using trend analysis. The results of exhaustive, retrospective tests of hypotheses are not acceptable.",
        "Authors should aim to combine the virtues of simplicity and statistical rigor in the analysis of their data. Unnecessarily complex statistical methodology should be avoided. Where more sophisticated procedures are essential, great care needs to be taken in describing the method, and adequate references should be cited.",
        "The Journal will not normally publish routine Analysis of Variance tables used for calculating standard errors and significance tests. The underlying Analysis of Variance tables should be shown only if components of variance are of especial interest or if an unavoidably complex design has been used.",
        "Where a statistical package is used for analysis or modeling of data, it will normally be necessary to give an explicit reference to the package and the techniques used with appropriate page numbers from the Reference Manual. With editorial agreement, novel computer code may be listed in an appendix.",
        "Statistical models with factorial structure must normally conform to the principle that factorial interaction effects of a given order should not be included unless all lower order effects and main effects contained within those interaction effects are also included. Similarly, models with polynomial factor effects of a given degree should normally include all corresponding polynomial factor effects of a lower degree (e.g., a factor with a quadratic effect should also have a linear effect).",
        "Main effects should be explained/exploited only if interaction involving them is not significant. Otherwise, the significant interaction should be explored further, and focus should be on the interaction effects only.",
      ],
    },
    {
      id: "submission-manuscript",
      title: "Submission of revised manuscript",
      content:
        "While submitting revised copy of manuscript in the light of reviewers’ and editor’s comments, detailed response of each query of the reviewers and editor must be responded in a separate file along with separate revised copy. Revised copy should also highlight the changes made (in red font color). It is to remind that during revision you cannot change the authors list, however in any special condition all authors’ signed request may be entertained for slight modifications.",
    },
  ],
};

export default authorsData;
