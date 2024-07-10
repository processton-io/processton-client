import { j as jsxRuntimeExports, Y } from "./app-7ef8dedc.js";
import { a as AppLayout } from "./AppLayout-d617927c.js";
/* empty css              */function Error$1({ code = "", error_msg = "", error_description = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-side-bar w-full bg-gray-100 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-dark font-bold", children: code }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl md:text-3xl font-light leading-normal", children: [
      error_msg,
      " "
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8", children: error_description })
  ] }) }) });
}
function Error({ auth, application, org, code = "", error_msg = "", applications, error_description = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppLayout,
    {
      user: auth.user,
      application,
      applications,
      org,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Y, { title: "Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Error$1, { code, error_msg, error_description })
      ] })
    }
  );
}
export {
  Error as default
};
