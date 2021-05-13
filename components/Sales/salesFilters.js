import styles from "assets/sales.module.scss";
import { useState } from "react";
import Image from "next/image";
import useFilterContext from "components/Filter/useFilterContext";
import { formatDate } from "components/helpers/formatDates";

export function TimeFilters() {
  const { setFilter, setSalesList } = useFilterContext();
  const handleChange = ({ target }) => {
    setFilter({ key: "dateFilter", filterValue: target.id });
    fetch("/data.json")
      .then((res) => res.json())
      .then(({ sales }) => {
        setSalesList(sales);
      });
  };

  return (
    <div className={styles.container__timefilter}>
      <input
        onChange={handleChange}
        type="radio"
        id="day"
        name="filter"
        defaultChecked
      />
      <label htmlFor="day">Hoy</label>
      <input onChange={handleChange} type="radio" id="week" name="filter" />
      <label htmlFor="week">Esta semana</label>
      <input onChange={handleChange} type="radio" id="month" name="filter" />
      <label htmlFor="month">{formatDate().month}</label>
    </div>
  );
}

export function ExtraFilters() {
  const [isShowingFilters, setIsShowingFilters] = useState(false);
  const { setFilter, setSalesList, filters } = useFilterContext();

  const handleExpand = () => {
    setIsShowingFilters(!isShowingFilters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = [];
    Object.values(e.target).forEach((elem) => {
      if (elem.checked && elem.nodeName == "INPUT") {
        values.push(elem.value);
      }
    });
    setFilter(values);
    fetch("/data.json")
      .then((res) => res.json())
      .then(({ sales }) => setSalesList(sales));
  };

  const setCheckedFilters = (name) => {

  }

  const isDatafonoChecked = filters?.otherFilter.find((filter) => filter == "datafono");
  const isLinkChecked = filters?.otherFilter.find((filter) => filter == "link");
  const isAllChecked = filters?.otherFilter.find((filter) => filter == "all");

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
          <form onSubmit={handleSubmit}>
            <p>
              <input type="checkbox" id="datafono" value="datafono" defaultChecked={isDatafonoChecked}/>
              <label htmlFor="datafono">Cobro con datafono</label>
            </p>
            <p>
              <input type="checkbox" id="link" value="link" defaultChecked={isLinkChecked} />
              <label htmlFor="link">Cobro con link de pago</label>
            </p>
            <p>
              <input type="checkbox" id="all" value="all" defaultChecked={isAllChecked} />
              <label htmlFor="all">Ver todos</label>
            </p>
            <button>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  );
}
