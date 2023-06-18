import Footer from "components/footer";
import Header from "components/header";
import Layout from "components/layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark bg-dark text-white">
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  );
}

export default MyApp;
