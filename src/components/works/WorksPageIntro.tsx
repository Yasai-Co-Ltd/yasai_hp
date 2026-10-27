import Link from "next/link";
import type { Work } from "@/data/works";

type WorksPageIntroProps = {
  variant: "list" | "detail";
  work?: Work;
};

const WorksPageIntro = ({ variant, work }: WorksPageIntroProps) => {
  return (
    <div className="bg-primary text-white">
      <div className="yasai-container px-4 md:px-6 pt-6 pb-16">
        <nav
          className="mb-10 flex flex-wrap items-center gap-3 text-xs text-white/90"
          aria-label="パンくず"
        >
          <Link href="/" className="hover:text-white">
            ホーム
          </Link>
          <span className="text-white/60">/</span>
          {variant === "list" ? (
            <span>制作実績一覧</span>
          ) : (
            <>
              <Link href="/works" className="hover:text-white">
                制作実績一覧
              </Link>
              <span className="text-white/60">/</span>
              <span>{work?.name}</span>
            </>
          )}
        </nav>

        {variant === "list" ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-5xl md:text-7xl font-extrabold tracking-tight">
                WORKS
              </p>
              <h1 className="mt-3 text-2xl md:text-3xl font-bold">
                制作実績一覧
              </h1>
            </div>
            <div className="max-w-md lg:pb-1">
              <div className="mb-5 h-0.5 w-10 bg-white" />
              <p className="text-base md:text-[17px] leading-relaxed text-white">
                AIの可能性を、使えるカタチに。
                <br />
                YASAIが手がけるプロダクトや、ビジネスを支える制作・開発をご紹介します。
              </p>
            </div>
          </div>
        ) : work ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-wide mb-5">
                WORKS / 制作実績詳細
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight break-words">
                {work.name}
              </h1>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-white/10 px-3 py-1.5 text-xs tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="max-w-lg lg:pt-8">
              <p className="text-xs font-medium tracking-wider mb-4">
                {work.category}
              </p>
              <div className="mb-4 h-0.5 w-10 bg-white" />
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                {work.lead[0]}
                <br />
                {work.lead[1]}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WorksPageIntro;
