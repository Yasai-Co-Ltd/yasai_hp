import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="yasai-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            戦略にAIの魔法を。
          </h1>
          <p className="text-lg opacity-90 mb-8">
            AIテクノロジーを活用して効果的な戦略を構築し、
            ビジネスプロセスを最大限に効率化。<br />
            あなたのビジネスをカテゴリーNo.1に導きます。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="yasai-button">お問い合わせ</Button>
            </Link>
            <Link href="/#service">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                サービスを見る
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="aspect-[4/3] relative bg-primary-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder for actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* <div className="absolute w-32 h-32 bg-white/20 rounded-full -top-10 -left-10 blur-xl"></div>
                <div className="absolute w-40 h-40 bg-white/10 rounded-full -bottom-10 -right-10 blur-2xl"></div> */}
                <Image src="/images/tomato-bot-shadow.png" alt="" width={300} height={300} className='w-full h-auto'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
