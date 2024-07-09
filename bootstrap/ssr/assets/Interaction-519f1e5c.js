import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import classNames from "classnames";
import { useRef, useState, useEffect, Fragment } from "react";
import { A as AppIcon, a as AppLayout, R as RowElement } from "./AppLayout-d9bad2db.js";
import { Transition, Dialog, Tab } from "@headlessui/react";
import { router, Link } from "@inertiajs/react";
import { p as postHeight } from "./iframewapper_helper-4a327444.js";
import { A as ActionItem } from "./ActionItem-525e3803.js";
import Datepicker from "react-tailwindcss-datepicker";
import "ziggy-js";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
function IFrameWindow({ src, className = "" }) {
  const containerRef = useRef(null);
  const [height, setHeight] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let [iFrameSrc, setIFrameSrc] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [renderedIframe, setRenderedIframe] = useState(src);
  const [modelSize, setModelSize] = useState("md");
  function closeModal() {
    setIsOpen(false);
  }
  function iframeLoaded(e) {
    setRenderedIframe(e.target.src);
    setIsLoading(false);
  }
  useEffect(() => {
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
          router.visit(ev.data.message);
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
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, children: [
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isLoading, children: /* @__PURE__ */ jsx("div", { className: "w-full text-center ", children: /* @__PURE__ */ jsxs("div", { className: "bg-white mx-auto py-2.5 px-2", children: [
      /* @__PURE__ */ jsx(AppIcon, { className: "animate-spin inline-block mr-1 h-6 w-6", icon: `loader` }),
      " Loading..."
    ] }) }) }),
    /* @__PURE__ */ jsx("iframe", { onLoad: (e) => iframeLoaded(e), className: classNames(`w-full`, className, { "hidden": isLoading }), src, style: { height: isLoading ? "0px" : height != "" ? height + `px` : "1000px" }, frameBorder: "0", scrolling: "no" }),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: closeModal, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-0 text-center", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsx(Dialog.Panel, { className: classNames("w-full transform overflow-hidden rounded-sm bg-white p-0 text-left align-middle shadow-xl transition-all max-h-lg", {
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
          }), children: /* @__PURE__ */ jsx("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ jsx(IFrameWindow, { src: iFrameSrc }) }) })
        }
      ) }) })
    ] }) })
  ] });
}
function Interaction({ auth, application, org, applications, interaction, attachments }) {
  const currentDate = /* @__PURE__ */ new Date();
  const [dateTimeValue, setDateTimeValue] = useState({
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
  return /* @__PURE__ */ jsxs(
    AppLayout,
    {
      user: auth.user,
      org,
      application,
      applications,
      title: interaction.name,
      children: [
        (headerActions.length > 0 || breadCrumbs.length > 0) && /* @__PURE__ */ jsx("div", { className: "flex-1 bg-white border-b-2 border-t border-l pb-1 shadow-inner", children: /* @__PURE__ */ jsxs("div", { className: "pb-0 pt-1  px-4 text-gray-900 flex flex-col md:flex-row text-right align-rightpr-6", children: [
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-1 flex-col ", "aria-label": "Breadcrumb", children: [
            /* @__PURE__ */ jsx("ol", { className: "inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse h-8", children: breadCrumbs.map((crumb, index) => {
              return /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center", children: [
                index > 0 && /* @__PURE__ */ jsx(AppIcon, { icon: "chevron-right", className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ jsxs(Link, { href: "#", className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white", children: [
                  index <= 0 && crumb.icon && /* @__PURE__ */ jsx(AppIcon, { icon: crumb.icon, className: "w-4 h-4 mr-2" }),
                  crumb.label
                ] })
              ] });
            }) }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("h2", { className: "ml-1 mt-1 mb-2 inline-flex items-center text-md text-gray-700 dark:text-gray-400", children: interaction.name }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ jsx("ol", { className: "inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse h-8", children: headerActions.map((action) => {
              if (action.type != "date_range") {
                return /* @__PURE__ */ jsx("li", { className: "inline-flex items-center", children: /* @__PURE__ */ jsx(ActionItem, { action, data: action.data, icon: action.icon }) });
              } else {
                return /* @__PURE__ */ jsx(Fragment$1, {});
              }
            }) }),
            /* @__PURE__ */ jsx("ol", { className: "inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse", children: headerActions.map((action) => {
              if (action.type == "date_range") {
                return /* @__PURE__ */ jsx("li", { className: "inline-flex items-center w-full", children: /* @__PURE__ */ jsx(
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
                return /* @__PURE__ */ jsx(Fragment$1, {});
              }
            }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "w-full flex flex-col p-2 md:p-4 gap-4", children: interaction.rows.map((row) => {
          return /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-12 gap-4", children: row.elements.map((element) => {
            if (element.element_type === "datatable") {
              return /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsx(IFrameWindow, { src: route("app.element.datatable", {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments
              }) }) });
            } else if (element.element_type === "form") {
              return /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsx(IFrameWindow, { src: route("app.element.form", {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments
              }) }) });
            } else if (element.element_type === "custom") {
              return /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-4 flex-1", children: /* @__PURE__ */ jsx(IFrameWindow, { src: route(element.element_slug, {
                app_slug: application.slug,
                element_slug: element.element_slug,
                ...attachments,
                startDate: dateTimeValue.startDate,
                endDate: dateTimeValue.endDate
              }) }) });
            } else if (element.element_type === "tabs") {
              console.log(element);
              return /* @__PURE__ */ jsx(RowElement, { element: {
                width: "full"
              }, wrapperClassName: "flex-1", children: /* @__PURE__ */ jsxs(Tab.Group, { onChange: () => postHeight(), children: [
                /* @__PURE__ */ jsx(Tab.List, { className: "flex space-x-1 rounded-sm bg-blue-900/20 p-1 mt-6", children: element.tabs.map((tab) => {
                  return /* @__PURE__ */ jsx(
                    Tab,
                    {
                      className: ({ selected }) => classNames(
                        "flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected ? "bg-white text-slate-800 shadow" : "text-slate-500 hover:bg-white/[0.12] hover:text-white"
                      ),
                      children: tab.title
                    }
                  );
                }) }),
                /* @__PURE__ */ jsx(Tab.Panels, { className: "mt-2", children: element.tabs.map((tab) => {
                  return /* @__PURE__ */ jsx(
                    Tab.Panel,
                    {
                      className: classNames(
                        "p-3 grid grid-cols-12 gap-4 rounded-sm shadow-md bg-white text-gray-500 text-sm"
                      ),
                      children: /* @__PURE__ */ jsx(RowElement, { element: tab, wrapperClassName: "flex-1 p-4", children: /* @__PURE__ */ jsx(IFrameWindow, { src: route(tab.element_slug, {
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
