import { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
};
export default Layout;