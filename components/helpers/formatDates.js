import { format } from "date-fns";
import { es } from "date-fns/locale/es";

export function formatDate() {
  const month = format(new Date(), MMMM, { locale: es });
  const day = format(new Date(), d);
  const year = format(new Date(), uu);
  const composeDate = format(new Date(), Pp);

  return {
    month,
    day,
    year,
    composeDate,
  };
}
