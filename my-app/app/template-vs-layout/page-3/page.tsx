export default function Page3() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">页面 3</h2>
      <p className="text-gray-600">
        这是页面 3 的内容。现在你应该已经理解了：
      </p>
      <div className="mt-4 space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Layout 特点：</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>在页面导航时保持状态</li>
            <li>适合持久性UI组件（如导航栏）</li>
            <li>不会重新渲染未更改的部分</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Template 特点：</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>每次导航时重新渲染</li>
            <li>适合页面切换动画</li>
            <li>状态会重置</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
