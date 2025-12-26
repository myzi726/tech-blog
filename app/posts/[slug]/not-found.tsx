import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        404
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        요청하신 글을 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
      >
        목록으로 돌아가기
      </Link>
    </div>
  );
}

