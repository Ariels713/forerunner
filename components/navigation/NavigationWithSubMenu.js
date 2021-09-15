import React from "react";

function NavigationWithSubMenu() {
  return (
    <>
      <nav role="navigation">
        <ul>
          <li>
            <a href="#">Logo</a>
          </li>
        </ul>
      </nav>
      <nav role="navigation">
        <ul>
          <li>
            <a href="#">One</a>
          </li>
          <li>
            <a href="#">Two</a>
            <ul className="dropdown">
              <li>
                <a href="#">Sub-1</a>
              </li>
              <li>
                <a href="#">Sub-2</a>
              </li>
              <li>
                <a href="#">Sub-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Three</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationWithSubMenu;
