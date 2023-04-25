import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Layout() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
