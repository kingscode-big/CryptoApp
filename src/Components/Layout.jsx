 
import React from "react";
import BottomNav from "./BottomNav";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <main>{children}</main>
      <BottomNav />  
    </div>
  );
}
