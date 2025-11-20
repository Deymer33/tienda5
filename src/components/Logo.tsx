import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Volver a la página de inicio de SYS Govil">
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M14.5 16.5a2.5 2.5 0 0 0-3 0" />
          <path d="M12 14v7" />
          <path d="M12 3v2" />
          <path d="m5 5 1.5 1.5" />
          <path d="M19 5l-1.5 1.5" />
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
          <path d="M12 8a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" />
        </svg>
      </div>
      <span className="font-headline text-xl font-bold text-primary hidden sm:inline-block">
        SYS Govil
      </span>
    </Link>
  );
}
