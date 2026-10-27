import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/data/works";

const topWorks = works.filter((work) => work.showOnTop);

const Works = () => {
  return (
    <section className="yasai-section bg-white" id="works">
      <div className="yasai-container">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            WORKS
          </h2>
          <p className="text-xl font-bold text-gray-900 mb-4">制作実績</p>
          <p className="text-gray-600 text-lg leading-relaxed">
            AIの可能性を、使えるカタチに。
            <br className="hidden md:inline" />
            YASAIが手がけるプロダクトや、ビジネスを支える制作・開発をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topWorks.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="group block h-full"
            >
              <article
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="bg-gray-50 p-4">
                  <div className="relative aspect-[357/201] w-full overflow-hidden rounded-md">
                    <Image
                      src={work.image}
                      alt={work.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3.5 p-6">
                  <p className="text-xs font-medium tracking-wider text-primary">
                    {work.category}
                  </p>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {work.name}
                    </h3>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary"
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="min-h-[4.5rem] flex-1 text-sm leading-relaxed text-gray-600">
                    {work.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-gray-50 px-2.5 py-1 text-xs tracking-wide text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/works"
            className="inline-flex h-16 min-w-[330px] items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary/90"
          >
            制作実績をすべて見る
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
