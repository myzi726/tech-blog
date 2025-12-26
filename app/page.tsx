import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import Profile from "./components/Profile";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      <Profile
        name="명지"
        bio="프론트엔드를 공부하고 있습니다."
        image="/damgom.jpeg"
        links={{
          github: "https://github.com/myzi726",
          email: "mzi726@naver.com",
        }}
      />
      <main className="flex-1 min-w-0">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            최신 글
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              아직 작성된 글이 없습니다.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              content/posts 디렉토리에 .mdx 파일을 추가해주세요.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-b-0"
              >
                <Link href={`/posts/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "yyyy년 M월 d일", {
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
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
