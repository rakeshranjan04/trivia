import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import Score from "./Score";

function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <div className="flex justify-center" >
        <div className="flex-auto   max-w-4xl mx-auto p-10"><SideBar/></div>
        <div className="flex-auto"><main>{children}</main></div>
        <div className="rounded-lg flex-auto border-[1px] border-gray-300 bg-white max-w-4xl mx-auto m-36 p-10"><Score /></div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
