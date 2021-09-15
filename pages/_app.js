import GlobalStyles from "../styles/GlobalStyles";
import Layout from "./layout/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
