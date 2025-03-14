import React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="yasai-footer">
      <div className="yasai-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/yasai-logo_squere.png" width={100} height={100} className='w-20 h-20' alt='YASAI株式会社' />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-4">CONTENTS</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm text-white/80 hover:text-white">
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <Link href="/#intro" className="text-sm text-white/80 hover:text-white">
                      ごあいさつ
                    </Link>
                  </li>
                  <li>
                    <Link href="/#service" className="text-sm text-white/80 hover:text-white">
                      サービス
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">&nbsp;</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm text-white/80 hover:text-white">
                      YASAIについて
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                      お問い合わせ
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-sm text-white/80 hover:text-white">
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/transaction" className="text-sm text-white/80 hover:text-white">
                      特定商取引法に基づく表記
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">お問い合わせ</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm text-white/80">06-7777-3669</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-white/80">
                      〒550-0014<br />
                      大阪府大阪市西区北堀江<br />
                      1-19-1八光心斎橋AIRビル7F
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        <p className="text-center text-xs text-white/60">©2024 YASAI株式会社 All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
