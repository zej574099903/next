# Layouts 和 Templates

Next.js 提供了两种不同的页面结构组织方式：Layouts 和 Templates。虽然它们看起来相似，但在功能和使用场景上有着重要的区别。

## 1. Layouts 布局

### 1.1 概念和特点

Layout 是在多个页面之间共享的 UI 结构。它的主要特点是：

- ✅ **状态保持**：在页面导航时保持组件状态
- ✅ **不重新渲染**：仅当 Layout 组件本身发生变化时才重新渲染
- ✅ **数据共享**：可以在多个页面之间共享数据和状态
- ✅ **嵌套支持**：可以创建多层嵌套的布局结构

### 1.2 基本用法

```tsx
// app/layout.tsx - Root Layout
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

// app/dashboard/layout.tsx - 嵌套布局
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-100">
        {/* 侧边栏导航 */}
      </nav>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
```

## 2. Templates 模板

### 2.1 概念和特点

Template 是一种特殊的布局机制，每次导航时都会创建一个新实例。主要特点：

- ❌ **状态不保持**：每次导航都重新初始化
- ✅ **重新渲染**：每次页面切换都完全重新渲染
- ✅ **动画友好**：适合实现页面切换动画
- ✅ **独立实例**：每个页面都获得一个新的模板实例

### 2.2 基本用法

```tsx
// app/template.tsx
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-template">
      {/* 每次导航时都会重新创建的 UI */}
      {children}
    </div>
  );
}
```

## 3. Layout vs Template：关键区别

### 3.1 状态管理演示

下面的示例展示了 Layout 和 Template 在状态管理上的区别：

```tsx
'use client';

// 计数器组件
function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-2">{label}</h3>
      <div className="flex items-center gap-4">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

// Layout 中的计数器会保持状态
// app/demo/layout.tsx
export default function DemoLayout({ children }) {
  return (
    <div>
      <Counter label="Layout Counter (保持状态)" />
      {children}
    </div>
  );
}

// Template 中的计数器每次导航都会重置
// app/demo/template.tsx
export default function DemoTemplate({ children }) {
  return (
    <div>
      <Counter label="Template Counter (导航时重置)" />
      {children}
    </div>
  );
}
```

### 3.2 使用场景对比

| 场景 | Layout | Template | 原因 |
|------|---------|-----------|------|
| 导航栏 | ✅ | ❌ | 需要保持状态（如：下拉菜单） |
| 购物车 | ✅ | ❌ | 需要跨页面保持商品状态 |
| 表单向导 | ❌ | ✅ | 每次需要重新初始化表单状态 |
| 页面动画 | ❌ | ✅ | 需要在每次导航时重新触发动画 |
| 认证状态 | ✅ | ❌ | 需要持久化用户登录状态 |
| 搜索界面 | ❌ | ✅ | 每次搜索需要清空上次状态 |

## 4. 最佳实践

### 4.1 Layout 最佳实践

1. **合理嵌套**
   - 根据 UI 的共享程度划分布局层级
   - 避免过深的嵌套结构

2. **性能优化**
   ```tsx
   // app/dashboard/layout.tsx
   import { Suspense } from 'react';
   
   export default function DashboardLayout({ children }) {
     return (
       <div className="dashboard-layout">
         <Suspense fallback={<NavSkeleton />}>
           <Navigation />
         </Suspense>
         {children}
       </div>
     );
   }
   ```

3. **状态管理**
   - 使用 Context 共享状态
   - 合理使用 Client 和 Server Components

### 4.2 Template 最佳实践

1. **动画实现**
   ```tsx
   'use client';
   
   import { motion } from 'framer-motion';
   
   export default function PageTemplate({ children }) {
     return (
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
       >
         {children}
       </motion.div>
     );
   }
   ```

2. **状态初始化**
   - 在 Template 中初始化页面特定的状态
   - 使用 useEffect 处理副作用

3. **错误处理**
   ```tsx
   // app/template.tsx
   export default function Template({ children }) {
     return (
       <ErrorBoundary fallback={<ErrorPage />}>
         {children}
       </ErrorBoundary>
     );
   }
   ```

## 5. 选择建议

1. **使用 Layout 当：**
   - 需要在页面间保持 UI 状态
   - 有共享的持久性 UI 元素
   - 需要优化性能（避免不必要的重渲染）

2. **使用 Template 当：**
   - 需要页面切换动画
   - 每次导航都需要重置状态
   - 处理独立的表单或搜索界面
   - 需要在每次访问时重新初始化数据
