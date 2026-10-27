import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { services, type Service } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";
import { getServiceBySlug } from "@/lib/services-utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.name} | サービス | YASAI株式会社`,
  };
}

function ServiceSiteButton({ service }: { service: Service }) {
  if (!service.siteUrl) return null;

  return (
    <a
      href={service.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-16 min-w-[280px] max-w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary/90"
    >
      サービスサイトを見る
      <span aria-hidden>↗</span>
    </a>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="bg-primary text-white">
        <div className="yasai-container px-4 md:px-6 pt-6 pb-16">
          <nav
            className="mb-10 flex flex-wrap items-center gap-3 text-xs text-white/90"
            aria-label="パンくず"
          >
            <Link href="/" className="hover:text-white">ホーム</Link>
            <span className="text-white/60">/</span>
            <Link href="/#service" className="hover:text-white">サービス</Link>
            <span className="text-white/60">/</span>
            <span>{service.name}</span>
          </nav>
          <p className="text-5xl md:text-7xl font-extrabold tracking-tight">
            SERVICE
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold">
            {service.name}｜{service.category}
          </h1>
        </div>
      </div>

      <section className="bg-white py-12 md:py-16">
        <div className="yasai-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-50 px-3 py-1.5 text-xs font-medium tracking-wide text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.name}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
                <span className="text-primary">{service.heroLead[0]}</span>
                <br />
                {service.heroLead[1]}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.heroText}</p>
              {service.siteUrl ? (
                <div className="space-y-3">
                  <ServiceSiteButton service={service} />
                  <p className="text-xs text-gray-500 tracking-wide break-all">
                    {service.siteUrl}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-gray-500">
                <p>{service.name}｜{service.category}</p>
                {service.siteUrl ? (
                  <a
                    href={service.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 hover:text-primary"
                  >
                    SERVICE SITE ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="yasai-container space-y-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[440px_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold text-primary mb-3">
                {service.about.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                {service.about.heading[0]}
                <br />
                {service.about.heading[1]}
              </h2>
            </div>
            <div className="lg:pt-6">
              <p className="text-lg font-bold text-gray-900 mb-4">
                {service.about.lead}
              </p>
              <p className="text-gray-600 leading-relaxed">{service.about.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.concepts.map((concept, index) => {
              const Icon = getServiceIcon(concept.icon);
              return (
                <div
                  key={concept.title}
                  className="rounded-lg border border-gray-200 bg-white p-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {concept.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="yasai-section bg-white">
        <div className="yasai-container">
          <p className="text-sm font-bold text-primary mb-8">FEATURES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => {
              const Icon = getServiceIcon(feature.icon);
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-gray-200 p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
                      <Icon className="h-7 w-7 text-primary" aria-hidden />
                    </div>
                    <span className="text-sm font-bold text-primary">
                      FEATURE {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs font-medium tracking-wider text-primary mb-2">
                    {feature.label}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.text}
                  </p>
                  <hr className="mb-4 border-gray-200" />
                  <p className="text-sm font-medium text-gray-900">
                    {feature.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {service.siteUrl ? (
        <section className="bg-gray-50 py-16">
          <div className="yasai-container">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold text-primary mb-3">SERVICE SITE</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}を、もっと詳しく。
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  サービスの詳細は、{service.name}の公式サイトをご覧ください。
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <ServiceSiteButton service={service} />
                <a
                  href={service.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary break-all hover:underline"
                >
                  {service.siteUrl}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Contact />

      <div className="yasai-container py-8 text-center">
        <Link
          href="/#service"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← サービス一覧へ戻る
        </Link>
      </div>
    </>
  );
}
