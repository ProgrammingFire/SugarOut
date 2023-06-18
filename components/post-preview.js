import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
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
    <div class="dark:bg-gray-800 bg-white hover:translate-y-[-4px] transition-all m-4 card max-w-xl flex items-center justify-between p-3 flex-col dark:text-white rounded shadow-2xl">
      <div class="overflow-hidden rounded">
        <img
          src={coverImage.url}
          class="rounded hover:scale-110  transition-transform object-cover"
        ></img>
      </div>
      <h2 class="text-4xl my-9 text-center max-w-5">{title}</h2>
      <p class="text-2xl dark:text-gray-200 text-gray-700 m-9 mt-0 mb-10 text-center max-w-5">
        {excerpt}
      </p>
      <div class="w-full flex justify-center">
        <Link href={`/posts/${slug}`}>
          <button class="card-btn">READ NOW</button>
        </Link>
      </div>
    </div>
  );
}
