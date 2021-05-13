import styles from "assets/sales.module.scss";
import { TimeFilters, ExtraFilters } from "components/Sales/salesFilters";
import Card from "components/card";
import useFilterContext from "components/Filter/useFilterContext";
import { formatDate } from "components/helpers/formatDates";
import Price from "components/helpers/price";

function SalesResume() {
  const { filters, resume } = useFilterContext();

  const CardTitle = () => {
    let dynamicText;
    dynamicText =
      filters.dateFilter == "day"
        ? "hoy"
        : filters.dateFilter == "week"
        ? "la semana"
        : formatDate().month;
    return <h2>Total ventas de {dynamicText}</h2>;
  };

  const CardContent = () => {
    const subtitle = `${formatDate().month}, ${
      filters.dateFilter == "day" ? formatDate().day : formatDate().year
    }`;
    return (
      <>
        <h1 className={styles.price}>
          <Price value={resume} />
        </h1>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </>
    );
  };

  return (
    <section className={styles.container__resume}>
      <Card title={<CardTitle />} content={<CardContent />} width="40%" />
      <div className={styles.filters}>
        <TimeFilters />
        <ExtraFilters />
      </div>
    </section>
  );
}

export default SalesResume;
