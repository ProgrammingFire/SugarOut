import Footer from "components/footer";
import Header from "components/header";
import Layout from "components/layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-light text-dark">
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  );
}

export default MyApp;
