import { r as reactExports } from "./index-C_OXA6OQ.js";
import { u as useCalculatorStore } from "./calculatorStore-DyZ3rxbe.js";
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
