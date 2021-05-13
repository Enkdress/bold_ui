import { Table } from "antd";
import Card from "components/card";

function SalesList() {
  return <Card title="Tus ventas" content={<SalesTable />} isDark isFullWidthContent />;
}

export default SalesList;

function SalesTable({ datasource = {} }) {
  const columns = [
    {
      title: "Transaccion",
      dataIndex: "transaction",
      key: "0",
    },
    {
      title: "Fecha y hora",
      dataIndex: "datetime",
      key: "1",
    },
    {
      title: "Metodo de pago",
      dataIndex: "payment_method",
      key: "2",
    },
    {
      title: "ID transaccion Bold",
      dataIndex: "id_bold_transaction",
      key: "3",
    },
    {
      title: "Monto",
      dataIndex: "amount",
      key: "4",
    },
  ];

  return <Table columns={columns} datasource={datasource} />;
}
