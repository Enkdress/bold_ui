import Header from "components/header";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bold-UI</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
