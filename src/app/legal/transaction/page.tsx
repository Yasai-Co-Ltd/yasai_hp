import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: '特定商取引法に基づく表記 | YASAI株式会社',
  description: 'YASAI株式会社の特定商取引法に基づく表記です。事業者情報、連絡先、料金、返品・キャンセルポリシーなどの情報を掲載しています。',
}

export default function TransactionPage() {
  return (
    <>
      <div className="bg-primary/10 py-20">
        <div className="yasai-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">特定商取引法に基づく表記</h1>
        </div>
      </div>

      <div className="yasai-container py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8">
            特定商取引法に基づく表記（特定商取引に関する法律第11条に基づく表示）は以下の通りです。
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">事業者の名称</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                YASAI株式会社
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">運営統括責任者</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                代表取締役 久保田凌介
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">所在地</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                〒550-0014<br />
                大阪府大阪市西区北堀江1-19-1八光心斎橋AIRビル7F
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">連絡先</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                電話番号：06-7777-3669<br />
                メールアドレス：contact@yasai.co.jp<br />
                ※お問い合わせは下記お問い合わせフォームからお願いいたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">販売価格</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                各サービスの価格は、各サービスページにて表示されます。<br />
                表示価格は、特に明記のない限り税込み価格です。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">支払方法</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                クレジットカード決済、銀行振込、その他当社が定める方法によるものとします。<br />
                支払方法の詳細は、各サービスの申込時にご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">支払時期</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                クレジットカード決済：ご注文確定時に即時決済<br />
                銀行振込：当社指定の期日までにお支払いください
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">商品の引渡し時期</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                各サービスの提供開始時期については、お申込み時にご案内いたします。<br />
                デジタルコンテンツの場合は、決済完了後すぐにご利用いただけます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">返品・キャンセルについて</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                サービスの性質上、お客様のご都合による返品・キャンセルはお受けできない場合があります。<br />
                返品・キャンセルの可否や条件については、各サービスのご利用規約をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">動作環境</h2>
              <Separator className="mb-6" />
              <p className="text-gray-700 mb-4">
                各サービスの動作環境は、各サービスページにてご確認ください。<br />
                推奨環境でご利用いただけない場合のサポートはいたしかねますのでご了承ください。
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="yasai-button">お問い合わせはこちら</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}