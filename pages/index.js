import SalesList from "components/Sales/salesList";
import SalesResume from "components/Sales/salesResume";
import SalesFilterProvider from "components/Filter/filter.provider";

function Home({ salesList, ...rest }) {
  return (
    <SalesFilterProvider initialValue={{ salesList, ...rest }}>
      <SalesResume />;
      <SalesList />
    </SalesFilterProvider>
  );
}

export default Home;

export const getStaticProps = async () => {
  let url;
  const { formatDate } = await import("../components/helpers/formatDates");
  const { getSalesResume } = await import(
    "../components/helpers/getSalesResume"
  );

  process.env.VERCEL_ENV == "production"
    ? (url = "https://" + process.env.VERCEL_URL + "/data.json")
    : (url = "http://localhost:3000/data.json");
  const res = await fetch(url);
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
