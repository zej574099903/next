export default function Page2() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">页面 2</h2>
      <p className="text-gray-600">
        这是页面 2 的内容。注意观察：
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Layout 中的计数器保持了之前的值</li>
        <li>Template 中的计数器已经重置为 0</li>
        <li>这就是 Template 和 Layout 的主要区别之一</li>
      </ul>
    </div>
  );
}
