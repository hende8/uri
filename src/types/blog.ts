export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  tags: string[];
  excerpt: string;
  publishDate: string;
  readTimeMinutes: number;
  author: Author;
  image: string;
  body: string;
  faqs: FAQ[];
};

export type Blog = Post;
