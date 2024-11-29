'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {/* Logo */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="flex justify-center"
        >
          <motion.div variants={item}>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
              priority
            />
          </motion.div>
        </motion.div>

        {/* 主要内容 */}
        <motion.main
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div variants={item} className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Next.js 学习笔记
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              系统性地学习和掌握 Next.js 框架的核心概念和最佳实践
            </p>
            <motion.div variants={item}>
              <Link
                href="/lessons"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                开始学习
              </Link>
            </motion.div>
          </motion.div>
        </motion.main>

        {/* 页脚 */}
        <motion.footer 
          variants={item} 
          className="text-center text-sm text-gray-500 dark:text-gray-400"
        >
          基于 Next.js 15 构建
        </motion.footer>
      </div>
    </div>
  );
}
