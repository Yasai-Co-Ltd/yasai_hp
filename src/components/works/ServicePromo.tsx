import Link from "next/link";

const ServicePromo = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="yasai-container">
        <div className="flex flex-col gap-8 border-b border-gray-200 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-primary mb-2">SERVICE</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              ビジネスに合わせたAI活用を、ここから。
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              制作・開発だけでなく、導入から運用まで。YASAIのサービスをご覧ください。
            </p>
          </div>
          <Link
            href="/#service"
            className="inline-flex shrink-0 items-center gap-8 rounded-md border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-primary hover:bg-gray-50"
          >
            サービスを見る
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePromo;
