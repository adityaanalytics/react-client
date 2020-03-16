import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Sidebar } from "rsuite";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Temple">
      Temple
      </a>

      <a className= "menu" href="/Temple">
      Temple
      </a>

      <a className="menu-item" href="/Registration">
      Registration
      </a>

      <a className="menu-item" href="/Registration2">
      Registration2
      </a>
    </Menu>
  );
};

//export default Sidebar