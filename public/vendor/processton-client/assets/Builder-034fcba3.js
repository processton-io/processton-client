import { j as jsxRuntimeExports, a as ae } from "./app-7ef8dedc.js";
import { A as AppIcon, a as AppLayout, I as InteractionBuilder } from "./AppLayout-d617927c.js";
import { A as ActionItem } from "./ActionItem-779c2d4f.js";
/* empty css              */function BreadCrumb({ items, actions = [] }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex bg-white border-b", "aria-label": "Breadcrumb", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ml-8 py-2 pl-3", children: items.map((item, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbItem, { index, item, length: items.length }, index);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex-1 inline-flex  justify-end items-right space-x-1 md:space-x-2 rtl:space-x-reverse ml-8 py-2 pr-3", children: actions.map((action, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItem, { action, data: [] }, index);
    }) })
  ] });
}
function BreadCrumbItem({ index, item, length }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ae, { href: item == null ? void 0 : item.slug, className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white", children: [
      index === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon: item == null ? void 0 : item.icon, className: "h-4 mr-1" }),
      item == null ? void 0 : item.label
    ] }),
    index < length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon: "chevron-right", className: "h-4 ml-2" })
  ] });
}
function Builder({
  org,
  auth,
  applications,
  application,
  interaction,
  attachment_values,
  navbarStyle = "default"
}) {
  var _a, _b;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppLayout,
    {
      user: auth.user,
      org,
      application,
      applications,
      title: interaction.name,
      navbarStyle,
      header: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: application.theme.breadcrumb && /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumb, { items: ((_a = interaction == null ? void 0 : interaction.schema) == null ? void 0 : _a.breadcrumbs) ? (_b = interaction == null ? void 0 : interaction.schema) == null ? void 0 : _b.breadcrumbs : [], actions: (interaction == null ? void 0 : interaction.schema.header_actions) ? interaction == null ? void 0 : interaction.schema.header_actions : [] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6 lg:px-8 py-6 lg:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InteractionBuilder, { ...interaction, attachment_values }) })
    }
  );
}
export {
  Builder as default
};
