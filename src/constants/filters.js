const FilterType = Object.freeze({
  None: "None",
  Completed: "Completed",
  Active: "Active",
});

const FilterLabelMap = Object.freeze({
  [FilterType.None]: "ALL",
  [FilterType.Completed]: "COMPLETED",
  [FilterType.Active]: "ACTIVE",
});

const TodoFilters = [FilterType.None, FilterType.Completed, FilterType.Active];

export { FilterType, FilterLabelMap, TodoFilters };
