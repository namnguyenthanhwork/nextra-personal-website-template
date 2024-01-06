import Link from 'next/link';
import { useConfig } from 'nextra-theme-docs';

export function Author({ name, link }) {
  return (
    <span className="after:content-[','] last:after:content-['']">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="ml-1 text-gray-800 dark:text-gray-100">
        {name}
      </Link>
    </span>
  );
}

export function Authors() {
  const config = useConfig();

  return (
    <div className="mb-16 mt-8 text-sm text-gray-400 flex flex-wrap items-center gap-1">
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
      {config.frontMatter?.date} -
      {config.frontMatter?.authors &&
        Object.entries(config.frontMatter.authors).map(([key, author]) => (
          <Author link={author.url} key={key} name={author.name} />
        ))}
    </div>
  );
}
