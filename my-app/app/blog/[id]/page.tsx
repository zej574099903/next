// 模拟数据获取延迟
async function getBlogPost(id: string) {
  // 模拟 API 调用延迟
  await new Promise(resolve => setTimeout(resolve, 1000));

  const posts = {
    '1': {
      title: 'Next.js 13 中的新特性',
      content: `
        Next.js 13 带来了许多激动人心的新特性，让我们一起探索其中的重要更新：

        ## App Router

        App Router 是一个基于 React Server Components 的新型路由系统，它提供了：
        - 更直观的文件系统路由
        - 内置的数据获取
        - 布局和模板支持
        - 流式渲染
        
        ## Server Components

        React Server Components 允许我们在服务器端渲染组件，带来了：
        - 更快的页面加载
        - 更小的客户端 JavaScript 包
        - 改善的SEO
        
        ## 其他重要更新
        
        - 改进的数据获取
        - 新的图片组件
        - 中间件增强
        - Turbopack（Beta）
      `,
      date: '2023-11-28',
      author: '张三',
    },
    '2': {
      title: 'Template vs Layout in Next.js',
      content: `
        在 Next.js 中，Template 和 Layout 都用于在多个页面之间共享 UI，但它们有重要的区别：

        ## Layout（布局）

        - 在页面切换时保持状态
        - 不会重新渲染
        - 适用于持久性导航栏等

        ## Template（模板）

        - 每次页面切换时重新渲染
        - 可以包含转场动画
        - 适用于需要动画效果的共享 UI

        ## 使用建议

        1. 使用 Layout：
           - 导航栏
           - 侧边栏
           - 全局状态

        2. 使用 Template：
           - 进入/退出动画
           - 页面切换效果
           - 需要重置状态的 UI
      `,
      date: '2023-11-29',
      author: '李四',
    },
    '3': {
      title: '使用 Tailwind CSS 构建现代化 UI',
      content: `
        Tailwind CSS 是一个实用优先的 CSS 框架，它可以帮助我们快速构建现代化的用户界面。

        ## 主要优势

        1. 开发效率
           - 无需写 CSS
           - 直观的类名
           - 响应式设计

        2. 可定制性
           - 简单的配置
           - 扩展主题
           - 自定义插件

        ## 最佳实践

        - 组件抽象
        - 响应式设计
        - 深色模式
        - 动画效果
      `,
      date: '2023-11-30',
      author: '王五',
    },
  };

  const post = posts[id as keyof typeof posts];
  if (!post) throw new Error('Post not found');
  
  return post;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span>作者：{post.author}</span>
        <span className="mx-2">•</span>
        <span>发布于 {post.date}</span>
      </div>
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/blog"
          className="text-blue-600 hover:text-blue-800"
        >
          ← 返回博客列表
        </a>
      </div>
    </article>
  );
}
