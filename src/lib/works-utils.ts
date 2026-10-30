import { works, type Work, type WorkCategory } from "@/data/works";

export const WORK_CATEGORY_ORDER: WorkCategory[] = [
  "Webサイト制作",
  "システム開発",
];

export function getCategoriesInData(): WorkCategory[] {
  const present = new Set(works.map((work) => work.category));
  return WORK_CATEGORY_ORDER.filter((category) => present.has(category));
}

export function countWorksByCategory(): Record<WorkCategory, number> {
  const counts: Record<WorkCategory, number> = {
    "Webサイト制作": 0,
    "システム開発": 0,
  };
  for (const work of works) {
    counts[work.category] += 1;
  }
  return counts;
}

export function formatWorkCount(count: number): string {
  return String(count).padStart(2, "0");
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

/** 同カテゴリ優先。不足分は works 配列の並び順で補完。 */
export function getOtherWorks(currentSlug: string): Work[] {
  const current = getWorkBySlug(currentSlug);
  if (!current) return [];

  const others = works.filter((work) => work.slug !== currentSlug);
  const sameCategory = others.filter((work) => work.category === current.category);
  const otherCategories = others.filter((work) => work.category !== current.category);
  return [...sameCategory, ...otherCategories].slice(0, 2);
}
