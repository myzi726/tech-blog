import Image from "next/image";

interface ProfileProps {
  name?: string;
  bio?: string;
  image?: string;
  links?: {
    github?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function Profile({
  name = "개발자",
  bio = "기술과 개발에 대한 생각을 공유합니다.",
  image,
  links,
}: ProfileProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="flex flex-col gap-6 lg:sticky lg:top-12">
        {image && (
          <div className="relative w-32 h-32 rounded-full overflow-hidden shrink-0 mx-auto lg:mx-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            {name}
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            {bio}
          </p>
          {links && (
            <div className="flex flex-col gap-3">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm"
                >
                  GitHub
                </a>
              )}
              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm"
                >
                  Email
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              )}
              {links.twitter && (
                <a
                  href={links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm"
                >
                  Twitter
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
