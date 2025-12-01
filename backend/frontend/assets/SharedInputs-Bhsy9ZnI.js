import { j as jsxRuntimeExports, a3 as Label, U as Input } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-BgeuPglM.js";
import { b as activityLabels } from "./utils-C5YzN_36.js";
function WeightInput({ value, onChange, unit, error }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "weight", children: [
      "Weight (",
      unit === "metric" ? "kg" : "lbs",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "weight",
        type: "number",
        value: value || "",
        onChange: (e) => onChange(parseFloat(e.target.value) || 0),
        min: unit === "metric" ? 30 : 66,
        max: unit === "metric" ? 300 : 660,
        step: "0.1",
        "aria-describedby": error ? "weight-error" : void 0,
        "aria-invalid": !!error
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "weight-error", className: "text-sm text-red-500", children: error })
  ] });
}
function AgeInput({ value, onChange, error }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "age", children: "Age (years)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "age",
        type: "number",
        value: value || "",
        onChange: (e) => onChange(parseInt(e.target.value) || 0),
        min: 1,
        max: 120,
        "aria-describedby": error ? "age-error" : void 0,
        "aria-invalid": !!error
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "age-error", className: "text-sm text-red-500", children: error })
  ] });
}
function SexInput({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sex" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      RadioGroup,
      {
        value,
        onValueChange: (v) => onChange(v),
        className: "flex gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "male", id: "male" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "male", className: "font-normal cursor-pointer", children: "Male" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "female", id: "female" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "female", className: "font-normal cursor-pointer", children: "Female" })
          ] })
        ]
      }
    )
  ] });
}
function UnitToggle({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Unit System" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      RadioGroup,
      {
        value,
        onValueChange: (v) => onChange(v),
        className: "flex gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "metric", id: "metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "metric", className: "font-normal cursor-pointer", children: "Metric" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "imperial", id: "imperial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "imperial", className: "font-normal cursor-pointer", children: "Imperial" })
          ] })
        ]
      }
    )
  ] });
}
function ActivitySelect({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "activity", children: "Activity Level" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: (v) => onChange(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "activity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(activityLabels).map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: level, children: activityLabels[level] }, level)) })
    ] })
  ] });
}
function CircumferenceInput({ label, id, value, onChange, unit, error }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: id, children: [
      label,
      " (",
      unit === "metric" ? "cm" : "inches",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id,
        type: "number",
        value: value || "",
        onChange: (e) => onChange(parseFloat(e.target.value) || 0),
        min: unit === "metric" ? 10 : 4,
        max: unit === "metric" ? 200 : 80,
        step: "0.1",
        "aria-describedby": error ? `${id}-error` : void 0,
        "aria-invalid": !!error
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${id}-error`, className: "text-sm text-red-500", children: error })
  ] });
}
export {
  AgeInput as A,
  CircumferenceInput as C,
  SexInput as S,
  UnitToggle as U,
  WeightInput as W,
  ActivitySelect as a
};
