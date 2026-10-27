import React from "react";
import Link from "next/link";
import { works } from "@/data/works";
import WorkCard from "@/components/works/WorkCard";

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
            <WorkCard key={work.slug} work={work} imageAspect="top" />
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
