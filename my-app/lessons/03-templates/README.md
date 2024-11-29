# 第三课：Next.js Templates

## 1. Template 基础概念

Template 是一种特殊的布局机制，它在每次导航时都会创建一个新实例。与 Layout 不同，Template 不会在页面之间保持状态。

### 1.1 Template vs Layout

| 特性 | Template | Layout |
|------|----------|---------|
| 状态保持 | ❌ 不保持 | ✅ 保持 |
| 重新渲染 | ✅ 每次导航 | ❌ 仅改变时 |
| 动画支持 | ✅ 适合 | ❌ 不适合 |
| 使用场景 | 页面切换动画 | 持久性UI |

### 1.2 何时使用 Template

- 需要页面切换动画效果
- 需要在导航时重置状态
- 需要每次导航都重新初始化

## 2. 实践示例

### 2.1 状态管理演示

我们创建了一个直观的演示来展示 Template 和 Layout 的状态管理差异：

#### Counter 组件
```tsx
'use client';

export default function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <div className="flex items-center space-x-4">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
```

#### Layout 中的计数器
```tsx
// app/template-vs-layout/layout.tsx
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Counter label="Layout 中的计数器（保持状态）" />
      {children}
    </div>
  );
}
```

#### Template 中的计数器
```tsx
// app/template-vs-layout/template.tsx
export default function DemoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Counter label="Template 中的计数器（每次导航重置）" />
      {children}
    </div>
  );
}
```

### 2.2 演示效果说明

1. **Layout 中的计数器**
   - 在页面导航时保持计数值
   - 适合需要持久状态的UI组件
   - 例如：导航栏、购物车、用户设置

2. **Template 中的计数器**
   - 每次导航时重置为初始值
   - 适合需要重新初始化的UI组件
   - 例如：表单、搜索界面、临时状态

### 2.3 实际应用场景

1. **使用 Layout 的场景**
   - 网站导航栏
   - 用户认证状态
   - 全局设置
   - 购物车信息

2. **使用 Template 的场景**
   - 搜索表单
   - 页面切换动画
   - 临时表单
   - 重置状态的组件

## 3. 最佳实践

1. **选择合适的组件类型**
   - 需要保持状态？使用 Layout
   - 需要重置状态？使用 Template
   - 需要动画效果？使用 Template

2. **状态管理考虑**
   - Layout：用于持久性状态
   - Template：用于临时状态
   - 避免在 Template 中存储重要状态

3. **性能优化**
   - Layout：避免不必要的重渲染
   - Template：注意动画性能
   - 合理使用 Suspense

## 4. 练习任务

1. **基础练习**
   - 创建一个带状态的导航栏（Layout）
   - 实现一个搜索表单（Template）
   - 观察状态变化

2. **进阶练习**
   - 实现购物车功能（Layout）
   - 创建表单向导（Template）
   - 添加页面转场动画

## 5. 注意事项

1. **状态管理**
   - 谨慎选择状态存放位置
   - 考虑用户体验
   - 注意性能影响

2. **性能考虑**
   - 避免不必要的重渲染
   - 优化动画效果
   - 合理使用缓存

## 6. 实际演示

访问 `/template-vs-layout` 路由查看完整演示：
1. 在页面之间导航
2. 观察两个计数器的状态变化
3. 理解 Template 和 Layout 的区别

## 下一步

- 探索更复杂的状态管理场景
- 实现更高级的动画效果
- 结合其他 Next.js 特性
- 创建更复杂的交互示例
