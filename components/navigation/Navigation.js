import { useRef } from "react";
import { useMachine } from "@xstate/react";
import { navHovermachine } from "../../machines/NavHovermachine";
import styled from "styled-components";
import ForerunnerCopy from "./ForerunnerCopy";

// Navigation Wrapper, Logo and Nav Menu
const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
  padding-top: 1.5rem;
  --textColor: hsla(214, 98%, 10%, 1);
`;

// Nav Wrapper, about ... contact ...
const NavItemWrapper = styled.ul`
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  max-width: 600px;
  isolation: isolate;
  height: 3rem;
  /* overflow: hidden; */
`;

// Nav items
const NavItem = styled.li`
  display: inline-block;
  cursor: pointer;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 800;
  font-size: 0.7rem;
  color: var(--textColor);

  &:nth-child(n + 2) {
    margin-left: 5em;
  }
`;

// Nested Menu styles
const SubMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  /* top: 20px; */
  top: -130px;
  list-style: none;
  margin-top: 1rem;
  border-left: 2px solid hsla(214, 99%, 10%, 1);
  background-color: hsla(71, 50%, 90%, 1);
  display: none;
  transition: transform 0.7s ease-in-out 2s;
  transform: ${(props) => `translateY(${props.translateY}px)`};

  &[data-state="perspective"] {
    display: block;
    opacity: 1;
    visibility: revert;
  }
`;

// Nested Menu Items
const SubMenuItems = styled.li`
  cursor: pointer;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 800;
  font-size: 0.7rem;
  color: var(--textColor);
  margin-left: -33px;
  padding-right: 0.75rem;
`;

// Anchor Tag styling for menu items
const NavAnchors = styled.a`
  text-decoration: none;
  color: var(--textColor);

  &:hover {
    color: hsla(214, 98%, 10%, 0.7);
  }
`;
// Nav Backround Animation
const PurpleAnimationBar = styled.div`
  position: absolute;
  top: 30px;
  left: 538px;
  background-color: hsla(273, 66%, 79%, 1);
  height: 3px;
  width: 20px;
  z-index: -1;
  transition: transform 0.7s ease-in-out;
  transform: ${(props) =>
    `translateX(${props.translate}px) scaleX(${props.scaleX})`};
`;

function Navigation() {
  const [current, send] = useMachine(navHovermachine);
  const aboutRef = useRef();
  const teamRef = useRef();
  const perspectiveRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  console.log(current.context);
  return (
    // Navigation Wrapper
    <NavigationWrapper role="navigation">
      {/* FORERUNNER SVG */}

      <ForerunnerCopy />

      <NavItemWrapper>
        {/* NAV ITEM */}
        <NavItem
          ref={aboutRef}
          onClick={(e) => send(aboutRef.current?.innerText)}
        >
          <NavAnchors href="#">About</NavAnchors>
        </NavItem>
        <NavItem
          ref={teamRef}
          onClick={(e) => send(teamRef.current?.innerText)}
        >
          <NavAnchors href="#"> Team </NavAnchors>
        </NavItem>
        <NavItem
          // Slice off OUR from our Perspective
          onClick={(e) => send(perspectiveRef.current?.innerText.slice(4))}
        >
          <NavAnchors ref={perspectiveRef} href="#">
            {" "}
            Our Perspective{" "}
          </NavAnchors>

          {/* If our state maches Perspective, the drop down menu shows */}
          {current.matches("perspective") && (
            <SubMenu
              translateY={current.context.translateY}
              data-state={current.matches("perspective") && "perspective"}
            >
              <SubMenuItems>
                <NavAnchors>BrainTrust</NavAnchors>
              </SubMenuItems>
              <SubMenuItems>
                <NavAnchors>Case Study</NavAnchors>
              </SubMenuItems>
              <SubMenuItems>
                <NavAnchors>Forerunner News</NavAnchors>
              </SubMenuItems>
              <SubMenuItems>
                <NavAnchors>Investing Insight</NavAnchors>
              </SubMenuItems>
              <SubMenuItems>
                <NavAnchors>Portfolio News</NavAnchors>
              </SubMenuItems>
            </SubMenu>
          )}
        </NavItem>
        <NavItem
          ref={portfolioRef}
          onClick={(e) => send(portfolioRef.current?.innerText)}
        >
          <NavAnchors href="#">Portfolio </NavAnchors>
        </NavItem>
        <NavItem
          ref={contactRef}
          onClick={(e) => send(contactRef.current?.innerText)}
        >
          <NavAnchors href="#">Contact </NavAnchors>
        </NavItem>
        <PurpleAnimationBar
          translate={current.context.x}
          scaleX={current.context.scaleX}
        />
      </NavItemWrapper>
    </NavigationWrapper>
  );
}

export default Navigation;
