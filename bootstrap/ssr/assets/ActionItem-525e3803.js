import { jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { M as ModalContext, d as ActionButton } from "./AppLayout-d9bad2db.js";
import classNames from "classnames";
import { useContext } from "react";
function ActionItem({ data = [], action, icon }) {
  const { newModel } = useContext(ModalContext);
  if (action.type === "link") {
    let linkparams = {};
    if (action.attachments) {
      action.attachments.forEach((val) => {
        linkparams[val.value] = data[val.key];
      });
    }
    let linkToProceed = Object.keys(linkparams).length > 0 ? action.action + "?" + new URLSearchParams(linkparams).toString() : action.action;
    return /* @__PURE__ */ jsx(Link, { href: linkToProceed, children: /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(Fragment, {});
  }
}
export {
  ActionItem as A
};
