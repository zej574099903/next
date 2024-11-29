export default function Page1() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">页面 1</h2>
      <p className="text-gray-600">
        这是页面 1 的内容。尝试使用上面的计数器，然后导航到其他页面观察状态变化：
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Layout 中的计数器会保持其状态</li>
        <li>Template 中的计数器会在每次导航时重置</li>
      </ul>
    </div>
  );
}
