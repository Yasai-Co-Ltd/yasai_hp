import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section className="yasai-section bg-gray-50" id="service">
      <div className="yasai-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">SERVICE</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            YASAIは最先端のAI技術を活用した多彩なサービスを提供しています。
            ビジネス課題の解決からデータ活用、人材育成まで、幅広くサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const external = Boolean(service.skipDetailPage && service.siteUrl);
            const card = (
              <Card className="cursor-pointer yasai-card h-full">
                <CardHeader className="pb-2">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    SERVICE {service.no}
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription>{service.catch}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-white rounded-md flex items-center justify-center overflow-hidden aspect-video">
                    <Image
                      src={service.image}
                      width={550}
                      height={310}
                      className="w-full h-full object-cover"
                      alt={service.name}
                    />
                  </div>
                </CardContent>
              </Card>
            );

            if (external) {
              return (
                <a
                  key={service.slug}
                  href={service.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
