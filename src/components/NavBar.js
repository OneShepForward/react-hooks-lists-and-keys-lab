import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderNavs = links.map(link => {
    return <a href={"#"+ link} key={link}>{link}</a>
  })

  return <nav>{renderNavs}</nav>;
}

export default NavBar;
