import MarkdownBody from "@/components/Blog/MarkdownBody";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { getAllSlugs, getPostBySlug } from "@/data/posts";
import { formatHebrewDate } from "@/lib/hebrew-date";
import { SITE_LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/site";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () =>
  getAllSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle} | אורי שמאות נזקים`,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      locale: "he_IL",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
};

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const absoluteUrl = (path: string) =>
    path.startsWith("http") ? path : `${SITE_URL}${path}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.designation,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE_LOGO_PATH}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    inLanguage: "he-IL",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight">
                {post.title}
              </h1>

              <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                      />
                    </div>
                    <div>
                      <span className="text-body-color text-base font-medium">
                        מאת <span className="font-semibold">{post.author.name}</span>
                      </span>
                      <p className="text-body-color text-xs">
                        {post.author.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-body-color text-sm font-medium">
                    {formatHebrewDate(post.publishDate)}
                  </p>
                  <p className="text-body-color text-sm font-medium">
                    {post.readTimeMinutes} דקות קריאה
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-1 text-sm font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mb-10 w-full overflow-hidden rounded-sm">
                <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <MarkdownBody content={post.body} />

              {post.faqs.length > 0 && (
                <section className="mt-12">
                  <h2 className="mb-6 text-2xl leading-tight font-bold text-black sm:text-3xl sm:leading-tight">
                    שאלות ותשובות נפוצות
                  </h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border-body-color/10 rounded-sm border bg-white p-6"
                      >
                        <h3 className="mb-3 text-lg font-bold text-black sm:text-xl">
                          {faq.question}
                        </h3>
                        <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div className="border-body-color/10 mt-12 items-center justify-between border-t pt-8 sm:flex">
                <div className="mb-5">
                  <h4 className="text-body-color mb-3 text-sm font-medium">
                    תגיות:
                  </h4>
                  <div className="flex flex-wrap items-center">
                    {post.tags.map((tag) => (
                      <TagButton key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                    שתפו את המאמר:
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
