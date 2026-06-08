import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { allPosts } from "@/data/posts";

const Blog = () => {
  const latest = allPosts.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          eyebrow="מאמרים ומדריכים"
          title="מאמרים אחרונים מהבלוג"
          paragraph="טיפים, מדריכים וסיפורי מקרה מעולם שמאות הנזקים – כל מה שכדאי לדעת לפני, במהלך ואחרי הגשת תביעה לחברת הביטוח."
          center
          mb="72px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((post) => (
            <SingleBlog key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
