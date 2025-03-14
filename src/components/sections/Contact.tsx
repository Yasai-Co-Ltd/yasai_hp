import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section className="yasai-section bg-gray-50">
      <div className="yasai-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-primary text-white p-8 rounded-lg flex items-center justify-center">
            <h2 className="text-3xl font-bold">CONTACT</h2>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-3">AIでビジネスを加速！</h3>
              <p className="text-gray-600 mb-6">
                YASAIの事業にご興味をお持ちの方は、下記の問い合わせボタンからお気軽にご相談ください。
              </p>

              <Link href="/contact">
                <Button className="yasai-button w-full sm:w-auto flex items-center justify-center gap-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
