export default function RoseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 8c-4 6-12 14-12 22 0 8 5.4 14 12 14s12-6 12-14c0-8-8-16-12-22Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M32 8c-4 6-12 14-12 22 0 8 5.4 14 12 14s12-6 12-14c0-8-8-16-12-22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 18c-2 3-6 7-6 12 0 4 2.7 7 6 7s6-3 6-7c0-5-4-9-6-12Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M32 44v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 50c-3-2-6-1-8 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
