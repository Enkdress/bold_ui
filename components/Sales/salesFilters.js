import styles from "assets/sales.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export function TimeFilters() {
  return (
    <div className={styles.container__timefilter}>
      <input type="radio" id="today" name="filter" defaultChecked />
      <label htmlFor="today">Hoy</label>
      <input type="radio" id="week" name="filter" />
      <label htmlFor="week">Esta semana</label>
      <input type="radio" id="month" name="filter" />
      <label htmlFor="month">Septiembre</label>
    </div>
  );
}

export function ExtraFilters() {
  const [isShowingFilters, setIsShowingFilters] = useState(false);

  const handleExpand = () => {
    setIsShowingFilters(!isShowingFilters);
  };

  return (
    <div className={styles.container__extrafilter}>
      {!isShowingFilters && (
        <div className={styles.filterButton}>
          <button onClick={handleExpand}>
            <span>FILTRAR</span>
            <Image src="/img/adjust.png" alt="icon" width={18} height={18} />
          </button>
        </div>
      )}
      {isShowingFilters && (
        <div className={styles.selectFilter}>
          <div className={styles.heading}>
            <h4>FILTRAR</h4>
            <button onClick={handleExpand}>X</button>
          </div>
          <form>
            <p>
              <input type="checkbox" id="datafono" value="datafono" />
              <label htmlFor="datafono">Cobro con datafono</label>
            </p>
            <p>
              <input type="checkbox" id="link" value="link" />
              <label htmlFor="link">Cobro con link de pago</label>
            </p>
            <p>
              <input type="checkbox" id="all" value="all" />
              <label htmlFor="all">Ver todos</label>
            </p>
            <button>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  );
}
