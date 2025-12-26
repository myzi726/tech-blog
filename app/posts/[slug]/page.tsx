import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = {
    h1: (props: any) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-900 dark:text-zinc-100" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-xl font-semibold mt-4 mb-2 text-zinc-900 dark:text-zinc-100" {...props} />
    ),
    p: (props: any) => (
      <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-7" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300" {...props} />
    ),
    li: (props: any) => (
      <li className="ml-4" {...props} />
    ),
    code: (props: any) => (
      <code
        className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-sm font-mono"
        {...props}
      />
    ),
    pre: (props: any) => (
      <pre
        className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-x-auto mb-4"
        {...props}
      />
    ),
    a: (props: any) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        {...props}
      />
    ),
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400"
        {...props}
      />
    ),
  };

  return (
    <article>
      <Link
        href="/"
        className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        ← 목록으로 돌아가기
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy년 M월 d일', {
              locale: ko,
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.description && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
        )}
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}

