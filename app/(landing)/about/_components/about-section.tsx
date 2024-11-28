"use client";

import {
  BoardDirectorDetails,
  ExecutiveLeadersDetails,
} from "@/constants/leaders/leaders";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MoveUpRight } from "lucide-react";

interface AboutUsSectionProps {
  supports: any;
}
const AboutUsSection = ({ supports }: AboutUsSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="about"
      className="w-full min-h-screen py-8 md:py-12 mt-4 md:mt-10"
    >
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-12 w-full flex flex-col gap-6 md:gap-10">
        {/* About Section */}
        <div className="flex flex-col items-center gap-6 md:gap-12 mb-12 md:mb-16 pt-4 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-semibold text-green select-none">
            About Us
          </h1>
          <div className="flex flex-col gap-10 items-center justify-center md:px-4">
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              Welcome to{" "}
              <span className="font-semibold">
                JAYMA BIO INNOVATIONS PRIVATE LIMITED
              </span>
              , a pioneering force in the realm of biobased sustainable
              products. Founded in February 2022 in the vibrant city of
              Rourkela, the inception of this venture was inspired by the
              unwavering vision of Karthika Parvathy, the esteemed founder and
              director. With a background in biotechnology and a profound
              commitment to environmental preservation, a journey rooted in a
              deep love for nature began, aiming to create innovative solutions
              that promote sustainability.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              The connection to nature established during childhood played a
              pivotal role in shaping Karthika's perspective. Surrounded by
              gardens teeming with life, formative experiences included
              exploring diverse plant species and understanding the intricate
              relationships within ecosystems. This upbringing instilled a
              lasting appreciation for the environment and an urgent realization
              that proactive measures must be taken to protect it. Alongside a
              husband who shares a similar academic foundation, the aspiration
              to launch a company emerged, one that would harness biotechnology
              to forge a more sustainable future.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              The first venture into the biobased product landscape began with
              the introduction of kombucha in 2022. This fermented tea, rich in
              probiotics, captured the attention of health-conscious consumers
              while serving as a testament to the belief that wellness and
              environmental consciousness can harmoniously coexist. Early
              stories of brewing kombucha recount meticulous attention to
              detail—each batch crafted with care and love, reflecting a
              commitment to quality and sustainability. Every sip became a
              celebration of nature’s transformative power, encouraging a
              lifestyle that values health and ecological stewardship.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              As the company evolved, the exploration of bacterial cellulose
              emerged as a significant focus. Derived from kombucha, this
              remarkable material offered a plethora of applications—from
              textiles to eco-friendly packaging—highlighting the potential of
              biotechnology in everyday life. The discovery of bacterial
              cellulose was akin to unlocking a treasure trove of opportunities,
              where each revelation sparked new ideas and innovations. This
              substance embodies the essence of sustainability, showcasing how
              waste can be transformed into valuable resources.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              In a significant move toward innovation and collaboration,{" "}
              <span className="font-semibold">JAYMA BIO INNOVATIONS </span>{" "}
              began partnering with students from NIT Rourkela in 2023. This
              collaboration brought fresh perspectives and ideas into the fold,
              fostering an environment of creativity and learning. Together,
              projects were launched that sought to merge academic research with
              practical applications, enriching both the educational experience
              of the students and the product development process of the
              company.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              The latest groundbreaking project, the Sam Symphony, serves as a
              brilliant illustration of this collaborative spirit, which started
              in 2023, this unique device transforms the sounds of plants into
              music, encapsulating the mission to celebrate the beauty of nature
              in a novel way. The Sam Symphony represents more than just a
              product; it is an invitation to immerse oneself in the melodies of
              the natural world and to recognize the intrinsic value of all
              living beings. Through music, a profound connection to the
              environment can be fostered, inspiring greater respect and care
              for the planet.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              Under the guidance of Karthika Parvathy, the principles of
              sustainability and eco-consciousness are firmly embedded in every
              aspect of operations at{" "}
              <span className="font-semibold">JAYMA BIO INNOVATIONS.</span> A
              relentless commitment to responsible sourcing ensures that raw
              materials are ethically obtained and environmentally friendly.
              Each product crafted reflects the belief that it should serve as a
              gift to the Earth, leaving a positive impact on both consumers and
              the environment. The sentiment that every creation must embody
              ecological responsibility resonates throughout the organization.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              At the heart of{" "}
              <span className="font-semibold">JAYMA BIO INNOVATIONS</span> lies
              the belief that sustainability should be accessible to all. A
              dedication to community education about biobased products aims to
              empower individuals to make conscious choices that benefit both
              personal health and the environment. Stories of local families
              embracing these products and making small yet meaningful changes
              in their daily routines serve as a powerful reminder of the
              collective impact achievable through shared efforts.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              Looking ahead, a steadfast commitment to innovation remains
              paramount, with a focus on integrating biotechnology into future
              product offerings. The dream of a world where sustainability is
              not merely an option, but a way of life, drives the mission
              forward. Every product is envisioned as a step toward a healthier
              planet, contributing to a legacy of ecological stewardship.
            </p>
            <p className="text-sm md:text-lg text-green leading-relaxed text-left w-full">
              Join in this journey as the boundaries of possibility continue to
              be explored in the realm of biobased sustainable products.
              Together, a difference can be made—one product, one person, and
              one planet at a time. Welcome to the family at{" "}
              <span className="font-semibold">
                JAYMA BIO INNOVATIONS PRIVATE LIMITED,
              </span>{" "}
              where the passion and vision of Karthika Parvathy propel the
              commitment to a harmonious and sustainable future!
            </p>
          </div>
        </div>

        {/* Leaders Section */}
        <div className="flex flex-col items-center gap-7 md:gap-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-green">
            Meet Our Leaders
          </h2>
          <div className="w-full flex items-center justify-center md:justify-start md:mt-5">
            <h3 className="text-xl md:text-3xl font-medium text-green">
              Executive Profiles
            </h3>
          </div>

          {/* Mobile Slider */}
          <div className="w-full md:hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 1600,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full px-4"
            >
              {ExecutiveLeadersDetails.map((leader, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[450px] bg-white rounded-lg shadow-md border border-green/30">
                    <div className="w-full h-[70%] relative">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="pt-3 px-4 h-[30%] space-y-2 relative">
                      <div className="w-full flex items-center justify-between">
                        <h4 className="text-medium font-semibold text-green">
                          {leader.name}
                        </h4>
                        {leader.linkedin && (
                          <Link href={leader.linkedin}>
                            <img
                              src="/social-icons/linkedin.svg"
                              alt="linkedin"
                              className="w-5 h-5"
                            />
                          </Link>
                        )}
                      </div>

                      <p className="text-sm text-green">{leader.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6 w-full">
            {ExecutiveLeadersDetails.map((leader, index) => (
              <div
                key={index}
                className="col-span-1 h-[370px] 2xl:h-[410px] bg-white rounded-lg shadow-md border border-green/30"
              >
                <div className="w-full h-[65%] 2xl:h-[70%] relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="pt-3 px-3 space-y-3 relative h-[40%]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-medium font-semibold text-green">
                      {leader.name}
                    </h4>
                    {leader.linkedin && (
                      <Link href={leader.linkedin}>
                        <img
                          src="/social-icons/linkedin.svg"
                          alt="linkedin"
                          className="w-5 h-5"
                        />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-green">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center md:justify-start mt-3 md:mt-5">
            <h3 className="text-xl md:text-3xl font-medium text-green">
              Board of Directors
            </h3>
          </div>

          <div className="w-full h-full grid md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-5">
            {BoardDirectorDetails.map((leader, index) => (
              <div
                key={index}
                className="col-span-4 h-full flex flex-col gap-3 md:px-4 py-2 md:py-3 items-start justify-start"
              >
                <div className="flex items-start gap-4">
                  <h2 className="text-medium md:text-xl font-semibold text-green">
                    {leader.name}
                  </h2>
                  <Link href={leader.linkedin}>
                    <MoveUpRight className="size-5 md:size-7 text-green shrink-0 cursor-pointer" />
                  </Link>
                </div>
                <p className="text-sm w-[80%]">{leader.role}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center md:justify-start mt-3 md:mt-5">
            <h3 className="text-xl md:text-3xl font-medium text-green">
              Supported By
            </h3>
          </div>

          <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-6 md:gap-10">
            {supports?.map((support: any, index: number) => (
              <img
                key={index}
                src={support.image}
                alt={support.name}
                className="w-40 h-auto object-contain select-none pointer-events-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
