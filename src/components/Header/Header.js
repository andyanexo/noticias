import React from "react";

const header = props => (
  <nav className="nav-wrapper light-blue darken-3">
    <a className="brand-logo center" href="/">
      {props.titulo}
    </a>
  </nav>
);

export default header;
