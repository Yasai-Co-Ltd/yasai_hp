import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import ServicePromo from "@/components/works/ServicePromo";
import WorkCard from "@/components/works/WorkCard";
import WorksPageIntro from "@/components/works/WorksPageIntro";
import { works } from "@/data/works";
import { getOtherWorks, getWorkBySlug } from "@/lib/works-utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    return {};
  }
  return {
    title: `${work.name} | 制作実績 | YASAI株式会社`,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    notFound();
  }

  const otherWorks = getOtherWorks(slug);

  return (
    <>
      <WorksPageIntro variant="detail" work={work} />

      <section className="bg-white pt-12 pb-4">
        <div className="yasai-container">
          <div className="rounded-xl bg-gray-50 p-4 md:p-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={work.image}
                alt={work.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500 tracking-wide sm:flex-row sm:items-center sm:justify-between">
            <p>{work.caption}</p>
            <p>{work.category}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="yasai-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[336px_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold text-primary mb-3">OVERVIEW</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                プロジェクト概要
              </h2>
              <dl className="divide-y divide-gray-200 border-t border-gray-200 text-sm">
                <div className="py-4">
                  <dt className="text-[11px] font-medium tracking-wide text-gray-500 mb-2">
                    プロジェクト
                  </dt>
                  <dd className="text-gray-900">{work.name}</dd>
                </div>
                <div className="py-4">
                  <dt className="text-[11px] font-medium tracking-wide text-gray-500 mb-2">
                    URL
                  </dt>
                  <dd>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 break-all hover:text-primary"
                    >
                      {work.url}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-[11px] font-medium tracking-wide text-gray-500 mb-2">
                    カテゴリー
                  </dt>
                  <dd className="text-gray-900">{work.category}</dd>
                </div>
                <div className="py-4">
                  <dt className="text-[11px] font-medium tracking-wide text-gray-500 mb-2">
                    キーワード
                  </dt>
                  <dd className="text-gray-900">{work.tags.join(" / ")}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                {work.overviewHeading[0]}
                <br />
                {work.overviewHeading[1]}
              </h3>
              <div className="space-y-6 text-gray-600 leading-loose">
                {work.overviewText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yasai-section bg-white">
        <div className="yasai-container">
          <p className="text-xs font-bold text-primary mb-3">OTHER WORKS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            ほかの制作実績
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {otherWorks.map((item) => (
              <WorkCard key={item.slug} work={item} imageAspect="list" />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/works"
              className="inline-flex h-16 min-w-[330px] items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary/90"
            >
              制作実績一覧に戻る
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <ServicePromo />
      <Contact />
    </>
  );
}
