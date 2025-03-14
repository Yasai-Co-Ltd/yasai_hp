import React from 'react'
import { Badge } from '@/components/ui/badge'

const Intro = () => {
  return (
    <section className="yasai-section bg-white" id="intro">
      <div className="yasai-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">YASAIについて</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">AI×ビジネス</span>で、成長を加速させる。
          </h2>
          <p className="text-gray-600 text-lg">
            YASAI株式会社は、最先端のAIテクノロジーを活用した実用的なツールを開発・提供しています。<br className="hidden md:block" />
            マーケティング分析ツールから業務自動化システムまで、お客様のビジネスニーズに合わせた<br className="hidden md:block" />
            AIソリューションを実現。導入から運用まで、確かな技術力でサポートします。
            あなたのビジネスに最適なAI活用をカタチにします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-primary text-4xl font-bold mb-4">01</div>
            <h3 className="text-xl font-bold mb-2">AIマーケティングツール</h3>
            <p className="text-gray-600">
              顧客データ分析や市場予測を行うAIツールを提供。データに基づいた効果的なマーケティング戦略の実現をサポートします。
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-primary text-4xl font-bold mb-4">02</div>
            <h3 className="text-xl font-bold mb-2">業務効率化ツール</h3>
            <p className="text-gray-600">
              反復的な業務を自動化するAIツールを開発・提供。導入しやすいシステムで、人的リソースを創造的な業務に集中させます。
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-primary text-4xl font-bold mb-4">03</div>
            <h3 className="text-xl font-bold mb-2">AIデータ分析ツール</h3>
            <p className="text-gray-600">
              ビジネスデータを分析するAIツールを提供。複雑なデータから有益な洞察を引き出し、意思決定を支援します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
