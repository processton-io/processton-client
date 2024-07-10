import { j as jsxRuntimeExports, a as ae } from "./app-7ef8dedc.js";
import { R as RowElement, A as AppIcon } from "./AppLayout-d617927c.js";
/* empty css              */const SimpleGridItem = (element) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element, wrapperClassName: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ae, { href: element.link, className: "block max-w-sm p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700", children: [
    element.title && /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white", children: element.title }),
    element.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-normal text-gray-700 dark:text-gray-400", children: element.subtitle })
  ] }) }) });
};
const IconGridItem = (element) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element, wrapperClassName: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ae, { href: element.link, className: "text-center flex-0 flex flex-col align-middle justify-center cursor-pointer w-20 mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block text-center mb-2 w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 shadow-md rounded-lg bg-gradient-to-tl from-indigo-700 to-blue-500 text-white inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon: element.icon, className: "inline" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-block text-xs text-center w-20", children: element.title })
  ] }) }) });
};
const GenerateGridItem = (element) => {
  switch (element.type) {
    case "icon":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IconGridItem, { ...element });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleGridItem, { ...element });
  }
};
const MyComponent = ({ header, items }) => {
  console.log(header, items);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    header && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: header.title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: header.title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-12 gap-4 mt-4", children: items && Array.isArray(items) && items.map((element) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateGridItem, { ...element });
    }) })
  ] });
};
export {
  MyComponent as default
};
