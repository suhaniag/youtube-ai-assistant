"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col gap-2 w-52 h-screen p-4"
      style={{ borderRight: '2px solid #ec4899' }}
    >
      <p className="text-lg font-semibold text-pink-600 mb-4">K-Create</p>
      <Link 
      href="/" 
      className={`px-3 py-2 rounded-lg hover:bg-pink-50 text-sm ${pathname === '/' ? 'text-black bg-pink-100' : 'text-white hover:text-black'}`}
      >
        Home
      </Link>
      <Link
        href="/trending"
        className={`px-3 py-2 rounded-lg hover:bg-pink-50 text-sm ${pathname === '/trending' ? 'text-black bg-pink-100' : 'text-white hover:text-black'}`}
      >
        Trending
      </Link>
      <Link 
      href="/titles" 
      className={`px-3 py-2 rounded-lg hover:bg-pink-50 text-sm ${pathname === '/titles' ? 'text-black bg-pink-100' : 'text-white hover:text-black'}`}
      >
        Titles
      </Link>
      <Link 
      href="/posting-time" 
      className={`px-3 py-2 rounded-lg hover:bg-pink-50 text-sm ${pathname === '/posting-time' ? 'text-black bg-pink-100' : 'text-white hover:text-black'}`}
      >
        Posting Time
      </Link>
    </nav>
  )
}