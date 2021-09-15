import { createMachine, assign } from "xstate";

export const navHovermachine = createMachine({
  id: "navHoverMachine",
  initial: "idle",
  context: {
    // will update translate X when menu item is clicked on
    x: null,
    // Will scale navigation udnerline styles, bigger or smaller
    scaleX: 1,
    // Will give the illusion of the submenu dropping from sky
    translateY: 0,
  },
  states: {
    idle: {
      after: {
        // Highliter comes slidking in from left to right.  This updates the css after load
        200: { target: "about", actions: assign({ x: -528, scaleX: 2.1 }) },
      },
    },
    about: {
      on: {
        //   updating context will change the tranxlateX & scaleX value on the menu
        TEAM: {
          target: "team",
          actions: assign({ x: -433, scaleX: 1.7, translateY: 0 }),
        },
        PERSPECTIVE: {
          target: "perspective",
          actions: assign({ x: -306, scaleX: 5.5, translateY: 153 }),
        },
        PORTFOLIO: {
          target: "portfolio",
          actions: assign({ x: -160, scaleX: 3.4, translateY: 0 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -42, scaleX: 2.8, translateY: 0 }),
        },
      },
    },
    team: {
      on: {
        ABOUT: { target: "about", actions: assign({ x: -528, scaleX: 2.1 }) },
        PERSPECTIVE: {
          target: "perspective",
          actions: assign({ x: -306, scaleX: 5.5, translateY: 153 }),
        },
        PORTFOLIO: {
          target: "portfolio",
          actions: assign({ x: -160, scaleX: 3.4, translateY: 0 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -42, scaleX: 2.8, translateY: 0 }),
        },
      },
    },
    perspective: {
      on: {
        ABOUT: { target: "about", actions: assign({ x: -528, scaleX: 2.1 }) },
        TEAM: {
          target: "team",
          actions: assign({ x: -433, scaleX: 1.7, translateY: 0 }),
        },
        PORTFOLIO: {
          target: "portfolio",
          actions: assign({ x: -160, scaleX: 3.4, translateY: 0 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -42, scaleX: 2.8, translateY: 0 }),
        },
      },
    },
    portfolio: {
      on: {
        ABOUT: { target: "about", actions: assign({ x: -528, scaleX: 2.1 }) },
        TEAM: {
          target: "team",
          actions: assign({ x: -433, scaleX: 1.7, translateY: 0 }),
        },
        PERSPECTIVE: {
          target: "perspective",
          actions: assign({ x: -306, scaleX: 5.5, translateY: 153 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -42, scaleX: 2.8, translateY: 0 }),
        },
      },
    },
    contact: {
      on: {
        ABOUT: { target: "about", actions: assign({ x: -528, scaleX: 2.1 }) },
        TEAM: {
          target: "team",
          actions: assign({ x: -433, scaleX: 1.7, translateY: 0 }),
        },
        PERSPECTIVE: {
          target: "perspective",
          actions: assign({ x: -306, scaleX: 5.5, translateY: 153 }),
        },
        PORTFOLIO: {
          target: "portfolio",
          actions: assign({ x: -160, scaleX: 3.4, translateY: 0 }),
        },
      },
    },
  },
});
