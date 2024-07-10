import { j as jsxRuntimeExports, a as ae } from "./app-7ef8dedc.js";
import { b as RenderRow, d as RenderWidget, A as AppIcon } from "./AppLayout-d617927c.js";
import { A as ActionItem } from "./ActionItem-779c2d4f.js";
/* empty css              */function AutoParseContent({ content, className = "", data = null }) {
  if (typeof content == "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className, children: content });
  } else {
    if (Array.isArray(content)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: content.map((element) => {
        if (element.type == "anchor") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { className: "ml-2", href: `http://` + element.value, children: (element == null ? void 0 : element.label) ? element.label : element.value });
        } else if (element.type == "text") {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "", children: element.text }),
            " "
          ] });
        } else if (element.type == "row") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RenderRow, { row: element.elements }) });
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Not Implimented" });
        }
      }) });
    } else if (typeof content == "object") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RenderWidget, { element: content, attachment_values: data });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
    }
  }
}
function CardBody({ body, data }) {
  const { content } = body;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoParseContent, { content, data }) });
}
function CardFooter({ footer, data }) {
  const { actions } = footer;
  if (actions && actions.length > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-row-reverse bg-clip-border mt-3 pt-3 border-t", children: actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-0 space-x-2", children: actions.map((action) => {
      let contitionResults = [];
      if (action.conditions && action.conditions.length > 0) {
        action.conditions.forEach((condition) => {
          if (condition.operator === "EQUALS") {
            if (data[condition.key] !== condition.value) {
              contitionResults.push(condition);
            }
          } else if (condition.operator === "NOT_EQUALS") {
            if (data[condition.key] === condition.value) {
              contitionResults.push(condition);
            }
          }
        });
      }
      if (contitionResults.length <= 0) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItem, { data, action });
      }
    }) }) });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
}
function CardHeading({ heading }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: heading });
}
function CardSubHeadding({ sub_heading }) {
  if (typeof sub_heading == "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: sub_heading });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AutoParseContent, { content: sub_heading });
  }
}
function CardHeader({ header, data }) {
  const { title, subtitle, actions, image = false, icon = false, content } = header;
  if (title && title != "" || subtitle && subtitle != "" || actions && actions.length > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-row bg-clip-border my-2 mt-4", children: [
        image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, className: "w-12 h-12 inline-flex rounded-full ml-2" }),
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon, className: "w-12 h-12 inline-flex rounded-full ml-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 text-gray-900 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeading, { heading: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardSubHeadding, { sub_heading: subtitle })
        ] }),
        actions && actions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-0 space-x-2", children: actions.map((action) => {
          let contitionResults = [];
          if (action.conditions && action.conditions.length > 0) {
            action.conditions.forEach((condition) => {
              if (condition.operator === "EQUALS") {
                if (data[condition.key] !== condition.value) {
                  contitionResults.push(condition);
                }
              } else if (condition.operator === "NOT_EQUALS") {
                if (data[condition.key] === condition.value) {
                  contitionResults.push(condition);
                }
              }
            });
          }
          if (contitionResults.length <= 0) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItem, { data, action });
          }
        }) })
      ] }),
      content && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-row bg-clip-border mb-4 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoParseContent, { content, data }) })
    ] });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
}
function Card({ data, attachments }) {
  const { header = {}, body = {}, footer = {} } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-4 m-0 bg-white border h-full flex flex-col divide-y-2", children: [
    Object.keys(header).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { header, data: attachments }),
    Object.keys(body).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { body, data: attachments }),
    Object.keys(footer).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { footer, data: attachments })
  ] });
}
export {
  Card as default
};
