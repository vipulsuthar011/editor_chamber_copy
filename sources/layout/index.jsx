import React from "react";
import localFont from "next/font/local";
import Navbar from "./Navbar";
import ThemeProvider from "../context/ThemeProvider";
import Footer from "./Footer";

const font = localFont({
  src: "../assets/fonts/ProductSans.woff",
});
const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div style={font.style} className="tracking-wider">
        <div className="overflow-hidden relative">
          <Navbar />
          {children}
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
