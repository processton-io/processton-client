import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { I as InputLabel, T as TextInput, S as SelectInput } from "./SimpleSelectInput-976ca73e.js";
import { A as ActionItem } from "./ActionItem-2d7d02ac.js";
import classNames from "classnames";
import { d as ActionButton, A as AppIcon } from "./AppLayout-a9a67eb4.js";
import "react-select";
import "@inertiajs/react";
import "ziggy-js";
import "@headlessui/react";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
function DataTable({
  data,
  config,
  columns = [],
  selectedCols = [],
  filters = [],
  actions = [],
  actionsLabel = "Actions"
}) {
  let processedCols = [];
  let processedSelectedCols = [];
  if (columns.length <= 0) {
    let referenceColumn = data.data[0];
    let keys = Object.keys(referenceColumn);
    let ignoreList = ["id", "created_at", "updated_at"];
    keys.forEach((key) => {
      if (typeof referenceColumn[key] === "string" || typeof referenceColumn[key] === "number") {
        if (!ignoreList.includes(key) && !key.endsWith("_id")) {
          processedSelectedCols.push({
            value: key,
            label: key
          });
        }
        processedCols.push({
          value: key,
          label: key
        });
      } else if (typeof referenceColumn[key] === "object") {
        if (referenceColumn[key]) {
          let SecondLevelkeys = Object.keys(referenceColumn[key]);
          SecondLevelkeys.forEach((Skey) => {
            if (!ignoreList.includes(Skey) && !Skey.endsWith("_id")) {
              processedSelectedCols.push({
                value: key + "." + Skey,
                label: key + " " + Skey
              });
            }
            processedCols.push({
              value: key + "." + Skey,
              label: key + " " + Skey
            });
          });
        }
      }
    });
  } else {
    if (selectedCols.length > 0) {
      processedCols = columns;
      processedSelectedCols = selectedCols;
    } else {
      processedCols = columns;
      processedSelectedCols = columns;
    }
  }
  const [selectedColumns] = useState(processedSelectedCols);
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white border", children: [
    /* @__PURE__ */ jsxs("div", { className: "before-table", children: [
      (config.enableColumnsSelection && config.enableColumnsSelection == true || config.enableSearch && config.enableSearch == true) && /* @__PURE__ */ jsxs("div", { className: "flex w-full py-4 px-6 space-x-4 border-b border-gray-300", children: [
        config.enableColumnsSelection && config.enableColumnsSelection == true && /* @__PURE__ */ jsx("div", { className: "flex-1 md:w-1/2", children: /* @__PURE__ */ jsx(InputLabel, { label: "Columns" }) }),
        config.enableSearch && config.enableSearch == true && /* @__PURE__ */ jsxs("div", { className: "flex-1 flex space-x-4 md:w-1/2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "search", label: "Search" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                map: "search",
                className: "mt-1 block w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-x-2 pt-6 flex-0", children: [
            /* @__PURE__ */ jsx(ActionButton, { type: "primary", className: "py-2.5", children: "Search" }),
            filters.length > 0 && /* @__PURE__ */ jsx(ActionButton, { type: "secondary", className: "py-2.5", children: "Advance Filter" })
          ] })
        ] })
      ] }),
      config.enableFilter && config.enableFilter == true && /* @__PURE__ */ jsx("div", { className: "flex w-full py-4 px-6 space-x-4 bg-gray-50 dark:bg-gray-700  border-b border-gray-300", children: filters.map((filter) => {
        return /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: filter.value, children: filter.label }),
          filter.type === "text" && /* @__PURE__ */ jsx(
            TextInput,
            {
              map: filter.value,
              className: "mt-1 block w-full"
            },
            filter.value
          ),
          filter.type === "options" && /* @__PURE__ */ jsx(
            SelectInput,
            {
              map: filter.value,
              options: filter.options,
              className: "mt-1 block w-full"
            },
            filter.value
          )
        ] });
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block relative overflow-x-auto", children: data.data.length > -1 && /* @__PURE__ */ jsx(Table, { data: data.data, total: data.total, columns: selectedColumns, actions, actionsLabel }) }),
    /* @__PURE__ */ jsx("div", { className: "block sm:hidden", children: data.data.length > 0 && /* @__PURE__ */ jsx(ResponsiveTable, { data: data.data, total: data.total, columns: selectedColumns, actions }) })
  ] });
}
function ResponsiveTable({ data, columns, actions, total }) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ jsx("div", { className: "border-t border-dotted space-y-3", children: data.map((row) => {
      return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-dotted bottom-t-0 dark:bg-gray-900 dark:border-gray-700", children: [
        columns.map((col) => {
          return /* @__PURE__ */ jsxs("div", { className: "flex border-b border-dotted", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-0 w-1/3 px-6 py-4 font-medium text-black  dark:text-white", children: col.label }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-4 font-medium text-gray-900  dark:text-white", children: generateValue(col.value, row) })
          ] });
        }),
        actions.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-2 border-t border-dotted font-medium text-gray-900  dark:text-white space-x-1 text-right", children: actions.map((action) => {
          return /* @__PURE__ */ jsx(ActionItem, { data: row, action });
        }) }) })
      ] });
    }) }),
    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-3 text-right", children: [
      "Showing ",
      data.length,
      " of ",
      total
    ] }) }) })
  ] });
}
function Table({ data, columns, actions, actionsLabel, total }) {
  return /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
      columns.map((col) => {
        return /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: col.label });
      }),
      actions.length > 0 && /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-right", children: actionsLabel })
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { children: [
      data.length > 0 && data.map((row) => {
        return /* @__PURE__ */ jsxs("tr", { className: "bg-white border-b dark:bg-gray-900 dark:border-gray-700", children: [
          columns.map((col) => {
            return /* @__PURE__ */ jsx(DynamicTD, { col, row });
          }),
          actions.length > 0 && /* @__PURE__ */ jsx("td", { scope: "row", className: "px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white space-x-1 text-right", children: actions.map((action) => {
            let contitionResults = [];
            if (action.conditions && action.conditions.length > 0) {
              action.conditions.forEach((condition) => {
                if (condition.operator === "EQUALS") {
                  if (row[condition.key] !== condition.value) {
                    contitionResults.push(condition);
                  }
                } else if (condition.operator === "NOT_EQUALS") {
                  if (row[condition.key] === condition.value) {
                    contitionResults.push(condition);
                  }
                }
              });
            }
            if (contitionResults.length <= 0) {
              return /* @__PURE__ */ jsx(ActionItem, { data: row, action });
            }
          }) })
        ] });
      }),
      data.length <= 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "text-2xl p-12 text-center bg-white", colSpan: columns.length, children: "Empty response" }) })
    ] }),
    /* @__PURE__ */ jsx("tfoot", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", { colSpan: columns.length + (actions.length > 0 ? 1 : 0), className: "px-6 py-3 text-right", children: [
      "Showing ",
      data.length,
      " of ",
      total
    ] }) }) })
  ] });
}
function DynamicTD({ col, row }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  if (col.type === "info_with_ui_avatars") {
    return /* @__PURE__ */ jsx("td", { scope: "row", className: "px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: /* @__PURE__ */ jsx(InfoWithUIAvatars, { name: generateValue(col.value, row), email: ((_b = (_a = col.config) == null ? void 0 : _a.mapping) == null ? void 0 : _b.email) ? generateValue((_d = (_c = col.config) == null ? void 0 : _c.mapping) == null ? void 0 : _d.email, row) : false, designation: ((_f = (_e = col.config) == null ? void 0 : _e.mapping) == null ? void 0 : _f.designation) ? generateValue((_h = (_g = col.config) == null ? void 0 : _g.mapping) == null ? void 0 : _h.designation, row) : false }) });
  } else if (col.type === "info") {
    return /* @__PURE__ */ jsx("td", { scope: "row", className: "px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: /* @__PURE__ */ jsx(Info, { title: generateValue(col.value, row), subtitle: ((_j = (_i = col.config) == null ? void 0 : _i.mapping) == null ? void 0 : _j.subtitle) ? generateValue((_l = (_k = col.config) == null ? void 0 : _k.mapping) == null ? void 0 : _l.subtitle, row) : false }) });
  } else if (col.type === "status") {
    console.log("here", (_n = (_m = col.config) == null ? void 0 : _m.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _n.color);
    return /* @__PURE__ */ jsx("td", { scope: "row", className: "px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: /* @__PURE__ */ jsxs("span", { className: classNames("px-2 inline-flex text-xs leading-5 font-semibold rounded-full", {
      "bg-green-100 text-green-800": ((_p = (_o = col.config) == null ? void 0 : _o.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _p.color) === "green",
      "bg-red-100 text-red-800": ((_r = (_q = col.config) == null ? void 0 : _q.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _r.color) === "red",
      "bg-blue-100 text-blue-800": ((_t = (_s = col.config) == null ? void 0 : _s.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _t.color) === "blue",
      "bg-indigo-100 text-indigo-800": ((_v = (_u = col.config) == null ? void 0 : _u.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _v.color) === "indigo"
    }), children: [
      ((_x = (_w = col.config) == null ? void 0 : _w.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _x.icon) && /* @__PURE__ */ jsx(AppIcon, { icon: (_z = (_y = col.config) == null ? void 0 : _y.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _z.icon, className: "h-3 w-3 mt-1 mr-1" }),
      (_B = (_A = col.config) == null ? void 0 : _A.mapping[generateValue(col.value, row) === true ? 1 : generateValue(col.value, row) === false ? 0 : generateValue(col.value, row)]) == null ? void 0 : _B.message
    ] }) });
  } else {
    console.log("generateValue", generateValue(col.value, row));
    return /* @__PURE__ */ jsx("td", { scope: "row", className: "px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: generateValue(col.value, row) });
  }
}
function InfoWithUIAvatars({ name, email = false, designation = false }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600", children: /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-600 dark:text-gray-300", children: name.split(" ").map((namePart) => namePart.charAt(0).toUpperCase()).slice(0, 2).join("") }) }),
    /* @__PURE__ */ jsxs("div", { className: "font-medium dark:text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-base text-black dark:text-gray-200", children: [
        name,
        " ",
        designation && /* @__PURE__ */ jsxs("sup", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
          "(",
          designation,
          ")"
        ] })
      ] }),
      email && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-700 dark:text-gray-200", children: email })
    ] })
  ] });
}
function Info({ title, subtitle = false }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "font-medium dark:text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-base text-black dark:text-gray-200", children: [
      title,
      " "
    ] }),
    subtitle && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-700 dark:text-gray-200", children: subtitle })
  ] }) });
}
function generateValue(value, row) {
  let splitededCol = value.split(".");
  if (splitededCol.length === 1) {
    return row[splitededCol[0]];
  } else if (splitededCol.length === 2) {
    return row[splitededCol[0]] ? row[splitededCol[0]][splitededCol[1]] : "";
  } else if (splitededCol.length === 3) {
    return row[splitededCol[0]] && row[splitededCol[0]][splitededCol[1]] ? row[splitededCol[0]][splitededCol[1]][splitededCol[2]] : "";
  } else if (splitededCol.length === 4) {
    return row[splitededCol[0]] && row[splitededCol[0]][splitededCol[1]] && row[splitededCol[0]][splitededCol[1]][splitededCol[2]] ? row[splitededCol[0]][splitededCol[1]][splitededCol[2]][splitededCol[3]] : "";
  }
}
export {
  DataTable as default
};
