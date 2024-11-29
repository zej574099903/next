# 第一课：Next.js 13+ 路由系统

## 1. 基础概念

Next.js 13+ 引入了新的 App Router，它基于 React Server Components，提供了更强大的路由功能。

### 1.1 文件系统路由

在 Next.js 中，路由是基于文件系统的。例如：
- `app/page.tsx` → `/`
- `app/dashboard/page.tsx` → `/dashboard`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`

### 1.2 特殊文件

- `page.tsx`: 页面UI组件
- `layout.tsx`: 共享布局
- `loading.tsx`: 加载状态
- `error.tsx`: 错误处理
- `not-found.tsx`: 404页面

## 2. 实践示例

### 2.1 仪表板路由 (/dashboard)

我们已经创建了一个仪表板页面作为示例。查看 `app/dashboard/page.tsx`，你可以看到：

1. 页面组件定义
2. 响应式布局（使用 Tailwind CSS）
3. 数据展示卡片
4. 活动列表

### 2.2 路由实践要点

1. **基础路由**
   ```tsx
   // app/dashboard/page.tsx
   export default function DashboardPage() {
     return <div>Dashboard Content</div>
   }
   ```

2. **动态路由**
   ```tsx
   // app/posts/[id]/page.tsx
   export default function Post({ params }: { params: { id: string } }) {
     return <div>Post: {params.id}</div>
   }
   ```

3. **嵌套路由**
   ```
   app/
   ├── dashboard/
   │   ├── page.tsx
   │   ├── settings/
   │   │   └── page.tsx
   │   └── analytics/
   │       └── page.tsx
   ```

## 3. 进阶主题

1. **路由组**：使用括号 (marketing) 创建路由组
2. **平行路由**：使用 @ 符号创建平行路由
3. **拦截路由**：使用 (...) 语法拦截路由

## 4. 练习任务

1. 创建一个博客列表页面 (`/blog`)
2. 添加博客详情页面 (`/blog/[id]`)
3. 为仪表板添加设置页面 (`/dashboard/settings`)
4. 实现一个共享布局

## 5. 注意事项

1. 确保每个路由都有 `page.tsx` 文件
2. 使用 layout.tsx 共享通用UI
3. 添加适当的加载状态和错误处理
4. 考虑使用 metadata 优化 SEO

## 下一步

- 尝试添加更多路由
- 实现动态路由
- 添加导航菜单
- 集成数据获取
