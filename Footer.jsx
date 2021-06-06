import React from "react";

function Footer() {
  var thecurrentyear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {thecurrentyear}</p>
    </footer>
  );
}

export default Footer;
