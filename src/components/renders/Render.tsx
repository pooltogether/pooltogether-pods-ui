import React, { ComponentClass } from "react";

/* --- Is Component --- */
export function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

export function isFunctionComponent(component) {
  return (
    typeof component === "function" &&
    String(component).includes("return React.createElement")
  );
}

export function isWebpackReactComponent(component) {
  return (
    typeof component === "function" &&
    String(component).includes("react_jsx_dev")
  );
}

export function isInlineFunctionComponent(component) {
  return typeof component === "function" &&
    String(component).includes("createElement")
    ? true
    : false;
}

/**
 * @name isReactComponent
 * @param {Function} component
 * @description Checks if a function is a React component
 * @returns boolean
 */
export function isReactComponent(component) {
  return (
    isClassComponent(component) ||
    isFunctionComponent(component) ||
    isWebpackReactComponent(component)
  );
}

/* --- Is Element --- */
export function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === "string";
}

export function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === "function";
}

/**
 * @name isElement
 * @param {Function} element
 * @description Checks if a function is a React element.
 * @returns boolean
 */
export function isElement(element) {
  return React.isValidElement(element);
}

/* --- Component Render --- */
export const Render = (
  component:
    | React.ReactElement
    | React.ComponentClass
    | React.FunctionComponent
    | React.JSXElementConstructor
    | string,
  props
) => {
  return isReactComponent(component)
    ? React.createElement(component, props)
    : isElement(component)
    ? React.cloneElement(component, props)
    : null;
};

export default Render;
