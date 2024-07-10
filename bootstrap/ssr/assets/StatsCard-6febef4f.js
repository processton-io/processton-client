import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as AppIcon } from "./AppLayout-a9a67eb4.js";
import classNames from "classnames";
import CountUp from "react-countup";
import "react";
import "@inertiajs/react";
import "ziggy-js";
import "@headlessui/react";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
function StatsCard(props) {
  const { title, data } = props;
  const { type, value, icon, unit, format = false, precision = 2, seperator, value_2, unit_2 } = data;
  const formatNumber = (num) => {
    if (format) {
      const map = [
        { suffix: "T", threshold: 1e12 },
        { suffix: "B", threshold: 1e9 },
        { suffix: "M", threshold: 1e6 },
        { suffix: "K", threshold: 1e3 },
        { suffix: "", threshold: 1 }
      ];
      const found = map.find((x) => Math.abs(num) >= x.threshold);
      num = parseInt(num);
      if (found) {
        const formatted = { value: (num / found.threshold).toFixed(precision), sufix: found.suffix };
        return formatted;
      }
    }
    return { value: num, sufix: "" };
  };
  switch (type) {
    case "simple_dual":
      console.log(title, value, icon, unit, unit_2, value_2, seperator);
      return /* @__PURE__ */ jsx(SimpleDualStatsCard, { title, value: formatNumber(value), icon, unit, unit_2, value_2: formatNumber(value_2), seperator });
    default:
      return /* @__PURE__ */ jsx(SimpleStatsCard, { title, value: formatNumber(value), icon, unit });
  }
}
function SimpleStatsCard({ title, value, icon, unit }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full p-0 m-0 bg-white border h-full flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "min-w-0 break-words my-auto", children: /* @__PURE__ */ jsx("div", { className: "flex-auto p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "pr-4 flex-1 flex-grow flex flex-col", children: [
      /* @__PURE__ */ jsx("h5", { className: classNames("text-primary uppercase font-bold", {
        " text-xs": icon,
        " text-lg": !icon
      }), children: title }),
      /* @__PURE__ */ jsx(Fragment, { children: icon && /* @__PURE__ */ jsxs("span", { className: "font-semibold text-4xl text-blueGray-700 text-left", children: [
        /* @__PURE__ */ jsx(
          CountUp,
          {
            end: value.value,
            suffix: value.sufix
          }
        ),
        " ",
        unit && /* @__PURE__ */ jsx("span", { className: "text-2xl", children: unit })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Fragment, { children: icon && /* @__PURE__ */ jsx("div", { className: "relative w-auto pl-4 flex-shrink", children: /* @__PURE__ */ jsx("div", { className: "text-white p-3 text-center inline-flex items-center justify-center w-14 h-14  rounded-full bg-gray-700", children: /* @__PURE__ */ jsx(AppIcon, { icon }) }) }) }),
    /* @__PURE__ */ jsx(Fragment, { children: !icon && /* @__PURE__ */ jsx("div", { className: "relative w-auto pl-4 flex-initial", children: /* @__PURE__ */ jsx("div", { className: "px-3 py-0 text-center inline-flex items-right justify-end", children: /* @__PURE__ */ jsxs("span", { className: "font-semibold text-4xl text-blueGray-700", children: [
      /* @__PURE__ */ jsx(
        CountUp,
        {
          end: value.value,
          suffix: value.sufix
        }
      ),
      "  ",
      unit
    ] }) }) }) })
  ] }) }) }) });
}
function SimpleDualStatsCard({ title, value, value_2, seperator, icon, unit, unit_2 }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full p-0 m-0 bg-white border h-full flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "min-w-0 break-words my-auto", children: /* @__PURE__ */ jsx("div", { className: "flex-auto p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative pr-4 w-full xs:w-7/12 flex-grow flex-1", children: [
      /* @__PURE__ */ jsx("h5", { className: classNames("text-primary uppercase font-bold", {
        " text-xs": icon,
        " text-lg": !icon
      }), children: title }),
      icon && /* @__PURE__ */ jsxs("div", { className: "py-2 pt-5", children: [
        /* @__PURE__ */ jsxs("sup", { className: "font-semibold text-4xl text-blueGray-700 text-right", children: [
          value.value,
          " ",
          value.suffix,
          " ",
          unit && /* @__PURE__ */ jsx("span", { className: "text-2xl", children: unit })
        ] }),
        seperator && /* @__PURE__ */ jsx("span", { className: "text-4xl font-light text-blueGray-400 px-1", children: seperator }),
        value_2 && /* @__PURE__ */ jsxs("sub", { className: "font-semibold text-4xl text-blueGray-700 text-right", children: [
          value_2.value,
          " ",
          value_2.suffix,
          " ",
          unit_2 && /* @__PURE__ */ jsx("span", { className: "text-2xl", children: unit_2 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Fragment, { children: icon && /* @__PURE__ */ jsx("div", { className: "relative w-auto pl-4 flex-shrink", children: /* @__PURE__ */ jsx("div", { className: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12  rounded-full bg-gray-700", children: /* @__PURE__ */ jsx(AppIcon, { icon }) }) }) }),
    /* @__PURE__ */ jsx(Fragment, { children: !icon && /* @__PURE__ */ jsx("div", { className: "w-auto pl-4 flex-initial", children: /* @__PURE__ */ jsxs("div", { className: "px-0 py-3 pb-2 text-center inline-flex items-right justify-end", children: [
      /* @__PURE__ */ jsxs("sup", { className: "font-semibold text-4xl text-blueGray-700", children: [
        value.value,
        " ",
        value.suffix,
        " ",
        unit && /* @__PURE__ */ jsx("span", { className: "text-2xl", children: unit })
      ] }),
      seperator && /* @__PURE__ */ jsx("span", { className: "text-4xl font-light text-blueGray-400", children: seperator }),
      value_2 && /* @__PURE__ */ jsxs("sub", { className: "font-semibold text-4xl text-blueGray-700", children: [
        value_2.value,
        " ",
        value_2.suffix,
        " ",
        unit_2 && /* @__PURE__ */ jsx("span", { className: "text-2xl", children: unit_2 })
      ] })
    ] }) }) })
  ] }) }) }) });
}
export {
  SimpleDualStatsCard,
  SimpleStatsCard,
  StatsCard as default
};
