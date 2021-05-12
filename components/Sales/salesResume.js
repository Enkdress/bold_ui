import styles from "assets/sales.module.scss";
import { TimeFilters, ExtraFilters } from "components/Sales/salesFilters";
import Card from "components/card";

function SalesResume() {
  return (
    <section className={styles.container__resume}>
      <Card title={"hola"} content={"sup"} width="40%" />
      <div className={styles.filters}>
        <TimeFilters />
        <ExtraFilters />
      </div>
    </section>
  );
}

export default SalesResume;
