import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { createContext, useState, useContext, Fragment as Fragment$1, useRef, useEffect, lazy, Suspense } from "react";
import { Link, Head } from "@inertiajs/react";
import classNames from "classnames";
import { route as route$1 } from "ziggy-js";
import { Transition, Dialog, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import FeatherIcon from "feather-icons-react";
import { Icon } from "@ailibs/feather-react-ts";
function parseMenu(application) {
  return application && application.menu && application.menu.length > 0 ? application.menu.map((menu) => {
    return {
      label: menu.label,
      icon: menu.icon,
      is_hidden: menu.is_hidden,
      href: route("processton-client.app.interaction", {
        app_slug: application.slug,
        interaction_slug: menu.slug
      }),
      slug: "/" + application.slug + "/" + menu.slug,
      hidden_links: (menu == null ? void 0 : menu.hidden_links) ? menu.hidden_links.map((item) => {
        return route("processton-client.app.interaction", {
          app_slug: application.slug,
          interaction_slug: item
        });
      }) : [],
      children: (menu == null ? void 0 : menu.children) ? menu.children.map((item) => {
        return {
          label: item.label,
          is_hidden: item.is_hidden,
          icon: item.icon,
          href: route("processton-client.app.interaction", {
            app_slug: application.slug,
            interaction_slug: item.slug
          }),
          hidden_links: (item == null ? void 0 : item.hidden_links) ? item.hidden_links.map((item2) => {
            return route("processton-client.app.interaction", {
              app_slug: application.slug,
              interaction_slug: item2
            });
          }) : []
        };
      }) : []
    };
  }) : [];
}
function OrgLogo({ org, theme }) {
  return /* @__PURE__ */ jsx(Fragment, { children: org && /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: (org == null ? void 0 : org.name) && /* @__PURE__ */ jsxs(Link, { href: "/", className: "cursor-pointer shrink-0 flex items-center", children: [
    org.full_logo_path && /* @__PURE__ */ jsx("img", { className: classNames("h-6 my-1 w-auto fill-current", {
      "flex-1": theme.nav_bar == "minified_side",
      "flex-0": theme.nav_bar != "minified_side"
    }), src: org.full_logo_path }),
    theme.nav_bar != "minified_side" && /* @__PURE__ */ jsx("h3", { className: "ml-3 text-xl flex-1", children: org.name })
  ] }) }) }) });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const Dropdown$1 = Dropdown;
function UserDropdown({ user }) {
  return /* @__PURE__ */ jsx(Fragment, { children: user && /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-3", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown$1, { children: [
    /* @__PURE__ */ jsx(Dropdown$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: classNames("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 bg-white text-gray-500 hover:text-gray-700"),
        children: [
          user.name,
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "ml-2 -mr-0.5 h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs(Dropdown$1.Content, { children: [
      /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route$1("profile.edit"), children: "Profile" }),
      /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route$1("logout"), method: "post", as: "button", children: "Log Out" })
    ] })
  ] }) }) }) });
}
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
function NavLink({ active = false, className = "", children, href = "#", ...props }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      ...props,
      className: active + " inline-flex items-center px-4 border-b-2 border-t text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none min-w-xxxs max-w-xxs text-center " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 bg-indigo-100  hover:bg-indigo-200 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children: [
        children,
        " ",
        active
      ]
    }
  );
}
function NavLinkSimple({ active = false, className = "", children, href = "#", ...props }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      ...props,
      className: active + " inline-flex items-center px-4 text-sm font-medium leading-5 transition duration-150 ease-in-out min-w-xxxs max-w-xxs text-center " + (active ? "text-gray-900 " : "text-gray-500 hover:text-gray-700 ") + className,
      children: [
        children,
        " ",
        active
      ]
    }
  );
}
function NavLinkSide({ active = false, className = "", children, href = "#", ...props }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      ...props,
      className: active + " flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group " + (active ? "text-gray-900 " : "text-gray-500 hover:text-gray-700 ") + className,
      children: [
        children,
        " ",
        active
      ]
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function AppIcon({ icon, className = "", onClick }) {
  const customIcons = [
    "broken-link"
  ];
  const featherIconsArray = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-down",
    "arrow-left-circle",
    "arrow-left",
    "arrow-right-circle",
    "arrow-right",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "arrow-up",
    "at-sign",
    "award",
    "bar-chart-2",
    "bar-chart",
    "battery-charging",
    "battery",
    "bell-off",
    "bell",
    "bluetooth",
    "bold",
    "book-open",
    "book",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera-off",
    "camera",
    "cast",
    "check-circle",
    "check-square",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "cloud",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide-circle",
    "divide-square",
    "divide",
    "dollar-sign",
    "download-cloud",
    "download",
    "dribbble",
    "droplet",
    "edit-2",
    "edit-3",
    "edit",
    "external-link",
    "eye-off",
    "eye",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file-minus",
    "file-plus",
    "file-text",
    "file",
    "film",
    "filter",
    "flag",
    "folder-minus",
    "folder-plus",
    "folder",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link-2",
    "link",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map-pin",
    "map",
    "maximize-2",
    "maximize",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic-off",
    "mic",
    "minimize-2",
    "minimize",
    "minus-circle",
    "minus-square",
    "minus",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation-2",
    "navigation",
    "octagon",
    "package",
    "paperclip",
    "pause-circle",
    "pause",
    "pen-tool",
    "percent",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "phone",
    "pie-chart",
    "play-circle",
    "play",
    "plus-circle",
    "plus-square",
    "plus",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share-2",
    "share",
    "shield-off",
    "shield",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "table",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash-2",
    "trash",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload-cloud",
    "upload",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "user",
    "users",
    "video-off",
    "video",
    "voicemail",
    "volume-1",
    "volume-2",
    "volume-x",
    "volume",
    "watch",
    "wifi-off",
    "wifi",
    "wind",
    "x-circle",
    "x-octagon",
    "x-square",
    "x",
    "youtube",
    "zap-off",
    "zap",
    "zoom-in",
    "zoom-out"
  ];
  if (customIcons.includes(icon)) {
    return /* @__PURE__ */ jsx("span", { onClick: (e) => onClick(e), children: /* @__PURE__ */ jsx(CustomIcons, { icon }) });
  } else if (featherIconsArray.includes(icon)) {
    return /* @__PURE__ */ jsx(Icon, { name: icon, className, onClick: (e) => onClick(e) });
  }
}
function CustomIcons({ icon }) {
  return /* @__PURE__ */ jsx("p", { children: icon });
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function ActionButton({ type, colorType = "primary", variant = "sm", disabled, label = "", icon, className = "", children, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      className: classNames(
        `inline-flex items-center  focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"}`,
        {
          "bg-white border border-gray-300 rounded-sm font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ": colorType == "secondary",
          "bg-gray-800 border border-transparent rounded-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500": colorType == "primary",
          "bg-gradient-to-r from-yellow-500 to-orange-500 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500": colorType == "warning",
          "bg-gradient-to-r from-lime-500 to-green-500 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500": colorType == "success",
          "bg-gradient-to-r from-red-400 to-red-700 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500": colorType == "dangerous",
          "px-1 py-1 font-semibold text-xs": variant == "xs",
          "px-2 py-1 font-semibold text-xs": variant == "sm",
          "px-4 py-2 font-semibold text-xs": variant == "md"
        },
        className
      ),
      disabled,
      onClick,
      children: children ? /* @__PURE__ */ jsx(Fragment, { children }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        icon && icon != "" && /* @__PURE__ */ jsx(AppIcon, { icon, className: "w-3 h-3 mr-2 " + className }),
        label
      ] })
    }
  );
}
const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight
    });
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    function debounce(func) {
      var timer;
      return function(event) {
        if (timer)
          clearTimeout(timer);
        timer = setTimeout(func, 100, event);
      };
    }
    if (myRef.current) {
      setDimensions(getDimensions());
    }
    window.addEventListener("resize", debounce(function() {
      handleResize();
    }));
    return () => {
      window.removeEventListener("resize", debounce(function() {
        handleResize();
      }));
    };
  }, [myRef]);
  return dimensions;
};
function BaseLayout({
  org,
  user,
  applications,
  application,
  title,
  header,
  children
}) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [showingAppsDropdown, setShowingAppsDropdown] = useState(false);
  const [showingProfileDropdown, setShowingProfileDropdown] = useState(false);
  const [activeMenuGroup, setActiveMenuGroup] = useState({
    label: "Dashboard",
    slug: "",
    children: []
  });
  const componentRef = useRef();
  const secondComponentRef = useRef();
  const { width: width1 } = useContainerDimensions(componentRef);
  const { width: width2 } = useContainerDimensions(secondComponentRef);
  const currentURL = window ? window.location.href.split("?")[0] : "";
  const menueItems = parseMenu(application);
  const { theme } = application;
  console.log(theme);
  useEffect(() => {
    if (width1 <= width2 + 10) {
      setShowingNavigationDropdown(false);
    }
  }, [width1, width2]);
  useEffect(() => {
    setActiveMenuGroup(menueItems.find((link) => {
      if (link.active_links && link.active_links.length > 0) {
        if (link.active_links.includes(currentURL)) {
          return link.active_links.includes(currentURL);
        }
      }
      if (link.hidden_links && link.hidden_links.length > 0) {
        if (link.hidden_links.includes(currentURL)) {
          return link.hidden_links.includes(currentURL);
        }
      }
      return currentURL.startsWith(link.href) || currentURL == link.href;
    }));
  }, [currentURL]);
  return /* @__PURE__ */ jsxs("div", { className: classNames("min-h-screen bg-gradient-to-b from-gray-200 from-10% via-gray-100 via-30% to-gray-50 to-90%"), children: [
    /* @__PURE__ */ jsx(Head, { title }),
    (theme.nav_bar == "minified_top" || theme.nav_bar == "top" || theme.nav_bar == "admin_top") && /* @__PURE__ */ jsx("nav", { className: classNames("border-b-2 border-gray-100 shadow shadow-inner bg-white text-gray-800"), children: /* @__PURE__ */ jsx("div", { className: "mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-12", children: [
      /* @__PURE__ */ jsx(OrgLogo, { org, theme }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 flex md:flex", children: theme.nav_bar == "minified_top" && /* @__PURE__ */ jsx("div", { className: classNames("w-full md:flex h-12"), children: /* @__PURE__ */ jsx("div", { className: "sm:-my-px w-full flex flex-row md:ml-0 px-4 sm:px-6 lg:px-8 ", children: /* @__PURE__ */ jsx("div", { className: "flex-1 w-full flex", children: /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center border-t h-12", children: menueItems && (menueItems == null ? void 0 : menueItems.map((link) => {
        if (link.is_hidden) {
          return /* @__PURE__ */ jsx(Fragment, {});
        }
        let urllink = link == null ? void 0 : link.slug;
        return /* @__PURE__ */ jsxs(NavLinkSimple, { href: link == null ? void 0 : link.href, active: (activeMenuGroup == null ? void 0 : activeMenuGroup.slug) && activeMenuGroup.slug === urllink, className: "shadow-inner shadow-inner-xl h-12", children: [
          link.icon && /* @__PURE__ */ jsx(AppIcon, { icon: link.icon, className: "mr-2 h-4" }),
          link.label
        ] });
      })) }) }) }) }) }),
      /* @__PURE__ */ jsx(UserDropdown, { user }),
      /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowingProfileDropdown((previousState) => !previousState),
          className: "inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
          children: /* @__PURE__ */ jsxs("svg", { className: "h-4 w-4", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx(
              AppIcon,
              {
                icon: "user",
                className: !showingProfileDropdown ? "inline-flex" : "hidden"
              }
            ),
            /* @__PURE__ */ jsx(
              AppIcon,
              {
                icon: "x-circle",
                className: showingProfileDropdown ? "inline-flex" : "hidden"
              }
            )
          ] })
        }
      ) }),
      theme.nav_bar == "minified_top" && /* @__PURE__ */ jsx("div", { className: "-mr-2 flex-0 flex items-center place-items-center md:hidden h-12", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
          className: "inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
          children: /* @__PURE__ */ jsxs("svg", { className: "h-4 w-4", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx(
              AppIcon,
              {
                icon: "menu",
                className: !showingNavigationDropdown ? "inline-flex" : "hidden"
              }
            ),
            /* @__PURE__ */ jsx(
              AppIcon,
              {
                icon: "x-circle",
                className: showingNavigationDropdown ? "inline-flex" : "hidden"
              }
            )
          ] })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", ref: componentRef, children: [
      (theme.nav_bar == "admin_top" || theme.nav_bar == "top") && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "w-full flex md:flex", children: /* @__PURE__ */ jsx("div", { className: classNames("w-full md:flex", {
          "h-8": theme.nav_bar == "admin_top",
          "h-12": theme.nav_bar == "top"
        }), children: /* @__PURE__ */ jsxs("div", { className: "sm:-my-px w-full flex flex-row md:ml-0 px-4 sm:px-6 lg:px-8 ", children: [
          theme.nav_bar == "admin_top" && /* @__PURE__ */ jsx("div", { className: classNames("flex-0 min-w-48  border-b border-gray-100", {
            // 'min-w-48' : activeMenuGroup?.children && activeMenuGroup.children.length > 0,
            // 'min-w-48' : !activeMenuGroup?.children ||  activeMenuGroup.children.length <= 0,
          }), children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 bg-white", children: /* @__PURE__ */ jsx("div", { className: "border-l border-r border-gray-200 shadow-inner", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex cursor-pointer items-center px-4 border-b-2 border-t text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none min-w-xxxs max-w-xxs text-center border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 w-full md:w-full flex-1 h-8", onClick: () => setShowingAppsDropdown(!showingAppsDropdown), children: [
            /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-4 mr-2 w-auto fill-current" }),
            application == null ? void 0 : application.name
          ] }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: classNames({
            "flex-1 w-full flex": theme.nav_bar == "admin_top",
            "flex-1 w-full flex justify-center": theme.nav_bar == "top"
          }), children: /* @__PURE__ */ jsx("div", { className: classNames({
            "hidden md:block inline-flex items-center border-t h-8": theme.nav_bar == "admin_top",
            "hidden md:flex justify-center border-t h-12": theme.nav_bar == "top"
          }), children: menueItems && (menueItems == null ? void 0 : menueItems.map((link) => {
            if (link.is_hidden) {
              return /* @__PURE__ */ jsx(Fragment, {});
            }
            let urllink = link == null ? void 0 : link.slug;
            return /* @__PURE__ */ jsxs(NavLink, { href: link == null ? void 0 : link.href, active: (activeMenuGroup == null ? void 0 : activeMenuGroup.slug) && activeMenuGroup.slug === urllink, className: classNames("shadow-inner shadow-inner-xl", {
              "h-8": theme.nav_bar == "admin_top",
              "h-12": theme.nav_bar == "top"
            }), children: [
              link.icon && /* @__PURE__ */ jsx(AppIcon, { icon: link.icon, className: "mr-2 h-4" }),
              link.label
            ] });
          })) }) }),
          /* @__PURE__ */ jsx("div", { className: "-mr-2 flex-0 items-center place-items-center md:hidden", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
              className: "inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
              children: /* @__PURE__ */ jsxs("svg", { className: "h-4 w-4", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx(
                  AppIcon,
                  {
                    icon: "menu",
                    className: !showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                ),
                /* @__PURE__ */ jsx(
                  AppIcon,
                  {
                    icon: "x-circle",
                    className: showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                )
              ] })
            }
          ) })
        ] }) }) }),
        user && /* @__PURE__ */ jsx("div", { className: (showingProfileDropdown ? "block" : "hidden") + " absolute sm:hidden w-screen  ", children: /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 bg-white z-50", children: [
          /* @__PURE__ */ jsxs("div", { className: "mt-3 px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route$1("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route$1("logout"), as: "button", children: "Log Out" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " absolute w-screen  ", children: application && (application == null ? void 0 : application.menu) && application.menu.map((link) => {
        if (link.is_hidden) {
          return /* @__PURE__ */ jsx(Fragment, {});
        }
        return /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 z-100", children: [
          /* @__PURE__ */ jsx("div", { className: "px-0 z-100", children: /* @__PURE__ */ jsxs(ResponsiveNavLink, { className: "z-100", href: link.slug, active: link.active_links && link.active_links.length > 0 ? link.active_links.includes(currentURL) : currentURL === link.slug, children: [
            link.icon && /* @__PURE__ */ jsx(AppIcon, { icon: link.icon, className: "mr-2 h-4 mt-1" }),
            link.label
          ] }) }),
          link.children && link.children.length > 0 && /* @__PURE__ */ jsx("div", { className: "pl-3 bg-gray-300 border-t border-b border-gray-300 z-100", children: link.children.map((childLink) => {
            if (childLink.is_hidden) {
              return /* @__PURE__ */ jsx(Fragment, {});
            }
            return /* @__PURE__ */ jsxs(ResponsiveNavLink, { href: childLink.slug, className: "bg-white z-100", children: [
              childLink.icon && /* @__PURE__ */ jsx(AppIcon, { icon: childLink.icon, className: "mr-2 h-4" }),
              childLink.label
            ] });
          }) })
        ] });
      }) })
    ] }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: classNames("flex w-full", {
      "flex-row": theme.nav_bar == "minified_side" || theme.nav_bar == "side" || theme.nav_bar == "admin_side",
      "flex-col": theme.nav_bar == "minified_top" || theme.nav_bar == "top" || theme.nav_bar == "admin_top"
    }), children: [
      (theme.nav_bar == "minified_side" || theme.nav_bar == "side" || theme.nav_bar == "admin_side") && /* @__PURE__ */ jsx("aside", { className: classNames("h-screen transition-transform -translate-x-full sm:translate-x-0", {
        "w-14": theme.nav_bar == "minified_side",
        "w-64": theme.nav_bar == "side" || theme.nav_bar == "admin_side"
      }), "aria-label": "Sidebar", children: /* @__PURE__ */ jsxs("div", { className: classNames("h-full overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-2 divide-y", {
        "px-1 py-2 pt-1": theme.nav_bar == "minified_side",
        "px-3 py-3 pt-1": theme.nav_bar == "side" || theme.nav_bar == "admin_side"
      }), children: [
        /* @__PURE__ */ jsx(OrgLogo, { org, theme }),
        /* @__PURE__ */ jsx("div", { className: classNames("flex-1 border-b border-gray-100 mt-2"), children: /* @__PURE__ */ jsx("div", { className: classNames("cursor-pointer font-medium", {
          "w-full flex-1": theme.nav_bar == "minified_side",
          "inline-flex w-full": theme.nav_bar == "side" || theme.nav_bar == "admin_side"
        }), children: /* @__PURE__ */ jsxs("span", { className: classNames("flex w-full text-gray-900 dark:text-white bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 group", {
          "p-2 items-start": theme.nav_bar == "side" || theme.nav_bar == "admin_side",
          "p-1 items-center": theme.nav_bar == "minified_side"
        }), onClick: () => setShowingAppsDropdown(!showingAppsDropdown), children: [
          /* @__PURE__ */ jsx(ApplicationLogo, { className: classNames("text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", {
            "w-5 h-5 flex-shrink-0": theme.nav_bar == "side" || theme.nav_bar == "admin_side",
            "w-8 h-8 flex-1": theme.nav_bar == "minified_side"
          }) }),
          (theme.nav_bar == "side" || theme.nav_bar == "admin_side") && /* @__PURE__ */ jsx("span", { className: "flex-1 text-left text-md ms-3 whitespace-nowrap", children: application == null ? void 0 : application.name })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("ul", { className: "flex-1 space-y-2 divide-y w-full", children: menueItems && (menueItems == null ? void 0 : menueItems.map((link) => {
          if (link.is_hidden) {
            return /* @__PURE__ */ jsx(Fragment, {});
          }
          let urllink = link == null ? void 0 : link.slug;
          return /* @__PURE__ */ jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsxs(NavLinkSide, { href: link == null ? void 0 : link.href, active: (activeMenuGroup == null ? void 0 : activeMenuGroup.slug) && activeMenuGroup.slug === urllink, className: classNames({
            "px-1": theme.nav_bar == "side" || theme.nav_bar == "admin_side",
            "p-1 flex w-full items-center": theme.nav_bar == "minified_side"
          }), children: [
            link.icon && /* @__PURE__ */ jsx(AppIcon, { icon: link.icon, className: classNames("flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", {
              "w-5 h-5 inline-flex": theme.nav_bar == "side" || theme.nav_bar == "admin_side",
              "w-6 h-6 flex-1": theme.nav_bar == "minified_side"
            }) }),
            (theme.nav_bar == "side" || theme.nav_bar == "admin_side") && /* @__PURE__ */ jsx("span", { className: "flex-1 ms-3 whitespace-nowrap text-sm", children: link.label })
          ] }) });
        })) }) })
      ] }) }),
      activeMenuGroup && activeMenuGroup.children && activeMenuGroup.children.length > 0 && /* @__PURE__ */ jsx("div", { className: "hidden md:block sm:pl-6 lg:pl-8 bg-white shadow-2xl bg-clip-border", children: /* @__PURE__ */ jsx("div", { className: "w-48", children: /* @__PURE__ */ jsx("div", { className: "py-0", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden overflow-y-auto break-words border-l border-gray-200 h-side-bar ", children: activeMenuGroup.children.map((link) => {
        if (link.is_hidden) {
          return /* @__PURE__ */ jsx(Fragment, {});
        }
        return /* @__PURE__ */ jsxs(NavLink, { href: link.href, active: currentURL.startsWith(link.href) ? true : link.hidden_links.length > 0 ? link.hidden_links.includes(currentURL) : false, className: "w-full py-2", children: [
          link.icon && /* @__PURE__ */ jsx(AppIcon, { icon: link.icon, className: "mr-2 h-4" }),
          link.label
        ] });
      }) }) }) }) }) }),
      /* @__PURE__ */ jsx("div", { children: header }),
      /* @__PURE__ */ jsx("div", { className: classNames({
        "hidden md:flex": showingNavigationDropdown,
        "flex": !showingNavigationDropdown,
        "h-screen w-screen": theme.centered_layout,
        "w-full": !theme.centered_layout
      }), children: /* @__PURE__ */ jsx("div", { className: classNames({
        "mx-auto my-auto": theme.centered_layout,
        "flex-1": !theme.centered_layout
      }), children }) })
    ] }) }),
    /* @__PURE__ */ jsx(Modal, { show: showingAppsDropdown, onClose: setShowingAppsDropdown, children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("div", { children: applications && Object.keys(applications).map((group) => {
        return /* @__PURE__ */ jsxs("div", { className: "max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-6 px-6 md:px-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-1", children: group }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start border-t pt-6 gap-6", children: applications[group].map((application2) => {
            return /* @__PURE__ */ jsxs(Link, { href: route$1("processton-client.app.index", { app_slug: application2.slug }), className: "text-center flex-0 flex flex-col align-middle justify-center cursor-pointer w-20 mx-auto", children: [
              /* @__PURE__ */ jsx("div", { className: "block text-center mb-2 w-20", children: /* @__PURE__ */ jsx("div", { className: "p-2 shadow-md rounded-lg bg-gradient-to-tl from-indigo-700 to-blue-500 text-white inline-block", children: /* @__PURE__ */ jsx(FeatherIcon, { icon: application2.icon, className: "inline" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "flex-block text-xs text-center w-20", children: application2.name })
            ] });
          }) })
        ] });
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx(ActionButton, { onClick: () => setShowingAppsDropdown(false), children: "Cancel" }) })
    ] }) })
  ] });
}
function RowElement({ element, children, wrapperClassName = "" }) {
  const { xxxs = 12, xxs = 12, xs = 12, sm, md, lg, xl = lg, xxl = lg, xxxl = lg } = element.width;
  return /* @__PURE__ */ jsx("div", { className: classNames(wrapperClassName, {
    "col-span-12": xxxs == 12,
    "col-span-11": xxxs == 11,
    "col-span-10": xxxs == 10,
    "col-span-9": xxxs == 9,
    "col-span-8": xxxs == 8,
    "col-span-7": xxxs == 7,
    "col-span-6": xxxs == 6,
    "col-span-5": xxxs == 5,
    "col-span-4": xxxs == 4,
    "col-span-3": xxxs == 3,
    "col-span-2": xxxs == 2,
    "col-span-1": xxxs == 1,
    "hidden": xxxs == 0,
    "xxxs:col-span-12": xxxs == 12,
    "xxxs:col-span-11": xxxs == 11,
    "xxxs:col-span-10": xxxs == 10,
    "xxxs:col-span-9": xxxs == 9,
    "xxxs:col-span-8": xxxs == 8,
    "xxxs:col-span-7": xxxs == 7,
    "xxxs:col-span-6": xxxs == 6,
    "xxxs:col-span-5": xxxs == 5,
    "xxxs:col-span-4": xxxs == 4,
    "xxxs:col-span-3": xxxs == 3,
    "xxxs:col-span-2": xxxs == 2,
    "xxxs:col-span-1": xxxs == 1,
    "xxxs:hidden": xxxs == 0,
    "xxs:col-span-12": xxs == 12,
    "xxs:col-span-11": xxs == 11,
    "xxs:col-span-10": xxs == 10,
    "xxs:col-span-9": xxs == 9,
    "xxs:col-span-8": xxs == 8,
    "xxs:col-span-7": xxs == 7,
    "xxs:col-span-6": xxs == 6,
    "xxs:col-span-5": xxs == 5,
    "xxs:col-span-4": xxs == 4,
    "xxs:col-span-3": xxs == 3,
    "xxs:col-span-2": xxs == 2,
    "xxs:col-span-1": xxs == 1,
    "xxs:hidden": xxs == 0,
    "xs:col-span-12": xs == 12,
    "xs:col-span-11": xs == 11,
    "xs:col-span-10": xs == 10,
    "xs:col-span-9": xs == 9,
    "xs:col-span-8": xs == 8,
    "xs:col-span-7": xs == 7,
    "xs:col-span-6": xs == 6,
    "xs:col-span-5": xs == 5,
    "xs:col-span-4": xs == 4,
    "xs:col-span-3": xs == 3,
    "xs:col-span-2": xs == 2,
    "xs:col-span-1": xs == 1,
    "xs:hidden": xs == 0,
    "sm:col-span-12": sm == 12,
    "sm:col-span-11": sm == 11,
    "sm:col-span-10": sm == 10,
    "sm:col-span-9": sm == 9,
    "sm:col-span-8": sm == 8,
    "sm:col-span-7": sm == 7,
    "sm:col-span-6": sm == 6,
    "sm:col-span-5": sm == 5,
    "sm:col-span-4": sm == 4,
    "sm:col-span-3": sm == 3,
    "sm:col-span-2": sm == 2,
    "sm:col-span-1": sm == 1,
    "sm:hidden": sm == 0,
    "md:col-span-12": md == 12,
    "md:col-span-11": md == 11,
    "md:col-span-10": md == 10,
    "md:col-span-9": md == 9,
    "md:col-span-8": md == 8,
    "md:col-span-7": md == 7,
    "md:col-span-6": md == 6,
    "md:col-span-5": md == 5,
    "md:col-span-4": md == 4,
    "md:col-span-3": md == 3,
    "md:col-span-2": md == 2,
    "md:col-span-1": md == 1,
    "md:hidden": md == 0,
    "lg:col-span-12": lg == 12,
    "lg:col-span-11": lg == 11,
    "lg:col-span-10": lg == 10,
    "lg:col-span-9": lg == 9,
    "lg:col-span-8": lg == 8,
    "lg:col-span-7": lg == 7,
    "lg:col-span-6": lg == 6,
    "lg:col-span-5": lg == 5,
    "lg:col-span-4": lg == 4,
    "lg:col-span-3": lg == 3,
    "lg:col-span-2": lg == 2,
    "lg:col-span-1": lg == 1,
    "lg:hidden": lg == 0,
    "xl:col-span-12": xl == 12,
    "xl:col-span-11": xl == 11,
    "xl:col-span-10": xl == 10,
    "xl:col-span-9": xl == 9,
    "xl:col-span-8": xl == 8,
    "xl:col-span-7": xl == 7,
    "xl:col-span-6": xl == 6,
    "xl:col-span-5": xl == 5,
    "xl:col-span-4": xl == 4,
    "xl:col-span-3": xl == 3,
    "xl:col-span-2": xl == 2,
    "xl:col-span-1": xl == 1,
    "xl:hidden": xl == 0,
    "2xl:col-span-12": xxl == 12,
    "2xl:col-span-11": xxl == 11,
    "2xl:col-span-10": xxl == 10,
    "2xl:col-span-9": xxl == 9,
    "2xl:col-span-8": xxl == 8,
    "2xl:col-span-7": xxl == 7,
    "2xl:col-span-6": xxl == 6,
    "2xl:col-span-5": xxl == 5,
    "2xl:col-span-4": xxl == 4,
    "2xl:col-span-3": xxl == 3,
    "2xl:col-span-2": xxl == 2,
    "2xl:col-span-1": xxl == 1,
    "2xl:hidden": xxl == 0,
    "3xl:col-span-12": xxxl == 12,
    "3xl:col-span-11": xxxl == 11,
    "3xl:col-span-10": xxxl == 10,
    "3xl:col-span-9": xxxl == 9,
    "3xl:col-span-8": xxxl == 8,
    "3xl:col-span-7": xxxl == 7,
    "3xl:col-span-6": xxxl == 6,
    "3xl:col-span-5": xxxl == 5,
    "3xl:col-span-4": xxxl == 4,
    "3xl:col-span-3": xxxl == 3,
    "3xl:col-span-2": xxxl == 2,
    "3xl:col-span-1": xxxl == 1
  }), children });
}
var ElementTypes = /* @__PURE__ */ ((ElementTypes2) => {
  ElementTypes2["ROW"] = "row";
  ElementTypes2["STATS_CARD"] = "stats_card";
  ElementTypes2["CARD"] = "card";
  ElementTypes2["FORM"] = "form";
  ElementTypes2["GRID"] = "grid";
  ElementTypes2["TEXT"] = "text";
  ElementTypes2["DATA_TABLE"] = "data_table";
  ElementTypes2["TABS"] = "tabs";
  return ElementTypes2;
})(ElementTypes || {});
var WidgetFormRowType = /* @__PURE__ */ ((WidgetFormRowType2) => {
  WidgetFormRowType2["ACCORDION"] = "accordion";
  WidgetFormRowType2["TABS"] = "tabs";
  WidgetFormRowType2["SECTIONS"] = "sections";
  WidgetFormRowType2["ROW"] = "row";
  return WidgetFormRowType2;
})(WidgetFormRowType || {});
var WidgetFormElementType = /* @__PURE__ */ ((WidgetFormElementType2) => {
  WidgetFormElementType2["NATIVE"] = "native";
  WidgetFormElementType2["STRING"] = "string";
  WidgetFormElementType2["TEXT"] = "text";
  WidgetFormElementType2["TEXT_AREA"] = "text_area";
  WidgetFormElementType2["NUMBER"] = "number";
  WidgetFormElementType2["DECIMAL"] = "decimal";
  WidgetFormElementType2["EMAIL"] = "email";
  WidgetFormElementType2["PASSWORD"] = "password";
  WidgetFormElementType2["AMOUNT"] = "amount";
  WidgetFormElementType2["MONEY"] = "money";
  WidgetFormElementType2["PERCENTAGE"] = "percentage";
  WidgetFormElementType2["AGE"] = "age";
  WidgetFormElementType2["DOB"] = "date_of_birth";
  WidgetFormElementType2["DATE"] = "date";
  WidgetFormElementType2["SELECT"] = "select";
  WidgetFormElementType2["SIMPLE_SELECT"] = "simple_select";
  WidgetFormElementType2["URL_SELECT"] = "url_select";
  WidgetFormElementType2["CHECKBOX"] = "checkbox";
  WidgetFormElementType2["ONE_TO_MANY"] = "one-to-many";
  WidgetFormElementType2["PHONE"] = "phone";
  WidgetFormElementType2["TAGS"] = "tags";
  WidgetFormElementType2["ADDRESS"] = "address";
  WidgetFormElementType2["EMAIL_EDITOR"] = "email_editor";
  WidgetFormElementType2["RICH_TEXT_EDITOR"] = "rich_text_editor";
  WidgetFormElementType2["FORM_EDITOR"] = "form_editor";
  WidgetFormElementType2["HIDDEN"] = "hidden";
  return WidgetFormElementType2;
})(WidgetFormElementType || {});
function Tabs(element, attachments) {
  return element && /* @__PURE__ */ jsx(RowElement, { element: {
    width: "full"
  }, wrapperClassName: "flex-1", children: /* @__PURE__ */ jsxs(TabGroup, { children: [
    /* @__PURE__ */ jsx(TabList, { className: "flex space-x-1 rounded-sm bg-blue-900/20 p-0.5", children: (element == null ? void 0 : element.tabs) && (element == null ? void 0 : element.tabs.map((tab) => {
      return /* @__PURE__ */ jsx(
        Tab,
        {
          className: ({ selected }) => classNames(
            "flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5",
            "ring-white/60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2",
            selected ? "bg-white text-slate-800 shadow" : "text-slate-500 hover:bg-white/[0.12] hover:text-slate-800"
          ),
          children: tab.title
        }
      );
    })) }),
    /* @__PURE__ */ jsx(TabPanels, { children: (element == null ? void 0 : element.tabs) && (element == null ? void 0 : element.tabs.map((tab) => {
      return /* @__PURE__ */ jsx(
        TabPanel,
        {
          className: classNames(
            "p-3 bg-blue-900/10"
          ),
          children: /* @__PURE__ */ jsx(RenderRow, { row: tab.rows, attachment_values: attachments })
        }
      );
    })) })
  ] }) });
}
const StatsCard = lazy(() => import("./StatsCard-6febef4f.js"));
const Card = lazy(() => import("./Card-162a3ccf.js"));
const FormBuilder = lazy(() => import("./FormBuilder-5e22dbc9.js"));
const GridBuilder = lazy(() => import("./GridBuilder-4fa6b9b2.js"));
const DataTable = lazy(() => import("./DataTable-354d1082.js"));
function InteractionBuilder(interaction) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto ", children: /* @__PURE__ */ jsx(RenderRow, { row: interaction.schema.elements, attachment_values: interaction.attachment_values }) });
}
function RenderRow({ row, attachment_values = [] }) {
  console.log(row);
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-4", children: row && row.map((element) => {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(RowElement, { element, wrapperClassName: "p-0", children: /* @__PURE__ */ jsx(RenderWidget, { element, attachment_values }) }) });
  }) });
}
function RenderWidget({ element, attachment_values }) {
  const [data, setData] = useState(element == null ? void 0 : element.data);
  const [loading, setLoading] = useState(true);
  function objectToQueryString(obj) {
    const keys = Object.keys(obj);
    const keyValuePairs = keys.map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    });
    return keyValuePairs.join("&");
  }
  useEffect(() => {
    if (element.srcOfData && element.srcOfData.api_endpoint) {
      let urltofetch = element.srcOfData.api_endpoint;
      if (element.srcOfData.attachments) {
        let attachments_final = {};
        element.srcOfData.attachments.forEach((attachment) => {
          attachments_final[attachment.key] = attachment_values[attachment.value] || attachment_values[attachment.value] === "" ? attachment_values[attachment.value] : attachment_values[attachment.value] = attachment_values[attachment.value];
        });
        urltofetch += "?" + objectToQueryString(attachments_final);
      }
      fetch(urltofetch).then((response) => response.json()).then((json) => {
        setData(json.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [element]);
  console.log(element);
  switch (element.type) {
    case ElementTypes.STATS_CARD:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingStatsCard, {}), children: loading ? /* @__PURE__ */ jsx(LoadingStatsCard, {}) : /* @__PURE__ */ jsx(StatsCard, { ...element, data }) });
    case ElementTypes.CARD:
      console.log(element);
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx(Card, { ...element, data }) });
    case ElementTypes.FORM:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx(FormBuilder, { ...data }) });
    case ElementTypes.GRID:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx(GridBuilder, { ...data }) });
    case ElementTypes.ROW:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx(RenderRow, { row: element.elements, attachment_values }) });
    case ElementTypes.TEXT:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: data }) });
    case ElementTypes.DATA_TABLE:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingDataTable, {}), children: loading ? /* @__PURE__ */ jsx(LoadingDataTable, {}) : /* @__PURE__ */ jsx(DataTable, { ...data }) });
    case ElementTypes.TABS:
      return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, { className: "py-1" }), children: loading ? /* @__PURE__ */ jsx(Loading, { className: "py-1" }) : /* @__PURE__ */ jsx(Tabs, { ...element, attachment: attachment_values }) });
    default:
      return /* @__PURE__ */ jsx(Loading, { className: "py-8" });
  }
}
function Loading({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: classNames("w-full text-center", className), children: /* @__PURE__ */ jsx(AppIcon, { icon: "loading", className: "animate-spin h-12 w-12 text-red" }) });
}
function LoadingStatsCard({}) {
  return /* @__PURE__ */ jsx("div", { className: "w-full p-0 m-0 bg-white border h-full flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "min-w-0 break-words my-auto", children: /* @__PURE__ */ jsx("div", { className: "flex-auto", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: /* @__PURE__ */ jsxs("div", { className: "pr-4 flex-1 flex-grow flex flex-row space-x-2", children: [
    /* @__PURE__ */ jsx("div", { className: "h-14 bg-gray-200 animate-pulse w-1/2" }),
    /* @__PURE__ */ jsx("div", { className: "h-14 bg-gray-200 animate-pulse w-1/2" })
  ] }) }) }) }) });
}
function LoadingDataTable({}) {
  return /* @__PURE__ */ jsx("div", { className: "w-full p-0 m-0 bg-white border h-full flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "min-w-0 break-words my-auto", children: /* @__PURE__ */ jsx("div", { className: "flex-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "pr-4 flex-1 flex-grow flex flex-row space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-14 bg-gray-200 animate-pulse w-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "h-14 bg-gray-200 animate-pulse w-1/2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pr-4 flex-1 flex-grow flex flex-col pt-2", children: /* @__PURE__ */ jsx("div", { className: "h-36 bg-gray-200 animate-pulse" }) })
  ] }) }) }) });
}
const ModalContext = createContext({
  models: [],
  newModel: () => {
  }
});
const ModalContextProvider = ({ children }) => {
  const [models, setModels] = useState([]);
  const newModel = (link) => {
    console.log(link);
    if (link) {
      let urltofetch = link;
      fetch(urltofetch).then((response) => response.json()).then((json) => {
        setModels([
          ...models,
          json.interaction
        ]);
      });
    }
  };
  const context = {
    models,
    newModel
  };
  const closeModel = (index) => {
    setModels((models2) => models2.filter((_, i) => i !== index));
  };
  return /* @__PURE__ */ jsxs(ModalContext.Provider, { value: context, children: [
    /* @__PURE__ */ jsx(Fragment, { children }),
    /* @__PURE__ */ jsx(Fragment, { children: models.map((model, index) => {
      return /* @__PURE__ */ jsx(ModelRenderer, { model, closeModel: () => closeModel(index) }, index);
    }) })
  ] });
};
function ModelRenderer({ model, attachment_values = [], closeModel }) {
  return /* @__PURE__ */ jsx(ModalUI, { model, attachment_values, closeModel });
}
function ModalUI({ model, attachment_values = [], closeModel }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", "aria-labelledby": "modal-title", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-end justify-center text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-2 -top-2 cursor-pointer bg-red-500 p-0.5 rounded-full", onClick: () => closeModel(), children: /* @__PURE__ */ jsx(AppIcon, { icon: "x-circle", className: "text-white" }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg", children: /* @__PURE__ */ jsx(InteractionBuilder, { ...model, attachment_values }) })
    ] }) }) })
  ] }) });
}
const ModalContext$1 = ModalContext;
function AppLayout({ user, org, title = "", application, applications = [], header = "", children, navbarStyle }) {
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(ModalContextProvider, { children: /* @__PURE__ */ jsx(
    BaseLayout,
    {
      org,
      user,
      applications,
      application,
      header,
      title: title ? title : application == null ? void 0 : application.name,
      navbarStyle,
      children
    }
  ) }) });
}
export {
  AppIcon as A,
  InteractionBuilder as I,
  ModalContext$1 as M,
  RowElement as R,
  WidgetFormElementType as W,
  AppLayout as a,
  RenderRow as b,
  RenderWidget as c,
  ActionButton as d,
  WidgetFormRowType as e
};
