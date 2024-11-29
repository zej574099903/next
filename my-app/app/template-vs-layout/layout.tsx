import Counter from '../components/Counter';
import Link from 'next/link';

const linkStyle = "text-blue-600 hover:text-blue-800";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Template vs Layout 演示</h1>
      
      {/* 导航 */}
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link 
              href="/template-vs-layout/page-1" 
              className={linkStyle}
            >
              页面 1
            </Link>
          </li>
          <li>
            <Link 
              href="/template-vs-layout/page-2" 
              className={linkStyle}
            >
              页面 2
            </Link>
          </li>
          <li>
            <Link 
              href="/template-vs-layout/page-3" 
              className={linkStyle}
            >
              页面 3
            </Link>
          </li>
        </ul>
      </nav>

      {/* Layout 中的计数器 */}
      <div className="mb-8">
        <Counter label="Layout 中的计数器（保持状态）" />
      </div>

      {/* 子内容 */}
      {children}
    </div>
  );
}
