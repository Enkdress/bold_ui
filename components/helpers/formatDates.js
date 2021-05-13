import { format } from "date-fns";
import es from "date-fns/locale/es";

export function formatDate(date = null) {
  let month, day, year, week;

  if (date) {
    month = format(new Date(date), "MMMM", { locale: es });
    day = format(new Date(date), "d");
    year = format(new Date(date), "uu");
    week = format(new Date(date), "w");
  } else {
    month = format(new Date(), "MMMM", { locale: es });
    day = format(new Date(), "d");
    year = format(new Date(), "uu");
    week = format(new Date(), "w");
  }

  return {
    month,
    day,
    year,
    week,
  };
}
