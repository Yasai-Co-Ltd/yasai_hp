import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {
  return (
    <section className="yasai-section bg-gray-50" id="service">
      <div className="yasai-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">SERVICE</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            YASAIは最先端のAI技術を活用した多彩なサービスを提供しています。
            ビジネス課題の解決からデータ活用、人材育成まで、幅広くサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/service/ai-business">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 01</div>
                <CardTitle className="text-2xl">hakake</CardTitle>
                <CardDescription>AIでカリキュラム生成。ゴールへ導く学習管理システム(LMS)</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-hatake.png" width={400} height={300} className='w-full h-full object-cover' alt='hatake'/>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/service/marketing-bpo">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 02</div>
                <CardTitle className="text-2xl">ローカルブースト</CardTitle>
                <CardDescription>アンケート回答からAIが記事を作成。顧客の『きっかけ』を分析してビジネスを加速。</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-localboost.png" width={400} height={300} className='w-full h-full object-cover' alt='ローカルブースト'/>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/service/data-analysis">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 03</div>
                <CardTitle className="text-2xl">ショート動画制作</CardTitle>
                <CardDescription>AIで効率化された動画制作でコスパの良いSNS運用をサポート。</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-shortmovie.png" width={400} height={300} className='w-full h-full object-cover' alt='ショート動画制作'/>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/service/hr-development">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 04</div>
                <CardTitle className="text-2xl">AIチャットボット導入</CardTitle>
                <CardDescription>御社のWebサイトに情報を学習したAIチャットボットを導入します。</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-chatbot.png" width={400} height={300} className='w-full h-full object-cover' alt='AIチャットボット'/>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/service/hr-development">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 05</div>
                <CardTitle className="text-2xl">Difyワークフロー導入</CardTitle>
                <CardDescription>業務をAIワークフロー化で自動化</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-dify.png" width={400} height={300} className='w-full h-full object-cover' alt='Difyワークフロー'/>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/service/hr-development">
            <Card className="cursor-pointer yasai-card">
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-gray-500 mb-1">SERVICE 06</div>
                <CardTitle className="text-2xl">LLMO分析ツール</CardTitle>
                <CardDescription>AIに御社の情報を正しく理解させる。</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video"
                >
                  <Image src="/images/service-llmo.png" width={400} height={300} className='w-full h-full object-cover' alt='LLMO分析ツール'/>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
