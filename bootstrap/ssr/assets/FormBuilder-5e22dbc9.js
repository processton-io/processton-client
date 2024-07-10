import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useEffect, Fragment, memo, useCallback, createElement } from "react";
import { useForm, router } from "@inertiajs/react";
import { p as postHeight } from "./iframewapper_helper-4a327444.js";
import { Combobox, Transition, Disclosure, Tab } from "@headlessui/react";
import { A as AppIcon, d as ActionButton, W as WidgetFormElementType, e as WidgetFormRowType, R as RowElement } from "./AppLayout-a9a67eb4.js";
import classNames from "classnames";
import { I as InputLabel, T as TextInput, S as SelectInput$1 } from "./SimpleSelectInput-976ca73e.js";
import Datepicker from "tailwind-datepicker-react";
import PhoneInputComponent from "react-phone-number-input";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import CurrencyInput from "react-currency-input-field";
import AsyncSelect from "react-select/async";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import axios from "axios";
import { toast } from "react-toastify";
import { Draggable } from "react-drag-reorder";
import "ziggy-js";
import "feather-icons-react";
import "@ailibs/feather-react-ts";
import "react-select";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 " + className, children: message }) : null;
}
const DateInput = forwardRef(function DateInput2({ map, className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef(null);
  const [show, setShow] = useState(false);
  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: /* @__PURE__ */ new Date("2030-01-01"),
    minDate: /* @__PURE__ */ new Date("1950-01-01"),
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "bg-white mt-0 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 text-md block w-full text-black",
      inputIcon: "text-gray-700",
      selected: ""
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => /* @__PURE__ */ jsx(AppIcon, { icon: "chevron-left", className: "h-4" }),
      next: () => /* @__PURE__ */ jsx(AppIcon, { icon: "chevron-right", className: "h-4" })
    },
    defaultDate: props.value ? new Date(props.value) : null,
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  };
  const handleClose = (state) => {
    setShow(state);
  };
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    Datepicker,
    {
      show,
      setShow: handleClose,
      ...props,
      options,
      onChange: (date) => {
        props.onChange && props.onChange(date);
      },
      value: props.value ? new Date(props.value) : null,
      classNames: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className
    }
  );
});
const AgeInput = forwardRef(function AgeInputProps({ map, className = "", isFocused = false, value, ...props }, ref) {
  const input = ref ? ref : useRef(null);
  const [title, setTitle] = useState(value == null ? void 0 : value.title);
  const [age, setAgeValue] = useState(value == null ? void 0 : value.value);
  const updateDate = (dataType, e) => {
    dataType === "title" && setTitle(e.target.value);
    dataType === "value" && setAgeValue(Number(e.target.value));
    const ageValue = {
      title,
      value: age
    };
    props.onChange && props.onChange(ageValue);
    props.onBlur && props.onBlur(ageValue);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-0", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-1 block w-1/3 flex-0", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        name: map + `_value`,
        onChange: (e) => updateDate("value", e),
        onBlur: (e) => updateDate("value", e),
        className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
        ref: input
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 block w-1/3 flex-0", children: /* @__PURE__ */ jsxs(
      "select",
      {
        onChange: (e) => updateDate("title", e),
        className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ",
        children: [
          /* @__PURE__ */ jsx("option", { value: "years", children: "Years" }),
          /* @__PURE__ */ jsx("option", { value: "months", children: "Months" }),
          /* @__PURE__ */ jsx("option", { value: "day", children: "days" }),
          /* @__PURE__ */ jsx("option", { value: "hours", children: "hours" })
        ]
      },
      map + `_title`
    ) })
  ] });
});
const phone = "";
const PhoneInput = forwardRef(function PhoneInput2({ className = "", isFocused = false, ...props }, ref) {
  var _a, _b;
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    if (isFocused && input.current) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    PhoneInputComponent,
    {
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 " + className,
      onChange: (e) => props.onChange && props.onChange(e),
      defaultCountry: ((_a = props == null ? void 0 : props.config) == null ? void 0 : _a.defaultCountry) ? (_b = props == null ? void 0 : props.config) == null ? void 0 : _b.defaultCountry : "PK"
    }
  );
});
const TagsInput = forwardRef(function TagsInput2({ map, className = "", isFocused = false, options = [], ...props }, ref) {
  const input = ref ? ref : useRef(null);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const filteredOption = tag === "" ? options : options.filter((option) => {
    return option.toLowerCase().includes(tag.toLowerCase());
  });
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  const watchWords = (e) => {
    e.preventDefault();
    if (e.keyCode == 188 || e.keyCode == 13) {
      if (!tags.includes(tag)) {
        setTags([...tags, tag]);
      }
      setTag("");
      return false;
    }
    if (e.keyCode < 12)
      return false;
    if (e.keyCode > 13 && e.keyCode < 48)
      return false;
    if (e.keyCode > 111 && e.keyCode < 188)
      return false;
    setTag(tag + e.key);
    props.handleInputChange(tag);
  };
  const setSelectedTag = () => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setTag("");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx(Combobox, { value: tag, onChange: setSelectedTag, children: /* @__PURE__ */ jsxs("div", { className: "relative mt-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm", children: [
        /* @__PURE__ */ jsx(
          Combobox.Input,
          {
            className: "w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",
            onKeyUp: (e) => watchWords(e)
          }
        ),
        /* @__PURE__ */ jsx(Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsx(
          ChevronUpDownIcon,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          as: Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          afterLeave: () => setTag(""),
          children: /* @__PURE__ */ jsx(Combobox.Options, { className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm", children: filteredOption.length === 0 && tag !== "" ? /* @__PURE__ */ jsxs("div", { className: "relative cursor-default select-none py-2 px-4 text-gray-700", children: [
            'Press "," to create "',
            tag,
            '"'
          ] }) : filteredOption.map((option) => /* @__PURE__ */ jsx(
            Combobox.Option,
            {
              className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-teal-600 text-white" : "text-gray-900"}`,
              value: option,
              children: ({ selected, active }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                    children: option
                  }
                ),
                selected ? /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`,
                    children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" })
                  }
                ) : null
              ] })
            },
            option
          )) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: tags.map((element) => {
      return /* @__PURE__ */ jsx("span", { className: "inline mr-2 px-2 py-1.5 border rounded-sm", children: element });
    }) })
  ] });
});
const SelectInput = forwardRef(function SelectInput2({ map, options, className = "", value, isFocused = false, placeholder = "", ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "select",
    {
      className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm " + className,
      defaultValue: value,
      name: map,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      children: [
        /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
        options.map((option, index) => /* @__PURE__ */ jsx("option", { selected: value === option.value, value: option.value, children: option.label }, index))
      ]
    }
  );
});
function Checkbox({ name, label, className = "", ...props }) {
  const [checked, setChecked] = useState(props.value || false);
  const handleChange = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };
  return /* @__PURE__ */ jsxs("label", { className: "flex items-center", htmlFor: name, onClick: handleChange, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        checked,
        onChange: handleChange,
        name,
        type: "checkbox",
        className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: label })
  ] });
}
const TextareaInput = forwardRef(function TextareaInput2({ map, className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      name: map,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const AddressInput = forwardRef(function AddressInput2({ className = "", isFocused = false, onChange, onBlur }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      onChange: (e) => onChange(e),
      onBlur: (e) => onBlur(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const AmountInput = forwardRef(function AmountInput2({ className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
    CurrencyInput,
    {
      onValueChange: (e) => props.onValueChange && props.onValueChange(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  ) });
});
const SelectUrlInput = forwardRef(function SelectUrlInput2({ url, className = "", value, isFocused = false, placeholder = "", ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  const getApiData = async (inputValue) => {
    let jsonResponse = await fetch(
      url + `&search=` + inputValue,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then((response) => response.json());
    let responseData = jsonResponse.data.structure.records.data.map((item) => {
      return {
        label: item.name,
        value: item.id
      };
    });
    return responseData;
  };
  const loadOptions = (inputValue) => {
    console.log(inputValue);
    return getApiData(inputValue);
  };
  return /* @__PURE__ */ jsx(
    AsyncSelect,
    {
      cacheOptions: true,
      loadOptions,
      defaultOptions: true,
      className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm " + className,
      ...props,
      styles: {
        control: () => ({}),
        clearIndicator: (baseStyles) => ({ ...baseStyles }),
        container: (baseStyles) => ({ ...baseStyles }),
        dropdownIndicator: (baseStyles) => ({ ...baseStyles }),
        group: (baseStyles) => ({ ...baseStyles }),
        groupHeading: (baseStyles) => ({ ...baseStyles }),
        indicatorsContainer: (baseStyles) => ({ ...baseStyles }),
        indicatorSeparator: (baseStyles) => ({ ...baseStyles }),
        input: (baseStyles) => ({ ...baseStyles }),
        loadingIndicator: (baseStyles) => ({ ...baseStyles }),
        loadingMessage: (baseStyles) => ({ ...baseStyles }),
        menu: (baseStyles) => ({ ...baseStyles }),
        menuList: (baseStyles) => ({ ...baseStyles }),
        menuPortal: () => ({}),
        multiValue: (baseStyles) => ({ ...baseStyles }),
        multiValueLabel: (baseStyles) => ({ ...baseStyles }),
        multiValueRemove: (baseStyles) => ({ ...baseStyles }),
        noOptionsMessage: (baseStyles) => ({ ...baseStyles }),
        option: () => ({}),
        placeholder: (baseStyles) => ({ ...baseStyles }),
        singleValue: (baseStyles) => ({ ...baseStyles }),
        valueContainer: (baseStyles) => ({ ...baseStyles })
      },
      classNames: {
        control: () => "w-full flex",
        input: () => "inline-gid flex-1 box-content not-form",
        option: () => "px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
      }
    }
  );
});
const EmailInput = forwardRef(function EmailInput2({ map, className = "", isFocused = false, ...props }, ref) {
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
      type: "email",
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      name: map,
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: false
  },
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  checkList: CheckList,
  link: LinkTool
};
const RichTextEditor = ({ data, onChange, editorblock }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,
        placeholder: "Begin writing your amazing piece of art here ✨",
        tools: EDITOR_JS_TOOLS,
        data: {
          time: (/* @__PURE__ */ new Date()).getTime(),
          blocks: data
        },
        async onChange(api) {
          const data2 = await api.saver.save();
          onChange(data2);
        }
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { id: editorblock });
};
const RichTextEditor$1 = memo(RichTextEditor);
function RichTextInput({ map, className = "", isFocused = false, value, onChange }, ref) {
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = input.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: classNames("bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 block w-full px-2", className), children: [
    /* @__PURE__ */ jsx(RichTextEditor$1, { data: value, onChange, editorblock: "editorjs-container" }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name: map, value })
  ] });
}
function FormViewer({ data, onChange }) {
  const [convertedData, setConvertedData] = useState(data);
  useEffect(() => {
    setConvertedData(data);
  }, [data]);
  useEffect(() => {
    onChange(convertedData);
  }, [convertedData]);
  return /* @__PURE__ */ jsx("div", { className: "bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 block w-full px-2", children: /* @__PURE__ */ jsx(FormBody, { form: convertedData, data, errors: [], addRelationData: (d) => console.log(d), setData: (d) => console.log(d), setRelationData: (d) => console.log(d) }) });
}
function FormEditor({ isFocused = false, value, onChange }, ref) {
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = input.current) == null ? void 0 : _a.focus();
    }
  }, []);
  const [formStructure, setFormStructure] = useState(value ? value : {
    "rows": [
      {
        "width": "full",
        "elements": []
      }
    ]
  });
  const addRow = () => {
    let newFormStructure = Object.assign({}, formStructure);
    newFormStructure.rows.push({
      width: {
        xxxl: 12,
        xxl: 12,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        xxs: 12,
        xxxs: 12
      },
      "elements": [
        {
          width: {
            xxxl: 12,
            xxl: 12,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            xxs: 12,
            xxxs: 12
          },
          type: WidgetFormElementType.TEXT,
          label: "First Name",
          map: "first_name",
          value: "",
          info: ""
        },
        {
          width: {
            xxxl: 12,
            xxl: 12,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            xxs: 12,
            xxxs: 12
          },
          type: WidgetFormElementType.TEXT,
          label: "Last Name",
          map: "last_name",
          value: "",
          info: ""
        }
      ]
    });
    setFormStructure(newFormStructure);
  };
  const addRowElement = (index) => {
    let newFormStructure = Object.assign({}, formStructure);
    newFormStructure.rows[index].elements.push({
      width: {
        xxxl: 12,
        xxl: 12,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        xxs: 12,
        xxxs: 12
      },
      label: "Click to edit",
      type: WidgetFormElementType.NATIVE,
      map: "",
      value: "",
      info: ""
    });
    setFormStructure(newFormStructure);
  };
  const changeValue = (index, elementIndex, data) => {
    let newFormStructure = Object.assign({}, formStructure);
    newFormStructure.rows[index].elements[elementIndex] = data;
    setFormStructure(newFormStructure);
  };
  const changeGroupValue = (index, data) => {
    let newFormStructure = Object.assign({}, formStructure);
    newFormStructure.rows[index] = {
      ...newFormStructure.rows[index],
      ...data
    };
    setFormStructure(newFormStructure);
  };
  const array_move = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(void 0);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };
  const getRowPos = (currentPos, newPos) => {
    let newFormStructure = Object.assign({}, formStructure);
    newFormStructure.rows = array_move(newFormStructure.rows, currentPos, newPos);
    setFormStructure(newFormStructure);
  };
  useEffect(() => {
    onChange(formStructure);
  }, [formStructure]);
  const DraggableRender = useCallback(() => {
    return /* @__PURE__ */ jsx(Draggable, { onPosChange: getRowPos, children: formStructure.rows.map((row, index) => {
      return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsxs("div", { className: "border border-l-6 rounded-sm flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx(RowConfig, { element: row, setData: (data) => changeGroupValue(index, data) }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 bg-white h-80 relative overflow-y-scroll", children: [
          row.elements.map((element, elementIndex) => {
            return /* @__PURE__ */ jsx(RowInput, { element, setData: (data) => changeValue(index, elementIndex, data) }, elementIndex);
          }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-50 text-center border border-dotted py-4 text-slate-700 mb-4", onClick: () => addRowElement(index), children: /* @__PURE__ */ jsx(AppIcon, { icon: "plus", className: "inline-block mr-2 h-6 w-6" }) })
        ] })
      ] }) }, index) });
    }) });
  }, [formStructure]);
  return /* @__PURE__ */ jsx("div", { className: "bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 block w-full px-2", children: /* @__PURE__ */ jsxs("div", { className: "gap-4 w-full grid grid-cols-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
      /* @__PURE__ */ jsx(DraggableRender, {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ActionButton, { type: "button", onClick: () => addRow(), children: "Add Row" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "py-4 col-span-6", children: /* @__PURE__ */ jsx(FormViewer, { data: formStructure, onChange: (value2) => console.log(value2) }) })
  ] }) });
}
function RowConfig({ element, setData }) {
  const [groupLabel, setGroupLabel] = useState(element.group_label);
  const [groupDescription, setGroupDescription] = useState(element.group_description);
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-4 bg-gray-50 p-4 border-b", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-12", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: "groupLabel", label: "Label", required: false }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          map: "groupLabel",
          className: "w-full",
          value: groupLabel,
          onChange: (e) => setGroupLabel(e.target.value),
          onBlur: () => setData({
            "group_label": groupLabel,
            "group_description": groupDescription
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-12", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: "groupDescription", label: "Description", required: false }),
      /* @__PURE__ */ jsx(
        TextareaInput,
        {
          map: "groupDescription",
          className: "w-full",
          value: groupDescription,
          onChange: (e) => setGroupDescription(e.target.value),
          onBlur: () => setData({
            "group_label": groupLabel,
            "group_description": groupDescription
          })
        }
      )
    ] })
  ] });
}
function RowInput({ element, setData }) {
  const [showForm, setShowForm] = useState(false);
  const [label, setLabel] = useState(element.label);
  const [name, setName] = useState(element.name);
  const [mapField, setMapField] = useState(element.map);
  const [width, setWidth] = useState(element.width);
  const [type, setType] = useState(element.type);
  const [optionsList, setOptionsList] = useState(element.options ? element.options : []);
  const [info, setInfo] = useState(element.info ? element.info : "");
  const [placeholder, setPlaceHolder] = useState(element.placeholder ? element.placeholder : "");
  const getOptions = (options) => {
    let optionString = "";
    options.map((option, index) => {
      if (index == 0) {
        optionString = option.key + ":" + option.value;
      } else {
        optionString = optionString + ";" + option.key + ":" + option.value;
      }
    });
    return optionString;
  };
  const setOptions = (value) => {
    let options = value.split(";");
    let optionsArray = [];
    options.map((option, index) => {
      let optionData = option.split(":");
      if (optionData.length == 1) {
        optionsArray.push({ key: index, value: optionData[0] });
      } else {
        optionsArray.push({ key: optionData[0], value: optionData[1] });
      }
    });
    console.log(options);
    setOptionsList(optionsArray);
  };
  const upDateElement = () => {
    setData({
      "label": label,
      "name": name,
      "map": mapField,
      "info": info,
      "placeholder": placeholder,
      "width": width,
      "options": optionsList,
      "type": type
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "border border-l-3 rounded-sm bg-gray-50", children: [
    showForm && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx(AppIcon, { icon: "close", onClick: () => setShowForm(!showForm) }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "label", label: "Label", required: false }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              map: "label",
              className: "w-full",
              value: label,
              onChange: (e) => setLabel(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "placeholder", label: "Placeholder", required: false }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              map: "placeholder",
              className: "w-full",
              value: placeholder,
              onChange: (e) => setPlaceHolder(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-12", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "info", label: "Info text", required: false }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              map: "info",
              className: "w-full",
              value: info,
              onChange: (e) => setInfo(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", label: "Name", required: true }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              map: "name",
              className: "w-full",
              value: name,
              onChange: (e) => setName(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "label", label: "Map", required: true }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              map: "map",
              className: "w-full",
              value: mapField,
              onChange: (e) => setMapField(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "width", label: "Width", required: true }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              name: "width",
              className: "w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5",
              value: width,
              onChange: (e) => setWidth(e.target.value),
              children: [
                /* @__PURE__ */ jsx("option", { value: "full", children: "Full" }),
                /* @__PURE__ */ jsx("option", { value: "w-1/2", children: "1/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-2/2", children: "2/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-3/2", children: "3/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-4/2", children: "4/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-5/2", children: "5/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-6/2", children: "6/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-7/2", children: "7/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-8/2", children: "8/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-9/2", children: "9/12" }),
                /* @__PURE__ */ jsx("option", { value: "w-10/2", children: "10/12" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "type", label: "Type", required: true }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              name: "type",
              className: "w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5",
              value: type,
              onChange: (e) => setType(e.target.value),
              children: [
                /* @__PURE__ */ jsx("option", { value: "native", children: "Native" }),
                /* @__PURE__ */ jsx("option", { value: "email", children: "Email" }),
                /* @__PURE__ */ jsx("option", { value: "simple_select", children: "Select" }),
                /* @__PURE__ */ jsx("option", { value: "textarea", children: "Textarea" }),
                /* @__PURE__ */ jsx("option", { value: "number", children: "Number" })
              ]
            }
          )
        ] }),
        type === "simple_select" && /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "label", label: "Options", required: true }),
          /* @__PURE__ */ jsx(
            TextareaInput,
            {
              map: "options",
              className: "w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5",
              value: getOptions(optionsList),
              onChange: (e) => setOptions(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsx(ActionButton, { type: "button", onClick: () => {
          upDateElement();
        }, children: "Save" }) })
      ] })
    ] }),
    !showForm && /* @__PURE__ */ jsxs("div", { className: "p-4 cursor-pointer", onClick: () => setShowForm(!showForm), children: [
      /* @__PURE__ */ jsx(AppIcon, { icon: "edit", className: "inline-block mr-2 h-6 w-6" }),
      /* @__PURE__ */ jsx("p", { className: "inline-block text-lg font-semibold pt-1", children: element.label })
    ] })
  ] });
}
const NumberInput = forwardRef(function NumberInput2({ map, className = "", isFocused = false, ...props }, ref) {
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
      type: "number",
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      name: map,
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const DecimalInput = forwardRef(function DecimalInput2({ map, className = "", isFocused = false, ...props }, ref) {
  var _a, _b;
  const input = ref ? ref : useRef(null);
  useEffect(() => {
    var _a2;
    if (isFocused) {
      (_a2 = input.current) == null ? void 0 : _a2.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "number",
      name: map,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      step: ((_a = props == null ? void 0 : props.config) == null ? void 0 : _a.step) ? (_b = props == null ? void 0 : props.config) == null ? void 0 : _b.step : "0.01",
      ref: input
    }
  );
});
const PasswordInput = forwardRef(function PasswordInput2({ map, className = "", isFocused = false, ...props }, ref) {
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
      type: "password",
      name: map,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const HiddenInput = forwardRef(function HiddenInput2({ map, className = "", isFocused = false, ...props }, ref) {
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
      type: "hidden",
      name: map,
      onChange: (e) => props.onChange && props.onChange(e),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      className: "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 " + className,
      ref: input
    }
  );
});
const DateOfBirthInput = forwardRef(function DateOfBirthInputProps({ value, className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef(null);
  const [date, setDate] = useState(value == null ? void 0 : value.date);
  const [month, setMonth] = useState(value == null ? void 0 : value.month);
  const [year, setYear] = useState(value == null ? void 0 : value.year);
  const updateDate = (dataType, e) => {
    dataType === "year" && setDate(e.target.value);
    dataType === "month" && setMonth(e.target.value);
    dataType === "date" && setYear(Number(e.target.value));
    const dOB = {
      date,
      month,
      year
    };
    props.onChange(dOB);
  };
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = input.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-0", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-1 block w-1/3 flex-0", children: /* @__PURE__ */ jsx(
      "select",
      {
        onSelect: (e) => updateDate("date", e),
        className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ",
        children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((option) => /* @__PURE__ */ jsx("option", { value: option, selected: option === date, children: option }))
      },
      props.map + `_date`
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 block w-1/3 flex-0", children: /* @__PURE__ */ jsx(
      "select",
      {
        onSelect: (e) => updateDate("month", e),
        className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ",
        children: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((option) => /* @__PURE__ */ jsx("option", { value: option, selected: option === String(month), children: option }))
      },
      props.map + `_month`
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 block w-1/3 flex-0", children: /* @__PURE__ */ jsx(
      "select",
      {
        onSelect: (e) => updateDate("year", e),
        className: "w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ",
        children: Array.from({ length: 122 }, (_, i) => 1900 + i).map((option) => /* @__PURE__ */ jsx("option", { value: option, selected: option === year, children: option }))
      },
      props.map + `_year`
    ) })
  ] });
});
const InputField = forwardRef(function InputField2({ element, setData, data }, ref) {
  const input = ref ? ref : useRef(null);
  const [value, setValue] = useState();
  useEffect(() => {
    const match = element.map.match(/(.+)\[(.+)\]/);
    if (match) {
      setValue(data[match[1]][match[2]]);
    } else {
      setValue(data[element.map]);
    }
  }, [data]);
  const changeValue = (key, val) => {
    console.log(key, val);
    const match = key.match(/(.+)\[(.+)\]/);
    if (match) {
      setData(match[1], { ...data[match[1]], [match[2]]: val });
    } else {
      setData(key, val);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    (element.type === WidgetFormElementType.NATIVE || element.type === WidgetFormElementType.STRING || element.type === WidgetFormElementType.TEXT) && /* @__PURE__ */ createElement(
      TextInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        disabled: element == null ? void 0 : element.disabled,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    element.type === WidgetFormElementType.NUMBER && /* @__PURE__ */ createElement(
      NumberInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    element.type === WidgetFormElementType.DECIMAL && /* @__PURE__ */ createElement(
      DecimalInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    (element.type === WidgetFormElementType.AMOUNT || element.type === WidgetFormElementType.MONEY) && /* @__PURE__ */ createElement(
      AmountInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onValueChange: (value2) => changeValue(element.map, value2)
      }
    ),
    element.type === WidgetFormElementType.TEXT_AREA && /* @__PURE__ */ createElement(
      TextareaInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    element.type === WidgetFormElementType.PASSWORD && /* @__PURE__ */ createElement(
      PasswordInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    element.type === WidgetFormElementType.HIDDEN && /* @__PURE__ */ createElement(
      HiddenInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e.target.value)
      }
    ),
    element.type === WidgetFormElementType.DATE && /* @__PURE__ */ createElement(
      DateInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    (element.type === WidgetFormElementType.AGE || element.type === WidgetFormElementType.DOB) && /* @__PURE__ */ createElement(
      AgeInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.AGE && /* @__PURE__ */ createElement(
      DateOfBirthInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.PHONE && /* @__PURE__ */ jsx(
      PhoneInput,
      {
        map: element.map,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      },
      element.map
    ),
    element.type === WidgetFormElementType.TAGS && /* @__PURE__ */ createElement(
      TagsInput,
      {
        ...element,
        key: element.map,
        ref: input,
        label: element.label,
        options: element.options,
        value: data[element.map],
        className: "mt-1 block w-full",
        handleInputChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.SIMPLE_SELECT && /* @__PURE__ */ createElement(
      SelectInput$1,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        options: element.options,
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.SELECT && /* @__PURE__ */ createElement(
      SelectInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        options: element.options,
        autoComplete: element.map,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.URL_SELECT && /* @__PURE__ */ createElement(
      SelectUrlInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        url: element.url,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.ADDRESS && /* @__PURE__ */ createElement(
      AddressInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        options: element.options,
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.EMAIL_EDITOR && /* @__PURE__ */ createElement(
      EmailInput,
      {
        ...element,
        key: element.map,
        ref: input,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.RICH_TEXT_EDITOR && /* @__PURE__ */ createElement(
      RichTextInput,
      {
        ...element,
        key: element.map,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.FORM_EDITOR && /* @__PURE__ */ createElement(
      FormEditor,
      {
        ...element,
        key: element.map,
        value: data[element.map],
        placeholder: element.label,
        className: "mt-1 block w-full",
        onChange: (e) => changeValue(element.map, e)
      }
    ),
    element.type === WidgetFormElementType.CHECKBOX && /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsx(
      Checkbox,
      {
        name: element.map,
        label: element.label,
        value,
        onChange: (value2) => {
          changeValue(element.map, value2);
        }
      }
    ) }),
    element.info && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500", children: element.info })
  ] });
});
function FormBuilder({ form, submitAt, values = {} }) {
  console.log(form, values);
  const formElements = form.rows.reduce((result, row) => {
    let elements = [];
    if (row.type) {
      if (row.type === WidgetFormRowType.ACCORDION || row.type === WidgetFormRowType.TABS) {
        row.tabs && row.tabs.forEach((tab) => {
          tab.rows.forEach((trow) => {
            trow.elements.forEach((element) => {
              elements.push(element);
            });
          });
        });
      } else if (row.type === WidgetFormRowType.SECTIONS) {
        row.sections && row.sections.forEach((tab) => {
          tab.rows.forEach((trow) => {
            trow.elements.forEach((element) => {
              elements.push(element);
            });
          });
        });
      } else if (row.type === WidgetFormRowType.ROW) {
        row.elements && row.elements.forEach((element) => {
          elements.push(element);
        });
      }
    } else {
      elements = row.elements;
    }
    elements.forEach((element) => {
      if (element.type === WidgetFormElementType.AGE || element.type === WidgetFormElementType.DOB) {
        result[element.map] = values[element.map] ? values[element.map] : "|years";
      } else if (element.type === WidgetFormElementType.SIMPLE_SELECT) {
        result[element.map] = element.options.find((option) => {
          let exploded = element.map.split(".");
          if (exploded.length == 1) {
            return option.value == values[element.map];
          } else if (exploded.length == 2 && values[exploded[0]] && values[exploded[0]][exploded[1]]) {
            return option.value == values[exploded[0]][exploded[1]];
          } else if (exploded.length == 3 && values[exploded[0]] && values[exploded[0]][exploded[1]] && values[exploded[0]][exploded[1]][exploded[2]]) {
            return option.value == values[exploded[0]][exploded[1]][exploded[2]];
          }
        });
      } else if (element.type === WidgetFormElementType.ONE_TO_MANY) {
        if (values[element.map]) {
          let relationalArray = [];
          element.config.elements.forEach((el) => {
            values[element.map].forEach((vl, recordIndex) => {
              if (!relationalArray[recordIndex]) {
                relationalArray[recordIndex] = {};
              }
              if (vl[el.map] !== void 0) {
                if (el.type === WidgetFormElementType.SIMPLE_SELECT) {
                  relationalArray[recordIndex][el.map] = vl[el.map] ? el.options.find((option) => {
                    return option.value == vl[el.map];
                  }) : "";
                } else if (el.type === WidgetFormElementType.CHECKBOX) {
                  relationalArray[recordIndex][el.map] = vl[el.map] === 1 ? true : false;
                } else {
                  relationalArray[recordIndex][el.map] = vl[el.map];
                }
              } else {
                console.log(el, " EL Not found");
              }
            });
            if (element.config.attachments) {
              Object.keys(element.config.attachments).forEach((key) => {
                values[element.map].forEach((vl, recordIndex) => {
                  if (vl[key]) {
                    relationalArray[recordIndex][element.config.attachments[key]] = vl[key];
                  } else {
                    console.log(el, " Attachment Not found");
                  }
                });
              });
            }
          });
          result[element.map] = relationalArray;
        }
      } else {
        const match = element.map.match(/(.+)\[(.+)\]/);
        if (match) {
          if (!result[match[1]]) {
            result[match[1]] = {};
          }
          result[match[1]][match[2]] = values[match[1]] && values[match[1]][match[2]] ? values[match[1]][match[2]] : "";
        } else {
          let exploded = element.map.split(".");
          if (exploded.length === 1) {
            result[element.map] = values[element.map] ? values[element.map] : "";
          } else if (exploded.length === 2) {
            result[element.map] = values[exploded[0]] && values[exploded[0]][exploded[1]] ? values[exploded[0]][exploded[1]] : "";
          } else if (exploded.length === 3) {
            result[element.map] = values[exploded[0]] && values[exploded[0]][exploded[1]] && values[exploded[0]][exploded[1]][exploded[2]] ? values[exploded[0]][exploded[1]][exploded[2]] : "";
          }
        }
      }
    });
    return result;
  }, {});
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const { data, setData, reset } = useForm(formElements);
  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);
  const resetForm = () => {
    reset();
  };
  const setRelationData = (key, value) => {
    let splited = key.split(".");
    let tempObj = data[splited[0]];
    if (splited.length === 1) {
      tempObj = value;
    }
    if (splited.length === 2) {
      tempObj[splited[1]] = value;
    }
    if (splited.length === 3) {
      tempObj[splited[1]][splited[2]] = value;
    }
    setData(splited[0], tempObj);
  };
  const addRelationData = (key, elemants) => {
    let newObject = {};
    elemants.forEach((element) => {
      newObject[element.map] = "";
    });
    let tempObj = data[key] ? data[key] : [];
    tempObj.push(newObject);
    console.log(tempObj);
    setData(key, tempObj);
    postHeight();
  };
  const submit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});
    const ToastNotification = toast.loading(
      form.type == "create" ? "Ceating" : form.type == "edit" ? "Updating" : form.type == "delete" ? "Deleting" : form.type == "confirm" ? "Confirming" : form.type == "block" ? "Blocking" : "Submiting"
    );
    axios.post(submitAt, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((resp) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      if ((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.next) {
        if ((_c = (_b = resp == null ? void 0 : resp.data) == null ? void 0 : _b.next) == null ? void 0 : _c.type) {
          if ((_d = resp == null ? void 0 : resp.data) == null ? void 0 : _d.message) {
            toast.update(ToastNotification, {
              render: (_e = resp == null ? void 0 : resp.data) == null ? void 0 : _e.message,
              type: "success",
              isLoading: false,
              autoClose: 5e3
            });
          }
          if (((_g = (_f = resp == null ? void 0 : resp.data) == null ? void 0 : _f.next) == null ? void 0 : _g.type) === "reload") {
            router && router.reload();
          } else if (((_i = (_h = resp == null ? void 0 : resp.data) == null ? void 0 : _h.next) == null ? void 0 : _i.type) === "redirect" && ((_k = (_j = resp == null ? void 0 : resp.data) == null ? void 0 : _j.next) == null ? void 0 : _k.action)) {
            router && router.visit((_m = (_l = resp == null ? void 0 : resp.data) == null ? void 0 : _l.next) == null ? void 0 : _m.action);
          }
        }
      }
    }).catch(({ response }) => {
      if (response.status == 422) {
        let errorstrings = {};
        Object.keys(response.data.errors).forEach((index) => {
          console.log(index, response.data.errors[index]);
          errorstrings[index] = response.data.errors[index].join(", ");
        });
        setErrors(errorstrings);
      }
      toast.update(ToastNotification, {
        render: "Something went wrong 🤯",
        type: "error",
        isLoading: false,
        autoClose: 5e3
      });
    }).finally(() => {
      setProcessing(false);
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 shadow-md rounded-sm pt-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 bg-clip-border", children: /* @__PURE__ */ jsx("div", { className: "px-4 text-gray-900", children: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: form.name }) }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "pt-4", children: [
      /* @__PURE__ */ jsx(FormBody, { form, data, errors, addRelationData, setData, setRelationData }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-right justify-end space-x-3 p-4 bg-gray-100", children: [
        /* @__PURE__ */ jsx(ActionButton, { colorType: "secondary", variant: "md", type: "button", disabled: processing, onClick: () => resetForm(), children: "Reset" }),
        /* @__PURE__ */ jsxs(ActionButton, { colorType: "primary", variant: "md", type: "submit", disabled: processing, children: [
          processing && /* @__PURE__ */ jsx(AppIcon, { className: "animate-spin text-white", icon: "loader" }),
          form.type == "create" ? processing ? "Ceating" : "Create" : form.type == "edit" ? processing ? "Updating" : "Update" : form.type == "delete" ? processing ? "Deleting" : "Delete" : form.type == "confirm" ? processing ? "Confirming" : "Confirm" : form.type == "block" ? processing ? "Blocking" : "Block" : processing ? "Submiting" : "Submit"
        ] })
      ] })
    ] })
  ] });
}
function FormBody({ form, data = [], errors = {}, addRelationData, setData, setRelationData }) {
  console.log(form, data);
  return /* @__PURE__ */ jsx(Fragment$1, { children: form.rows.map((row, row_index) => {
    return /* @__PURE__ */ jsx("div", { children: validateShowWhen(row == null ? void 0 : row.show_when, data) === true && /* @__PURE__ */ jsx("div", { children: row.type ? /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      row.type === WidgetFormRowType.ACCORDION && row.tabs.map((tab) => {
        return /* @__PURE__ */ jsx(Disclosure, { children: ({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Disclosure.Button, { className: "flex w-full justify-between rounded-lg bg-blue-100 px-4 mb-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75", children: [
              tab.title,
              /* @__PURE__ */ jsx(AppIcon, { icon: "chevron-right", className: `${open ? "rotate-90 transform" : ""} h-5 w-5 text-blue-500 ` })
            ] }),
            /* @__PURE__ */ jsx(
              Transition,
              {
                show: open,
                enter: "transition duration-100 ease-out",
                enterFrom: "transform scale-95 opacity-0",
                enterTo: "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-out",
                leaveFrom: "transform scale-100 opacity-100",
                leaveTo: "transform scale-95 opacity-0",
                children: /* @__PURE__ */ jsx(Disclosure.Panel, { className: "px-4 pb-2 text-sm text-gray-500 mb-2", static: true, children: tab.rows.map((trow) => {
                  return /* @__PURE__ */ jsx(FormElements, { row: trow, data, errors, setData, addRelationData, setRelationData });
                }) })
              }
            )
          ] })
        ) });
      }),
      row.type === WidgetFormRowType.SECTIONS && /* @__PURE__ */ jsx("div", { className: "gap-4 w-full grid grid-cols-12", children: row.sections.map((section) => {
        return /* @__PURE__ */ jsx("div", { children: section.rows.map((srow) => {
          return /* @__PURE__ */ jsx(RowElement, { element: srow, children: /* @__PURE__ */ jsx(FormElements, { row: srow, data, errors, setData, inside: true, addRelationData, setRelationData }) });
        }) });
      }) }),
      row.type === WidgetFormRowType.TABS && /* @__PURE__ */ jsxs(Tab.Group, { onChange: () => postHeight(), children: [
        /* @__PURE__ */ jsx(Tab.List, { className: "flex space-x-1 rounded-md p-1 border bg-white", children: row.tabs.map((tab) => {
          return /* @__PURE__ */ jsx(
            Tab,
            {
              className: ({ selected }) => classNames(
                "flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected ? "bg-gray-100 text-slate-800 shadow" : "text-slate-500 hover:bg-gray-50"
              ),
              children: tab.title
            }
          );
        }) }),
        /* @__PURE__ */ jsx(Tab.Panels, { className: "mt-2", children: row.tabs.map((tab) => {
          return /* @__PURE__ */ jsx(
            Tab.Panel,
            {
              className: classNames(
                "p-3 grid grid-cols-12 gap-4 rounded-sm shadow-md bg-white text-gray-500 text-sm"
              ),
              children: tab.rows.map((trow) => {
                return /* @__PURE__ */ jsx(RowElement, { element: trow, children: /* @__PURE__ */ jsx(FormElements, { row: trow, data, errors, setData, inside: true, addRelationData, setRelationData }) });
              })
            }
          );
        }) })
      ] }),
      row.type === WidgetFormRowType.ROW && /* @__PURE__ */ jsx("div", { children: row.group_label ? /* @__PURE__ */ jsxs("div", { className: classNames("flex flex-col md:flex-row my-4 py-4", {
        "border-t": row_index != 0
      }), children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/12", children: [
          /* @__PURE__ */ jsx("h4", { className: "px-4 pb-3 md:px-6 md:pb-0 text-md font-semibold", children: row.group_label }),
          row.group_description && /* @__PURE__ */ jsx("h5", { className: "px-4 text-gray-500 pb-3 md:px-6 md:pb-0 text-sm", children: row.group_description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-10/12", children: /* @__PURE__ */ jsx(FormElements, { row, data, errors, setData, addRelationData, setRelationData }) })
      ] }) : /* @__PURE__ */ jsx(FormElements, { row, data, errors, setData, addRelationData, setRelationData }) })
    ] }) }) : /* @__PURE__ */ jsx("div", { children: row.group_label ? /* @__PURE__ */ jsxs("div", { className: classNames("flex flex-col md:flex-row my-4 py-4", {
      "border-t": row_index != 0
    }), children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/12", children: [
        /* @__PURE__ */ jsx("h4", { className: "px-4 pb-3 md:px-6 md:pb-0 text-md font-semibold", children: row.group_label }),
        row.group_description && /* @__PURE__ */ jsx("h5", { className: "px-4 text-gray-500 pb-3 md:px-6 md:pb-0 text-sm", children: row.group_description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-10/12", children: /* @__PURE__ */ jsx(FormElements, { row, data, errors, setData, addRelationData, setRelationData }) })
    ] }) : /* @__PURE__ */ jsx(FormElements, { row, data, errors, setData, addRelationData, setRelationData }) }) }) });
  }) });
}
const validateShowWhen = (conditions, data) => {
  if (conditions === void 0 || data === void 0)
    return true;
  if (conditions.length <= 0)
    return true;
  if (Array.isArray(data)) {
    if (data.length <= 0)
      return true;
  } else if (typeof data === "object") {
    if (Object.keys(data).length <= 0)
      return true;
  }
  let retVal = [];
  conditions.forEach((condition) => {
    let explodedIndexes = condition.key.split(".");
    let valueToCompare;
    if (explodedIndexes.length === 1)
      valueToCompare = data[explodedIndexes[0]];
    if (explodedIndexes.length === 2)
      valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]];
    if (explodedIndexes.length === 3)
      valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]][explodedIndexes[2]];
    if (explodedIndexes.length === 4)
      valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]][explodedIndexes[2]][explodedIndexes[3]];
    if (condition.operator === "EQUAL" || condition.operator === "EQUALS") {
      retVal.push(valueToCompare == condition.value);
    }
    if (condition.operator === "NOT_EQUAL" || condition.operator === "NOT_EQUALS") {
      retVal.push(valueToCompare != condition.value);
    }
    if (condition.operator === "IN") {
      retVal.push(condition.value.includes(valueToCompare));
    }
  });
  return retVal.includes(true);
};
function FormElements({ row, data, errors, setData, inside = false, addRelationData, setRelationData }) {
  const deleteElement = (key, index) => {
    let tempData = data[key];
    tempData.splice(index, 1);
    console.log(key, tempData);
    setData(key, tempData);
  };
  return /* @__PURE__ */ jsxs("div", { className: classNames({
    "mb-4 px-4 w-full": inside === false,
    "mb-4 w-full": inside === true
  }), children: [
    row.title && /* @__PURE__ */ jsx("div", { className: "flex-1 w-full text-left text-sm font-medium text-blue-900", children: row.title }),
    /* @__PURE__ */ jsx("div", { className: classNames("gap-4 w-full grid grid-cols-12", {
      // "flex flex-col md:flex-row justify-between mt-4" : inside === false,
      // "flex flex-col mt-2" : inside === true
    }), children: row.elements.map((element) => {
      if (validateShowWhen(element == null ? void 0 : element.show_when, data)) {
        return /* @__PURE__ */ jsxs(RowElement, { element, children: [
          element.type != WidgetFormElementType.ONE_TO_MANY && /* @__PURE__ */ jsxs("div", { children: [
            element.type != WidgetFormElementType.HIDDEN && element.type != WidgetFormElementType.CHECKBOX && /* @__PURE__ */ jsx(InputLabel, { htmlFor: element.map, label: element.label, required: element == null ? void 0 : element.required }),
            /* @__PURE__ */ jsx(
              InputField,
              {
                element,
                data,
                setData: (map, value) => setData(map, value)
              }
            )
          ] }),
          element.type === "one-to-many" && /* @__PURE__ */ jsxs("div", { className: "border rounded-sm relative p-3", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: element.map, label: element.label, required: element == null ? void 0 : element.required, className: "absolute -top-3 left-0.5" }),
            data[element.map] && data[element.map].map((dat, index) => {
              return /* @__PURE__ */ jsxs("div", { className: classNames("flex flex-row w-full my-1 border divide-x divide-double", {
                "bg-gray-100": index % 2 == 0,
                "bg-gray-200": index % 2 != 0
              }), children: [
                element.config.elements_label && /* @__PURE__ */ jsxs("div", { className: classNames("flex-0 justify-center items-center h-full"), children: [
                  /* @__PURE__ */ jsx(ActionButton, { colorType: "dangerous", type: "button", variant: "xs", children: /* @__PURE__ */ jsx(AppIcon, { icon: "trash", className: "h-4 w-4", onClick: () => deleteElement(element.map, index) }) }),
                  /* @__PURE__ */ jsx("p", { className: "[writing-mode:vertical-lr] text-center text-sm p-1 py-2", children: dat[element.config.elements_label] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-12 gap-4 p-3", children: element.config.elements.map((el) => {
                  if (validateShowWhen(el == null ? void 0 : el.show_when, dat)) {
                    return /* @__PURE__ */ jsxs(RowElement, { element: el, wrapperClassName: "gap-4", children: [
                      el.type != WidgetFormElementType.HIDDEN && el.type != WidgetFormElementType.CHECKBOX && /* @__PURE__ */ jsx(InputLabel, { htmlFor: el.map, label: el.label }),
                      /* @__PURE__ */ jsx(
                        InputField,
                        {
                          element: el,
                          data: dat,
                          setData: (map, value) => setRelationData(element.map + "." + index + "." + map, value)
                        }
                      )
                    ] });
                  }
                }) })
              ] });
            }),
            element.config.allow_new && /* @__PURE__ */ jsx("div", { className: "flex flex-row-reverse mt-1", children: /* @__PURE__ */ jsxs(ActionButton, { colorType: "primary", type: "button", onClick: () => addRelationData(element.map, element.config.elements), variant: "xs", children: [
              /* @__PURE__ */ jsx(AppIcon, { icon: "plus", className: "h-3 w-3" }),
              " Add"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors[element.map], className: "mt-2" })
        ] });
      }
    }) })
  ] });
}
export {
  FormBody,
  FormElements,
  FormBuilder as default
};
