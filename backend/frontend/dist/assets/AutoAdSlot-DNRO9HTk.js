import { j as jsxRuntimeExports } from "./index-CK9G4vW7.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
function AutoAdSlot({ className = "", position = "top", placement }) {
  let finalPosition = position;
  if (placement) {
    if (placement.includes("top") || placement.includes("banner")) {
      finalPosition = "top";
    } else if (placement.includes("mid") || placement.includes("feed") || placement.includes("article") || placement.includes("content")) {
      finalPosition = "middle";
    } else if (placement.includes("bottom")) {
      finalPosition = "bottom";
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: finalPosition }) });
}
export {
  AutoAdSlot as A
};
