import Link from "next/link";
import CoverImage from "./cover-image";

export default function ProductCard({
  name,
  image,
  amazonUrl,
  description,
  price,
}) {
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
    <div className="group relative">
      <div className="aspect-h-1 shadow-md aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image.url}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-900 font-bold">
            <a href={amazonUrl}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>
        <p className="text-lg font-medium text-gray-900">₹{price}</p>
      </div>
    </div>
  );
}
