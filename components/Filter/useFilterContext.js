import { useContext } from "react";
import FilterContext from "./filter.context";

const useSalesFilter = () => {
  const context = useContext(FilterContext);
  if (context == undefined)
    throw new Error(`useSalesFilter should be used within SalesFlightProvider`);

  return context;
};

export default useSalesFilter;
