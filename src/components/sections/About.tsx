import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const About = () => {
  return (
    <section className="yasai-section bg-white" id="about">
      <div className="yasai-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-end">
              <Image src="/images/yasai-logo.png" height={60} width={240} className='h-12 w-auto' alt='YASAIについて'/>
              <span className='text-xl'>について</span>
            </h2>
            <p className="text-xl mb-6">身近で便利で温かい。デジタル領域の「YASAI」。</p>
            <p className="text-gray-600 mb-6">
              野菜は、大地から栄養を吸収し、太陽の光を浴びて成長し、人々に活力を与えます。
              人々は、その栄養価の高い野菜を取り入れ、健康で豊かな生活を実現します。
              私たちは、そんな野菜のように成長力があり、多様性に富み、人々の生活を豊かにするデジタル領域の「YASAI」を目指しています。
            </p>
            <Link href="/about">
              <Button variant="ghost" className="text-primary hover:bg-primary/5 px-0 group">
                MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg relative bg-primary/5 p-8">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>

              <div className="relative bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">YASAIの由来</h3>
                </div>

                <p className="text-gray-600 mb-4">
                  「YASAI（野菜）」という名前には、新鮮さと栄養価の高さというイメージがあります。
                  私たちは、鮮度の高いデジタル情報と栄養価の高いAIソリューションを提供し、
                  お客様のビジネスを健康的に成長させることを目指しています。
                </p>

                <p className="text-gray-600">
                  また、「YASAI（野菜）」は多様性に富んでおり、それぞれ特徴があるように、
                  私たちのサービスも多様なニーズに応える幅広いソリューションを用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
