import { r as reactExports, j as jsxRuntimeExports, y as yt, c as commonjsGlobal$1, g as getDefaultExportFromCjs$1, R as React, a as ae } from "./app-7ef8dedc.js";
import { K as Ke, A as AppIcon, c as classNames$1, _ as _t, a as AppLayout, R as RowElement, s as st } from "./AppLayout-d617927c.js";
import { p as postHeight } from "./iframewapper_helper-4a327444.js";
import { A as ActionItem } from "./ActionItem-779c2d4f.js";
/* empty css              */function IFrameWindow({ src, className = "" }) {
  const containerRef = reactExports.useRef(null);
  const [height, setHeight] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(true);
  let [iFrameSrc, setIFrameSrc] = reactExports.useState(false);
  let [isOpen, setIsOpen] = reactExports.useState(false);
  const [renderedIframe, setRenderedIframe] = reactExports.useState(src);
  const [modelSize, setModelSize] = reactExports.useState("md");
  function closeModal() {
    setIsOpen(false);
  }
  function iframeLoaded(e) {
    setRenderedIframe(e.target.src);
    setIsLoading(false);
  }
  reactExports.useEffect(() => {
    const handler = (ev) => {
      if (typeof ev.data !== "object")
        return;
      if (!ev.data.type)
        return;
      if (ev.data.type === "react-devtools-content-script")
        return;
      if (ev.data.type == "height") {
        if (ev.data.element_slug != renderedIframe)
          return;
        if (!ev.data.message)
          return;
        setHeight(ev.data.message);
      }
      if (ev.data.type == "redirect") {
        console.log(ev.data);
        setIsOpen(false);
        if (ev.data.message) {
          yt.visit(ev.data.message);
        } else {
          window.location.reload();
        }
      }
      if (ev.data.type == "popup-model") {
        if (!ev.data.message)
          return;
        setIFrameSrc(ev.data.message);
        setIsOpen(true);
        if (ev.data.size)
          setModelSize(ev.data.size);
      }
    };
    if (window != void 0) {
      window.addEventListener("message", handler);
      return () => window.removeEventListener("message", handler);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ke, { appear: true, show: isLoading, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full text-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white mx-auto py-2.5 px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { className: "animate-spin inline-block mr-1 h-6 w-6", icon: `loader` }),
      " Loading..."
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { onLoad: (e) => iframeLoaded(e), className: classNames$1(`w-full`, className, { "hidden": isLoading }), src, style: { height: isLoading ? "0px" : height != "" ? height + `px` : "1000px" }, frameBorder: "0", scrolling: "no" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ke, { appear: true, show: isOpen, as: reactExports.Fragment, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(_t, { as: "div", className: "relative z-10", onClose: closeModal, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ke.Child,
        {
          as: reactExports.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-center justify-center p-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ke.Child,
        {
          as: reactExports.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(_t.Panel, { className: classNames$1("w-full transform overflow-hidden rounded-sm bg-white p-0 text-left align-middle shadow-xl transition-all max-h-lg", {
            "max-w-xs": modelSize === "xs",
            "max-w-sm": modelSize === "sm",
            "max-w-md": modelSize === "md",
            "max-w-lg": modelSize === "lg",
            "max-w-xl": modelSize === "xl",
            "max-w-2xl": modelSize === "2xl",
            "max-w-3xl": modelSize === "3xl",
            "max-w-4xl": modelSize === "4xl",
            "max-w-5xl": modelSize === "5xl",
            "max-w-6xl": modelSize === "6xl",
            "max-w-7xl": modelSize === "7xl"
          }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IFrameWindow, { src: iFrameSrc }) }) })
        }
      ) }) })
    ] }) })
  ] });
}
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal$1, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t2) {
      return t2 instanceof _ || !(!t2 || !t2[p]);
    }, w = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, O = function(t2, e2) {
      if (S(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t2, e2) {
      return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(e2))
            return /* @__PURE__ */ new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = O(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return O(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < O(t2);
      }, m2.$g = function(t2, e2, n2) {
        return b.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
          var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === c || o2 === h) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[b.p(t2)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = b.p(f2), y2 = function(t2) {
          var e2 = O(l2);
          return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === c)
          return this.set(c, this.$M + r2);
        if ($2 === h)
          return this.set(h, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return b.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, d2 = function(t3) {
          return b.s(s2 % 12 || 12, t3, "0");
        }, $2 = f2 || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y, function(t3, r3) {
          return r3 || function(t4) {
            switch (t4) {
              case "YY":
                return String(e2.$y).slice(-2);
              case "YYYY":
                return b.s(e2.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b.s(a2 + 1, 2, "0");
              case "MMM":
                return h2(n2.monthsShort, a2, c2, 3);
              case "MMMM":
                return h2(c2, a2);
              case "D":
                return e2.$D;
              case "DD":
                return b.s(e2.$D, 2, "0");
              case "d":
                return String(e2.$W);
              case "dd":
                return h2(n2.weekdaysMin, e2.$W, o2, 2);
              case "ddd":
                return h2(n2.weekdaysShort, e2.$W, o2, 3);
              case "dddd":
                return o2[e2.$W];
              case "H":
                return String(s2);
              case "HH":
                return b.s(s2, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s2, u2, true);
              case "A":
                return $2(s2, u2, false);
              case "m":
                return String(u2);
              case "mm":
                return b.s(u2, 2, "0");
              case "s":
                return String(e2.$s);
              case "ss":
                return b.s(e2.$s, 2, "0");
              case "SSS":
                return b.s(e2.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t3) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
          return b.m(y2, m3);
        };
        switch (M3) {
          case h:
            $2 = D2() / 12;
            break;
          case c:
            $2 = D2();
            break;
          case f:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u:
            $2 = g2 / n;
            break;
          case s:
            $2 = g2 / e;
            break;
          case i:
            $2 = g2 / t;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : b.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = w(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k = _.prototype;
    return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
      k[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), O.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, O), t2.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
      return O(1e3 * t2);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const require$$0 = /* @__PURE__ */ getDefaultExportFromCjs$1(dayjs_minExports);
function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
const COLORS = [
  "blue",
  "orange",
  "yellow",
  "red",
  "purple",
  "amber",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
];
const DEFAULT_COLOR = "blue";
const LANGUAGE = "en";
const DATE_FORMAT = "YYYY-MM-DD";
const START_WEEK = "sun";
const DAYS = [0, 1, 2, 3, 4, 5, 6];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const CALENDAR_SIZE = 42;
const BG_COLOR = {
  100: {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    yellow: "bg-yellow-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    amber: "bg-amber-100",
    lime: "bg-lime-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    teal: "bg-teal-100",
    cyan: "bg-cyan-100",
    sky: "bg-sky-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    fuchsia: "bg-fuchsia-100",
    pink: "bg-pink-100",
    rose: "bg-rose-100"
  },
  200: {
    blue: "bg-blue-200",
    orange: "bg-orange-200",
    yellow: "bg-yellow-200",
    red: "bg-red-200",
    purple: "bg-purple-200",
    amber: "bg-amber-200",
    lime: "bg-lime-200",
    green: "bg-green-200",
    emerald: "bg-emerald-200",
    teal: "bg-teal-200",
    cyan: "bg-cyan-200",
    sky: "bg-sky-200",
    indigo: "bg-indigo-200",
    violet: "bg-violet-200",
    fuchsia: "bg-fuchsia-200",
    pink: "bg-pink-200",
    rose: "bg-rose-200"
  },
  500: {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    lime: "bg-lime-500",
    green: "bg-green-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    fuchsia: "bg-fuchsia-500",
    pink: "bg-pink-500",
    rose: "bg-rose-500"
  },
  hover: {
    blue: "hover:bg-blue-600",
    orange: "hover:bg-orange-600",
    yellow: "hover:bg-yellow-600",
    red: "hover:bg-red-600",
    purple: "hover:bg-purple-600",
    amber: "hover:bg-amber-600",
    lime: "hover:bg-lime-600",
    green: "hover:bg-green-600",
    emerald: "hover:bg-emerald-600",
    teal: "hover:bg-teal-600",
    cyan: "hover:bg-cyan-600",
    sky: "hover:bg-sky-600",
    indigo: "hover:bg-indigo-600",
    violet: "hover:bg-violet-600",
    fuchsia: "hover:bg-fuchsia-600",
    pink: "hover:bg-pink-600",
    rose: "hover:bg-rose-600"
  }
};
const TEXT_COLOR = {
  500: {
    blue: "text-blue-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
    purple: "text-purple-500",
    amber: "text-amber-500",
    lime: "text-lime-500",
    green: "text-green-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    cyan: "text-cyan-500",
    sky: "text-sky-500",
    indigo: "text-indigo-500",
    violet: "text-violet-500",
    fuchsia: "text-fuchsia-500",
    pink: "text-pink-500",
    rose: "text-rose-500"
  },
  600: {
    blue: "text-blue-600 dark:text-blue-400 dark:hover:text-blue-400",
    orange: "text-orange-600 dark:text-orange-400 dark:hover:text-orange-400",
    yellow: "text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-400",
    red: "text-red-600 dark:text-red-400 dark:hover:text-red-400",
    purple: "text-purple-600 dark:text-purple-400 dark:hover:text-purple-400",
    amber: "text-amber-600 dark:text-amber-400 dark:hover:text-amber-400",
    lime: "text-lime-600 dark:text-lime-400 dark:hover:text-lime-400",
    green: "text-green-600 dark:text-green-400 dark:hover:text-green-400",
    emerald: "text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-400",
    teal: "text-teal-600 dark:text-teal-400 dark:hover:text-teal-400",
    cyan: "text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-400",
    sky: "text-sky-600 dark:text-sky-400 dark:hover:text-sky-400",
    indigo: "text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-400",
    violet: "text-violet-600 dark:text-violet-400 dark:hover:text-violet-400",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-400",
    pink: "text-pink-600 dark:text-pink-400 dark:hover:text-pink-400",
    rose: "text-rose-600 dark:text-rose-400 dark:hover:text-rose-400"
  },
  hover: {
    blue: "hover:text-blue-700",
    orange: "hover:text-orange-700",
    yellow: "hover:text-yellow-700",
    red: "hover:text-red-700",
    purple: "hover:text-purple-700",
    amber: "hover:text-amber-700",
    lime: "hover:text-lime-700",
    green: "hover:text-green-700",
    emerald: "hover:text-emerald-700",
    teal: "hover:text-teal-700",
    cyan: "hover:text-cyan-700",
    sky: "hover:text-sky-700",
    indigo: "hover:text-indigo-700",
    violet: "hover:text-violet-700",
    fuchsia: "hover:text-fuchsia-700",
    pink: "hover:text-pink-700",
    rose: "hover:text-rose-700"
  }
};
const BORDER_COLOR = {
  500: {
    blue: "border-blue-500",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    red: "border-red-500",
    purple: "border-purple-500",
    amber: "border-amber-500",
    lime: "border-lime-500",
    green: "border-green-500",
    emerald: "border-emerald-500",
    teal: "border-teal-500",
    cyan: "border-cyan-500",
    sky: "border-sky-500",
    indigo: "border-indigo-500",
    violet: "border-violet-500",
    fuchsia: "border-fuchsia-500",
    pink: "border-pink-500",
    rose: "border-rose-500"
  },
  focus: {
    blue: "focus:border-blue-500",
    orange: "focus:border-orange-500",
    yellow: "focus:border-yellow-500",
    red: "focus:border-red-500",
    purple: "focus:border-purple-500",
    amber: "focus:border-amber-500",
    lime: "focus:border-lime-500",
    green: "focus:border-green-500",
    emerald: "focus:border-emerald-500",
    teal: "focus:border-teal-500",
    cyan: "focus:border-cyan-500",
    sky: "focus:border-sky-500",
    indigo: "focus:border-indigo-500",
    violet: "focus:border-violet-500",
    fuchsia: "focus:border-fuchsia-500",
    pink: "focus:border-pink-500",
    rose: "focus:border-rose-500"
  }
};
const RING_COLOR = {
  focus: {
    blue: "focus:ring-blue-500",
    orange: "focus:ring-orange-500",
    yellow: "focus:ring-yellow-500",
    red: "focus:ring-red-500",
    purple: "focus:ring-purple-500",
    amber: "focus:ring-amber-500",
    lime: "focus:ring-lime-500",
    green: "focus:ring-green-500",
    emerald: "focus:ring-emerald-500",
    teal: "focus:ring-teal-500",
    cyan: "focus:ring-cyan-500",
    sky: "focus:ring-sky-500",
    indigo: "focus:ring-indigo-500",
    violet: "focus:ring-violet-500",
    fuchsia: "focus:ring-fuchsia-500",
    pink: "focus:ring-pink-500",
    rose: "focus:ring-rose-500"
  },
  "second-focus": {
    blue: "focus:ring-blue-500/20",
    orange: "focus:ring-orange-500/20",
    yellow: "focus:ring-yellow-500/20",
    red: "focus:ring-red-500/20",
    purple: "focus:ring-purple-500/20",
    amber: "focus:ring-amber-500/20",
    lime: "focus:ring-lime-500/20",
    green: "focus:ring-green-500/20",
    emerald: "focus:ring-emerald-500/20",
    teal: "focus:ring-teal-500/20",
    cyan: "focus:ring-cyan-500/20",
    sky: "focus:ring-sky-500/20",
    indigo: "focus:ring-indigo-500/20",
    violet: "focus:ring-violet-500/20",
    fuchsia: "focus:ring-fuchsia-500/20",
    pink: "focus:ring-pink-500/20",
    rose: "focus:ring-rose-500/20"
  }
};
const BUTTON_COLOR = {
  focus: {
    blue: "focus:ring-blue-500/50 focus:bg-blue-100/50",
    orange: "focus:ring-orange-500/50 focus:bg-orange-100/50",
    yellow: "focus:ring-yellow-500/50 focus:bg-yellow-100/50",
    red: "focus:ring-red-500/50 focus:bg-red-100/50",
    purple: "focus:ring-purple-500/50 focus:bg-purple-100/50",
    amber: "focus:ring-amber-500/50 focus:bg-amber-100/50",
    lime: "focus:ring-lime-500/50 focus:bg-lime-100/50",
    green: "focus:ring-green-500/50 focus:bg-green-100/50",
    emerald: "focus:ring-emerald-500/50 focus:bg-emerald-100/50",
    teal: "focus:ring-teal-500/50 focus:bg-teal-100/50",
    cyan: "focus:ring-cyan-500/50 focus:bg-cyan-100/50",
    sky: "focus:ring-sky-500/50 focus:bg-sky-100/50",
    indigo: "focus:ring-indigo-500/50 focus:bg-indigo-100/50",
    violet: "focus:ring-violet-500/50 focus:bg-violet-100/50",
    fuchsia: "focus:ring-fuchsia-500/50 focus:bg-fuchsia-100/50",
    pink: "focus:ring-pink-500/50 focus:bg-pink-100/50",
    rose: "focus:ring-rose-500/50 focus:bg-rose-100/50"
  }
};
const DatepickerContext = reactExports.createContext({
  input: void 0,
  primaryColor: "blue",
  configs: void 0,
  calendarContainer: null,
  arrowContainer: null,
  period: { start: null, end: null },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changePeriod: (period) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideDatepicker: () => {
  },
  dayHover: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDayHover: (day) => {
  },
  inputText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeInputText: (text) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  updateFirstDate: (date) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDatepickerValue: (value, e) => {
  },
  showFooter: false,
  value: null,
  i18n: LANGUAGE,
  disabled: false,
  inputClassName: "",
  containerClassName: "",
  toggleClassName: "",
  readOnly: false,
  displayFormat: DATE_FORMAT,
  minDate: null,
  maxDate: null,
  dateLooking: "forward",
  disabledDates: null,
  inputId: void 0,
  inputName: void 0,
  startWeekOn: START_WEEK,
  toggleIcon: void 0,
  classNames: void 0,
  popoverDirection: void 0,
  separator: "~"
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var customParseFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e2) {
      return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
    };
    var a = function(e2) {
      return function(t2) {
        this[e2] = +t2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
      (this.zone || (this.zone = {})).offset = function(e3) {
        if (!e3)
          return 0;
        if ("Z" === e3)
          return 0;
        var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
        return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
      }(e2);
    }], h = function(e2) {
      var t2 = o[e2];
      return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
    }, u = function(e2, t2) {
      var n2, r2 = o.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = e2 === (t2 ? "pm" : "PM");
      return n2;
    }, d = { A: [i, function(e2) {
      this.afternoon = u(e2, false);
    }], a: [i, function(e2) {
      this.afternoon = u(e2, true);
    }], S: [/\d/, function(e2) {
      this.milliseconds = 100 * +e2;
    }], SS: [n, function(e2) {
      this.milliseconds = 10 * +e2;
    }], SSS: [/\d{3}/, function(e2) {
      this.milliseconds = +e2;
    }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(e2) {
      var t2 = o.ordinal, n2 = e2.match(/\d+/);
      if (this.day = n2[0], t2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
    }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(e2) {
      var t2 = h("months"), n2 = (h("monthsShort") || t2.map(function(e3) {
        return e3.slice(0, 3);
      })).indexOf(e2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [i, function(e2) {
      var t2 = h("months").indexOf(e2) + 1;
      if (t2 < 1)
        throw new Error();
      this.month = t2 % 12 || t2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(e2) {
      this.year = s(e2);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    function c(n2) {
      var r2, i2;
      r2 = n2, i2 = o && o.formats;
      for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
        var o2 = r3 && r3.toUpperCase();
        return n3 || i2[r3] || e[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
          return t3 || n4.slice(1);
        });
      })).match(t), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
        var h2 = s2[f2], u2 = d[h2], c2 = u2 && u2[0], l = u2 && u2[1];
        s2[f2] = l ? { regex: c2, parser: l } : h2.replace(/^\[|\]$/g, "");
      }
      return function(e2) {
        for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
          var i3 = s2[n3];
          if ("string" == typeof i3)
            r3 += i3.length;
          else {
            var o2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = o2.exec(h3)[0];
            f3.call(t2, u3), e2 = e2.replace(u3, "");
          }
        }
        return function(e3) {
          var t3 = e3.afternoon;
          if (void 0 !== t3) {
            var n4 = e3.hours;
            t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
          }
        }(t2), t2;
      };
    }
    return function(e2, t2, n2) {
      n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear);
      var r2 = t2.prototype, i2 = r2.parse;
      r2.parse = function(e3) {
        var t3 = e3.date, r3 = e3.utc, s2 = e3.args;
        this.$u = r3;
        var a2 = s2[1];
        if ("string" == typeof a2) {
          var f2 = true === s2[2], h2 = true === s2[3], u2 = f2 || h2, d2 = s2[2];
          h2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(e4, t4, n3) {
            try {
              if (["x", "X"].indexOf(t4) > -1)
                return new Date(("X" === t4 ? 1e3 : 1) * e4);
              var r4 = c(t4)(e4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, h3 = r4.seconds, u3 = r4.milliseconds, d3 = r4.zone, l2 = /* @__PURE__ */ new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
              i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
              var p = a3 || 0, v = f3 || 0, D = h3 || 0, g = u3 || 0;
              return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
            } catch (e5) {
              return /* @__PURE__ */ new Date("");
            }
          }(t3, a2, r3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
        } else if (a2 instanceof Array)
          for (var l = a2.length, m = 1; m <= l; m += 1) {
            s2[1] = a2[m - 1];
            var M = n2.apply(this, s2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === l && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          i2.call(this, e3);
      };
    };
  });
})(customParseFormat$1);
var customParseFormatExports = customParseFormat$1.exports;
var customParseFormat = /* @__PURE__ */ getDefaultExportFromCjs(customParseFormatExports);
var weekday$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekday = function(e2) {
        var t2 = this.$locale().weekStart || 0, i = this.$W, n = (i < t2 ? i + 7 : i) - t2;
        return this.$utils().u(e2) ? n : this.subtract(n, "day").add(e2, "day");
      };
    };
  });
})(weekday$1);
var weekdayExports = weekday$1.exports;
var weekday = /* @__PURE__ */ getDefaultExportFromCjs(weekdayExports);
require$$0.extend(weekday);
require$$0.extend(customParseFormat);
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function generateArrayNumber(start = 0, end = 0) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
function shortString(value, limit = 3) {
  return value.slice(0, limit);
}
function ucFirst(value) {
  return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
}
function formatDate(date, format = DATE_FORMAT) {
  return date.format(format);
}
function parseFormattedDate(date, format = DATE_FORMAT) {
  return require$$0(date, format);
}
function getFirstDayInMonth(date) {
  return {
    ddd: formatDate(require$$0(date).startOf("month"), "ddd"),
    basic: formatDate(require$$0(date).startOf("month")),
    object: require$$0(date).startOf("month")
  };
}
function getDaysInMonth(date) {
  if (!isNaN(require$$0(date).daysInMonth())) {
    return [...generateArrayNumber(1, require$$0(date).daysInMonth())];
  }
  return [];
}
function nextMonth(date) {
  return date.date(1).hour(0).minute(0).second(0).month(date.month() + 1);
}
function previousMonth(date) {
  return date.date(1).hour(0).minute(0).second(0).month(date.month() - 1);
}
function getFirstElementsInArray(array = [], size = 0) {
  return array.slice(0, size);
}
function getLastElementsInArray(array = [], size = 0) {
  const result = [];
  if (Array.isArray(array) && size > 0) {
    if (size >= array.length) {
      return array;
    }
    let y = array.length - 1;
    for (let i = 0; i < size; i++) {
      result.push(array[y]);
      y--;
    }
  }
  return result.reverse();
}
function getNumberOfDay(dayString, startWeekOn) {
  let number = 0;
  let startDateModifier = 0;
  if (startWeekOn) {
    switch (startWeekOn) {
      case "mon":
        startDateModifier = 6;
        break;
      case "tue":
        startDateModifier = 5;
        break;
      case "wed":
        startDateModifier = 4;
        break;
      case "thu":
        startDateModifier = 3;
        break;
      case "fri":
        startDateModifier = 2;
        break;
      case "sat":
        startDateModifier = 1;
        break;
      case "sun":
        startDateModifier = 0;
        break;
    }
  }
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach((item, index) => {
    if (item.includes(dayString)) {
      number = (index + startDateModifier) % 7;
    }
  });
  return number;
}
function getLastDaysInMonth(date, size = 0) {
  return getLastElementsInArray(getDaysInMonth(date), size);
}
function getFirstDaysInMonth(date, size = 0) {
  return getFirstElementsInArray(getDaysInMonth(date), size);
}
function loadLanguageModule(language = LANGUAGE) {
  switch (language) {
    case "af":
      Promise.resolve().then(function() {
        return af$1;
      });
      break;
    case "am":
      Promise.resolve().then(function() {
        return am$1;
      });
      break;
    case "ar-dz":
      Promise.resolve().then(function() {
        return arDz$1;
      });
      break;
    case "ar-iq":
      Promise.resolve().then(function() {
        return arIq$1;
      });
      break;
    case "ar-kw":
      Promise.resolve().then(function() {
        return arKw$1;
      });
      break;
    case "ar-ly":
      Promise.resolve().then(function() {
        return arLy$1;
      });
      break;
    case "ar-ma":
      Promise.resolve().then(function() {
        return arMa$1;
      });
      break;
    case "ar-sa":
      Promise.resolve().then(function() {
        return arSa$1;
      });
      break;
    case "ar-tn":
      Promise.resolve().then(function() {
        return arTn$1;
      });
      break;
    case "ar":
      Promise.resolve().then(function() {
        return ar$1;
      });
      break;
    case "az":
      Promise.resolve().then(function() {
        return az$1;
      });
      break;
    case "bg":
      Promise.resolve().then(function() {
        return bg$1;
      });
      break;
    case "bi":
      Promise.resolve().then(function() {
        return bi$1;
      });
      break;
    case "bm":
      Promise.resolve().then(function() {
        return bm$1;
      });
      break;
    case "bn-bd":
      Promise.resolve().then(function() {
        return bnBd$1;
      });
      break;
    case "bn":
      Promise.resolve().then(function() {
        return bn$1;
      });
      break;
    case "bo":
      Promise.resolve().then(function() {
        return bo$1;
      });
      break;
    case "br":
      Promise.resolve().then(function() {
        return br$1;
      });
      break;
    case "ca":
      Promise.resolve().then(function() {
        return ca$1;
      });
      break;
    case "cs":
      Promise.resolve().then(function() {
        return cs$1;
      });
      break;
    case "cv":
      Promise.resolve().then(function() {
        return cv$1;
      });
      break;
    case "cy":
      Promise.resolve().then(function() {
        return cy$1;
      });
      break;
    case "da":
      Promise.resolve().then(function() {
        return da$1;
      });
      break;
    case "de-at":
      Promise.resolve().then(function() {
        return deAt$1;
      });
      break;
    case "de-ch":
      Promise.resolve().then(function() {
        return deCh$1;
      });
      break;
    case "de":
      Promise.resolve().then(function() {
        return de$1;
      });
      break;
    case "dv":
      Promise.resolve().then(function() {
        return dv$1;
      });
      break;
    case "el":
      Promise.resolve().then(function() {
        return el$1;
      });
      break;
    case "en-au":
      Promise.resolve().then(function() {
        return enAu$1;
      });
      break;
    case "en-gb":
      Promise.resolve().then(function() {
        return enGb$1;
      });
      break;
    case "en-ie":
      Promise.resolve().then(function() {
        return enIe$1;
      });
      break;
    case "en-il":
      Promise.resolve().then(function() {
        return enIl$1;
      });
      break;
    case "en-in":
      Promise.resolve().then(function() {
        return enIn$1;
      });
      break;
    case "en-nz":
      Promise.resolve().then(function() {
        return enNz$1;
      });
      break;
    case "en-sg":
      Promise.resolve().then(function() {
        return enSg$1;
      });
      break;
    case "en-tt":
      Promise.resolve().then(function() {
        return enTt$1;
      });
      break;
    case "en":
      Promise.resolve().then(function() {
        return en$1;
      });
      break;
    case "eo":
      Promise.resolve().then(function() {
        return eo$1;
      });
      break;
    case "es-do":
      Promise.resolve().then(function() {
        return esDo$1;
      });
      break;
    case "es-mx":
      Promise.resolve().then(function() {
        return esMx$1;
      });
      break;
    case "es-pr":
      Promise.resolve().then(function() {
        return esPr$1;
      });
      break;
    case "es-us":
      Promise.resolve().then(function() {
        return esUs$1;
      });
      break;
    case "es":
      Promise.resolve().then(function() {
        return es$1;
      });
      break;
    case "et":
      Promise.resolve().then(function() {
        return et$1;
      });
      break;
    case "eu":
      Promise.resolve().then(function() {
        return eu$1;
      });
      break;
    case "fa":
      Promise.resolve().then(function() {
        return fa$1;
      });
      break;
    case "fi":
      Promise.resolve().then(function() {
        return fi$1;
      });
      break;
    case "fo":
      Promise.resolve().then(function() {
        return fo$1;
      });
      break;
    case "fr-ch":
      Promise.resolve().then(function() {
        return frCh$1;
      });
      break;
    case "fr":
      Promise.resolve().then(function() {
        return fr$1;
      });
      break;
    case "fy":
      Promise.resolve().then(function() {
        return fy$1;
      });
      break;
    case "ga":
      Promise.resolve().then(function() {
        return ga$1;
      });
      break;
    case "gd":
      Promise.resolve().then(function() {
        return gd$1;
      });
      break;
    case "gl":
      Promise.resolve().then(function() {
        return gl$1;
      });
      break;
    case "gom-latn":
      Promise.resolve().then(function() {
        return gomLatn$1;
      });
      break;
    case "gu":
      Promise.resolve().then(function() {
        return gu$1;
      });
      break;
    case "he":
      Promise.resolve().then(function() {
        return he$1;
      });
      break;
    case "hi":
      Promise.resolve().then(function() {
        return hi$1;
      });
      break;
    case "hr":
      Promise.resolve().then(function() {
        return hr$1;
      });
      break;
    case "ht":
      Promise.resolve().then(function() {
        return ht$1;
      });
      break;
    case "hu":
      Promise.resolve().then(function() {
        return hu$1;
      });
      break;
    case "hy-am":
      Promise.resolve().then(function() {
        return hyAm$1;
      });
      break;
    case "id":
      Promise.resolve().then(function() {
        return id$1;
      });
      break;
    case "is":
      Promise.resolve().then(function() {
        return is$1;
      });
      break;
    case "it-ch":
      Promise.resolve().then(function() {
        return itCh$1;
      });
      break;
    case "it":
      Promise.resolve().then(function() {
        return it$1;
      });
      break;
    case "ja":
      Promise.resolve().then(function() {
        return ja$1;
      });
      break;
    case "jv":
      Promise.resolve().then(function() {
        return jv$1;
      });
      break;
    case "ka":
      Promise.resolve().then(function() {
        return ka$1;
      });
      break;
    case "kk":
      Promise.resolve().then(function() {
        return kk$1;
      });
      break;
    case "ko":
      Promise.resolve().then(function() {
        return ko$1;
      });
      break;
    case "ku":
      Promise.resolve().then(function() {
        return ku$1;
      });
      break;
    case "ky":
      Promise.resolve().then(function() {
        return ky$1;
      });
      break;
    case "lb":
      Promise.resolve().then(function() {
        return lb$1;
      });
      break;
    case "lo":
      Promise.resolve().then(function() {
        return lo$1;
      });
      break;
    case "lt":
      Promise.resolve().then(function() {
        return lt$1;
      });
      break;
    case "lv":
      Promise.resolve().then(function() {
        return lv$1;
      });
      break;
    case "me":
      Promise.resolve().then(function() {
        return me$1;
      });
      break;
    case "mi":
      Promise.resolve().then(function() {
        return mi$1;
      });
      break;
    case "mk":
      Promise.resolve().then(function() {
        return mk$1;
      });
      break;
    case "ml":
      Promise.resolve().then(function() {
        return ml$1;
      });
      break;
    case "mn":
      Promise.resolve().then(function() {
        return mn$1;
      });
      break;
    case "ms-my":
      Promise.resolve().then(function() {
        return msMy$1;
      });
      break;
    case "ms":
      Promise.resolve().then(function() {
        return ms$1;
      });
      break;
    case "mt":
      Promise.resolve().then(function() {
        return mt$1;
      });
      break;
    case "my":
      Promise.resolve().then(function() {
        return my$1;
      });
      break;
    case "nb":
      Promise.resolve().then(function() {
        return nb$1;
      });
      break;
    case "ne":
      Promise.resolve().then(function() {
        return ne$1;
      });
      break;
    case "nl-be":
      Promise.resolve().then(function() {
        return nlBe$1;
      });
      break;
    case "nl":
      Promise.resolve().then(function() {
        return nl$1;
      });
      break;
    case "nn":
      Promise.resolve().then(function() {
        return nn$1;
      });
      break;
    case "oc-lnc":
      Promise.resolve().then(function() {
        return ocLnc$1;
      });
      break;
    case "pa-in":
      Promise.resolve().then(function() {
        return paIn$1;
      });
      break;
    case "pl":
      Promise.resolve().then(function() {
        return pl$1;
      });
      break;
    case "pt-br":
      Promise.resolve().then(function() {
        return ptBr$1;
      });
      break;
    case "pt":
      Promise.resolve().then(function() {
        return pt$1;
      });
      break;
    case "rn":
      Promise.resolve().then(function() {
        return rn$1;
      });
      break;
    case "ro":
      Promise.resolve().then(function() {
        return ro$1;
      });
      break;
    case "ru":
      Promise.resolve().then(function() {
        return ru$1;
      });
      break;
    case "rw":
      Promise.resolve().then(function() {
        return rw$1;
      });
      break;
    case "sd":
      Promise.resolve().then(function() {
        return sd$1;
      });
      break;
    case "se":
      Promise.resolve().then(function() {
        return se$1;
      });
      break;
    case "si":
      Promise.resolve().then(function() {
        return si$1;
      });
      break;
    case "sk":
      Promise.resolve().then(function() {
        return sk$1;
      });
      break;
    case "sl":
      Promise.resolve().then(function() {
        return sl$1;
      });
      break;
    case "sq":
      Promise.resolve().then(function() {
        return sq$1;
      });
      break;
    case "sr":
      Promise.resolve().then(function() {
        return sr$1;
      });
      break;
    case "sr-cyrl":
      Promise.resolve().then(function() {
        return srCyrl$1;
      });
      break;
    case "ss":
      Promise.resolve().then(function() {
        return ss$1;
      });
      break;
    case "sv-fi":
      Promise.resolve().then(function() {
        return svFi$1;
      });
      break;
    case "sv":
      Promise.resolve().then(function() {
        return sv$1;
      });
      break;
    case "sw":
      Promise.resolve().then(function() {
        return sw$1;
      });
      break;
    case "ta":
      Promise.resolve().then(function() {
        return ta$1;
      });
      break;
    case "te":
      Promise.resolve().then(function() {
        return te$1;
      });
      break;
    case "tg":
      Promise.resolve().then(function() {
        return tg$1;
      });
      break;
    case "th":
      Promise.resolve().then(function() {
        return th$1;
      });
      break;
    case "tk":
      Promise.resolve().then(function() {
        return tk$1;
      });
      break;
    case "tl-ph":
      Promise.resolve().then(function() {
        return tlPh$1;
      });
      break;
    case "tlh":
      Promise.resolve().then(function() {
        return tlh$1;
      });
      break;
    case "tr":
      Promise.resolve().then(function() {
        return tr$1;
      });
      break;
    case "tzl":
      Promise.resolve().then(function() {
        return tzl$1;
      });
      break;
    case "tzm-latn":
      Promise.resolve().then(function() {
        return tzmLatn$1;
      });
      break;
    case "tzm":
      Promise.resolve().then(function() {
        return tzm$1;
      });
      break;
    case "ug-cn":
      Promise.resolve().then(function() {
        return ugCn$1;
      });
      break;
    case "uk":
      Promise.resolve().then(function() {
        return uk$1;
      });
      break;
    case "ur":
      Promise.resolve().then(function() {
        return ur$1;
      });
      break;
    case "uz-latn":
      Promise.resolve().then(function() {
        return uzLatn$1;
      });
      break;
    case "uz":
      Promise.resolve().then(function() {
        return uz$1;
      });
      break;
    case "vi":
      Promise.resolve().then(function() {
        return vi$1;
      });
      break;
    case "x-pseudo":
      Promise.resolve().then(function() {
        return xPseudo$1;
      });
      break;
    case "yo":
      Promise.resolve().then(function() {
        return yo$1;
      });
      break;
    case "zh-cn":
      Promise.resolve().then(function() {
        return zhCn$1;
      });
      break;
    case "zh-hk":
      Promise.resolve().then(function() {
        return zhHk$1;
      });
      break;
    case "zh-tw":
      Promise.resolve().then(function() {
        return zhTw$1;
      });
      break;
    case "zh":
      Promise.resolve().then(function() {
        return zh$1;
      });
      break;
    default:
      Promise.resolve().then(function() {
        return en$1;
      });
      break;
  }
}
function dateIsValid(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
const DateIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" })
  );
};
const CloseIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  );
};
const ChevronLeftIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })
  );
};
const DoubleChevronLeftIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" })
  );
};
const ChevronRightIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })
  );
};
const DoubleChevronRightIcon = ({ className = "w-6 h-6" }) => {
  return React.createElement(
    "svg",
    { className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" })
  );
};
const Arrow = React.forwardRef((props, ref) => {
  return React.createElement("div", { ref, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" });
});
const SecondaryButton = ({ children, onClick, disabled = false }) => {
  const { primaryColor } = reactExports.useContext(DatepickerContext);
  const getClassName = reactExports.useCallback(() => {
    const ringColor = RING_COLOR.focus[primaryColor];
    return `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${ringColor}`;
  }, [primaryColor]);
  return React.createElement("button", { type: "button", className: getClassName(), onClick, disabled }, children);
};
const PrimaryButton = ({ children, onClick, disabled = false }) => {
  const { primaryColor } = reactExports.useContext(DatepickerContext);
  const bgColor = BG_COLOR["500"][primaryColor];
  const borderColor = BORDER_COLOR["500"][primaryColor];
  const bgColorHover = BG_COLOR.hover[primaryColor];
  const ringColor = RING_COLOR.focus[primaryColor];
  const getClassName = reactExports.useCallback(() => {
    return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${disabled ? " cursor-no-drop" : ""}`;
  }, [bgColor, bgColorHover, borderColor, disabled, ringColor]);
  return React.createElement("button", { type: "button", className: getClassName(), onClick, disabled }, children);
};
const RoundedButton = ({ children, onClick, disabled, roundedFull = false, padding = "py-[0.55rem]", active = false }) => {
  const { primaryColor } = reactExports.useContext(DatepickerContext);
  const getClassName = reactExports.useCallback(() => {
    const darkClass = "dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10";
    const activeClass = active ? "font-semibold bg-gray-50 dark:bg-white/5" : "";
    const defaultClass = !roundedFull ? `w-full tracking-wide ${darkClass} ${activeClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-md focus:ring-1` : `${darkClass} ${activeClass} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1`;
    const buttonFocusColor = BUTTON_COLOR.focus[primaryColor];
    const disabledClass = disabled ? "line-through" : "";
    return `${defaultClass} ${buttonFocusColor} ${disabledClass}`;
  }, [disabled, padding, primaryColor, roundedFull, active]);
  return React.createElement("button", { type: "button", className: getClassName(), onClick, disabled }, children);
};
const VerticalDash = () => {
  const { primaryColor } = reactExports.useContext(DatepickerContext);
  const bgColor = BG_COLOR["500"][primaryColor];
  return React.createElement("div", { className: `bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}` });
};
var isBetween$1 = { exports: {} };
(function(module, exports) {
  !function(e, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    return function(e, i, t) {
      i.prototype.isBetween = function(e2, i2, s, f) {
        var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
        return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(isBetween$1);
var isBetweenExports = isBetween$1.exports;
var isBetween = /* @__PURE__ */ getDefaultExportFromCjs(isBetweenExports);
require$$0.extend(isBetween);
const Days = ({ calendarData, onClickPreviousDays, onClickDay, onClickNextDays }) => {
  const { primaryColor, period, changePeriod, dayHover, changeDayHover, minDate, maxDate, disabledDates } = reactExports.useContext(DatepickerContext);
  const currentDateClass = reactExports.useCallback((item) => {
    const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${item >= 10 ? item : "0" + item}`;
    if (formatDate(require$$0()) === formatDate(require$$0(itemDate)))
      return TEXT_COLOR["500"][primaryColor];
    return "";
  }, [calendarData.date, primaryColor]);
  const activeDateData = reactExports.useCallback((day) => {
    const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
    let className = "";
    if (require$$0(fullDay).isSame(period.start) && require$$0(fullDay).isSame(period.end)) {
      className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium rounded-full`;
    } else if (require$$0(fullDay).isSame(period.start)) {
      className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${require$$0(fullDay).isSame(dayHover) && !period.end ? "rounded-full" : "rounded-l-full"}`;
    } else if (require$$0(fullDay).isSame(period.end)) {
      className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${require$$0(fullDay).isSame(dayHover) && !period.start ? "rounded-full" : "rounded-r-full"}`;
    }
    return {
      active: require$$0(fullDay).isSame(period.start) || require$$0(fullDay).isSame(period.end),
      className
    };
  }, [calendarData.date, dayHover, period.end, period.start, primaryColor]);
  const hoverClassByDay = reactExports.useCallback((day) => {
    let className = currentDateClass(day);
    const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day >= 10 ? day : "0" + day}`;
    if (period.start && period.end) {
      if (require$$0(fullDay).isBetween(period.start, period.end, "day", "[)")) {
        return ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
      }
    }
    if (!dayHover) {
      return className;
    }
    if (period.start && require$$0(fullDay).isBetween(period.start, dayHover, "day", "[)")) {
      className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
    }
    if (period.end && require$$0(fullDay).isBetween(dayHover, period.end, "day", "[)")) {
      className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
    }
    if (dayHover === fullDay) {
      const bgColor = BG_COLOR["500"][primaryColor];
      className = ` transition-all duration-500 text-white font-medium ${bgColor} ${period.start ? "rounded-r-full" : "rounded-l-full"}`;
    }
    return className;
  }, [calendarData.date, currentDateClass, dayHover, period.end, period.start, primaryColor]);
  const isDateTooEarly = reactExports.useCallback((day, type) => {
    if (!minDate) {
      return false;
    }
    const object = {
      previous: previousMonth(calendarData.date),
      current: calendarData.date,
      next: nextMonth(calendarData.date)
    };
    const newDate = object[type];
    const formattedDate = newDate.set("date", day);
    return require$$0(formattedDate).isSame(require$$0(minDate), "day") ? false : require$$0(formattedDate).isBefore(require$$0(minDate));
  }, [calendarData.date, minDate]);
  const isDateTooLate = reactExports.useCallback((day, type) => {
    if (!maxDate) {
      return false;
    }
    const object = {
      previous: previousMonth(calendarData.date),
      current: calendarData.date,
      next: nextMonth(calendarData.date)
    };
    const newDate = object[type];
    const formattedDate = newDate.set("date", day);
    return require$$0(formattedDate).isSame(require$$0(maxDate), "day") ? false : require$$0(formattedDate).isAfter(require$$0(maxDate));
  }, [calendarData.date, maxDate]);
  const isDateDisabled = reactExports.useCallback((day, type) => {
    if (isDateTooEarly(day, type) || isDateTooLate(day, type)) {
      return true;
    }
    const object = {
      previous: previousMonth(calendarData.date),
      current: calendarData.date,
      next: nextMonth(calendarData.date)
    };
    const newDate = object[type];
    const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
    if (!disabledDates || Array.isArray(disabledDates) && !disabledDates.length) {
      return false;
    }
    let matchingCount = 0;
    disabledDates == null ? void 0 : disabledDates.forEach((dateRange) => {
      if (require$$0(formattedDate).isAfter(dateRange.startDate) && require$$0(formattedDate).isBefore(dateRange.endDate)) {
        matchingCount++;
      }
      if (require$$0(formattedDate).isSame(dateRange.startDate) || require$$0(formattedDate).isSame(dateRange.endDate)) {
        matchingCount++;
      }
    });
    return matchingCount > 0;
  }, [calendarData.date, isDateTooEarly, isDateTooLate, disabledDates]);
  const buttonClass = reactExports.useCallback((day, type) => {
    const baseClass = "flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10";
    if (type === "current") {
      return classNames(baseClass, !activeDateData(day).active ? hoverClassByDay(day) : activeDateData(day).className, isDateDisabled(day, type) && "line-through");
    }
    return classNames(baseClass, isDateDisabled(day, type) && "line-through", "text-gray-400");
  }, [activeDateData, hoverClassByDay, isDateDisabled]);
  const checkIfHoverPeriodContainsDisabledPeriod = reactExports.useCallback((hoverPeriod) => {
    if (!Array.isArray(disabledDates)) {
      return false;
    }
    for (let i = 0; i < disabledDates.length; i++) {
      if (require$$0(hoverPeriod.start).isBefore(disabledDates[i].startDate) && require$$0(hoverPeriod.end).isAfter(disabledDates[i].endDate)) {
        return true;
      }
    }
    return false;
  }, [disabledDates]);
  const getMetaData = reactExports.useCallback(() => {
    return {
      previous: previousMonth(calendarData.date),
      current: calendarData.date,
      next: nextMonth(calendarData.date)
    };
  }, [calendarData.date]);
  const hoverDay = reactExports.useCallback((day, type) => {
    const object = getMetaData();
    const newDate = object[type];
    const newHover = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
    if (period.start && !period.end) {
      const hoverPeriod = { ...period, end: newHover };
      if (require$$0(newHover).isBefore(require$$0(period.start))) {
        hoverPeriod.start = newHover;
        hoverPeriod.end = period.start;
        if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
          changePeriod({
            start: null,
            end: period.start
          });
        }
      }
      if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
        changeDayHover(newHover);
      }
    }
    if (!period.start && period.end) {
      const hoverPeriod = { ...period, start: newHover };
      if (require$$0(newHover).isAfter(require$$0(period.end))) {
        hoverPeriod.start = period.end;
        hoverPeriod.end = newHover;
        if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
          changePeriod({
            start: period.end,
            end: null
          });
        }
      }
      if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
        changeDayHover(newHover);
      }
    }
  }, [
    changeDayHover,
    changePeriod,
    checkIfHoverPeriodContainsDisabledPeriod,
    getMetaData,
    period
  ]);
  const handleClickDay = reactExports.useCallback((day, type) => {
    function continueClick() {
      if (type === "previous") {
        onClickPreviousDays(day);
      }
      if (type === "current") {
        onClickDay(day);
      }
      if (type === "next") {
        onClickNextDays(day);
      }
    }
    if (disabledDates == null ? void 0 : disabledDates.length) {
      const object = getMetaData();
      const newDate = object[type];
      const clickDay = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
      if (period.start && !period.end) {
        require$$0(clickDay).isSame(dayHover) && continueClick();
      } else if (!period.start && period.end) {
        require$$0(clickDay).isSame(dayHover) && continueClick();
      } else {
        continueClick();
      }
    } else {
      continueClick();
    }
  }, [
    dayHover,
    disabledDates == null ? void 0 : disabledDates.length,
    getMetaData,
    onClickDay,
    onClickNextDays,
    onClickPreviousDays,
    period.end,
    period.start
  ]);
  return React.createElement(
    "div",
    { className: "grid grid-cols-7 gap-y-0.5 my-1" },
    calendarData.days.previous.map((item, index) => React.createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "previous"), className: `${buttonClass(item, "previous")}`, onClick: () => handleClickDay(item, "previous"), onMouseOver: () => {
      hoverDay(item, "previous");
    } }, item)),
    calendarData.days.current.map((item, index) => React.createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "current"), className: `${buttonClass(item, "current")}`, onClick: () => handleClickDay(item, "current"), onMouseOver: () => {
      hoverDay(item, "current");
    } }, item)),
    calendarData.days.next.map((item, index) => React.createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "next"), className: `${buttonClass(item, "next")}`, onClick: () => handleClickDay(item, "next"), onMouseOver: () => {
      hoverDay(item, "next");
    } }, item))
  );
};
const Months = ({ currentMonth, clickMonth }) => {
  const { i18n } = reactExports.useContext(DatepickerContext);
  loadLanguageModule(i18n);
  return React.createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, MONTHS.map((item) => React.createElement(
    RoundedButton,
    { key: item, padding: "py-3", onClick: () => {
      clickMonth(item);
    }, active: currentMonth === item },
    React.createElement(React.Fragment, null, require$$0(`2022-${item}-01`).locale(i18n).format("MMM"))
  )));
};
const Week = () => {
  const { i18n, startWeekOn } = reactExports.useContext(DatepickerContext);
  loadLanguageModule(i18n);
  const startDateModifier = reactExports.useMemo(() => {
    if (startWeekOn) {
      switch (startWeekOn) {
        case "mon":
          return 1;
        case "tue":
          return 2;
        case "wed":
          return 3;
        case "thu":
          return 4;
        case "fri":
          return 5;
        case "sat":
          return 6;
        case "sun":
          return 0;
        default:
          return 0;
      }
    }
    return 0;
  }, [startWeekOn]);
  return React.createElement("div", { className: "grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2" }, DAYS.map((item) => React.createElement("div", { key: item, className: "tracking-wide text-gray-500 text-center" }, ucFirst(shortString(require$$0(`2022-11-${6 + (item + startDateModifier)}`).locale(i18n).format("ddd"))))));
};
const Years = ({ year, currentYear, minYear, maxYear, clickYear }) => {
  const { dateLooking } = reactExports.useContext(DatepickerContext);
  let startDate = 0;
  let endDate = 0;
  switch (dateLooking) {
    case "backward":
      startDate = year - 11;
      endDate = year;
      break;
    case "middle":
      startDate = year - 4;
      endDate = year + 7;
      break;
    case "forward":
    default:
      startDate = year;
      endDate = year + 11;
      break;
  }
  return React.createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, generateArrayNumber(startDate, endDate).map((item, index) => React.createElement(
    RoundedButton,
    { key: index, padding: "py-3", onClick: () => {
      clickYear(item);
    }, active: currentYear === item, disabled: maxYear !== null && item > maxYear || minYear !== null && item < minYear },
    React.createElement(React.Fragment, null, item)
  )));
};
const Calendar = ({ date, minDate, maxDate, onClickPrevious, onClickNext, changeMonth, changeYear }) => {
  const { period, changePeriod, changeDayHover, showFooter, changeDatepickerValue, hideDatepicker, asSingle, i18n, startWeekOn, input } = reactExports.useContext(DatepickerContext);
  loadLanguageModule(i18n);
  const [showMonths, setShowMonths] = reactExports.useState(false);
  const [showYears, setShowYears] = reactExports.useState(false);
  const [year, setYear] = reactExports.useState(date.year());
  const previous = reactExports.useCallback(() => {
    return getLastDaysInMonth(previousMonth(date), getNumberOfDay(getFirstDayInMonth(date).ddd, startWeekOn));
  }, [date, startWeekOn]);
  const current = reactExports.useCallback(() => {
    return getDaysInMonth(formatDate(date));
  }, [date]);
  const next = reactExports.useCallback(() => {
    return getFirstDaysInMonth(previousMonth(date), CALENDAR_SIZE - (previous().length + current().length));
  }, [current, date, previous]);
  const hideMonths = reactExports.useCallback(() => {
    showMonths && setShowMonths(false);
  }, [showMonths]);
  const hideYears = reactExports.useCallback(() => {
    showYears && setShowYears(false);
  }, [showYears]);
  const clickMonth = reactExports.useCallback((month) => {
    setTimeout(() => {
      changeMonth(month);
      setShowMonths(!showMonths);
    }, 250);
  }, [changeMonth, showMonths]);
  const clickYear = reactExports.useCallback((year2) => {
    setTimeout(() => {
      changeYear(year2);
      setShowYears(!showYears);
    }, 250);
  }, [changeYear, showYears]);
  const clickDay = reactExports.useCallback((day, month = date.month() + 1, year2 = date.year()) => {
    const fullDay = `${year2}-${month}-${day}`;
    let newStart;
    let newEnd = null;
    function chosePeriod(start, end) {
      const ipt = input == null ? void 0 : input.current;
      changeDatepickerValue({
        startDate: require$$0(start).format(DATE_FORMAT),
        endDate: require$$0(end).format(DATE_FORMAT)
      }, ipt);
      hideDatepicker();
    }
    if (period.start && period.end) {
      if (changeDayHover) {
        changeDayHover(null);
      }
      changePeriod({
        start: null,
        end: null
      });
    }
    if (!period.start && !period.end || period.start && period.end) {
      if (!period.start && !period.end) {
        changeDayHover(fullDay);
      }
      newStart = fullDay;
      if (asSingle) {
        newEnd = fullDay;
        chosePeriod(fullDay, fullDay);
      }
    } else {
      if (period.start && !period.end) {
        const condition = require$$0(fullDay).isSame(require$$0(period.start)) || require$$0(fullDay).isAfter(require$$0(period.start));
        newStart = condition ? period.start : fullDay;
        newEnd = condition ? fullDay : period.start;
      } else {
        const condition = require$$0(fullDay).isSame(require$$0(period.end)) || require$$0(fullDay).isBefore(require$$0(period.end));
        newStart = condition ? fullDay : period.start;
        newEnd = condition ? period.end : fullDay;
      }
      if (!showFooter) {
        if (newStart && newEnd) {
          chosePeriod(newStart, newEnd);
        }
      }
    }
    if (!(newEnd && newStart) || showFooter) {
      changePeriod({
        start: newStart,
        end: newEnd
      });
    }
  }, [
    asSingle,
    changeDatepickerValue,
    changeDayHover,
    changePeriod,
    date,
    hideDatepicker,
    period.end,
    period.start,
    showFooter,
    input
  ]);
  const clickPreviousDays = reactExports.useCallback((day) => {
    const newDate = previousMonth(date);
    clickDay(day, newDate.month() + 1, newDate.year());
    onClickPrevious();
  }, [clickDay, date, onClickPrevious]);
  const clickNextDays = reactExports.useCallback((day) => {
    const newDate = nextMonth(date);
    clickDay(day, newDate.month() + 1, newDate.year());
    onClickNext();
  }, [clickDay, date, onClickNext]);
  reactExports.useEffect(() => {
    setYear(date.year());
  }, [date]);
  const calendarData = reactExports.useMemo(() => {
    return {
      date,
      days: {
        previous: previous(),
        current: current(),
        next: next()
      }
    };
  }, [current, date, next, previous]);
  const minYear = React.useMemo(() => minDate && require$$0(minDate).isValid() ? require$$0(minDate).year() : null, [minDate]);
  const maxYear = React.useMemo(() => maxDate && require$$0(maxDate).isValid() ? require$$0(maxDate).year() : null, [maxDate]);
  return React.createElement(
    "div",
    { className: "w-full md:w-[296px] md:min-w-[296px]" },
    React.createElement(
      "div",
      { className: "flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5" },
      !showMonths && !showYears && React.createElement(
        "div",
        { className: "flex-none" },
        React.createElement(
          RoundedButton,
          { roundedFull: true, onClick: onClickPrevious },
          React.createElement(ChevronLeftIcon, { className: "h-5 w-5" })
        )
      ),
      showYears && React.createElement(
        "div",
        { className: "flex-none" },
        React.createElement(
          RoundedButton,
          { roundedFull: true, onClick: () => {
            setYear(year - 12);
          } },
          React.createElement(DoubleChevronLeftIcon, { className: "h-5 w-5" })
        )
      ),
      React.createElement(
        "div",
        { className: "flex flex-1 items-center space-x-1.5" },
        React.createElement(
          "div",
          { className: "w-1/2" },
          React.createElement(
            RoundedButton,
            { onClick: () => {
              setShowMonths(!showMonths);
              hideYears();
            } },
            React.createElement(React.Fragment, null, calendarData.date.locale(i18n).format("MMM"))
          )
        ),
        React.createElement(
          "div",
          { className: "w-1/2" },
          React.createElement(
            RoundedButton,
            { onClick: () => {
              setShowYears(!showYears);
              hideMonths();
            } },
            React.createElement(React.Fragment, null, calendarData.date.year())
          )
        )
      ),
      showYears && React.createElement(
        "div",
        { className: "flex-none" },
        React.createElement(
          RoundedButton,
          { roundedFull: true, onClick: () => {
            setYear(year + 12);
          } },
          React.createElement(DoubleChevronRightIcon, { className: "h-5 w-5" })
        )
      ),
      !showMonths && !showYears && React.createElement(
        "div",
        { className: "flex-none" },
        React.createElement(
          RoundedButton,
          { roundedFull: true, onClick: onClickNext },
          React.createElement(ChevronRightIcon, { className: "h-5 w-5" })
        )
      )
    ),
    React.createElement(
      "div",
      { className: "px-0.5 sm:px-2 mt-0.5 min-h-[285px]" },
      showMonths && React.createElement(Months, { currentMonth: calendarData.date.month() + 1, clickMonth }),
      showYears && React.createElement(Years, { year, minYear, maxYear, currentYear: calendarData.date.year(), clickYear }),
      !showMonths && !showYears && React.createElement(
        React.Fragment,
        null,
        React.createElement(Week, null),
        React.createElement(Days, { calendarData, onClickPreviousDays: clickPreviousDays, onClickDay: clickDay, onClickNextDays: clickNextDays })
      )
    )
  );
};
const Footer = () => {
  var _a, _b;
  const { hideDatepicker, period, changeDatepickerValue, configs, classNames: classNames2 } = reactExports.useContext(DatepickerContext);
  const getClassName = reactExports.useCallback(() => {
    if (typeof classNames2 !== "undefined" && typeof (classNames2 == null ? void 0 : classNames2.footer) === "function") {
      return classNames2.footer();
    }
    return "flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700";
  }, [classNames2]);
  return React.createElement(
    "div",
    { className: getClassName() },
    React.createElement(
      "div",
      { className: "w-full md:w-auto flex items-center justify-center space-x-3" },
      React.createElement(
        SecondaryButton,
        { onClick: () => {
          hideDatepicker();
        } },
        React.createElement(React.Fragment, null, ((_a = configs == null ? void 0 : configs.footer) == null ? void 0 : _a.cancel) ? configs.footer.cancel : "Cancel")
      ),
      React.createElement(
        PrimaryButton,
        { onClick: () => {
          if (period.start && period.end) {
            changeDatepickerValue({
              startDate: require$$0(period.start).format(DATE_FORMAT),
              endDate: require$$0(period.end).format(DATE_FORMAT)
            });
            hideDatepicker();
          }
        }, disabled: !(period.start && period.end) },
        React.createElement(React.Fragment, null, ((_b = configs == null ? void 0 : configs.footer) == null ? void 0 : _b.apply) ? configs.footer.apply : "Apply")
      )
    )
  );
};
const ToggleButton = (e) => {
  return e.isEmpty ? React.createElement(DateIcon, { className: "h-5 w-5" }) : React.createElement(CloseIcon, { className: "h-5 w-5" });
};
const Input = (e) => {
  const { primaryColor, period, dayHover, changeDayHover, calendarContainer, arrowContainer, inputText, changeInputText, hideDatepicker, changeDatepickerValue, asSingle, placeholder, separator, disabled, inputClassName, toggleClassName, toggleIcon, readOnly, displayFormat, inputId, inputName, classNames: classNames2, popoverDirection } = reactExports.useContext(DatepickerContext);
  const buttonRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const getClassName = reactExports.useCallback(() => {
    const input = inputRef.current;
    if (input && typeof classNames2 !== "undefined" && typeof (classNames2 == null ? void 0 : classNames2.input) === "function") {
      return classNames2.input(input);
    }
    const border = BORDER_COLOR.focus[primaryColor];
    const ring = RING_COLOR["second-focus"][primaryColor];
    const defaultInputClassName = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${border} ${ring}`;
    return typeof inputClassName === "function" ? inputClassName(defaultInputClassName) : typeof inputClassName === "string" && inputClassName !== "" ? inputClassName : defaultInputClassName;
  }, [inputRef, classNames2, primaryColor, inputClassName]);
  const handleInputChange = reactExports.useCallback((e2) => {
    const inputValue = e2.target.value;
    const dates = [];
    if (asSingle) {
      const date = parseFormattedDate(inputValue, displayFormat);
      if (dateIsValid(date.toDate())) {
        dates.push(date.format(DATE_FORMAT));
      }
    } else {
      const parsed = inputValue.split(separator);
      let startDate = null;
      let endDate = null;
      if (parsed.length === 2) {
        startDate = parseFormattedDate(parsed[0], displayFormat);
        endDate = parseFormattedDate(parsed[1], displayFormat);
      } else {
        const middle = Math.floor(inputValue.length / 2);
        startDate = parseFormattedDate(inputValue.slice(0, middle), displayFormat);
        endDate = parseFormattedDate(inputValue.slice(middle), displayFormat);
      }
      if (dateIsValid(startDate.toDate()) && dateIsValid(endDate.toDate()) && startDate.isBefore(endDate)) {
        dates.push(startDate.format(DATE_FORMAT));
        dates.push(endDate.format(DATE_FORMAT));
      }
    }
    if (dates[0]) {
      changeDatepickerValue({
        startDate: dates[0],
        endDate: dates[1] || dates[0]
      }, e2.target);
      if (dates[1])
        changeDayHover(require$$0(dates[1]).add(-1, "day").format(DATE_FORMAT));
      else
        changeDayHover(dates[0]);
    }
    changeInputText(e2.target.value);
  }, [asSingle, displayFormat, separator, changeDatepickerValue, changeDayHover, changeInputText]);
  const handleInputKeyDown = reactExports.useCallback((e2) => {
    if (e2.key === "Enter") {
      const input = inputRef.current;
      if (input) {
        input.blur();
      }
      hideDatepicker();
    }
  }, [hideDatepicker]);
  const renderToggleIcon = reactExports.useCallback((isEmpty) => {
    return typeof toggleIcon === "undefined" ? React.createElement(ToggleButton, { isEmpty }) : toggleIcon(isEmpty);
  }, [toggleIcon]);
  const getToggleClassName = reactExports.useCallback(() => {
    const button = buttonRef.current;
    if (button && typeof classNames2 !== "undefined" && typeof (classNames2 == null ? void 0 : classNames2.toggleButton) === "function") {
      return classNames2.toggleButton(button);
    }
    const defaultToggleClassName = "absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";
    return typeof toggleClassName === "function" ? toggleClassName(defaultToggleClassName) : typeof toggleClassName === "string" && toggleClassName !== "" ? toggleClassName : defaultToggleClassName;
  }, [toggleClassName, buttonRef, classNames2]);
  reactExports.useEffect(() => {
    if (inputRef && e.setContextRef && typeof e.setContextRef === "function") {
      e.setContextRef(inputRef);
    }
  }, [e, inputRef]);
  reactExports.useEffect(() => {
    const button = buttonRef == null ? void 0 : buttonRef.current;
    function focusInput(e2) {
      e2.stopPropagation();
      const input = inputRef.current;
      if (input) {
        input.focus();
        if (inputText) {
          changeInputText("");
          if (dayHover) {
            changeDayHover(null);
          }
          if (period.start && period.end) {
            changeDatepickerValue({
              startDate: null,
              endDate: null
            }, input);
          }
        }
      }
    }
    if (button) {
      button.addEventListener("click", focusInput);
    }
    return () => {
      if (button) {
        button.removeEventListener("click", focusInput);
      }
    };
  }, [
    changeDatepickerValue,
    changeDayHover,
    changeInputText,
    dayHover,
    inputText,
    period.end,
    period.start,
    inputRef
  ]);
  reactExports.useEffect(() => {
    const div = calendarContainer == null ? void 0 : calendarContainer.current;
    const input = inputRef.current;
    const arrow = arrowContainer == null ? void 0 : arrowContainer.current;
    function showCalendarContainer() {
      if (arrow && div && div.classList.contains("hidden")) {
        div.classList.remove("hidden");
        div.classList.add("block");
        const popoverOnUp = popoverDirection == "up";
        const popoverOnDown = popoverDirection === "down";
        if (popoverOnUp || window.innerWidth > 767 && window.screen.height - 100 < div.getBoundingClientRect().bottom && !popoverOnDown) {
          div.classList.add("bottom-full");
          div.classList.add("mb-2.5");
          div.classList.remove("mt-2.5");
          arrow.classList.add("-bottom-2");
          arrow.classList.add("border-r");
          arrow.classList.add("border-b");
          arrow.classList.remove("border-l");
          arrow.classList.remove("border-t");
        }
        setTimeout(() => {
          div.classList.remove("translate-y-4");
          div.classList.remove("opacity-0");
          div.classList.add("translate-y-0");
          div.classList.add("opacity-1");
        }, 1);
      }
    }
    if (div && input) {
      input.addEventListener("focus", showCalendarContainer);
    }
    return () => {
      if (input) {
        input.removeEventListener("focus", showCalendarContainer);
      }
    };
  }, [calendarContainer, arrowContainer, popoverDirection]);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("input", { ref: inputRef, type: "text", className: getClassName(), disabled, readOnly, placeholder: placeholder ? placeholder : `${displayFormat}${asSingle ? "" : ` ${separator} ${displayFormat}`}`, value: inputText, id: inputId, name: inputName, autoComplete: "off", role: "presentation", onChange: handleInputChange, onKeyDown: handleInputKeyDown }),
    React.createElement("button", { type: "button", ref: buttonRef, disabled, className: getToggleClassName() }, renderToggleIcon(inputText == null || !(inputText == null ? void 0 : inputText.length)))
  );
};
const DEFAULT_SHORTCUTS = {
  today: {
    text: "Today",
    period: {
      start: formatDate(require$$0()),
      end: formatDate(require$$0())
    }
  },
  yesterday: {
    text: "Yesterday",
    period: {
      start: formatDate(require$$0().subtract(1, "d")),
      end: formatDate(require$$0().subtract(1, "d"))
    }
  },
  past: [
    {
      daysNumber: 7,
      text: "Last 7 days",
      period: {
        start: formatDate(require$$0().subtract(7, "d")),
        end: formatDate(require$$0())
      }
    },
    {
      daysNumber: 30,
      text: "Last 30 days",
      period: {
        start: formatDate(require$$0().subtract(30, "d")),
        end: formatDate(require$$0())
      }
    }
  ],
  currentMonth: {
    text: "This month",
    period: {
      start: formatDate(require$$0().startOf("month")),
      end: formatDate(require$$0().endOf("month"))
    }
  },
  pastMonth: {
    text: "Last month",
    period: {
      start: formatDate(previousMonth(require$$0()).startOf("month")),
      end: formatDate(previousMonth(require$$0()).endOf("month"))
    }
  }
};
const ItemTemplate = React.memo((props) => {
  const { primaryColor, period, changePeriod, updateFirstDate, dayHover, changeDayHover, hideDatepicker, changeDatepickerValue } = reactExports.useContext(DatepickerContext);
  const getClassName = reactExports.useCallback(() => {
    const textColor = TEXT_COLOR["600"][primaryColor];
    const textColorHover = TEXT_COLOR.hover[primaryColor];
    return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${textColor} ${textColorHover}`;
  }, [primaryColor]);
  const chosePeriod = reactExports.useCallback((item) => {
    if (dayHover) {
      changeDayHover(null);
    }
    if (period.start || period.end) {
      changePeriod({
        start: null,
        end: null
      });
    }
    changePeriod(item);
    changeDatepickerValue({
      startDate: item.start,
      endDate: item.end
    });
    updateFirstDate(require$$0(item.start));
    hideDatepicker();
  }, [
    changeDatepickerValue,
    changeDayHover,
    changePeriod,
    dayHover,
    hideDatepicker,
    period.end,
    period.start,
    updateFirstDate
  ]);
  const children = props == null ? void 0 : props.children;
  return React.createElement("li", { className: getClassName(), onClick: () => {
    chosePeriod(props == null ? void 0 : props.item.period);
  } }, children);
});
const Shortcuts = () => {
  const { configs } = reactExports.useContext(DatepickerContext);
  const callPastFunction = reactExports.useCallback((data, numberValue) => {
    return typeof data === "function" ? data(numberValue) : null;
  }, []);
  const shortcutOptions = reactExports.useMemo(() => {
    if (!(configs == null ? void 0 : configs.shortcuts)) {
      return Object.entries(DEFAULT_SHORTCUTS);
    }
    return Object.entries(configs.shortcuts).flatMap(([key, customConfig]) => {
      if (Object.prototype.hasOwnProperty.call(DEFAULT_SHORTCUTS, key)) {
        return [[key, DEFAULT_SHORTCUTS[key]]];
      }
      const { text, period } = customConfig;
      if (!text || !period) {
        return [];
      }
      const start = require$$0(period.start);
      const end = require$$0(period.end);
      if (start.isValid() && end.isValid() && (start.isBefore(end) || start.isSame(end))) {
        return [
          [
            text,
            {
              text,
              period: {
                start: start.format(DATE_FORMAT),
                end: end.format(DATE_FORMAT)
              }
            }
          ]
        ];
      }
      return [];
    });
  }, [configs]);
  const printItemText = reactExports.useCallback((item) => {
    return (item == null ? void 0 : item.text) ?? null;
  }, []);
  return (shortcutOptions == null ? void 0 : shortcutOptions.length) ? React.createElement(
    "div",
    { className: "md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1" },
    React.createElement("ul", { className: "w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0" }, shortcutOptions.map(([key, item], index) => Array.isArray(item) ? item.map((item2, index2) => React.createElement(
      ItemTemplate,
      { key: index2, item: item2 },
      React.createElement(React.Fragment, null, key === "past" && (configs == null ? void 0 : configs.shortcuts) && key in configs.shortcuts && item2.daysNumber ? callPastFunction(configs.shortcuts[key], item2.daysNumber) : item2.text)
    )) : React.createElement(
      ItemTemplate,
      { key: index, item },
      React.createElement(React.Fragment, null, (configs == null ? void 0 : configs.shortcuts) && key in configs.shortcuts ? typeof configs.shortcuts[key] === "object" ? printItemText(item) : configs.shortcuts[key] : printItemText(item))
    )))
  ) : null;
};
function useOnClickOutside(ref, handler) {
  reactExports.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
const Datepicker = ({ primaryColor = "blue", value = null, onChange, useRange = true, showFooter = false, showShortcuts = false, configs = void 0, asSingle = false, placeholder = null, separator = "~", startFrom = null, i18n = LANGUAGE, disabled = false, inputClassName = null, containerClassName = null, toggleClassName = null, toggleIcon = void 0, displayFormat = DATE_FORMAT, readOnly = false, minDate = null, maxDate = null, dateLooking = "forward", disabledDates = null, inputId, inputName, startWeekOn = "sun", classNames: classNames2 = void 0, popoverDirection = void 0 }) => {
  const containerRef = reactExports.useRef(null);
  const calendarContainerRef = reactExports.useRef(null);
  const arrowRef = reactExports.useRef(null);
  const [firstDate, setFirstDate] = reactExports.useState(startFrom && require$$0(startFrom).isValid() ? require$$0(startFrom) : require$$0());
  const [secondDate, setSecondDate] = reactExports.useState(nextMonth(firstDate));
  const [period, setPeriod] = reactExports.useState({
    start: null,
    end: null
  });
  const [dayHover, setDayHover] = reactExports.useState(null);
  const [inputText, setInputText] = reactExports.useState("");
  const [inputRef, setInputRef] = reactExports.useState(React.createRef());
  useOnClickOutside(containerRef, () => {
    const container = containerRef.current;
    if (container) {
      hideDatepicker();
    }
  });
  const hideDatepicker = reactExports.useCallback(() => {
    const div = calendarContainerRef.current;
    const arrow = arrowRef.current;
    if (arrow && div && div.classList.contains("block")) {
      div.classList.remove("block");
      div.classList.remove("translate-y-0");
      div.classList.remove("opacity-1");
      div.classList.add("translate-y-4");
      div.classList.add("opacity-0");
      setTimeout(() => {
        div.classList.remove("bottom-full");
        div.classList.add("hidden");
        div.classList.add("mb-2.5");
        div.classList.add("mt-2.5");
        arrow.classList.remove("-bottom-2");
        arrow.classList.remove("border-r");
        arrow.classList.remove("border-b");
        arrow.classList.add("border-l");
        arrow.classList.add("border-t");
      }, 300);
    }
  }, []);
  const firstGotoDate = reactExports.useCallback((date) => {
    const newDate = require$$0(formatDate(date));
    const reformatDate = require$$0(formatDate(secondDate));
    if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
      setSecondDate(nextMonth(date));
    }
    setFirstDate(date);
  }, [secondDate]);
  const previousMonthFirst = reactExports.useCallback(() => {
    setFirstDate(previousMonth(firstDate));
  }, [firstDate]);
  const nextMonthFirst = reactExports.useCallback(() => {
    firstGotoDate(nextMonth(firstDate));
  }, [firstDate, firstGotoDate]);
  const changeFirstMonth = reactExports.useCallback((month) => {
    firstGotoDate(require$$0(`${firstDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
  }, [firstDate, firstGotoDate]);
  const changeFirstYear = reactExports.useCallback((year) => {
    firstGotoDate(require$$0(`${year}-${firstDate.month() + 1}-01`));
  }, [firstDate, firstGotoDate]);
  const secondGotoDate = reactExports.useCallback((date) => {
    const newDate = require$$0(formatDate(date, displayFormat));
    const reformatDate = require$$0(formatDate(firstDate, displayFormat));
    if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
      setFirstDate(previousMonth(date));
    }
    setSecondDate(date);
  }, [firstDate, displayFormat]);
  const previousMonthSecond = reactExports.useCallback(() => {
    secondGotoDate(previousMonth(secondDate));
  }, [secondDate, secondGotoDate]);
  const nextMonthSecond = reactExports.useCallback(() => {
    setSecondDate(nextMonth(secondDate));
  }, [secondDate]);
  const changeSecondMonth = reactExports.useCallback((month) => {
    secondGotoDate(require$$0(`${secondDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
  }, [secondDate, secondGotoDate]);
  const changeSecondYear = reactExports.useCallback((year) => {
    secondGotoDate(require$$0(`${year}-${secondDate.month() + 1}-01`));
  }, [secondDate, secondGotoDate]);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    const calendarContainer = calendarContainerRef.current;
    const arrow = arrowRef.current;
    if (container && calendarContainer && arrow) {
      const detail = container.getBoundingClientRect();
      const screenCenter = window.innerWidth / 2;
      const containerCenter = (detail.right - detail.x) / 2 + detail.x;
      if (containerCenter > screenCenter) {
        arrow.classList.add("right-0");
        arrow.classList.add("mr-3.5");
        calendarContainer.classList.add("right-0");
      }
    }
  }, []);
  reactExports.useEffect(() => {
    if (value && value.startDate && value.endDate) {
      const startDate = require$$0(value.startDate);
      const endDate = require$$0(value.endDate);
      const validDate = startDate.isValid() && endDate.isValid();
      const condition = validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
      if (condition) {
        setPeriod({
          start: formatDate(startDate),
          end: formatDate(endDate)
        });
        setInputText(`${formatDate(startDate, displayFormat)}${asSingle ? "" : ` ${separator} ${formatDate(endDate, displayFormat)}`}`);
      }
    }
    if (value && value.startDate === null && value.endDate === null) {
      setPeriod({
        start: null,
        end: null
      });
      setInputText("");
    }
  }, [asSingle, value, displayFormat, separator]);
  reactExports.useEffect(() => {
    if (startFrom && require$$0(startFrom).isValid()) {
      const startDate = value == null ? void 0 : value.startDate;
      const endDate = value == null ? void 0 : value.endDate;
      if (startDate && require$$0(startDate).isValid()) {
        setFirstDate(require$$0(startDate));
        if (!asSingle) {
          if (endDate && require$$0(endDate).isValid() && require$$0(endDate).startOf("month").isAfter(require$$0(startDate))) {
            setSecondDate(require$$0(endDate));
          } else {
            setSecondDate(nextMonth(require$$0(startDate)));
          }
        }
      } else {
        setFirstDate(require$$0(startFrom));
        setSecondDate(nextMonth(require$$0(startFrom)));
      }
    }
  }, [asSingle, startFrom, value]);
  const safePrimaryColor = reactExports.useMemo(() => {
    if (COLORS.includes(primaryColor)) {
      return primaryColor;
    }
    return DEFAULT_COLOR;
  }, [primaryColor]);
  const contextValues = reactExports.useMemo(() => {
    return {
      asSingle,
      primaryColor: safePrimaryColor,
      configs,
      calendarContainer: calendarContainerRef,
      arrowContainer: arrowRef,
      hideDatepicker,
      period,
      changePeriod: (newPeriod) => setPeriod(newPeriod),
      dayHover,
      changeDayHover: (newDay) => setDayHover(newDay),
      inputText,
      changeInputText: (newText) => setInputText(newText),
      updateFirstDate: (newDate) => firstGotoDate(newDate),
      changeDatepickerValue: onChange,
      showFooter,
      placeholder,
      separator,
      i18n,
      value,
      disabled,
      inputClassName,
      containerClassName,
      toggleClassName,
      toggleIcon,
      readOnly,
      displayFormat,
      minDate,
      maxDate,
      dateLooking,
      disabledDates,
      inputId,
      inputName,
      startWeekOn,
      classNames: classNames2,
      onChange,
      input: inputRef,
      popoverDirection
    };
  }, [
    asSingle,
    safePrimaryColor,
    configs,
    hideDatepicker,
    period,
    dayHover,
    inputText,
    onChange,
    showFooter,
    placeholder,
    separator,
    i18n,
    value,
    disabled,
    inputClassName,
    containerClassName,
    toggleClassName,
    toggleIcon,
    readOnly,
    displayFormat,
    minDate,
    maxDate,
    dateLooking,
    disabledDates,
    inputId,
    inputName,
    startWeekOn,
    classNames2,
    inputRef,
    popoverDirection,
    firstGotoDate
  ]);
  const containerClassNameOverload = reactExports.useMemo(() => {
    const defaultContainerClassName = "relative w-full text-gray-700";
    return typeof containerClassName === "function" ? containerClassName(defaultContainerClassName) : typeof containerClassName === "string" && containerClassName !== "" ? containerClassName : defaultContainerClassName;
  }, [containerClassName]);
  return React.createElement(
    DatepickerContext.Provider,
    { value: contextValues },
    React.createElement(
      "div",
      { className: containerClassNameOverload, ref: containerRef },
      React.createElement(Input, { setContextRef: setInputRef }),
      React.createElement(
        "div",
        { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: calendarContainerRef },
        React.createElement(Arrow, { ref: arrowRef }),
        React.createElement(
          "div",
          { className: "mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg" },
          React.createElement(
            "div",
            { className: "flex flex-col lg:flex-row py-2" },
            showShortcuts && React.createElement(Shortcuts, null),
            React.createElement(
              "div",
              { className: `flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${showShortcuts ? "md:pl-2" : "md:pl-1"} pr-2 lg:pr-1` },
              React.createElement(Calendar, { date: firstDate, onClickPrevious: previousMonthFirst, onClickNext: nextMonthFirst, changeMonth: changeFirstMonth, changeYear: changeFirstYear, minDate, maxDate }),
              useRange && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { className: "flex items-center" },
                  React.createElement(VerticalDash, null)
                ),
                React.createElement(Calendar, { date: secondDate, onClickPrevious: previousMonthSecond, onClickNext: nextMonthSecond, changeMonth: changeSecondMonth, changeYear: changeSecondYear, minDate, maxDate })
              )
            )
          ),
          showFooter && React.createElement(Footer, null)
        )
      )
    )
  );
};
var af$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = a(e), t = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return n.default.locale(t, null, true), t;
  });
})(af$2);
var afExports = af$2.exports;
var af = /* @__PURE__ */ getDefaultExportFromCjs(afExports);
var af$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": af
}, [afExports]);
var am$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(e2) {
      return e2 + "ኛ";
    } };
    return t.default.locale(d, null, true), d;
  });
})(am$2);
var amExports = am$2.exports;
var am = /* @__PURE__ */ getDefaultExportFromCjs(amExports);
var am$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": am
}, [amExports]);
var arDz$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ar-dz", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(_2) {
      return _2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arDz$2);
var arDzExports = arDz$2.exports;
var arDz = /* @__PURE__ */ getDefaultExportFromCjs(arDzExports);
var arDz$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arDz
}, [arDzExports]);
var arIq$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ar-iq", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e2) {
      return e2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arIq$2);
var arIqExports = arIq$2.exports;
var arIq = /* @__PURE__ */ getDefaultExportFromCjs(arIqExports);
var arIq$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arIq
}, [arIqExports]);
var arKw$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ar-kw", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(_2) {
      return _2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arKw$2);
var arKwExports = arKw$2.exports;
var arKw = /* @__PURE__ */ getDefaultExportFromCjs(arKwExports);
var arKw$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arKw
}, [arKwExports]);
var arLy$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), n = { name: "ar-ly", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 6, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(_2) {
      return _2;
    }, meridiem: function(_2) {
      return _2 > 12 ? "م" : "ص";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return t.default.locale(n, null, true), n;
  });
})(arLy$2);
var arLyExports = arLy$2.exports;
var arLy = /* @__PURE__ */ getDefaultExportFromCjs(arLyExports);
var arLy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arLy
}, [arLyExports]);
var arMa$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ar-ma", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekStart: 6, weekdaysShort: "احد_إثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e2) {
      return e2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arMa$2);
var arMaExports = arMa$2.exports;
var arMa = /* @__PURE__ */ getDefaultExportFromCjs(arMaExports);
var arMa$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arMa
}, [arMaExports]);
var arSa$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ar-sa", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(_2) {
      return _2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arSa$2);
var arSaExports = arSa$2.exports;
var arSa = /* @__PURE__ */ getDefaultExportFromCjs(arSaExports);
var arSa$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arSa
}, [arSaExports]);
var arTn$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ar-tn", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e2) {
      return e2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return t.default.locale(d, null, true), d;
  });
})(arTn$2);
var arTnExports = arTn$2.exports;
var arTn = /* @__PURE__ */ getDefaultExportFromCjs(arTnExports);
var arTn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": arTn
}, [arTnExports]);
var ar$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = t(e), r = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), _ = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, d = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, o = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: r, monthsShort: r, weekStart: 6, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(e2) {
      return e2.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e3) {
        return d[e3];
      }).replace(/،/g, ",");
    }, postformat: function(e2) {
      return e2.replace(/\d/g, function(e3) {
        return _[e3];
      }).replace(/,/g, "،");
    }, ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return n.default.locale(o, null, true), o;
  });
})(ar$2);
var arExports = ar$2.exports;
var ar = /* @__PURE__ */ getDefaultExportFromCjs(arExports);
var ar$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ar
}, [arExports]);
var az$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var _ = e(a), t = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(a2) {
      return a2;
    } };
    return _.default.locale(t, null, true), t;
  });
})(az$2);
var azExports = az$2.exports;
var az = /* @__PURE__ */ getDefaultExportFromCjs(azExports);
var az$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": az
}, [azExports]);
var bg$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(e2) {
      var _2 = e2 % 100;
      if (_2 > 10 && _2 < 20)
        return e2 + "-ти";
      var t2 = e2 % 10;
      return 1 === t2 ? e2 + "-ви" : 2 === t2 ? e2 + "-ри" : 7 === t2 || 8 === t2 ? e2 + "-ми" : e2 + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return t.default.locale(d, null, true), d;
  });
})(bg$2);
var bgExports = bg$2.exports;
var bg = /* @__PURE__ */ getDefaultExportFromCjs(bgExports);
var bg$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bg
}, [bgExports]);
var bi$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = a(e), _ = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return n.default.locale(_, null, true), _;
  });
})(bi$2);
var biExports = bi$2.exports;
var bi = /* @__PURE__ */ getDefaultExportFromCjs(biExports);
var bi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bi
}, [biExports]);
var bm$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var l = e(a), t = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return l.default.locale(t, null, true), t;
  });
})(bm$2);
var bmExports = bm$2.exports;
var bm = /* @__PURE__ */ getDefaultExportFromCjs(bmExports);
var bm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bm
}, [bmExports]);
var bnBd$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = t(e), n = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, d = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, r = { name: "bn-bd", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), weekStart: 0, preparse: function(e2) {
      return e2.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e3) {
        return d[e3];
      });
    }, postformat: function(e2) {
      return e2.replace(/\d/g, function(e3) {
        return n[e3];
      });
    }, ordinal: function(e2) {
      var t2 = ["ই", "লা", "রা", "ঠা", "শে"], _2 = e2 % 100;
      return "[" + e2 + (t2[(_2 - 20) % 10] || t2[_2] || t2[0]) + "]";
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY খ্রিস্টাব্দ", LL: "D MMMM YYYY খ্রিস্টাব্দ", LLL: "D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়", LLLL: "dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়" }, meridiem: function(e2) {
      return e2 < 4 ? "রাত" : e2 < 6 ? "ভোর" : e2 < 12 ? "সকাল" : e2 < 15 ? "দুপুর" : e2 < 18 ? "বিকাল" : e2 < 20 ? "সন্ধ্যা" : "রাত";
    }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return _.default.locale(r, null, true), r;
  });
})(bnBd$2);
var bnBdExports = bnBd$2.exports;
var bnBd = /* @__PURE__ */ getDefaultExportFromCjs(bnBdExports);
var bnBd$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bnBd
}, [bnBdExports]);
var bn$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), n = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, d = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, o = { name: "bn", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), preparse: function(e2) {
      return e2.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e3) {
        return d[e3];
      });
    }, postformat: function(e2) {
      return e2.replace(/\d/g, function(e3) {
        return n[e3];
      });
    }, ordinal: function(e2) {
      return e2;
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return t.default.locale(o, null, true), o;
  });
})(bn$2);
var bnExports = bn$2.exports;
var bn = /* @__PURE__ */ getDefaultExportFromCjs(bnExports);
var bn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bn
}, [bnExports]);
var bo$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "bo", weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s ལ་", past: "%s སྔོན་ལ་", s: "ཏོག་ཙམ་", m: "སྐར་མ་གཅིག་", mm: "སྐར་མ་ %d", h: "ཆུ་ཚོད་གཅིག་", hh: "ཆུ་ཚོད་ %d", d: "ཉིན་གཅིག་", dd: "ཉིན་ %d", M: "ཟླ་བ་གཅིག་", MM: "ཟླ་བ་ %d", y: "ལོ་གཅིག་", yy: "ལོ་ %d" } };
    return t.default.locale(d, null, true), d;
  });
})(bo$2);
var boExports = bo$2.exports;
var bo = /* @__PURE__ */ getDefaultExportFromCjs(boExports);
var bo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": bo
}, [boExports]);
var br$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var u = n(e);
    function r(e2) {
      return e2 > 9 ? r(e2 % 10) : e2;
    }
    function t(e2, n2, u2) {
      return e2 + " " + function(e3, n3) {
        return 2 === n3 ? function(e4) {
          return { m: "v", b: "v", d: "z" }[e4.charAt(0)] + e4.substring(1);
        }(e3) : e3;
      }({ mm: "munutenn", MM: "miz", dd: "devezh" }[u2], e2);
    }
    var o = { name: "br", weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"), months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), weekStart: 1, weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, relativeTime: { future: "a-benn %s", past: "%s ʼzo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: function(e2) {
      switch (r(e2)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return e2 + " bloaz";
        default:
          return e2 + " vloaz";
      }
    } }, meridiem: function(e2) {
      return e2 < 12 ? "a.m." : "g.m.";
    } };
    return u.default.locale(o, null, true), o;
  });
})(br$2);
var brExports = br$2.exports;
var br = /* @__PURE__ */ getDefaultExportFromCjs(brExports);
var br$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": br
}, [brExports]);
var ca$2 = { exports: {} };
(function(module, exports) {
  !function(e, s) {
    module.exports = s(require$$0);
  }(commonjsGlobal, function(e) {
    function s(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = s(e), _ = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(e2) {
      return "" + e2 + (1 === e2 || 3 === e2 ? "r" : 2 === e2 ? "n" : 4 === e2 ? "t" : "è");
    } };
    return t.default.locale(_, null, true), _;
  });
})(ca$2);
var caExports = ca$2.exports;
var ca = /* @__PURE__ */ getDefaultExportFromCjs(caExports);
var ca$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ca
}, [caExports]);
var cs$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e);
    function s(e2) {
      return e2 > 1 && e2 < 5 && 1 != ~~(e2 / 10);
    }
    function r(e2, n2, t2, r2) {
      var d2 = e2 + " ";
      switch (t2) {
        case "s":
          return n2 || r2 ? "pár sekund" : "pár sekundami";
        case "m":
          return n2 ? "minuta" : r2 ? "minutu" : "minutou";
        case "mm":
          return n2 || r2 ? d2 + (s(e2) ? "minuty" : "minut") : d2 + "minutami";
        case "h":
          return n2 ? "hodina" : r2 ? "hodinu" : "hodinou";
        case "hh":
          return n2 || r2 ? d2 + (s(e2) ? "hodiny" : "hodin") : d2 + "hodinami";
        case "d":
          return n2 || r2 ? "den" : "dnem";
        case "dd":
          return n2 || r2 ? d2 + (s(e2) ? "dny" : "dní") : d2 + "dny";
        case "M":
          return n2 || r2 ? "měsíc" : "měsícem";
        case "MM":
          return n2 || r2 ? d2 + (s(e2) ? "měsíce" : "měsíců") : d2 + "měsíci";
        case "y":
          return n2 || r2 ? "rok" : "rokem";
        case "yy":
          return n2 || r2 ? d2 + (s(e2) ? "roky" : "let") : d2 + "lety";
      }
    }
    var d = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
    return t.default.locale(d, null, true), d;
  });
})(cs$2);
var csExports = cs$2.exports;
var cs = /* @__PURE__ */ getDefaultExportFromCjs(csExports);
var cs$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": cs
}, [csExports]);
var cv$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), n = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return t.default.locale(n, null, true), n;
  });
})(cv$2);
var cvExports = cv$2.exports;
var cv = /* @__PURE__ */ getDefaultExportFromCjs(cvExports);
var cv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": cv
}, [cvExports]);
var cy$2 = { exports: {} };
(function(module, exports) {
  !function(d, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(d) {
    function e(d2) {
      return d2 && "object" == typeof d2 && "default" in d2 ? d2 : { default: d2 };
    }
    var _ = e(d), a = { name: "cy", weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), weekStart: 1, weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), ordinal: function(d2) {
      return d2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" } };
    return _.default.locale(a, null, true), a;
  });
})(cy$2);
var cyExports = cy$2.exports;
var cy = /* @__PURE__ */ getDefaultExportFromCjs(cyExports);
var cy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": cy
}, [cyExports]);
var da$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var d = t(e), n = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
    return d.default.locale(n, null, true), n;
  });
})(da$2);
var daExports = da$2.exports;
var da = /* @__PURE__ */ getDefaultExportFromCjs(daExports);
var da$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": da
}, [daExports]);
var deAt$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function a(e2, n2, t2) {
      var a2 = i[t2];
      return Array.isArray(a2) && (a2 = a2[n2 ? 0 : 1]), a2.replace("%d", e2);
    }
    var r = { name: "de-at", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a } };
    return t.default.locale(r, null, true), r;
  });
})(deAt$2);
var deAtExports = deAt$2.exports;
var deAt = /* @__PURE__ */ getDefaultExportFromCjs(deAtExports);
var deAt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": deAt
}, [deAtExports]);
var deCh$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(e2, n2, t2) {
      var i2 = a[t2];
      return Array.isArray(i2) && (i2 = i2[n2 ? 0 : 1]), i2.replace("%d", e2);
    }
    var r = { name: "de-ch", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return t.default.locale(r, null, true), r;
  });
})(deCh$2);
var deChExports = deCh$2.exports;
var deCh = /* @__PURE__ */ getDefaultExportFromCjs(deChExports);
var deCh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": deCh
}, [deChExports]);
var de$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(e2, n2, t2) {
      var i2 = a[t2];
      return Array.isArray(i2) && (i2 = i2[n2 ? 0 : 1]), i2.replace("%d", e2);
    }
    var r = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return t.default.locale(r, null, true), r;
  });
})(de$2);
var deExports = de$2.exports;
var de = /* @__PURE__ */ getDefaultExportFromCjs(deExports);
var de$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": de
}, [deExports]);
var dv$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "dv", weekdays: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), months: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekStart: 7, weekdaysShort: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), monthsShort: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" } };
    return t.default.locale(d, null, true), d;
  });
})(dv$2);
var dvExports = dv$2.exports;
var dv = /* @__PURE__ */ getDefaultExportFromCjs(dvExports);
var dv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": dv
}, [dvExports]);
var el$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(e2) {
      return e2;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return t.default.locale(d, null, true), d;
  });
})(el$2);
var elExports = el$2.exports;
var el = /* @__PURE__ */ getDefaultExportFromCjs(elExports);
var el$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": el
}, [elExports]);
var enAu$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "en-au", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return t.default.locale(_, null, true), _;
  });
})(enAu$2);
var enAuExports = enAu$2.exports;
var enAu = /* @__PURE__ */ getDefaultExportFromCjs(enAuExports);
var enAu$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enAu
}, [enAuExports]);
var enGb$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e2) {
      var a2 = ["th", "st", "nd", "rd"], t2 = e2 % 100;
      return "[" + e2 + (a2[(t2 - 20) % 10] || a2[t2] || a2[0]) + "]";
    } };
    return t.default.locale(_, null, true), _;
  });
})(enGb$2);
var enGbExports = enGb$2.exports;
var enGb = /* @__PURE__ */ getDefaultExportFromCjs(enGbExports);
var enGb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enGb
}, [enGbExports]);
var enIe$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "en-ie", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return t.default.locale(_, null, true), _;
  });
})(enIe$2);
var enIeExports = enIe$2.exports;
var enIe = /* @__PURE__ */ getDefaultExportFromCjs(enIeExports);
var enIe$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enIe
}, [enIeExports]);
var enIl$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = a(e), t = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return _.default.locale(t, null, true), t;
  });
})(enIl$2);
var enIlExports = enIl$2.exports;
var enIl = /* @__PURE__ */ getDefaultExportFromCjs(enIlExports);
var enIl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enIl
}, [enIlExports]);
var enIn$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), n = { name: "en-in", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e2) {
      var a2 = ["th", "st", "nd", "rd"], t2 = e2 % 100;
      return "[" + e2 + (a2[(t2 - 20) % 10] || a2[t2] || a2[0]) + "]";
    } };
    return t.default.locale(n, null, true), n;
  });
})(enIn$2);
var enInExports = enIn$2.exports;
var enIn = /* @__PURE__ */ getDefaultExportFromCjs(enInExports);
var enIn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enIn
}, [enInExports]);
var enNz$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), n = { name: "en-nz", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e2) {
      var a2 = ["th", "st", "nd", "rd"], t2 = e2 % 100;
      return "[" + e2 + (a2[(t2 - 20) % 10] || a2[t2] || a2[0]) + "]";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return t.default.locale(n, null, true), n;
  });
})(enNz$2);
var enNzExports = enNz$2.exports;
var enNz = /* @__PURE__ */ getDefaultExportFromCjs(enNzExports);
var enNz$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enNz
}, [enNzExports]);
var enSg$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "en-sg", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return t.default.locale(_, null, true), _;
  });
})(enSg$2);
var enSgExports = enSg$2.exports;
var enSg = /* @__PURE__ */ getDefaultExportFromCjs(enSgExports);
var enSg$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enSg
}, [enSgExports]);
var enTt$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), _ = { name: "en-tt", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e2) {
      var t2 = ["th", "st", "nd", "rd"], a2 = e2 % 100;
      return "[" + e2 + (t2[(a2 - 20) % 10] || t2[a2] || t2[0]) + "]";
    } };
    return a.default.locale(_, null, true), _;
  });
})(enTt$2);
var enTtExports = enTt$2.exports;
var enTt = /* @__PURE__ */ getDefaultExportFromCjs(enTtExports);
var enTt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": enTt
}, [enTtExports]);
var en$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(e) {
      var n = ["th", "st", "nd", "rd"], t = e % 100;
      return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } };
  });
})(en$2);
var enExports = en$2.exports;
var en = /* @__PURE__ */ getDefaultExportFromCjs(enExports);
var en$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": en
}, [enExports]);
var eo$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = o(e), t = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return a.default.locale(t, null, true), t;
  });
})(eo$2);
var eoExports = eo$2.exports;
var eo = /* @__PURE__ */ getDefaultExportFromCjs(eoExports);
var eo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": eo
}, [eoExports]);
var esDo$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "es-do", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekStart: 1, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(d, null, true), d;
  });
})(esDo$2);
var esDoExports = esDo$2.exports;
var esDo = /* @__PURE__ */ getDefaultExportFromCjs(esDoExports);
var esDo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": esDo
}, [esDoExports]);
var esMx$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "es-mx", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" } };
    return s.default.locale(d, null, true), d;
  });
})(esMx$2);
var esMxExports = esMx$2.exports;
var esMx = /* @__PURE__ */ getDefaultExportFromCjs(esMxExports);
var esMx$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": esMx
}, [esMxExports]);
var esPr$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    } };
    return s.default.locale(d, null, true), d;
  });
})(esPr$2);
var esPrExports = esPr$2.exports;
var esPr = /* @__PURE__ */ getDefaultExportFromCjs(esPrExports);
var esPr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": esPr
}, [esPrExports]);
var esUs$2 = { exports: {} };
(function(module, exports) {
  !function(e, s) {
    module.exports = s(require$$0);
  }(commonjsGlobal, function(e) {
    function s(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var o = s(e), d = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return o.default.locale(d, null, true), d;
  });
})(esUs$2);
var esUsExports = esUs$2.exports;
var esUs = /* @__PURE__ */ getDefaultExportFromCjs(esUsExports);
var esUs$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": esUs
}, [esUsExports]);
var es$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    } };
    return s.default.locale(d, null, true), d;
  });
})(es$2);
var esExports = es$2.exports;
var es = /* @__PURE__ */ getDefaultExportFromCjs(esExports);
var es$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": es
}, [esExports]);
var et$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e);
    function u(e2, a2, t2, u2) {
      var s2 = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return a2 ? (s2[t2][2] ? s2[t2][2] : s2[t2][1]).replace("%d", e2) : (u2 ? s2[t2][0] : s2[t2][1]).replace("%d", e2);
    }
    var s = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: u, m: u, mm: u, h: u, hh: u, d: u, dd: "%d päeva", M: u, MM: u, y: u, yy: u }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return t.default.locale(s, null, true), s;
  });
})(et$2);
var etExports = et$2.exports;
var et = /* @__PURE__ */ getDefaultExportFromCjs(etExports);
var et$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": et
}, [etExports]);
var eu$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var t = e(a), l = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return t.default.locale(l, null, true), l;
  });
})(eu$2);
var euExports = eu$2.exports;
var eu = /* @__PURE__ */ getDefaultExportFromCjs(euExports);
var eu$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": eu
}, [euExports]);
var fa$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "fa", weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌_دو_سه‌_چه_پن_جم_شن".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekStart: 6, months: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"), monthsShort: "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "در %s", past: "%s قبل", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" } };
    return t.default.locale(d, null, true), d;
  });
})(fa$2);
var faExports = fa$2.exports;
var fa = /* @__PURE__ */ getDefaultExportFromCjs(faExports);
var fa$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": fa
}, [faExports]);
var fi$2 = { exports: {} };
(function(module, exports) {
  !function(u, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(u) {
    function e(u2) {
      return u2 && "object" == typeof u2 && "default" in u2 ? u2 : { default: u2 };
    }
    var t = e(u);
    function n(u2, e2, t2, n2) {
      var i2 = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, a = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, s = n2 && !e2 ? a : i2, _ = s[t2];
      return u2 < 10 ? _.replace("%d", s.numbers[u2]) : _.replace("%d", u2);
    }
    var i = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(u2) {
      return u2 + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
    return t.default.locale(i, null, true), i;
  });
})(fi$2);
var fiExports = fi$2.exports;
var fi = /* @__PURE__ */ getDefaultExportFromCjs(fiExports);
var fi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": fi
}, [fiExports]);
var fo$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), r = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return a.default.locale(r, null, true), r;
  });
})(fo$2);
var foExports = fo$2.exports;
var fo = /* @__PURE__ */ getDefaultExportFromCjs(foExports);
var fo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": fo
}, [foExports]);
var frCh$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var i = n(e), _ = { name: "fr-ch", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), weekStart: 1, weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" } };
    return i.default.locale(_, null, true), _;
  });
})(frCh$2);
var frChExports = frCh$2.exports;
var frCh = /* @__PURE__ */ getDefaultExportFromCjs(frChExports);
var frCh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": frCh
}, [frChExports]);
var fr$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(e2) {
      return "" + e2 + (1 === e2 ? "er" : "");
    } };
    return t.default.locale(i, null, true), i;
  });
})(fr$2);
var frExports = fr$2.exports;
var fr = /* @__PURE__ */ getDefaultExportFromCjs(frExports);
var fr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": fr
}, [frExports]);
var fy$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var i = n(e), t = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return i.default.locale(t, null, true), t;
  });
})(fy$2);
var fyExports = fy$2.exports;
var fy = /* @__PURE__ */ getDefaultExportFromCjs(fyExports);
var fy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": fy
}, [fyExports]);
var ga$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var i = e(a), n = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"), monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
    return i.default.locale(n, null, true), n;
  });
})(ga$2);
var gaExports = ga$2.exports;
var ga = /* @__PURE__ */ getDefaultExportFromCjs(gaExports);
var ga$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ga
}, [gaExports]);
var gd$2 = { exports: {} };
(function(module, exports) {
  !function(a, i) {
    module.exports = i(require$$0);
  }(commonjsGlobal, function(a) {
    function i(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var n = i(a), e = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return n.default.locale(e, null, true), e;
  });
})(gd$2);
var gdExports = gd$2.exports;
var gd = /* @__PURE__ */ getDefaultExportFromCjs(gdExports);
var gd$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": gd
}, [gdExports]);
var gl$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(e2) {
      return e2 + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return s.default.locale(d, null, true), d;
  });
})(gl$2);
var glExports = gl$2.exports;
var gl = /* @__PURE__ */ getDefaultExportFromCjs(glExports);
var gl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": gl
}, [glExports]);
var gomLatn$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), _ = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return a.default.locale(_, null, true), _;
  });
})(gomLatn$2);
var gomLatnExports = gomLatn$2.exports;
var gomLatn = /* @__PURE__ */ getDefaultExportFromCjs(gomLatnExports);
var gomLatn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": gomLatn
}, [gomLatnExports]);
var gu$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "gu", weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" } };
    return t.default.locale(d, null, true), d;
  });
})(gu$2);
var guExports = gu$2.exports;
var gu = /* @__PURE__ */ getDefaultExportFromCjs(guExports);
var gu$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": gu
}, [guExports]);
var he$2 = { exports: {} };
(function(module, exports) {
  !function(Y, M) {
    module.exports = M(require$$0);
  }(commonjsGlobal, function(Y) {
    function M(Y2) {
      return Y2 && "object" == typeof Y2 && "default" in Y2 ? Y2 : { default: Y2 };
    }
    var d = M(Y), e = { s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: "%d שעות", hh2: "שעתיים", d: "יום", dd: "%d ימים", dd2: "יומיים", M: "חודש", MM: "%d חודשים", MM2: "חודשיים", y: "שנה", yy: "%d שנים", yy2: "שנתיים" };
    function _(Y2, M2, d2) {
      return (e[d2 + (2 === Y2 ? "2" : "")] || e[d2]).replace("%d", Y2);
    }
    var l = { name: "he", weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"), months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"), relativeTime: { future: "בעוד %s", past: "לפני %s", s: _, m: _, mm: _, h: _, hh: _, d: _, dd: _, M: _, MM: _, y: _, yy: _ }, ordinal: function(Y2) {
      return Y2;
    }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" } };
    return d.default.locale(l, null, true), l;
  });
})(he$2);
var heExports = he$2.exports;
var he = /* @__PURE__ */ getDefaultExportFromCjs(heExports);
var he$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": he
}, [heExports]);
var hi$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
    return t.default.locale(d, null, true), d;
  });
})(hi$2);
var hiExports = hi$2.exports;
var hi = /* @__PURE__ */ getDefaultExportFromCjs(hiExports);
var hi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": hi
}, [hiExports]);
var hr$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), s = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), n = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), _ = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, o = function(e2, a2) {
      return _.test(a2) ? s[e2.month()] : n[e2.month()];
    };
    o.s = n, o.f = s;
    var i = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: o, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(e2) {
      return e2 + ".";
    } };
    return t.default.locale(i, null, true), i;
  });
})(hr$2);
var hrExports = hr$2.exports;
var hr = /* @__PURE__ */ getDefaultExportFromCjs(hrExports);
var hr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": hr
}, [hrExports]);
var ht$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var d = n(e), a = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return d.default.locale(a, null, true), a;
  });
})(ht$2);
var htExports = ht$2.exports;
var ht = /* @__PURE__ */ getDefaultExportFromCjs(htExports);
var ht$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ht
}, [htExports]);
var hu$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), r = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(e2, n2, t2, r2) {
      return "néhány másodperc" + (r2 || n2 ? "" : "e");
    }, m: function(e2, n2, t2, r2) {
      return "egy perc" + (r2 || n2 ? "" : "e");
    }, mm: function(e2, n2, t2, r2) {
      return e2 + " perc" + (r2 || n2 ? "" : "e");
    }, h: function(e2, n2, t2, r2) {
      return "egy " + (r2 || n2 ? "óra" : "órája");
    }, hh: function(e2, n2, t2, r2) {
      return e2 + " " + (r2 || n2 ? "óra" : "órája");
    }, d: function(e2, n2, t2, r2) {
      return "egy " + (r2 || n2 ? "nap" : "napja");
    }, dd: function(e2, n2, t2, r2) {
      return e2 + " " + (r2 || n2 ? "nap" : "napja");
    }, M: function(e2, n2, t2, r2) {
      return "egy " + (r2 || n2 ? "hónap" : "hónapja");
    }, MM: function(e2, n2, t2, r2) {
      return e2 + " " + (r2 || n2 ? "hónap" : "hónapja");
    }, y: function(e2, n2, t2, r2) {
      return "egy " + (r2 || n2 ? "év" : "éve");
    }, yy: function(e2, n2, t2, r2) {
      return e2 + " " + (r2 || n2 ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return t.default.locale(r, null, true), r;
  });
})(hu$2);
var huExports = hu$2.exports;
var hu = /* @__PURE__ */ getDefaultExportFromCjs(huExports);
var hu$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": hu
}, [huExports]);
var hyAm$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return t.default.locale(d, null, true), d;
  });
})(hyAm$2);
var hyAmExports = hyAm$2.exports;
var hyAm = /* @__PURE__ */ getDefaultExportFromCjs(hyAmExports);
var hyAm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": hyAm
}, [hyAmExports]);
var id$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(e2) {
      return e2 + ".";
    } };
    return t.default.locale(_, null, true), _;
  });
})(id$2);
var idExports = id$2.exports;
var id = /* @__PURE__ */ getDefaultExportFromCjs(idExports);
var id$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": id
}, [idExports]);
var is$2 = { exports: {} };
(function(module, exports) {
  !function(u, r) {
    module.exports = r(require$$0);
  }(commonjsGlobal, function(u) {
    function r(u2) {
      return u2 && "object" == typeof u2 && "default" in u2 ? u2 : { default: u2 };
    }
    var n = r(u), e = { s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"], m: ["mínúta", "mínútu", "mínútu"], mm: ["mínútur", "mínútur", "mínútum"], h: ["klukkustund", "klukkustund", "klukkustund"], hh: ["klukkustundir", "klukkustundir", "klukkustundum"], d: ["dagur", "dag", "degi"], dd: ["dagar", "daga", "dögum"], M: ["mánuður", "mánuð", "mánuði"], MM: ["mánuðir", "mánuði", "mánuðum"], y: ["ár", "ár", "ári"], yy: ["ár", "ár", "árum"] };
    function t(u2, r2, n2, t2) {
      var a2 = function(u3, r3, n3, t3) {
        var a3 = t3 ? 0 : n3 ? 1 : 2, d = 2 === u3.length && r3 % 10 == 1 ? u3[0] : u3, m = e[d][a3];
        return 1 === u3.length ? m : "%d " + m;
      }(n2, u2, t2, r2);
      return a2.replace("%d", u2);
    }
    var a = { name: "is", weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), ordinal: function(u2) {
      return u2;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t } };
    return n.default.locale(a, null, true), a;
  });
})(is$2);
var isExports = is$2.exports;
var is = /* @__PURE__ */ getDefaultExportFromCjs(isExports);
var is$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": is
}, [isExports]);
var itCh$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = o(e), t = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return n.default.locale(t, null, true), t;
  });
})(itCh$2);
var itChExports = itCh$2.exports;
var itCh = /* @__PURE__ */ getDefaultExportFromCjs(itChExports);
var itCh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": itCh
}, [itChExports]);
var it$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = o(e), n = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(e2) {
      return e2 + "º";
    } };
    return t.default.locale(n, null, true), n;
  });
})(it$2);
var itExports = it$2.exports;
var it = /* @__PURE__ */ getDefaultExportFromCjs(itExports);
var it$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": it
}, [itExports]);
var ja$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2) {
      return e2 + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(e2) {
      return e2 < 12 ? "午前" : "午後";
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } };
    return t.default.locale(d, null, true), d;
  });
})(ja$2);
var jaExports = ja$2.exports;
var ja = /* @__PURE__ */ getDefaultExportFromCjs(jaExports);
var ja$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ja
}, [jaExports]);
var jv$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), _ = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return t.default.locale(_, null, true), _;
  });
})(jv$2);
var jvExports = jv$2.exports;
var jv = /* @__PURE__ */ getDefaultExportFromCjs(jvExports);
var jv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": jv
}, [jvExports]);
var ka$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ka", weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "%s შემდეგ", past: "%s წინ", s: "წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათის", d: "დღეს", dd: "%d დღის განმავლობაში", M: "თვის", MM: "%d თვის", y: "წელი", yy: "%d წლის" }, ordinal: function(_2) {
      return _2;
    } };
    return t.default.locale(d, null, true), d;
  });
})(ka$2);
var kaExports = ka$2.exports;
var ka = /* @__PURE__ */ getDefaultExportFromCjs(kaExports);
var ka$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ka
}, [kaExports]);
var kk$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(d, null, true), d;
  });
})(kk$2);
var kkExports = kk$2.exports;
var kk = /* @__PURE__ */ getDefaultExportFromCjs(kkExports);
var kk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": kk
}, [kkExports]);
var ko$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var d = _(e), t = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e2) {
      return e2 < 12 ? "오전" : "오후";
    }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
    return d.default.locale(t, null, true), t;
  });
})(ko$2);
var koExports = ko$2.exports;
var ko = /* @__PURE__ */ getDefaultExportFromCjs(koExports);
var ko$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ko
}, [koExports]);
var ku$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    t(exports, require$$0);
  }(commonjsGlobal, function(e, t) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var r = n(t), d = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, o = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, u = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], i = { name: "ku", months: u, monthsShort: u, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(e2) {
      return e2.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e3) {
        return o[e3];
      }).replace(/،/g, ",");
    }, postformat: function(e2) {
      return e2.replace(/\d/g, function(e3) {
        return d[e3];
      }).replace(/,/g, "،");
    }, ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(e2) {
      return e2 < 12 ? "پ.ن" : "د.ن";
    }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
    r.default.locale(i, null, true), e.default = i, e.englishToArabicNumbersMap = d, Object.defineProperty(e, "__esModule", { value: true });
  });
})(ku$2, ku$2.exports);
var kuExports = ku$2.exports;
var ku = /* @__PURE__ */ getDefaultExportFromCjs(kuExports);
var ku$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ku
}, [kuExports]);
var ky$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ky", weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), weekStart: 1, weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" } };
    return t.default.locale(d, null, true), d;
  });
})(ky$2);
var kyExports = ky$2.exports;
var ky = /* @__PURE__ */ getDefaultExportFromCjs(kyExports);
var ky$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ky
}, [kyExports]);
var lb$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), n = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return t.default.locale(n, null, true), n;
  });
})(lb$2);
var lbExports = lb$2.exports;
var lb = /* @__PURE__ */ getDefaultExportFromCjs(lbExports);
var lb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": lb
}, [lbExports]);
var lo$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "lo", weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" } };
    return t.default.locale(d, null, true), d;
  });
})(lo$2);
var loExports = lo$2.exports;
var lo = /* @__PURE__ */ getDefaultExportFromCjs(loExports);
var lo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": lo
}, [loExports]);
var lt$2 = { exports: {} };
(function(module, exports) {
  !function(e, s) {
    module.exports = s(require$$0);
  }(commonjsGlobal, function(e) {
    function s(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var i = s(e), d = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), a = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), l = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, M = function(e2, s2) {
      return l.test(s2) ? d[e2.month()] : a[e2.month()];
    };
    M.s = a, M.f = d;
    var t = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: M, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return i.default.locale(t, null, true), t;
  });
})(lt$2);
var ltExports = lt$2.exports;
var lt = /* @__PURE__ */ getDefaultExportFromCjs(ltExports);
var lt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": lt
}, [ltExports]);
var lv$2 = { exports: {} };
(function(module, exports) {
  !function(e, s) {
    module.exports = s(require$$0);
  }(commonjsGlobal, function(e) {
    function s(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = s(e), d = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return t.default.locale(d, null, true), d;
  });
})(lv$2);
var lvExports = lv$2.exports;
var lv = /* @__PURE__ */ getDefaultExportFromCjs(lvExports);
var lv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": lv
}, [lvExports]);
var me$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = t(e), a = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return _.default.locale(a, null, true), a;
  });
})(me$2);
var meExports = me$2.exports;
var me = /* @__PURE__ */ getDefaultExportFromCjs(meExports);
var me$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": me
}, [meExports]);
var mi$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var i = a(e), t = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return i.default.locale(t, null, true), t;
  });
})(mi$2);
var miExports = mi$2.exports;
var mi = /* @__PURE__ */ getDefaultExportFromCjs(miExports);
var mi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": mi
}, [miExports]);
var mk$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
    return t.default.locale(d, null, true), d;
  });
})(mk$2);
var mkExports = mk$2.exports;
var mk = /* @__PURE__ */ getDefaultExportFromCjs(mkExports);
var mk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": mk
}, [mkExports]);
var ml$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ml", weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" } };
    return t.default.locale(d, null, true), d;
  });
})(ml$2);
var mlExports = ml$2.exports;
var ml = /* @__PURE__ */ getDefaultExportFromCjs(mlExports);
var ml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ml
}, [mlExports]);
var mn$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
    return t.default.locale(d, null, true), d;
  });
})(mn$2);
var mnExports = mn$2.exports;
var mn = /* @__PURE__ */ getDefaultExportFromCjs(mnExports);
var mn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": mn
}, [mnExports]);
var msMy$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), _ = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return t.default.locale(_, null, true), _;
  });
})(msMy$2);
var msMyExports = msMy$2.exports;
var msMy = /* @__PURE__ */ getDefaultExportFromCjs(msMyExports);
var msMy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": msMy
}, [msMyExports]);
var ms$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = a(e), s = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(e2) {
      return e2 + ".";
    } };
    return t.default.locale(s, null, true), s;
  });
})(ms$2);
var msExports = ms$2.exports;
var ms = /* @__PURE__ */ getDefaultExportFromCjs(msExports);
var ms$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ms
}, [msExports]);
var mt$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), i = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return a.default.locale(i, null, true), i;
  });
})(mt$2);
var mtExports = mt$2.exports;
var mt = /* @__PURE__ */ getDefaultExportFromCjs(mtExports);
var mt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": mt
}, [mtExports]);
var my$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "my", weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), weekStart: 1, weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" } };
    return t.default.locale(d, null, true), d;
  });
})(my$2);
var myExports = my$2.exports;
var my = /* @__PURE__ */ getDefaultExportFromCjs(myExports);
var my$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": my
}, [myExports]);
var nb$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = t(e), a = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
    return n.default.locale(a, null, true), a;
  });
})(nb$2);
var nbExports = nb$2.exports;
var nb = /* @__PURE__ */ getDefaultExportFromCjs(nbExports);
var nb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": nb
}, [nbExports]);
var ne$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ne", weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), relativeTime: { future: "%s पछि", past: "%s अघि", s: "सेकेन्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "घन्टा", hh: "%d घन्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक वर्ष", yy: "%d वर्ष" }, ordinal: function(e2) {
      return ("" + e2).replace(/\d/g, function(e3) {
        return "०१२३४५६७८९"[e3];
      });
    }, formats: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" } };
    return t.default.locale(d, null, true), d;
  });
})(ne$2);
var neExports = ne$2.exports;
var ne = /* @__PURE__ */ getDefaultExportFromCjs(neExports);
var ne$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ne
}, [neExports]);
var nlBe$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = a(e), d = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return n.default.locale(d, null, true), d;
  });
})(nlBe$2);
var nlBeExports = nlBe$2.exports;
var nlBe = /* @__PURE__ */ getDefaultExportFromCjs(nlBeExports);
var nlBe$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": nlBe
}, [nlBeExports]);
var nl$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var d = a(e), n = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e2) {
      return "[" + e2 + (1 === e2 || 8 === e2 || e2 >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return d.default.locale(n, null, true), n;
  });
})(nl$2);
var nlExports = nl$2.exports;
var nl = /* @__PURE__ */ getDefaultExportFromCjs(nlExports);
var nl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": nl
}, [nlExports]);
var nn$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = t(e), a = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return n.default.locale(a, null, true), a;
  });
})(nn$2);
var nnExports = nn$2.exports;
var nn = /* @__PURE__ */ getDefaultExportFromCjs(nnExports);
var nn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": nn
}, [nnExports]);
var ocLnc$2 = { exports: {} };
(function(module, exports) {
  !function(e, d) {
    module.exports = d(require$$0);
  }(commonjsGlobal, function(e) {
    function d(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = d(e), s = { name: "oc-lnc", weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), months: "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), monthsShort: "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, ordinal: function(e2) {
      return e2 + "º";
    } };
    return n.default.locale(s, null, true), s;
  });
})(ocLnc$2);
var ocLncExports = ocLnc$2.exports;
var ocLnc = /* @__PURE__ */ getDefaultExportFromCjs(ocLncExports);
var ocLnc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ocLnc
}, [ocLncExports]);
var paIn$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "pa-in", weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" } };
    return t.default.locale(d, null, true), d;
  });
})(paIn$2);
var paInExports = paIn$2.exports;
var paIn = /* @__PURE__ */ getDefaultExportFromCjs(paInExports);
var paIn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": paIn
}, [paInExports]);
var pl$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var i = t(e);
    function a(e2) {
      return e2 % 10 < 5 && e2 % 10 > 1 && ~~(e2 / 10) % 10 != 1;
    }
    function n(e2, t2, i2) {
      var n2 = e2 + " ";
      switch (i2) {
        case "m":
          return t2 ? "minuta" : "minutę";
        case "mm":
          return n2 + (a(e2) ? "minuty" : "minut");
        case "h":
          return t2 ? "godzina" : "godzinę";
        case "hh":
          return n2 + (a(e2) ? "godziny" : "godzin");
        case "MM":
          return n2 + (a(e2) ? "miesiące" : "miesięcy");
        case "yy":
          return n2 + (a(e2) ? "lata" : "lat");
      }
    }
    var r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), _ = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), s = /D MMMM/, d = function(e2, t2) {
      return s.test(t2) ? r[e2.month()] : _[e2.month()];
    };
    d.s = _, d.f = r;
    var o = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: n, mm: n, h: n, hh: n, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: n, y: "rok", yy: n }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return i.default.locale(o, null, true), o;
  });
})(pl$2);
var plExports = pl$2.exports;
var pl = /* @__PURE__ */ getDefaultExportFromCjs(plExports);
var pl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": pl
}, [plExports]);
var ptBr$2 = { exports: {} };
(function(module, exports) {
  !function(e, o) {
    module.exports = o(require$$0);
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = o(e), s = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e2) {
      return e2 + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return a.default.locale(s, null, true), s;
  });
})(ptBr$2);
var ptBrExports = ptBr$2.exports;
var ptBr = /* @__PURE__ */ getDefaultExportFromCjs(ptBrExports);
var ptBr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ptBr
}, [ptBrExports]);
var pt$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var o = a(e), t = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e2) {
      return e2 + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return o.default.locale(t, null, true), t;
  });
})(pt$2);
var ptExports = pt$2.exports;
var pt = /* @__PURE__ */ getDefaultExportFromCjs(ptExports);
var pt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": pt
}, [ptExports]);
var rn$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var t = e(a), u = { name: "rn", weekdays: "Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"), weekdaysShort: "Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"), weekdaysMin: "K7_K1_K2_K3_K4_K5_K6".split("_"), months: "Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"), monthsShort: "Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"), weekStart: 1, ordinal: function(a2) {
      return a2;
    }, relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(u, null, true), u;
  });
})(rn$2);
var rnExports = rn$2.exports;
var rn = /* @__PURE__ */ getDefaultExportFromCjs(rnExports);
var rn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": rn
}, [rnExports]);
var ro$2 = { exports: {} };
(function(module, exports) {
  !function(e, i) {
    module.exports = i(require$$0);
  }(commonjsGlobal, function(e) {
    function i(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = i(e), _ = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(e2) {
      return e2;
    } };
    return t.default.locale(_, null, true), _;
  });
})(ro$2);
var roExports = ro$2.exports;
var ro = /* @__PURE__ */ getDefaultExportFromCjs(roExports);
var ro$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ro
}, [roExports]);
var ru$2 = { exports: {} };
(function(module, exports) {
  !function(_, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(_) {
    function t(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var e = t(_), n = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), s = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), r = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), o = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function d(_2, t2, e2) {
      var n2, s2;
      return "m" === e2 ? t2 ? "минута" : "минуту" : _2 + " " + (n2 = +_2, s2 = { mm: t2 ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[e2].split("_"), n2 % 10 == 1 && n2 % 100 != 11 ? s2[0] : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? s2[1] : s2[2]);
    }
    var u = function(_2, t2) {
      return i.test(t2) ? n[_2.month()] : s[_2.month()];
    };
    u.s = s, u.f = n;
    var a = function(_2, t2) {
      return i.test(t2) ? r[_2.month()] : o[_2.month()];
    };
    a.s = o, a.f = r;
    var m = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: u, monthsShort: a, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: d, mm: d, h: "час", hh: d, d: "день", dd: d, M: "месяц", MM: d, y: "год", yy: d }, ordinal: function(_2) {
      return _2;
    }, meridiem: function(_2) {
      return _2 < 4 ? "ночи" : _2 < 12 ? "утра" : _2 < 17 ? "дня" : "вечера";
    } };
    return e.default.locale(m, null, true), m;
  });
})(ru$2);
var ruExports = ru$2.exports;
var ru = /* @__PURE__ */ getDefaultExportFromCjs(ruExports);
var ru$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ru
}, [ruExports]);
var rw$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var u = e(a), t = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(a2) {
      return a2;
    } };
    return u.default.locale(t, null, true), t;
  });
})(rw$2);
var rwExports = rw$2.exports;
var rw = /* @__PURE__ */ getDefaultExportFromCjs(rwExports);
var rw$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": rw
}, [rwExports]);
var sd$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
    return t.default.locale(d, null, true), d;
  });
})(sd$2);
var sdExports = sd$2.exports;
var sd = /* @__PURE__ */ getDefaultExportFromCjs(sdExports);
var sd$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sd
}, [sdExports]);
var se$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = a(e), t = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return n.default.locale(t, null, true), t;
  });
})(se$2);
var seExports = se$2.exports;
var se = /* @__PURE__ */ getDefaultExportFromCjs(seExports);
var se$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": se
}, [seExports]);
var si$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return t.default.locale(d, null, true), d;
  });
})(si$2);
var siExports = si$2.exports;
var si = /* @__PURE__ */ getDefaultExportFromCjs(siExports);
var si$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": si
}, [siExports]);
var sk$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = t(e);
    function r(e2) {
      return e2 > 1 && e2 < 5 && 1 != ~~(e2 / 10);
    }
    function o(e2, t2, n2, o2) {
      var a2 = e2 + " ";
      switch (n2) {
        case "s":
          return t2 || o2 ? "pár sekúnd" : "pár sekundami";
        case "m":
          return t2 ? "minúta" : o2 ? "minútu" : "minútou";
        case "mm":
          return t2 || o2 ? a2 + (r(e2) ? "minúty" : "minút") : a2 + "minútami";
        case "h":
          return t2 ? "hodina" : o2 ? "hodinu" : "hodinou";
        case "hh":
          return t2 || o2 ? a2 + (r(e2) ? "hodiny" : "hodín") : a2 + "hodinami";
        case "d":
          return t2 || o2 ? "deň" : "dňom";
        case "dd":
          return t2 || o2 ? a2 + (r(e2) ? "dni" : "dní") : a2 + "dňami";
        case "M":
          return t2 || o2 ? "mesiac" : "mesiacom";
        case "MM":
          return t2 || o2 ? a2 + (r(e2) ? "mesiace" : "mesiacov") : a2 + "mesiacmi";
        case "y":
          return t2 || o2 ? "rok" : "rokom";
        case "yy":
          return t2 || o2 ? a2 + (r(e2) ? "roky" : "rokov") : a2 + "rokmi";
      }
    }
    var a = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return n.default.locale(a, null, true), a;
  });
})(sk$2);
var skExports = sk$2.exports;
var sk = /* @__PURE__ */ getDefaultExportFromCjs(skExports);
var sk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sk
}, [skExports]);
var sl$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = t(e), n = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return _.default.locale(n, null, true), n;
  });
})(sl$2);
var slExports = sl$2.exports;
var sl = /* @__PURE__ */ getDefaultExportFromCjs(slExports);
var sl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sl
}, [slExports]);
var sq$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = t(e), n = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return _.default.locale(n, null, true), n;
  });
})(sq$2);
var sqExports = sq$2.exports;
var sq = /* @__PURE__ */ getDefaultExportFromCjs(sqExports);
var sq$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sq
}, [sqExports]);
var sr$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), r = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(e2, t2) {
      return e2 % 10 >= 1 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? e2 % 10 == 1 ? t2[0] : t2[1] : t2[2];
    }, relativeTimeFormatter: function(e2, t2, a2, d2) {
      var n = r.words[a2];
      if (1 === a2.length)
        return "y" === a2 && t2 ? "jedna godina" : d2 || t2 ? n[0] : n[1];
      var i = r.correctGrammarCase(e2, n);
      return "yy" === a2 && t2 && "%d godinu" === i ? e2 + " godina" : i.replace("%d", e2);
    } }, d = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: r.relativeTimeFormatter, mm: r.relativeTimeFormatter, h: r.relativeTimeFormatter, hh: r.relativeTimeFormatter, d: r.relativeTimeFormatter, dd: r.relativeTimeFormatter, M: r.relativeTimeFormatter, MM: r.relativeTimeFormatter, y: r.relativeTimeFormatter, yy: r.relativeTimeFormatter }, ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return a.default.locale(d, null, true), d;
  });
})(sr$2);
var srExports = sr$2.exports;
var sr = /* @__PURE__ */ getDefaultExportFromCjs(srExports);
var sr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sr
}, [srExports]);
var srCyrl$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var r = t(e), a = { words: { m: ["један минут", "једног минута"], mm: ["%d минут", "%d минута", "%d минута"], h: ["један сат", "једног сата"], hh: ["%d сат", "%d сата", "%d сати"], d: ["један дан", "једног дана"], dd: ["%d дан", "%d дана", "%d дана"], M: ["један месец", "једног месеца"], MM: ["%d месец", "%d месеца", "%d месеци"], y: ["једну годину", "једне године"], yy: ["%d годину", "%d године", "%d година"] }, correctGrammarCase: function(e2, t2) {
      return e2 % 10 >= 1 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? e2 % 10 == 1 ? t2[0] : t2[1] : t2[2];
    }, relativeTimeFormatter: function(e2, t2, r2, d2) {
      var i = a.words[r2];
      if (1 === r2.length)
        return "y" === r2 && t2 ? "једна година" : d2 || t2 ? i[0] : i[1];
      var m = a.correctGrammarCase(e2, i);
      return "yy" === r2 && t2 && "%d годину" === m ? e2 + " година" : m.replace("%d", e2);
    } }, d = { name: "sr-cyrl", weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"), weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"), monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: a.relativeTimeFormatter, mm: a.relativeTimeFormatter, h: a.relativeTimeFormatter, hh: a.relativeTimeFormatter, d: a.relativeTimeFormatter, dd: a.relativeTimeFormatter, M: a.relativeTimeFormatter, MM: a.relativeTimeFormatter, y: a.relativeTimeFormatter, yy: a.relativeTimeFormatter }, ordinal: function(e2) {
      return e2 + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return r.default.locale(d, null, true), d;
  });
})(srCyrl$2);
var srCyrlExports = srCyrl$2.exports;
var srCyrl = /* @__PURE__ */ getDefaultExportFromCjs(srCyrlExports);
var srCyrl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": srCyrl
}, [srCyrlExports]);
var ss$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = n(e), i = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return a.default.locale(i, null, true), i;
  });
})(ss$2);
var ssExports = ss$2.exports;
var ss = /* @__PURE__ */ getDefaultExportFromCjs(ssExports);
var ss$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ss
}, [ssExports]);
var svFi$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), d = { name: "sv-fi", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
      var t2 = e2 % 10;
      return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY, [kl.] HH.mm", LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [kl.] HH.mm", llll: "ddd, D. MMM YYYY, [kl.] HH.mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return a.default.locale(d, null, true), d;
  });
})(svFi$2);
var svFiExports = svFi$2.exports;
var svFi = /* @__PURE__ */ getDefaultExportFromCjs(svFiExports);
var svFi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": svFi
}, [svFiExports]);
var sv$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var a = t(e), d = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
      var t2 = e2 % 10;
      return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return a.default.locale(d, null, true), d;
  });
})(sv$2);
var svExports = sv$2.exports;
var sv = /* @__PURE__ */ getDefaultExportFromCjs(svExports);
var sv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sv
}, [svExports]);
var sw$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var i = e(a), t = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(a2) {
      return a2;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return i.default.locale(t, null, true), t;
  });
})(sw$2);
var swExports = sw$2.exports;
var sw = /* @__PURE__ */ getDefaultExportFromCjs(swExports);
var sw$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": sw
}, [swExports]);
var ta$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return t.default.locale(d, null, true), d;
  });
})(ta$2);
var taExports = ta$2.exports;
var ta = /* @__PURE__ */ getDefaultExportFromCjs(taExports);
var ta$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ta
}, [taExports]);
var te$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return t.default.locale(d, null, true), d;
  });
})(te$2);
var teExports = te$2.exports;
var te = /* @__PURE__ */ getDefaultExportFromCjs(teExports);
var te$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": te
}, [teExports]);
var tg$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
    return t.default.locale(d, null, true), d;
  });
})(tg$2);
var tgExports = tg$2.exports;
var tg = /* @__PURE__ */ getDefaultExportFromCjs(tgExports);
var tg$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tg
}, [tgExports]);
var th$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(_2) {
      return _2 + ".";
    } };
    return t.default.locale(d, null, true), d;
  });
})(th$2);
var thExports = th$2.exports;
var th = /* @__PURE__ */ getDefaultExportFromCjs(thExports);
var th$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": th
}, [thExports]);
var tk$2 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), _ = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(e2) {
      return e2 + ".";
    } };
    return t.default.locale(_, null, true), _;
  });
})(tk$2);
var tkExports = tk$2.exports;
var tk = /* @__PURE__ */ getDefaultExportFromCjs(tkExports);
var tk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tk
}, [tkExports]);
var tlPh$2 = { exports: {} };
(function(module, exports) {
  !function(e, a) {
    module.exports = a(require$$0);
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = a(e), t = { name: "tl-ph", weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), weekStart: 1, weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" } };
    return n.default.locale(t, null, true), t;
  });
})(tlPh$2);
var tlPhExports = tlPh$2.exports;
var tlPh = /* @__PURE__ */ getDefaultExportFromCjs(tlPhExports);
var tlPh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tlPh
}, [tlPhExports]);
var tlh$2 = { exports: {} };
(function(module, exports) {
  !function(a, j) {
    module.exports = j(require$$0);
  }(commonjsGlobal, function(a) {
    function j(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var t = j(a), e = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(e, null, true), e;
  });
})(tlh$2);
var tlhExports = tlh$2.exports;
var tlh = /* @__PURE__ */ getDefaultExportFromCjs(tlhExports);
var tlh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tlh
}, [tlhExports]);
var tr$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var t = e(a), _ = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(a2) {
      return a2 + ".";
    } };
    return t.default.locale(_, null, true), _;
  });
})(tr$2);
var trExports = tr$2.exports;
var tr = /* @__PURE__ */ getDefaultExportFromCjs(trExports);
var tr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tr
}, [trExports]);
var tzl$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), a = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return t.default.locale(a, null, true), a;
  });
})(tzl$2);
var tzlExports = tzl$2.exports;
var tzl = /* @__PURE__ */ getDefaultExportFromCjs(tzlExports);
var tzl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tzl
}, [tzlExports]);
var tzmLatn$2 = { exports: {} };
(function(module, exports) {
  !function(a, s) {
    module.exports = s(require$$0);
  }(commonjsGlobal, function(a) {
    function s(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var n = s(a), i = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return n.default.locale(i, null, true), i;
  });
})(tzmLatn$2);
var tzmLatnExports = tzmLatn$2.exports;
var tzmLatn = /* @__PURE__ */ getDefaultExportFromCjs(tzmLatnExports);
var tzmLatn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tzmLatn
}, [tzmLatnExports]);
var tzm$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "tzm", weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekStart: 6, weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" } };
    return t.default.locale(d, null, true), d;
  });
})(tzm$2);
var tzmExports = tzm$2.exports;
var tzm = /* @__PURE__ */ getDefaultExportFromCjs(tzmExports);
var tzm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": tzm
}, [tzmExports]);
var ugCn$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return t.default.locale(d, null, true), d;
  });
})(ugCn$2);
var ugCnExports = ugCn$2.exports;
var ugCn = /* @__PURE__ */ getDefaultExportFromCjs(ugCnExports);
var ugCn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ugCn
}, [ugCnExports]);
var uk$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), s = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), n = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), o = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function d(_2, e2, t2) {
      var s2, n2;
      return "m" === t2 ? e2 ? "хвилина" : "хвилину" : "h" === t2 ? e2 ? "година" : "годину" : _2 + " " + (s2 = +_2, n2 = { ss: e2 ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: e2 ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: e2 ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[t2].split("_"), s2 % 10 == 1 && s2 % 100 != 11 ? n2[0] : s2 % 10 >= 2 && s2 % 10 <= 4 && (s2 % 100 < 10 || s2 % 100 >= 20) ? n2[1] : n2[2]);
    }
    var i = function(_2, e2) {
      return o.test(e2) ? s[_2.month()] : n[_2.month()];
    };
    i.s = n, i.f = s;
    var r = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: i, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: d, mm: d, h: d, hh: d, d: "день", dd: d, M: "місяць", MM: d, y: "рік", yy: d }, ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
    return t.default.locale(r, null, true), r;
  });
})(uk$2);
var ukExports = uk$2.exports;
var uk = /* @__PURE__ */ getDefaultExportFromCjs(ukExports);
var uk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": uk
}, [ukExports]);
var ur$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "ur", weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekStart: 1, weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" } };
    return t.default.locale(d, null, true), d;
  });
})(ur$2);
var urExports = ur$2.exports;
var ur = /* @__PURE__ */ getDefaultExportFromCjs(urExports);
var ur$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": ur
}, [urExports]);
var uzLatn$2 = { exports: {} };
(function(module, exports) {
  !function(a, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(a) {
    function e(a2) {
      return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
    }
    var n = e(a), _ = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(a2) {
      return a2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return n.default.locale(_, null, true), _;
  });
})(uzLatn$2);
var uzLatnExports = uzLatn$2.exports;
var uzLatn = /* @__PURE__ */ getDefaultExportFromCjs(uzLatnExports);
var uzLatn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": uzLatn
}, [uzLatnExports]);
var uz$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(_2) {
      return _2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
    return t.default.locale(d, null, true), d;
  });
})(uz$2);
var uzExports = uz$2.exports;
var uz = /* @__PURE__ */ getDefaultExportFromCjs(uzExports);
var uz$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": uz
}, [uzExports]);
var vi$2 = { exports: {} };
(function(module, exports) {
  !function(t, n) {
    module.exports = n(require$$0);
  }(commonjsGlobal, function(t) {
    function n(t2) {
      return t2 && "object" == typeof t2 && "default" in t2 ? t2 : { default: t2 };
    }
    var h = n(t), _ = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(t2) {
      return t2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return h.default.locale(_, null, true), _;
  });
})(vi$2);
var viExports = vi$2.exports;
var vi = /* @__PURE__ */ getDefaultExportFromCjs(viExports);
var vi$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": vi
}, [viExports]);
var xPseudo$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(require$$0);
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var _ = t(e), d = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return _.default.locale(d, null, true), d;
  });
})(xPseudo$2);
var xPseudoExports = xPseudo$2.exports;
var xPseudo = /* @__PURE__ */ getDefaultExportFromCjs(xPseudoExports);
var xPseudo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": xPseudo
}, [xPseudoExports]);
var yo$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), a = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return t.default.locale(a, null, true), a;
  });
})(yo$2);
var yoExports = yo$2.exports;
var yo = /* @__PURE__ */ getDefaultExportFromCjs(yoExports);
var yo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": yo
}, [yoExports]);
var zhCn$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
      return "W" === _2 ? e2 + "周" : e2 + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
      var t2 = 100 * e2 + _2;
      return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
    } };
    return t.default.locale(d, null, true), d;
  });
})(zhCn$2);
var zhCnExports = zhCn$2.exports;
var zhCn = /* @__PURE__ */ getDefaultExportFromCjs(zhCnExports);
var zhCn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": zhCn
}, [zhCnExports]);
var zhHk$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(_2, e2) {
      return "W" === e2 ? _2 + "週" : _2 + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" } };
    return t.default.locale(d, null, true), d;
  });
})(zhHk$2);
var zhHkExports = zhHk$2.exports;
var zhHk = /* @__PURE__ */ getDefaultExportFromCjs(zhHkExports);
var zhHk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": zhHk
}, [zhHkExports]);
var zhTw$2 = { exports: {} };
(function(module, exports) {
  !function(_, e) {
    module.exports = e(require$$0);
  }(commonjsGlobal, function(_) {
    function e(_2) {
      return _2 && "object" == typeof _2 && "default" in _2 ? _2 : { default: _2 };
    }
    var t = e(_), d = { name: "zh-tw", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(_2, e2) {
      return "W" === e2 ? _2 + "週" : _2 + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }, meridiem: function(_2, e2) {
      var t2 = 100 * _2 + e2;
      return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
    } };
    return t.default.locale(d, null, true), d;
  });
})(zhTw$2);
var zhTwExports = zhTw$2.exports;
var zhTw = /* @__PURE__ */ getDefaultExportFromCjs(zhTwExports);
var zhTw$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": zhTw
}, [zhTwExports]);
var zh$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(require$$0);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "zh", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
      return "W" === _2 ? e2 + "周" : e2 + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s后", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
      var t2 = 100 * e2 + _2;
      return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
    } };
    return t.default.locale(d, null, true), d;
  });
})(zh$2);
var zhExports = zh$2.exports;
var zh = /* @__PURE__ */ getDefaultExportFromCjs(zhExports);
var zh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": zh
}, [zhExports]);
function Interaction({ auth, application, org, applications, interaction, attachments }) {
  const currentDate = /* @__PURE__ */ new Date();
  const [dateTimeValue, setDateTimeValue] = reactExports.useState({
    startDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1e3),
    endDate: currentDate
  });
  const handleDateChange = (newValue) => {
    setDateTimeValue(newValue);
  };
  const configs = {
    footer: {
      cancel: "Cancel",
      apply: "Apply"
    }
  };
  const headerActions = interaction.header_actions && interaction.header_actions.length > 0 ? interaction.header_actions.map((column) => {
    return {
      "type": column.type,
      "label": column.label,
      "button": column.button,
      "action": column.action_link,
      "attachments": column.attachments.map((attachment) => {
        return {
          "key": attachment.key,
          "value": attachment.value
        };
      })
    };
  }) : [];
  const breadCrumbs = interaction.breadcrumbs && interaction.breadcrumbs.length > 0 ? interaction.breadcrumbs.map((column) => {
    return {
      "type": column.type,
      "label": column.label,
      "button": column.button,
      "icon": column.icon,
      "action": column.action_link,
      "attachments": column.attachments.map((attachment) => {
        return {
          "key": attachment.key,
          "value": attachment.value
        };
      })
    };
  }) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AppLayout,
    {
      user: auth.user,
      org,
      application,
      applications,
      title: interaction.name,
      children: [
        (headerActions.length > 0 || breadCrumbs.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white border-b-2 border-t border-l pb-1 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-0 pt-1  px-4 text-gray-900 flex flex-col md:flex-row text-right align-rightpr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-1 flex-col ", "aria-label": "Breadcrumb", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse h-8", children: breadCrumbs.map((crumb, index) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center", children: [
                index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon: "chevron-right", className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ae, { href: "#", className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white", children: [
                  index <= 0 && crumb.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(AppIcon, { icon: crumb.icon, className: "w-4 h-4 mr-2" }),
                  crumb.label
                ] })
              ] });
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ml-1 mt-1 mb-2 inline-flex items-center text-md text-gray-700 dark:text-gray-400", children: interaction.name }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse h-8", children: headerActions.map((action) => {
              if (action.type != "date_range") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "inline-flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItem, { action, data: action.data, icon: action.icon }) });
              } else {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
              }
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse", children: headerActions.map((action) => {
              if (action.type == "date_range") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "inline-flex items-center w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Datepicker,
                  {
                    inputClassName: "border border-gray-300 focus:border-indigo-500 text-xs focus:ring-indigo-500 rounded-sm shadow-sm py-1 w-full px-4 pr-8",
                    value: dateTimeValue,
                    configs,
                    onChange: handleDateChange,
                    primaryColor: "indigo",
                    showShortcuts: true
                  }
                ) });
              } else {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
              }
            }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col p-2 md:p-4 gap-4", children: interaction.rows.map((row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full grid grid-cols-12 gap-4", children: row.elements.map((element) => {
            if (element.element_type === "datatable") {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IFrameWindow, { src: route("app.element.datatable", {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments
              }) }) });
            } else if (element.element_type === "form") {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IFrameWindow, { src: route("app.element.form", {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments
              }) }) });
            } else if (element.element_type === "custom") {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IFrameWindow, { src: route(element.element_slug, {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments,
                startDate: dateTimeValue.startDate,
                endDate: dateTimeValue.endDate
              }) }) });
            } else if (element.element_type === "tabs") {
              console.log(element);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element: {
                width: "full"
              }, wrapperClassName: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(st.Group, { onChange: () => postHeight(), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(st.List, { className: "flex space-x-1 rounded-sm bg-blue-900/20 p-1 mt-6", children: element.tabs.map((tab) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    st,
                    {
                      className: ({ selected }) => classNames$1(
                        "flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected ? "bg-white text-slate-800 shadow" : "text-slate-500 hover:bg-white/[0.12] hover:text-white"
                      ),
                      children: tab.title
                    }
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(st.Panels, { className: "mt-2", children: element.tabs.map((tab) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    st.Panel,
                    {
                      className: classNames$1(
                        "p-3 grid grid-cols-12 gap-4 rounded-sm shadow-md bg-white text-gray-500 text-sm"
                      ),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowElement, { element: tab, wrapperClassName: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IFrameWindow, { src: route(tab.element_slug, {
                        app_slug: application.slug,
                        element_slug: tab.element_slug,
                        ...attachments
                      }) }) })
                    }
                  );
                }) })
              ] }) });
            }
          }) });
        }) })
      ]
    }
  );
}
export {
  Interaction as default
};
