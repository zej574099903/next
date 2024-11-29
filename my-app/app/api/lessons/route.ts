import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lessonPath = searchParams.get('path');

  if (!lessonPath) {
    return new NextResponse('Lesson path is required', { status: 400 });
  }

  try {
    // 移除路径中的 '/lessons' 并添加 '.md' 扩展名
    const relativePath = lessonPath.replace('/lessons/', '') + '/index.md';
    const absolutePath = path.join(process.cwd(), 'lessons', relativePath);
    
    // 读取并解析 Markdown 内容
    const content = await fs.readFile(absolutePath, 'utf-8');
    
    // 配置 marked 选项
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      breaks: true, // 将换行符转换为 <br>
      highlight: function(code, lang) {
        return code; // 这里可以添加代码高亮逻辑
      }
    });

    const html = marked(content);
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error reading lesson file:', error);
    return new NextResponse('Lesson not found', { status: 404 });
  }
}
