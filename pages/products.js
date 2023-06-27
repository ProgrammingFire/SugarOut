import Container from "../components/container";
import { getAllProducts } from "../lib/graphcms";
import Head from "next/head";
import { TITLE } from "../lib/constants";
import ProductCard from "components/product-card";

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>{"Products" + TITLE}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-16 lg:gap-x-1 gap-y-1 md:gap-y-1 justify-center mb-32">
          {products.map((product) => (
            <ProductCard
              name={product.name}
              amazonUrl={product.amazonUrl}
              description={product.description}
              image={product.image}
            ></ProductCard>
          ))}
        </div>
      </Container>
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
