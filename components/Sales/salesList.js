import styles from "assets/sales.module.scss";
import { Table } from "antd";
import Image from "next/image";
import Card from "components/card";
import useFilterContext from "components/Filter/useFilterContext";
import Price from "components/helpers/price";
import { formatDate } from "components/helpers/formatDates";

function SalesList() {
  const { salesList, filters } = useFilterContext();

  const CardTitle = () => {
    let dynamicText;
    dynamicText =
      filters.dateFilter == "day"
        ? "hoy"
        : filters.dateFilter == "week"
        ? "la semana"
        : formatDate().month;
    return <h2>Tus ventas de {dynamicText}</h2>;
  };

  return (
    <section>
      <Card
        title={<CardTitle />}
        content={<SalesTable datasource={salesList} />}
        isDark
        isFullWidthContent
      />
      ;
    </section>
  );
}

export default SalesList;

function SalesTable({ datasource = {} }) {
  const columns = [
    {
      title: "Transaccion",
      dataIndex: "state",
      rowKey: "0",
      render: (text, record) => {
        const isPaySuccess = record.state.includes("exitoso")
          ? "table__success"
          : "table__no_success";
        if (record.payment_type == "link") {
          return (
            <div
              className={[styles.table__transaction, styles[isPaySuccess]].join(
                " "
              )}
              style={{ fontSize: "16px" }}
            >
              <Image src="/img/chain.png" width={18} height={18} />
              <span>{text}</span>
            </div>
          );
        } else {
          return (
            <div
              className={[styles.table__transaction, styles[isPaySuccess]].join(
                " "
              )}
              style={{ fontSize: "16px" }}
            >
              <Image src="/img/datafono.png" width={24} height={24} />
              <span>{text}</span>
            </div>
          );
        }
      },
    },
    {
      title: "Fecha y hora",
      dataIndex: "datetime",
      rowKey: "1",
      render: (text) => (
        <span style={{ color: "#777", fontSize: "16px" }}>{text}</span>
      ),
    },
    {
      title: "Metodo de pago",
      dataIndex: "payment_method",
      rowKey: "2",
      render: (text) => {
        return (
          <div
            className={styles.table__payment}
            style={{ fontSize: "16px", color: "#777" }}
          >
            <Image src="/img/mastercard.png" width={20} height={20} />
            <span>{text}</span>
          </div>
        );
      },
    },
    {
      title: "ID transaccion Bold",
      dataIndex: "id_bold_transaction",
      rowKey: "3",
      render: (text) => {
        return <span style={{ fontSize: "16px", color: "#777" }}>{text}</span>;
      },
    },
    {
      title: "Monto",
      dataIndex: "amount",
      rowKey: "4",
      render: (text, record) => {
        if (record.bold_reduction == 0) {
          return (
            <span style={{ color: "#111e6c", fontSize: "16px" }}>
              <Price value={text} />
            </span>
          );
        } else {
          return (
            <div className={styles.table__amount}>
              <span style={{ color: "#111e6c", fontSize: "16px" }}>
                <Price value={text} />
              </span>
              <span style={{ color: "#111e6c", fontSize: "0.8em" }}>
                Deduccion Bold
              </span>
              <span style={{ color: "red", fontSize: "0.8em" }}>
                -<Price value={record.bold_reduction} />
              </span>
            </div>
          );
        }
      },
    },
  ];

  return (
    <Table
      rowClassName="custom-rows"
      responsive
      pagination={false}
      columns={columns}
      dataSource={datasource}
      scroll={{ y: 300, x: true }}
    />
  );
}
