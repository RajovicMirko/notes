import React from "react";
import NavBar from "components/Layout/NavBar";

const defaultProps = {
  children: null,
};

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

Layout.defaultProps = defaultProps;
export default Layout;
