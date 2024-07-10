import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { R as RowElement, A as AppIcon } from "./AppLayout-a9a67eb4.js";
import { Link } from "@inertiajs/react";
import "react";
import "classnames";
import "ziggy-js";
import "@headlessui/react";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
const SimpleGridItem = (element) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-0", children: /* @__PURE__ */ jsxs(Link, { href: element.link, className: "block max-w-sm p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700", children: [
    element.title && /* @__PURE__ */ jsx("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white", children: element.title }),
    element.subtitle && /* @__PURE__ */ jsx("p", { className: "font-normal text-gray-700 dark:text-gray-400", children: element.subtitle })
  ] }) }) });
};
const IconGridItem = (element) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-0", children: /* @__PURE__ */ jsxs(Link, { href: element.link, className: "text-center flex-0 flex flex-col align-middle justify-center cursor-pointer w-20 mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "block text-center mb-2 w-20", children: /* @__PURE__ */ jsx("div", { className: "p-2 shadow-md rounded-lg bg-gradient-to-tl from-indigo-700 to-blue-500 text-white inline-block", children: /* @__PURE__ */ jsx(AppIcon, { icon: element.icon, className: "inline" }) }) }),
    /* @__PURE__ */ jsx("span", { className: "flex-block text-xs text-center w-20", children: element.title })
  ] }) }) });
};
const GenerateGridItem = (element) => {
  switch (element.type) {
    case "icon":
      return /* @__PURE__ */ jsx(IconGridItem, { ...element });
    default:
      return /* @__PURE__ */ jsx(SimpleGridItem, { ...element });
  }
};
const MyComponent = ({ header, items }) => {
  console.log(header, items);
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col", children: [
    header && /* @__PURE__ */ jsx(Fragment, { children: header.title && /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: header.title }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-4 mt-4", children: items && Array.isArray(items) && items.map((element) => {
      return /* @__PURE__ */ jsx(GenerateGridItem, { ...element });
    }) })
  ] });
};
export {
  MyComponent as default
};
