import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">仪表板</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/dashboard" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                概览
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/analytics" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                数据分析
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/settings" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                设置
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 overflow-auto">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
