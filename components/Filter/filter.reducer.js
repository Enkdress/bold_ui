import { SET_FILTER, SET_RESUME, SET_SALES_LIST } from "./filter.actions";
import { getSalesResume } from "components/helpers/getSalesResume";
import { formatDate } from "components/helpers/formatDates";

function salesFilterReducer(state, action) {
  switch (action.type) {
    case SET_FILTER:
      if (action.value.key == "dateFilter") {
        return {
          ...state,
          filters: { ...state?.filters, dateFilter: action.value.filterValue },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state?.filters,
            otherFilter: action.value,
          },
        };
      }

    case SET_SALES_LIST:
      const getByFilters = () => {
        let matches = [];
        state?.filters.otherFilter.forEach((filter) => {
          let match;
          if (filter !== "all") {
            match = action.value.filter((sale) => sale.payment_type == filter);
            matches.push(...match);
          } else {
            matches = action.value;
          }
        });
        return matches.length == 0 ? action.value : matches;
      };

      const getByDates = () => {
        const filteredList = getByFilters();
        return filteredList.filter(
          (sale) =>
            formatDate(sale.datetime)[state?.filters.dateFilter] ==
            formatDate()[state?.filters.dateFilter]
        );
      };

      const salesListFiltered = getByDates();

      return {
        ...state,
        salesList: salesListFiltered.length == 0 ? null : salesListFiltered,
      };
    case SET_RESUME:
      const totalPrice = getSalesResume(state?.salesList);

      return { ...state, resume: totalPrice };
    default:
      return { ...state };
  }
}

export default salesFilterReducer;
