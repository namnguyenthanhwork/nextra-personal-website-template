import Link from 'next/link';
import { getPagesUnderRoute } from 'nextra/context';
import { useRouter } from 'nextra/hooks';
import { useConfig } from 'nextra-theme-docs';

export function BlogHeader() {
  const config = useConfig();

  return (
    <div className="max-w-screen-lg mx-auto pt-4 pb-8 mb-16 border-b border-gray-400 border-opacity-20">
      <h1 className="text-2xl text-center font-bold mb-3 md:text-4xl">Blog</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 font-space-grotesk">
        {config.frontMatter?.description}
      </p>
    </div>
  );
}

export function Blog() {
  const { locale } = useRouter();
  const READMORE_TEXT = {
    vi: 'Xem tiếp →',
    en: 'Read more →',
  };

  return getPagesUnderRoute(`/${locale}/blog`).map((page) => (
    <div key={page.route} className="mb-8">
      <Link href={page.route} className="text-2xl text-black hover:!no-underline dark:text-gray-100">
        {page.meta.title || page.frontMatter?.title || page.name}
      </Link>
      <p className="opacity-80 mt-3 leading-7">
        {page.frontMatter?.description}
        <br />
        <span className="text-xs flex items-center gap-2 py-1">
          <svg
            width={20}
            height={20}
            fill="none"
            strokeWidth={1.75}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          {page.frontMatter?.date}
          {page.frontMatter?.authors &&
            Object.entries(page.frontMatter.authors).map(([key, author]) => (
              <Link href={author?.url} target="_blank" rel="noopener noreferrer" key={key}>
                - {author?.name}
              </Link>
            ))}
        </span>
        <Link href={page.route} className="block _text-primary-600 underline underline-offset-2 decoration-from-font">
          {READMORE_TEXT[locale]}
        </Link>
      </p>
    </div>
  ));
}
