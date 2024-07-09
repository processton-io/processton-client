import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import axios from "axios";
/* empty css      */import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const ReactToastify = "";
const appName = {}.VITE_APP_NAME || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/Builder.tsx": () => import("./assets/Builder-aeb7dc1d.js"), "./Pages/Error.tsx": () => import("./assets/Error-5606f261.js"), "./Pages/Interaction.tsx": () => import("./assets/Interaction-519f1e5c.js") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(App, { ...props }),
        /* @__PURE__ */ jsx(ToastContainer, {})
      ] })
    );
  },
  progress: {
    color: "#FCFCFC"
  }
});
