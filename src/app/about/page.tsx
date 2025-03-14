import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: '会社概要 | YASAI株式会社',
  description: 'YASAI株式会社の会社概要、設立理念、事業内容などをご紹介します。私たちはAIをベースにしたデジタルサービスを提供しています。',
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary/10 py-20">
        <div className="yasai-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">会社概要</h1>
        </div>
      </div>

      <div className="yasai-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left font-semibold text-lg w-1/3">会社名</th>
                  <td className="py-6 text-gray-700">YASAI株式会社</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left font-semibold text-lg">設立日</th>
                  <td className="py-6 text-gray-700">2023年11月10日</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left font-semibold text-lg">所在地</th>
                  <td className="py-6 text-gray-700">
                    〒550-0014<br />
                    大阪府大阪市西区北堀江1-19-1八光心斎橋AIRビル7F
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left font-semibold text-lg">代表者</th>
                  <td className="py-6 text-gray-700">
                    代表取締役 久保田凌介<br />
                    取締役 赤崎大樹
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left font-semibold text-lg">事業内容</th>
                  <td className="py-6 text-gray-700">
                    AI事業<br />
                    マーケティング事業<br />
                    EC事業<br />
                    Web制作事業
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">YASAIの由来</h2>
              <Separator className="mb-6" />
              <p className="text-gray-600 mb-4">
                身近で便利で温かい。デジタル領域の「YASAI」。
              </p>
              <p className="text-gray-600 mb-4">
                「YASAI（野菜）」という名前には、新鮮さと栄養価の高さというイメージがあります。
                私たちは、鮮度の高いデジタル情報と栄養価の高いAIソリューションを提供し、
                お客様のビジネスを健康的に成長させることを目指しています。
              </p>
              <p className="text-gray-600 mb-4">
                また、「YASAI（野菜）」は多様性に富んでおり、それぞれ特徴があるように、
                私たちのサービスも多様なニーズに応える幅広いソリューションを用意しています。
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
                <Separator className="mb-6" />
                <Link href="/contact">
                  <Button className="yasai-button w-full">お問い合わせはこちら</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-primary/5 py-16">
        <div className="yasai-container">
          <h2 className="text-2xl font-bold mb-8">お知らせ</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
              <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded">お知らせ</div>
              <div className="text-gray-500">2024.8.8</div>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                YASAI株式会社では、令和6年8月1日より入社３年までの正社員の方を対象に奨学金返還支援制度を導入することになりました。
              </p>
              <p className="text-gray-700 mb-4">
                導入の目的は、奨学金を返還しながら働く若者の負担を軽減し、働きやすい環境を整えることです。
                今後も従業員の皆様が働きやすい環境を整えるため、取り組んでいきたいと思っております。
              </p>
              <p className="text-gray-700">
                大阪府育英会及び日本学生支援機構奨学金返還支援制度
                (2024年8月導入より3年間手当支給　※社内規程あり)
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
