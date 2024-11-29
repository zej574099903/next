'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const lessons = [
  {
    title: 'Layouts 和 Templates',
    description: '深入理解 Next.js 中的 Layouts 和 Templates 的区别和应用',
    path: '/lessons/layouts-and-templates',
  },
  {
    title: '入门指南',
    description: 'Next.js 基础概念和项目设置',
    path: '/lessons/getting-started',
  },
  {
    title: '路由系统',
    description: 'Next.js App Router 路由系统详解',
    path: '/lessons/routing',
  },
  {
    title: '数据获取',
    description: 'Next.js 数据获取策略和最佳实践',
    path: '/lessons/data-fetching',
  },
  {
    title: '样式和优化',
    description: '样式解决方案和性能优化技巧',
    path: '/lessons/styling',
  },
  {
    title: '部署和性能',
    description: '应用部署和性能优化指南',
    path: '/lessons/deployment',
  }
];

export default function LessonsPage() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [content, setContent] = useState('');

  const loadLessonContent = async (lesson) => {
    try {
      const response = await fetch(`/api/lessons?path=${lesson.path}`);
      const data = await response.text();
      setContent(data);
      setSelectedLesson(lesson);
    } catch (error) {
      console.error('Error loading lesson content:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* 返回首页 */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-1" />
            返回首页
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8"
        >
          {/* 侧边栏 */}
          <motion.div variants={item} className="lg:border-r lg:dark:border-gray-700 lg:pr-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">学习笔记</h2>
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.path}
                  variants={item}
                >
                  <button
                    onClick={() => loadLessonContent(lesson)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedLesson?.path === lesson.path
                        ? 'bg-white dark:bg-gray-800 shadow-lg'
                        : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {lesson.description}
                    </p>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 内容区域 */}
          <motion.div variants={item} className="min-h-[calc(100vh-12rem)]">
            {selectedLesson ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <article className="prose prose-slate dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </article>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center h-[calc(100vh-12rem)]">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  欢迎来到 Next.js 学习笔记
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  从左侧选择一个主题开始学习。每个主题都包含详细的笔记和示例代码，帮助你更好地理解 Next.js。
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
