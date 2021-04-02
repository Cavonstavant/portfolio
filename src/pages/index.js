import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import GlobalStateProvider from "../context/provider";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/sections/hero";
import Articles from "../components/sections/articles";
import About from "../components/sections/about";
import Interests from "../components/sections/interests";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import { seoTitleSuffix, rssFeed } from "../../config";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node;
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter;

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
        />
        <Hero content={data.hero.edges} />
        {/* Articles is populated via Medium RSS Feed fetch */}
        { rssFeed && <Articles /> }
        <About content={data.about.edges} />
        {/* <Interests content={data.interests.edges} /> */}
      </Layout>
    </GlobalStateProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`{
  index: allMdx(filter: {fileAbsolutePath: {regex: "/index/index/"}}) {
    edges {
      node {
        frontmatter {
          seoTitle
          useSeoTitleSuffix
          useSplashScreen
        }
      }
    }
  }
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/index/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
          greetings
          title
          icon {
            childImageSharp {
              gatsbyImageData(width: 60, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/index/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  interests: allMdx(filter: {fileAbsolutePath: {regex: "/index/interests/"}}) {
    edges {
      node {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                gatsbyImageData(width: 20, height: 20, quality: 90, layout: FIXED)
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  projects: allMdx(
    filter: {fileAbsolutePath: {regex: "/index/projects/"}, frontmatter: {visible: {eq: true}}}
    sort: {fields: [frontmatter___position], order: ASC}
  ) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          external
          github
          screenshot {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
          tags
          position
          buttonVisible
          buttonUrl
          buttonText
        }
      }
    }
  }
  contact: allMdx(filter: {fileAbsolutePath: {regex: "/index/contact/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
          profileImage {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`;
