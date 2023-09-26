import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// import TradingCardContainer from '../components/TradingCardContainer';
import webMoneySteps from "../data/webMoneySteps.json";
import benefits from "../data/benefits.json";
import { MdArrowForwardIos } from "react-icons/md";

const ExchangeWebmoneyPaypal = () => {
  return (
    <>
      <Head>
        <title>Exchange Webmoney to Paypal | HiExchange</title>
        <meta name="description" content="Hi-exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-[#363d71]">
        {/* Hero Section */}
        <section className="flex flex-col items-start justify-center bg-[#363D72] px-3 py-6 text-white">
          <div className="flex flex-col items-center pt-32 lg:flex-row">
            <div className="w-full px-4">
              <h1 className="text-4xl font-extrabold lg:text-6xl">
                Exchange WebMoney to Paypal
              </h1>
              <p className="text-md my-9 lg:w-72 lg:text-xl">
                HiExchange offers an easy to use platform and the competitive
                rates for exchanging WebMoney to PayPal.
              </p>
            </div>

            <div className="w-full">
              <Image
                src="/assets/webmoney-paypal-hero.svg"
                className="mx-auto w-full lg:w-[70%]"
                width={250}
                height={90}
                alt=""
              />{" "}
            </div>
          </div>

          <Link href="/" className="direction-btn ml-5 mt-12">
            <h1 className="text-white">
              Exchange WebMoney to Paypal
              {/* <span className="flex flex-row text-white">
                <MdArrowForwardIos />
              </span> */}
            </h1>
          </Link>
        </section>

        {/* Description */}
        <section className="flex flex-col items-center px-9 py-5 lg:flex-row-reverse lg:gap-5">
          <div className="w-full">
            <h1 className="font-bolder text-3xl">
              Need to Exchange WMZ to Paypal?
            </h1>
            <p className="text-md border-black-200 border-b-2 pt-2">
              Despite the wide acceptance for both payment systems, you might
              need to exchange WebMoney to PayPal at some point. With a wide
              variety of e-commerce platforms accepting PayPal, exchange WMZ to
              PayPal to make online payments. Just watch this video guideFor a
              quick, hassle-free and efficient WMZ to PayPal Exchange!
            </p>

            <p className="text-blue pb-4 pt-7 text-sm">
              Just watch this video guide for a quick, hassle-free and efficient
              WMZ to Paypal Exchange
            </p>
          </div>

          <div className="my-10 w-full lg:w-[80%]">
            <iframe
              src="https://www.youtube.com/embed/mkqTsVgaljA"
              allowFullScreen={true}
              className="embed-responsive-item h-52 w-full rounded-xl lg:h-72"
            ></iframe>
          </div>
        </section>

        {/* Trading Component
        <TradingCardContainer /> */}

        {/* Steps Section */}
        <section className="px-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="pb-3 text-center text-2xl font-bold lg:text-4xl">
              To Exchange WebMoney to PayPal on HiExchange, is just 4 easy steps
            </h1>
            <p className="text-center lg:w-[55%]">
              HiExchange provides PayPal in exchange for different crypto and
              e-currencies. One of the most popular exchange directions to
              PayPal is WebMoney. We have tailored an easy process for your
              WebMoney exchange here. It all happens in just 4 steps:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {webMoneySteps.map((step, index) => (
              <div
                className="border-black-400 mx-auto mt-9 flex h-72 w-full flex-col items-center justify-around rounded-2xl border-2 px-5 lg:w-[80%]"
                key={index}
              >
                <p className="text-xl font-bold">{index + 1}</p>
                <p>{step.instruction}</p>
                <Image
                  src={step.icon}
                  width={210}
                  height={120}
                  alt="Exchange webmoney to paypal"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link href="/" className="direction-btn my-20">
              Order Your Exchange
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-3">
          <h1 className="text-center text-2xl font-bold">
            HiExchange is THE Platform to Exchange Webmoney for PayPal
          </h1>

          <div className="flex flex-col lg:flex-row">
            {benefits.map((benefit, index) => (
              <div
                className="mt-9 flex h-72 w-full flex-col items-center justify-around gap-7 rounded-2xl px-5"
                key={index}
              >
                <Image
                  src={benefit.image}
                  width={150}
                  height={90}
                  alt="Exchange webmoney to paypal"
                />
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className=" my-12 flex flex-col items-center justify-around gap-4 gap-5">
            <p className="text-2xl">Just like that...</p>
            <h3 className="font-bolder px-1 text-center text-3xl lg:w-[50%] lg:pb-32 lg:pt-4 lg:text-5xl">
              You can exchange your WebMoney for PayPal instantly
            </h3>

            <Link href="/" className="direction-btn">
              Let&apos;s Give it a try
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExchangeWebmoneyPaypal;
