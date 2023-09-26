import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const benefits = [
  {
    title: "TrustPilot",
    description: "See what our customers say about us",
    icon: "/assets/home-card-0.png",
  },
  {
    title: "Perfect Money",
    description: "Certified partner of perfect money",
    icon: "/assets/home-card-1.png",
  },
  {
    title: "WebMoney",
    description: "check our Webmoney BL",
    icon: "/assets/home-card-2.png",
  },
  {
    title: "BestChange",
    description: "Follow our competitive rates",
    icon: "/assets/home-card-3.png",
  },
  {
    title: "Okchanger",
    description: "See what our customers say about us",
    icon: "/assets/home-card-3.png",
  },
];

const options: EmblaOptionsType = {
  loop: true,
};

const autoplayOptions = { delay: 3000 };

const ReviewsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions), // Add plugin with options
  ]);

  return (
    <div className="embla mx-4 mb-16 overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex h-full gap-5">
        {benefits.map((slide) => (
          <div
            className="embla__slide relative w-fit shrink-0 grow-0 basis-full text-[#707070] md:basis-1/3"
            key={slide.title}
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

export default ReviewsCarousel;
