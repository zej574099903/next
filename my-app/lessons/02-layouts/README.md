# 第二课：Next.js Layout 和嵌套 Layout

## 1. Layout 基础概念

Layout 是在多个页面之间共享的 UI。Layout 保持状态，保持交互，并且不会在导航时重新渲染。

### 1.1 Root Layout

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

Root Layout 是必需的，它定义了所有页面共享的基础 HTML 结构。

### 1.2 Nested Layouts（嵌套布局）

Next.js 支持通过创建多个 layout.tsx 文件来实现嵌套布局。

## 2. 实践示例

在我们的项目中，我们实现了两级嵌套布局：

### 2.1 Dashboard Layout

\`app/dashboard/layout.tsx\` 定义了仪表板的基本布局：
- 左侧边栏导航
- 右侧内容区域
- 响应式设计

关键代码：
```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64">
        {/* 侧边栏导航 */}
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
```

### 2.2 Settings Layout

\`app/dashboard/settings/layout.tsx\` 为设置页面提供了二级导航：
- 顶部标题和说明
- 子导航菜单
- 内容区域

## 3. Layout 特性

1. **状态保持**
   - Layout 在页面导航时保持状态
   - 不会重新渲染未更改的部分

2. **数据获取**
   - Layout 可以获取自己的数据
   - 支持 Server Components 和 Client Components

3. **嵌套路由**
   - Layout 可以无限嵌套
   - 每个文件夹都可以有自己的 layout.tsx

## 4. 最佳实践

1. **合理划分布局层级**
   - 根据 UI 的共享程度划分
   - 避免过深的嵌套

2. **性能优化**
   - 使用 Suspense 处理加载状态
   - 合理使用 Client 和 Server Components

3. **响应式设计**
   - 使用 Tailwind CSS 实现响应式布局
   - 考虑不同设备的显示效果

## 5. 练习任务

1. 为 \`/dashboard/analytics\` 创建一个页面
2. 实现带有图表的布局
3. 添加加载状态（loading.tsx）
4. 实现错误处理（error.tsx）

## 下一步

- 探索 Parallel Routes（平行路由）
- 学习 Intercepting Routes（拦截路由）
- 实现更复杂的布局模式
