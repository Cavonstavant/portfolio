module.exports = {
  //-- SITE SETTINGS -----
  author: "@constantvigneron",
  siteTitle: "Constant Vigneron portfolio",
  siteShortTitle: "Constant Vigneron", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "CV Constant Vigneron",
  siteUrl: "https://thankful-tree-053719a03.azurestaticapps.net",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  
  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/constant-vigneron",
    },
    {
      name: "Github",
      url:
        "https://github.com/Cavonstavant",
    },
    {
      name: "Mail",
      url: "mailto:constant.vigneron@protonmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      // {
      //   name: "Features",
      //   url: "/#projects",
      // },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "curriculum_vitae.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
};
