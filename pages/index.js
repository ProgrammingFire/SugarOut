import Cta from "components/cta";
import Hero from "components/hero";
import MoreProducts from "components/more-products";
import MoreStories from "components/more-stories";
import PopupOffer from "components/popup-offer";
import Video from "components/video-hero";
import WhatWeOffer from "components/what-we-offer";
import { getPostsAndProductsForHome } from "lib/graphcms";

export default function Index({ posts, products }) {
  return (
    <div>
      <PopupOffer />
      <Hero />
      <Cta />
      <Video />
      <WhatWeOffer />
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Recent Articles
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MoreStories posts={posts} />
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Products
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MoreProducts products={products} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const { posts, products } = (await getPostsAndProductsForHome(preview)) || [];
  return {
    props: { posts, products },
  };
}
