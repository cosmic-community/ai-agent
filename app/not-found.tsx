import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-violet-200/60">
        This page wandered off into the shadows.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-azpurple px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
      >
        Back home
      </Link>
    </div>
  )
}