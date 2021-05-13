import { useReducer, useMemo } from "react";
import FilterContext from "./filter.context";
import salesFilterReducer from "./filter.reducer";
import {
  SET_FILTER,
  SET_RESUME,
  SET_SALES_LIST,
} from "./filter.actions";

const SalesFilterProvider = (props) => {
  const [state, dispatch] = useReducer(salesFilterReducer, {
    ...props.initialValue,
    filters: {
      dateFilter: "day",
      otherFilter: []
    }
  });

  const setFilter = (value) => dispatch({ type: SET_FILTER, value });
  const setSalesList = (value) => {
    dispatch({ type: SET_SALES_LIST, value });
    setResume(); 
  };
  const setResume = (value = null) => dispatch({ type: SET_RESUME, value });

  const value = useMemo(
    () => ({
      ...state,
      setFilter,
      setSalesList,
      setResume,
    }),
    [state]
  );

  return <FilterContext.Provider value={value} {...props} />;
};

export default SalesFilterProvider;
