import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "YASAI株式会社 - AIをベースにしたサービスを提供",
  description: "YASAI株式会社は、AIをベースにしたデジタルサービスを提供する会社です。ビジネス課題の解決からデータ活用、人材育成まで、幅広くサポートします。",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Chat Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatWidgetConfig = {
                chatId: 'c01ef15c-cf51-4b9e-af9f-2d63cf9c059a',
                baseUrl: 'https://yabot.yas-ai.io',
                autoOpen: true
              }
            `,
          }}
        />
        <script src="https://yabot.yas-ai.io/embed.js" defer />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #chat-widget-button {
                background-color: #3b82f6 !important;
              }
              #chat-widget-window {
                width: 400px !important;
                height: 600px !important;
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
