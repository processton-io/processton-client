import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { a as AppLayout } from "./AppLayout-a9a67eb4.js";
import "react";
import "classnames";
import "ziggy-js";
import "@headlessui/react";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
function Error$1({ code = "", error_msg = "", error_description = "" }) {
  return /* @__PURE__ */ jsx("div", { className: "h-side-bar w-full bg-gray-100 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
    /* @__PURE__ */ jsx("div", { className: "text-5xl font-dark font-bold", children: code }),
    /* @__PURE__ */ jsxs("p", { className: "text-2xl md:text-3xl font-light leading-normal", children: [
      error_msg,
      " "
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: error_description })
  ] }) }) });
}
function Error({ auth, application, org, code = "", error_msg = "", applications, error_description = "" }) {
  return /* @__PURE__ */ jsx(
    AppLayout,
    {
      user: auth.user,
      application,
      applications,
      org,
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Head, { title: "Apps" }),
        /* @__PURE__ */ jsx(Error$1, { code, error_msg, error_description })
      ] })
    }
  );
}
export {
  Error as default
};
