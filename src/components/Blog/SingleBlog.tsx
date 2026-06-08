import { Post } from "@/types/blog";
import { formatHebrewDate } from "@/lib/hebrew-date";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ post }: { post: Post }) => {
  const { slug, title, image, excerpt, author, tags, publishDate } = post;
  const href = `/blog/${slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-stroke-stroke bg-white transition duration-300 hover:border-primary hover:shadow-two">
      <Link href={href} className="relative block aspect-37/22 w-full">
        {tags[0] && (
          <span className="absolute top-5 start-5 z-20 inline-flex items-center justify-center rounded-sm bg-primary px-3 py-1 text-xs font-semibold text-white">
            {tags[0]}
          </span>
        )}
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3>
          <Link
            href={href}
            className="mb-4 block text-xl font-bold leading-snug text-black transition hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 text-base leading-relaxed text-body-color">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center gap-4 border-t border-stroke-stroke pt-5">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={author.image} alt={author.name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-dark">
              {author.name}
            </h4>
            <p className="text-xs text-body-color">{author.designation}</p>
          </div>
          <span className="text-xs font-medium text-body-color">
            {formatHebrewDate(publishDate)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
