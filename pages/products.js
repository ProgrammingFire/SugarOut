import { getAllProducts } from "../lib/graphcms";
import Head from "next/head";
import { TITLE } from "../lib/constants";
import MoreProducts from "components/more-products";

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>{"Products" + TITLE}</title>
      </Head>
      <MoreProducts products={products} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const products = (await getAllProducts(preview)) || [];
  console.log(products);
  return {
    props: { products, preview },
  };
}
