import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'お問い合わせ | YASAI株式会社',
  description: 'YASAI株式会社へのお問い合わせページです。AIサービスやデジタルソリューションについてのご質問はこちらからお願いします。',
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-primary/10 py-20">
        <div className="yasai-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-600 max-w-2xl">
            YASAIのサービスに関するご質問やお見積もり依頼など、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>
      </div>

      <div className="yasai-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="bg-primary h-2 w-full"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                お電話でのお問い合わせ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-auto">
              <p className="text-gray-600">
                お急ぎの方やお電話での相談をご希望の方は、こちらの番号までお電話ください。
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <a href="tel:06-7777-3669" className="text-2xl font-bold text-primary hover:underline flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06-7777-3669
                </a>
              </div>
              <p className="text-sm text-gray-500 text-center">受付時間: 平日 9:00 - 18:00</p>
              <div className="pt-4">
                <a href="tel:06-7777-3669">
                  <Button className="yasai-button w-full">今すぐ電話する</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="bg-[#00f94e] h-2 w-full"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00b786]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                メールでのお問い合わせ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-auto">
              <p className="text-gray-600">
                詳細な内容やお見積もりのご依頼は、メールでのお問い合わせが便利です。
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <a href="mailto:contact@yas-ai.io" className="text-xl font-bold text-[#00b786] hover:underline flex items-center justify-center gap-2 break-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@yas-ai.io
                </a>
              </div>
              <p className="text-sm text-gray-500 text-center">24時間受付中（返信は営業時間内）</p>
              <div className="pt-4">
                <a href="mailto:contact@yas-ai.io">
                  <Button className="w-full bg-[#00b786] hover:!bg-[#009e73] text-white font-bold py-3 px-6 rounded-lg transition-all">
                    メールを送る
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">会社情報</h2>
              <div className="h-1 w-20 bg-primary mb-6"></div>
              <div className="space-y-2">
                <p className="text-gray-600">お問い合わせ先の詳細情報</p>
                <p className="text-sm text-gray-500">営業時間: 平日 9:00 - 18:00</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    会社所在地
                  </h3>
                  <address className="not-italic text-gray-600 pl-7">
                    〒550-0014<br />
                    大阪府大阪市西区北堀江1-19-1<br />
                    八光心斎橋AIRビル7F
                  </address>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    その他の情報
                  </h3>
                  <div className="text-gray-600 pl-7 space-y-2">
                    <p>
                      <span className="font-medium">会社名:</span> YASAI株式会社
                    </p>
                    <p>
                      <span className="font-medium">設立:</span> 2023年
                    </p>
                    <p>
                      <Link href="/about" className="text-primary hover:underline">
                        会社概要ページへ
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">よくあるご質問</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            お問い合わせの前に、よくあるご質問をご確認ください。
            それでも解決しない場合は、お気軽にお問い合わせください。
          </p>
          {/* <Link href="/faq">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              よくあるご質問を見る
            </Button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
