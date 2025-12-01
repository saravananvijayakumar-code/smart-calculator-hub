import { c as create, p as persist, a as createJSONStorage } from "./middleware-Xu_RK28m.js";
const useCalculatorStore = create()(
  persist(
    (set, get) => ({
      history: [],
      selectedForComparison: [],
      addCalculation: (entry) => {
        const id = `calc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newEntry = {
          ...entry,
          id,
          timestamp: Date.now()
        };
        set((state) => ({
          history: [newEntry, ...state.history]
        }));
        return id;
      },
      deleteCalculation: (id) => {
        set((state) => ({
          history: state.history.filter((entry) => entry.id !== id),
          selectedForComparison: state.selectedForComparison.filter((selectedId) => selectedId !== id)
        }));
      },
      deleteMultiple: (ids) => {
        set((state) => ({
          history: state.history.filter((entry) => !ids.includes(entry.id)),
          selectedForComparison: state.selectedForComparison.filter((id) => !ids.includes(id))
        }));
      },
      clearHistory: () => {
        set({
          history: [],
          selectedForComparison: []
        });
      },
      updateNotes: (id, notes) => {
        set((state) => ({
          history: state.history.map(
            (entry) => entry.id === id ? { ...entry, notes } : entry
          )
        }));
      },
      updateTags: (id, tags) => {
        set((state) => ({
          history: state.history.map(
            (entry) => entry.id === id ? { ...entry, tags } : entry
          )
        }));
      },
      toggleFavorite: (id) => {
        set((state) => ({
          history: state.history.map(
            (entry) => entry.id === id ? { ...entry, favorite: !entry.favorite } : entry
          )
        }));
      },
      toggleComparisonSelection: (id) => {
        set((state) => {
          const isSelected = state.selectedForComparison.includes(id);
          if (isSelected) {
            return {
              selectedForComparison: state.selectedForComparison.filter((selectedId) => selectedId !== id)
            };
          } else {
            if (state.selectedForComparison.length >= 5) {
              return state;
            }
            return {
              selectedForComparison: [...state.selectedForComparison, id]
            };
          }
        });
      },
      clearComparisonSelection: () => {
        set({ selectedForComparison: [] });
      },
      getCalculationById: (id) => {
        return get().history.find((entry) => entry.id === id);
      },
      getCalculationsByType: (type) => {
        return get().history.filter((entry) => entry.calculatorType === type);
      },
      exportHistory: () => {
        const { history } = get();
        return JSON.stringify({
          version: 1,
          exportDate: (/* @__PURE__ */ new Date()).toISOString(),
          history
        }, null, 2);
      }
    }),
    {
      name: "calculator-history-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        history: state.history
      })
    }
  )
);
export {
  useCalculatorStore as u
};
