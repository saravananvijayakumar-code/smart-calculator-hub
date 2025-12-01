import { r as reactExports } from "./index-CK9G4vW7.js";
import { u as useCalculatorStore } from "./calculatorStore-CZ9YYacT.js";
function useCalculatorHistory() {
  const addCalculation = useCalculatorStore((state) => state.addCalculation);
  const getCalculationsByType = useCalculatorStore((state) => state.getCalculationsByType);
  const saveCalculation = reactExports.useCallback(
    (params) => {
      const id = addCalculation({
        calculatorType: params.calculatorType,
        calculatorName: params.calculatorName,
        inputs: params.inputs,
        results: params.results,
        notes: params.notes,
        tags: params.tags
      });
      return id;
    },
    [addCalculation]
  );
  const getHistory = reactExports.useCallback(
    (calculatorType) => {
      if (calculatorType) {
        return getCalculationsByType(calculatorType);
      }
      return useCalculatorStore.getState().history;
    },
    [getCalculationsByType]
  );
  return {
    saveCalculation,
    getHistory
  };
}
export {
  useCalculatorHistory as u
};
