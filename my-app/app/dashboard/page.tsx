export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">仪表板</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 统计卡片 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">总访问量</h2>
          <p className="text-2xl font-semibold">1,234</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">活跃用户</h2>
          <p className="text-2xl font-semibold">891</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">总收入</h2>
          <p className="text-2xl font-semibold">¥12,345</p>
        </div>

        {/* 最近活动 */}
        <div className="bg-white p-4 rounded-lg shadow md:col-span-2 lg:col-span-3">
          <h2 className="font-semibold mb-4">最近活动</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>用户注册</span>
              <span className="text-gray-500">5分钟前</span>
            </div>
            <div className="flex items-center justify-between">
              <span>新订单 #12345</span>
              <span className="text-gray-500">10分钟前</span>
            </div>
            <div className="flex items-center justify-between">
              <span>系统更新</span>
              <span className="text-gray-500">1小时前</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
