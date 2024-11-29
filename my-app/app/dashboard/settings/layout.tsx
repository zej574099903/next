export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">设置</h3>
          <p className="mt-1 text-sm text-gray-500">
            管理你的账户设置和偏好
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <nav className="flex space-x-4">
            <a
              href="/dashboard/settings"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              基本信息
            </a>
            <a
              href="/dashboard/settings/security"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              安全设置
            </a>
            <a
              href="/dashboard/settings/notifications"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              通知设置
            </a>
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
