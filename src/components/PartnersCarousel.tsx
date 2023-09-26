import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const benefits = [
  {
    title: "TrustPilot",
    description: "See what our customers say about us",
    icon: "/assets/trustpilot-partners.svg",
  },
  {
    title: "Perfect Money",
    description: "Certified partner of perfect money",
    icon: "/assets/perfectmoney-partners.svg",
  },
  {
    title: "WebMoney",
    description: "check our Webmoney BL",
    icon: "/assets/webmoney-partners.svg",
  },
  {
    title: "BestChange",
    description: "Follow our competitive rates",
    icon: "/assets/bestchange-partners.svg",
  },
  {
    title: "Perfect Money",
    description: "Certified partner of perfect money",
    icon: "/assets/perfectmoney-partners.svg",
  },
];

const options: EmblaOptionsType = {
  loop: true,
};

const autoplayOptions = { delay: 700, loop: true };

const PartnersCarousel = () => {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions), // Add plugin with options
  ]);

  return (
    <div
      className="embla mx-4 mb-16 overflow-hidden bg-[#f4f4f4] shadow-xl"
      ref={emblaRef}
    >
      <div className="embla__container flex h-full">
        {benefits.map((slide, index) => (
          <div
            className="embla__slide relative w-fit shrink-0 grow-0 basis-full px-4 text-[#707070] md:basis-1/4"
            key={`${slide.title}-${index}`}
          >
            <div className="flex h-full w-full flex-col items-center justify-center p-4">
              <Image
                src={slide.icon}
                alt={`${slide.title} icon`}
                width={100}
                height={100}
                className=""
              />

              <div className="mt-8 text-center">
                <p className="font-normal leading-7 text-[#707070]">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
