import SingleBlog from "@/components/Blog/SingleBlog";
import { allPosts } from "@/data/posts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמרים | אורי שמאות נזקים",
  description: "טיפים ומדריכים בעולם שמאות הנזקים והתביעות מול חברות הביטוח.",
  alternates: {
    canonical: "/blog",
  },
};

const Blog = () => {
  return (
    <main>
      <section className="pt-[140px] pb-[120px] md:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {allPosts.map((post) => (
              <div
                key={post.slug}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog post={post} />
              </div>
            ))}
          </div>

          {allPosts.length === 0 && (
            <p className="text-body-color text-center text-lg font-medium">
              מאמרים חדשים בקרוב.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
