import { Variable } from "../types";

export const transitionVariables: Variable[] = [
  {
    key: "--transition-none",
    value: "none",
    name: "Transition None",
    category: "transition",
    equivalent: "none",
    documentationUrl: "",
  },
  {
    key: "--transition-all",
    value:
      "all var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    name: "Transition All",
    category: "transition",
    equivalent:
      "all var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    documentationUrl: "",
  },
  {
    key: "--transition-colors",
    value:
      "background-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "border-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "fill var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "stroke var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    name: "Transition Colors",
    category: "transition",
    equivalent:
      "background-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "border-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "fill var(--transition-duration-0) var(--transition-timing-function-ease-in-out), " +
      "stroke var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    documentationUrl: "",
  },
  {
    key: "--transition-opacity",
    value:
      "opacity var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    name: "Transition Opacity",
    category: "transition",
    equivalent:
      "opacity var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    documentationUrl: "",
  },
  {
    key: "--transition-box-shadow",
    value:
      "box-shadow var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    name: "Transition Box Shadow",
    category: "transition",
    equivalent:
      "box-shadow var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    documentationUrl: "",
  },
  {
    key: "--transition-transform",
    value:
      "transform var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    name: "Transition Transform",
    category: "transition",
    equivalent:
      "transform var(--transition-duration-0) var(--transition-timing-function-ease-in-out)",
    documentationUrl: "",
  },
];
