import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";

const benefits = [
  {
    title: "No Fees",
    description:
      "Using our exchange service has no hidden fees. You get exactly what you see in exchange for your cryptocurrency.",
    icon: "/assets/home-card-0.png",
  },
  {
    title: "Respect for Anonymity",
    description:
      "We all love crypto as it lets us stay anonymous and we respect the nature of cryptocurrency. At HiExchange no one asks for your personal information or even to Sign Up for an account.",
    icon: "/assets/home-card-1.png",
  },
  {
    title: "Quick Exchange",
    description:
      "Like others in the Market, we don’t use the word “Instant”. As we deal with cryptocurrencies, we promise you to take care of your exchange instantly once the transaction gets confirmed on the Blockchain.",
    icon: "/assets/home-card-2.png",
  },
  {
    title: "24/7 Support",
    description:
      "At HiExchange. we work around the clock. No Weekends or Working hours could stop us from assisting you in completing your exchange order.",
    icon: "/assets/home-card-3.png",
  },
];

const options: EmblaOptionsType = {
  loop: true,
};

const BenefitsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div
      className="embla mx-4 mb-16 mt-28 h-[540px] overflow-hidden shadow-xl"
      ref={emblaRef}
    >
      <div className="embla__container flex h-full divide-x">
        {benefits.map((slide) => (
          <div
            className="embla__slide relative w-fit shrink-0 grow-0 basis-full bg-white px-4 text-[#707070] md:basis-1/4"
            key={slide.title}
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Image
                src={slide.icon}
                alt="Benefit icons"
                width={100}
                height={100}
                className=""
              />

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-[#666666]">
                  {slide.title}
                </h3>
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

export default BenefitsCarousel;
