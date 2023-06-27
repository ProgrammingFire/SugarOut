import Link from "next/link";
import CoverImage from "./cover-image";

export default function ProductCard({ name, image, amazonUrl, description }) {
  return (
    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} url={coverImage.url} />
    //   </div>
    //   <h3 className="mb-3 text-3xl leading-snug">
    //     <Link href={`/posts/${slug}`}>
    //       <a className="hover:underline">{title}</a>
    //     </Link>
    //   </h3>
    //   <div className="mb-4 text-lg">
    //     <Date dateString={date} />
    //   </div>
    //   <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    //   <Avatar name={author.name} picture={author.picture.url} />
    // </div>
    <div class="dark:bg-gray-800 bg-white hover:translate-y-[-4px] transition-all m-4 card flex items-center justify-between p-3 flex-col dark:text-dark rounded shadow-2xl">
      {/* <div class="overflow-hidden rounded">
        <img
          src={image.url}
          class="rounded hover:scale-110  transition-transform object-cover"
        ></img>
      </div> */}
      <CoverImage url={image.url} title={name} />
      <h2 class="text-2xl font-bold px-2 my-9 text-center max-w-5">{name}</h2>
      <p class="text-xl dark:text-gray-200 text-gray-700 m-9 mt-0 mb-10 text-center max-w-5">
        {description}
      </p>
      <div class="w-full flex justify-center">
        <button
          onClick={() => window.open(amazonUrl, "_blank")}
          class="card-btn"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
