// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

import TradingCardContainer from "@/components/TradingCardContainer";
import BenefitsCarousel from "@/components/BenefitsCarousel";
import PartnersCarousel from "@/components/PartnersCarousel";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi.Exchange|Exchange Digital and Crypto currencies</title>
        <meta
          name="description"
          content="Fast and Safe Cryptocurrency and e-currency exchange without KYC. Exchange Bitcoin to PayPal, Webmoney and Perfect money in 4 easy steps.
HiExchange is an online Crypyocurrency and Digital Currency exchange. At Hi Exchange,We value our customers anonymity and protection of their data.The highly experienced Hi Exchange Team has provided fully automated cryptocurrency/electronic exchange for you. Use our services for exchanging currencies.HiExchange is ready to quickly take care of your exchange operations. With 100+ exchange directions for Crypto and E-currencies and 24/7 support"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen">
        <div className="h-[500px] w-full bg-hero-bg"></div>

        <div className="mx-auto mt-[-28rem] flex w-full max-w-6xl flex-wrap justify-between">
          {/* left side hero */}
          <div className="mb-2 px-4 lg:mt-6">
            <h1 className="max-w-lg text-2xl font-bold leading-8 text-white lg:text-[2rem] lg:leading-10">
              Quick and Easy Online Exchange No Sign up needed
            </h1>
            <div className="mt-3 flex items-end gap-4">
              <Image
                src="/assets/24-girl.svg"
                width={170}
                height={200}
                alt="Left hero svg"
              />

              <div className="text-white">
                <p className="font-[16px]">Need Help?</p>
                <p className="font-[16px]">
                  We have{" "}
                  <span className="gap-1 text-[#ffc68a] underline hover:text-orange">
                    24/7 Customer support
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* right side hero */}
          <div className="w-[25rem] px-4">
            <div className="rounded-[0.625rem] bg-white px-4 py-2 lg:mt-6">
              <a
                href="https://www.trustpilot.com/review/hi.exchange?utm_medium=trustbox&utm_source=MicroReviewCount"
                target="_blank"
                className="f"
              >
                <div className="flex flex-row gap-1">
                  <span>
                    See our <strong>387</strong> reviews on
                  </span>
                  <span className="flex flex-row">
                    <Image
                      alt="star sign"
                      src="/assets/trustpilot-partners.svg"
                      width={80}
                      height={80}
                      className=""
                    />
                  </span>
                </div>
              </a>
            </div>

            <p className="mt-12 text-sm text-white">
              If you have an ongoing order, you can check the status of your
              order by entering your track id below:
            </p>

            <form className="my-2 flex w-full gap-1 rounded-xl bg-white p-1 text-sm font-medium">
              <input
                type="text"
                placeholder="Enter Track Id"
                className="basis-1/2 rounded-lg border-2 border-orange px-3 py-1.5  text-[#495057]"
              />
              <button
                type="submit"
                className="bg-or basis-1/2 rounded-lg bg-orange px-2.5 py-1.5"
              >
                Track Order
              </button>
            </form>
          </div>

          {/* trading section  */}

          <div className="mb-12 mt-9 w-full px-4">
            {/* <AuthShowcase />
                    <Form /> */}
            <TradingCardContainer />
          </div>

          {/* Carousel */}
          <BenefitsCarousel />

          {/* Partners section */}
          <div className="mb-12 w-full">
            <h2 className="text-center text-[1.75rem] font-semibold tracking-[0.1rem] text-hero-bg">
              Our Trusted Partners
            </h2>

            {/* Partners Carousel container */}
            <PartnersCarousel />
          </div>

          {/* Reviews section */}
          <div className="mb-12 w-full bg-white py-12 shadow-xl">
            <div className="mb-12 w-full">
              <h2 className="text-center text-[1.75rem] font-semibold tracking-[0.1rem] text-hero-bg">
                Reviews
              </h2>
              <p className="text-center text-[16px] text-[#4a507f]">
                See what our customers say about us on different platforms
              </p>
            </div>

            {/* Reviews Carousel container */}
            <div className="px-4">
              <ReviewsCarousel />
            </div>

            <div className="mt-6 px-4">
              <p className="mb-4 text-center text-2xl font-semibold text-[#4a507f]">
                Please leave us a review It means a lot to us!
              </p>

              <div className="flex justify-center">
                <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 lg:flex-row">
                  <div className="flex w-full items-center justify-center rounded-xl border border-hero-bg px-5 py-2.5 font-semibold">
                    Review us on
                    <span className="flex flex-row">
                      <Image
                        alt="star sign"
                        src="/assets/trustpilot-partners.svg"
                        width={80}
                        height={80}
                        className="ml-1"
                      ></Image>
                    </span>
                  </div>

                  <div className="flex w-full items-center justify-center rounded-xl border border-hero-bg px-5 py-2.5 font-semibold">
                    Review us on{" "}
                    <span className="flex flex-row ">
                      <Image
                        alt="star sign"
                        src="/assets/bestchange-default.svg"
                        width={100}
                        height={100}
                        className="ml-1"
                      ></Image>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="relative mb-24 flex w-full flex-wrap pt-4">
            <div className="absolute -right-1.5 -top-2.5 w-auto max-w-full flex-[0_0_auto]">
              <Image src="" alt="" />
            </div>

            <div className="mb-12 px-4 lg:max-w-[50%] lg:flex-[0_0_50%]">
              <h2 className="text-2xl font-semibold tracking-[0.1rem] text-hero-bg">
                What is{" "}
                <span className="text-4xl tracking-[0.1rem]">HiExchange?</span>
              </h2>

              <p className="mt-[12px] leading-[1.8rem] text-gray-text lg:text-[20px] lg:leading-[36px] ">
                HiExchange is just what everyone in the cryptocurrency world
                needs. We perform all sorts of exchanges between various Crypto
                and Digital currencies. Whether you want to cash out your crypto
                to your PayPal or you want to exchange your WebMoney with other
                currencies, HiExchange is there for you. Apart from amazing
                exchange rates, No “KYC” and “Sign up” requirement makes your
                cryptocurrency exchange feel more <br />
                real.
              </p>
            </div>
            <Image
              alt="Intro ca image"
              src="/assets/intro-ca.png"
              width={500}
              height={500}
            ></Image>

            <div className="w-full max-w-full flex-[0_0_100%] px-4">
              <h2 className="text-2xl font-semibold tracking-[0.1rem] text-hero-bg lg:text-[28px] lg:leading-[34px]">
                Exchange Bitcoin to PayPal and other Digital Currencies
              </h2>

              <p className="leading-[1.8em] text-gray-text lg:text-[20px] lg:leading-[36px]">
                At HiExchange the power is in your hands. If you hold Bitcoins
                or other cryptocurrencies that you want to cash out, we stand by
                your side. Easily put an order to receive money in your PayPal,
                WebMoney, Perfect Money, or Skrill. We’re constantly monitoring
                the Market to provide our customers with the best exchange rates
                available.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
