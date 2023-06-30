import Container from "./container";
import ProductCard from "./product-card";

export default function MoreProducts({ products }) {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9 justify-center mb-32">
        {products.map((product) => (
          <>
            <ProductCard
              name={product.name}
              amazonUrl={product.amazonUrl}
              description={product.description}
              image={product.image}
              price={product.price}
            ></ProductCard>
            {/* <ProductCard
              name={product.name}
              amazonUrl={product.amazonUrl}
              description={product.description}
              image={product.image}
              price={product.price}
            ></ProductCard> */}
          </>
        ))}
      </div>
    </Container>
  );
}
