import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="yasai-header sticky top-0 z-50">
      <div className="yasai-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/yasai-logo_squere.png" width={60} height={60} alt='YASAI株式会社' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-white/80">
            ホーム
          </Link>
          <Link href="/#intro" className="text-white hover:text-white/80">
            ごあいさつ
          </Link>
          <Link href="/#service" className="text-white hover:text-white/80">
            サービス
          </Link>
          <Link href="/about" className="text-white hover:text-white/80">
            YASAIについて
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
              お問い合わせ
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2">
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
                className="text-white"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="sr-only">メニュー</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-white">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                ホーム
              </Link>
              <Link href="/#intro" className="text-lg font-medium">
                ごあいさつ
              </Link>
              <Link href="/#service" className="text-lg font-medium">
                サービス
              </Link>
              <Link href="/about" className="text-lg font-medium">
                YASAIについて
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                お問い合わせ
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
