import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
import classNames from "classnames";
import Select from "react-select";
function InputLabel({ label = "", required = false, className = "", htmlFor = "", children = /* @__PURE__ */ jsx(Fragment, {}), ...props }) {
  return /* @__PURE__ */ jsxs("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, htmlFor, children: [
    label ? label : children,
    " ",
    required === true && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
  ] });
}
const TextInput = forwardRef(function TextInput2({ map, className = "", isFocused = false, value = "", disabled = false, ...props }, ref) {
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = input.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      name: map,
      disabled,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      value,
      className: classNames(
        "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm text-black py-1.5",
        className,
        {
          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed": disabled
        }
      ),
      ref: input
    }
  );
});
const SelectInput = forwardRef(function SelectMultipleInput({ options, className = "", value, isFocused = false, placeholder = "", ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    Select,
    {
      className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm " + className,
      defaultValue: value,
      options,
      ...props,
      styles: {},
      classNames: {
        control: () => "w-full flex",
        input: () => "inline-gid flex-1 box-content not-form",
        option: () => "px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
      }
    }
  );
});
export {
  InputLabel as I,
  SelectInput as S,
  TextInput as T
};
