import { r as reactExports, j as jsxRuntimeExports, a as ae } from "./app-7ef8dedc.js";
import { X as ModalContext, S as ActionButton, c as classNames } from "./AppLayout-d617927c.js";
function ActionItem({ data = [], action, icon }) {
  const { newModel } = reactExports.useContext(ModalContext);
  if (action.type === "link") {
    let linkparams = {};
    if (action.attachments) {
      action.attachments.forEach((val) => {
        linkparams[val.value] = data[val.key];
      });
    }
    let linkToProceed = Object.keys(linkparams).length > 0 ? action.action + "?" + new URLSearchParams(linkparams).toString() : action.action;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { href: linkToProceed, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionButton,
      {
        type: action.button,
        label: action.label,
        colorType: (action == null ? void 0 : action.color) ? action.color : "primary",
        className: classNames("mr-2"),
        icon
      }
    ) });
  } else if (action.type === "model") {
    let linkparams = {};
    if (action.attachments) {
      action.attachments.forEach((val) => {
        linkparams[val.value] = data[val.key];
      });
    }
    let linkToProceed = Object.keys(linkparams).length > 0 ? action.action + "?" + new URLSearchParams(linkparams).toString() : action.action;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionButton,
      {
        type: action.button,
        onClick: () => newModel(linkToProceed),
        colorType: (action == null ? void 0 : action.color) ? action.color : "primary",
        label: action.label,
        className: classNames("mr-2"),
        icon
      }
    );
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
}
export {
  ActionItem as A
};
