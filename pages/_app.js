import "antd/dist/antd.css";
import "assets/fonts.scss";
import "assets/variables.scss";
import "assets/globals.scss";


import Layout from "components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
