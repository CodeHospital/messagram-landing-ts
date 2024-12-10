import Link from 'next/link'
import clsx from 'clsx'

export function AppStoreLink({
  color = 'black',
  type = 'appstore',
}: {
  color?: 'black' | 'white'
  type?: 'appstore' | 'googleplay'
}) {
  const isAppStore = type === 'appstore'
  
  return (
    <Link
      href="#"
      aria-label={isAppStore ? "Download on the App Store" : "Get it on Google Play"}
      className={clsx(
        'rounded-lg transition-colors mx-2',
        isAppStore && 'opacity-40 cursor-not-allowed pointer-events-none',
        color === 'black'
          ? 'bg-gray-900 text-white hover:bg-gray-800'
          : 'bg-white/90 text-gray-900 hover:bg-white',
      )}
    >
      {isAppStore ? (
        <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
          <path
            fill="currentColor"
            d="M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.992-2.157c-1.679-.177-3.307 1.004-4.163 1.004-.872 0-2.19-.987-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.361 10.976.927 1.326 2.01 2.806 3.428 2.753 1.387-.057 1.905-.884 3.58-.884 1.658 0 2.144.884 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.635 4.635 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
          <path
            fill="currentColor"
            d="M45 9.7h-4.6v.7h3.9v11.7h.7V9.7zM52.3 9.7h-4.6v.7h3.9v11.7h.7V9.7zM57.8 9.7h-.7v12.4h.7V9.7zM67.2 9.7h-.7l-3.5 9.1-3.5-9.1h-.7l3.9 9.8h.7l3.8-9.8zM68.6 22.1h.7V9.7h-.7v12.4z"
          />
          <path
            fill="currentColor"
            d="M60.2 9.7L55.9 22h.7l1.1-3.1h4.2l1.1 3.1h.7L59.5 9.7h.7zm-2.2 8.6l1.9-5.1 1.9 5.1h-3.8zM45.6 22.1h.7V9.7h-.7v12.4z"
          />
        </svg>
      )}
    </Link>
  )
}
