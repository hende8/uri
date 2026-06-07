import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full"
        >
          <span className="bg-primary absolute top-6 start-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="תמונת מאמר" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 me-5 flex items-center border-l ps-0 pe-5 xl:me-3 xl:pe-3 2xl:me-5 2xl:pe-5 dark:border-white/10">
              <div className="ms-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="מחבר" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  מאת {author.name}
                </h4>
                <p className="text-body-color text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                תאריך
              </h4>
              <p className="text-body-color text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
