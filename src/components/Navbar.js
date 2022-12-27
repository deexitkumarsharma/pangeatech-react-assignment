import React from "react";
import { Layout, Typography } from "antd";
import SearchOptions from "./SearchOptions";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: "rgb(50, 90, 168)" }} className="header">
      <h1 className="welcome-text">Hello pangeatech </h1>
      <SearchOptions />
    </Header>
  );
};

export default Navbar;
