import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { setFilter } from "../../store/filterSlice";
import { selectFilter } from "../../store/selectors";
import { TodoFilters, FilterLabelMap } from "../../constants/filters";
import Button from "../shared/Button/Button";

function TodoFilterPanel() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);
  const [activeFilter, setActiveFilter] = useState(selectedFilter);

  useEffect(() => {
    setActiveFilter(selectedFilter);
  }, [selectedFilter]);

  const getButtonClassName = (filterType) =>
    `${activeFilter === filterType ? "selected" : ""}`;

  const handleFilter = (filterType) => {
    dispatch(setFilter(filterType));
    setActiveFilter(filterType);
  };

  return (
    <div>
      {TodoFilters.map((filter) => (
        <Button
          key={nanoid()}
          className={getButtonClassName(filter)}
          onClick={() => handleFilter(filter)}
        >
          {FilterLabelMap[filter]}
        </Button>
      ))}
    </div>
  );
}

export default TodoFilterPanel;
