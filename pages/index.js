import SalesList from "components/Sales/salesList";
import SalesResume from "components/Sales/salesResume";
import SalesFilterProvider from "components/Filter/filter.provider";

function Home({ salesList, ...rest }) {
  return (
    <SalesFilterProvider initialValue={{ salesList, ...rest }}>
      <SalesResume />
      <SalesList />
    </SalesFilterProvider>
  );
}

export default Home;

export const getStaticProps = async () => {
  const { formatDate } = await import("../components/helpers/formatDates");
  const { getSalesResume } = await import(
    "../components/helpers/getSalesResume"
  );

  const res = await fetch("https://bold-ui.vercel.app/data.json");
  const data = await res.json();

  const sales = data.sales.filter(
    (sale) => formatDate(sale.datetime).day == formatDate().day
  );

  const resume = getSalesResume(sales);

  return {
    props: {
      salesList: sales,
      resume,
    },
  };
};
