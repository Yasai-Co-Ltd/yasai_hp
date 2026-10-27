import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  imageAspect?: "top" | "list";
};

const WorkCard = ({ work, imageAspect = "top" }: WorkCardProps) => {
  const imageClass =
    imageAspect === "list"
      ? "relative aspect-[568/320] w-full overflow-hidden rounded-md"
      : "relative aspect-[357/201] w-full overflow-hidden rounded-md";

  return (
    <Link href={`/works/${work.slug}`} className="group block h-full">
      <article
        className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-transform duration-300 group-hover:scale-[1.02]"
      >
        <div className="bg-gray-50 p-4">
          <div className={imageClass}>
            <Image
              src={work.image}
              alt={work.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3.5 p-6">
          <p className="text-xs font-medium tracking-wider text-primary">
            {work.category}
          </p>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-gray-900">{work.name}</h3>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary"
              aria-hidden
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="min-h-[3.25rem] flex-1 text-sm leading-relaxed text-gray-600">
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
  );
};

export default WorkCard;
