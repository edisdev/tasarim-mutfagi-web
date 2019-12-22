import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'styles/app.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        {/* <div className="pageImageContent">
          <img src={TasarimMutfagi} alt="Tasarım Mutfağı" />
        </div> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;
