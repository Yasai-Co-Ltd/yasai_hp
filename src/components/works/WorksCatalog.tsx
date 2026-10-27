"use client";

import { useMemo, useState } from "react";
import type { Work, WorkCategory } from "@/data/works";
import {
  countWorksByCategory,
  formatWorkCount,
  getCategoriesInData,
} from "@/lib/works-utils";
import WorkCard from "@/components/works/WorkCard";

type FilterValue = "all" | WorkCategory;

type WorksCatalogProps = {
  works: Work[];
};

const WorksCatalog = ({ works }: WorksCatalogProps) => {
  const [filter, setFilter] = useState<FilterValue>("all");
  const categoryCounts = useMemo(() => countWorksByCategory(), []);
  const categories = useMemo(() => getCategoriesInData(), []);

  const filteredWorks = useMemo(
    () =>
      filter === "all"
        ? works
        : works.filter((work) => work.category === filter),
    [filter, works],
  );

  const total = filteredWorks.length;
  const rangeLabel = total > 0 ? `1–${total}件を表示` : "0件を表示";

  return (
    <section className="yasai-section bg-white pt-12 pb-8 md:pt-14">
      <div className="yasai-container">
        <div className="mb-8">
          <p className="mb-5 text-sm font-bold text-gray-900">
            カテゴリーから探す
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`inline-flex items-center gap-4 rounded-md border px-6 py-3.5 text-sm font-bold transition-colors ${
                filter === "all"
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              すべて
              <span className="text-xs font-normal">
                {formatWorkCount(works.length)}
              </span>
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`inline-flex items-center gap-4 rounded-md border px-6 py-3.5 text-sm font-medium transition-colors ${
                  filter === category
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                {category}
                <span className="text-xs font-normal">
                  {formatWorkCount(categoryCounts[category])}
                </span>
              </button>
            ))}
          </div>
        </div>

        <hr className="mb-6 border-gray-200" />

        <div className="mb-8 flex items-center justify-between text-sm text-gray-500">
          <p>
            全{" "}
            <span className="text-2xl font-bold text-gray-900">{total}</span>{" "}
            件
          </p>
          <p className="text-xs">{rangeLabel}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWorks.map((work) => (
            <WorkCard key={work.slug} work={work} imageAspect="list" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksCatalog;
