import React from "react";
import Procect_section from "./Procect_section";
import About from "./About";
import Contact from "./Contact";

function Page_content() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Procect_section></Procect_section>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
}

export default Page_content;
