import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Next.js 13 中的新特性',
    excerpt: '探索 Next.js 13 带来的革命性变化，包括 App Router、Server Components 等特性。',
    date: '2023-11-28',
  },
  {
    id: 2,
    title: 'Template vs Layout in Next.js',
    excerpt: '深入理解 Next.js 中 Template 和 Layout 的区别，以及它们的使用场景。',
    date: '2023-11-29',
  },
  {
    id: 3,
    title: '使用 Tailwind CSS 构建现代化 UI',
    excerpt: '学习如何使用 Tailwind CSS 快速构建漂亮的用户界面。',
    date: '2023-11-30',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              发布于 {post.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
