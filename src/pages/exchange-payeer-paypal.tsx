import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
// import TradingCardContainer from '../components/TradingCardContainer';
import PayeerSteps from '../data/webMoneySteps.json';
import benefits from '../data/benefits.json';



const ExchangePayeerPaypal = () => {
    return (
        <>
            <Head>
                <title>Exchange Payeer to Paypal | HiExchange</title>
                <meta name="description" content="Hi-exchange" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="text-[#363d71]">
                {/* Hero Section */}
                <section className="bg-[#363D72] flex flex-col items-start justify-center text-white py-6 px-3">
                    <div className="pt-32 flex flex-col items-center lg:flex-row">
                        <div className="px-4 w-full">
                            <h1 className="font-extrabold text-4xl lg:text-6xl">Exchange Payeer to Paypal</h1>
                            <p className="my-9 text-md lg:text-xl lg:w-72">HiExchange offers an easy to use platform and the competitive rates for exchanging Payeer to PayPal.</p>
                        </div>

                        <div className="w-full">
                            <Image src="/assets/payeer-paypal-hero.svg" className="w-full lg:w-[70%] mx-auto" width={250} height={90} alt="" /> </div>
                    </div>

                    <Link href="/" className="direction-btn ml-5 mt-12">
                        Exchange Payeer to Paypal
                    </Link>
                </section>

                {/* Description */}
                <section className="px-9 py-5 flex flex-col items-center lg:flex-row-reverse lg:gap-5">
                    <div className="w-full">
                        <h1 className="font-bolder text-3xl">Need to Exchange Payeer to Paypal?</h1>
                        <p className="pt-2 text-md border-b-2 border-black-200">
                            Despite the wide acceptance for both payment systems, you might
                            need to exchange Payeer to PayPal at some point. With a wide
                            variety of e-commerce platforms accepting PayPal, exchange WMZ
                            to PayPal to make online payments. Just watch this video guideFor a
                            quick, hassle-free and efficient WMZ to PayPal Exchange!
                        </p>

                        <p className="text-blue text-sm pt-7 pb-4">
                            Just watch this video guide for a quick,
                            hassle-free and efficient WMZ to Paypal Exchange
                        </p>
                    </div>

                    <div className="w-full my-10 lg:w-[80%]">
                        <iframe
                            src="https://www.youtube.com/embed/mkqTsVgaljA"
                            allowFullScreen={true}
                            className="embed-responsive-item rounded-xl w-full h-52 lg:h-72"></iframe>
                    </div>
                </section>

                {/* Trading Component
        <TradingCardContainer /> */}


                {/* Steps Section */}
                <section className="px-3">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl text-center font-bold pb-3 lg:text-4xl">
                            To Exchange Payeer to PayPal on HiExchange, is just 4 easy steps
                        </h1>
                        <p className="lg:w-[55%] text-center">
                            HiExchange provides PayPal in exchange for different crypto and e-currencies.
                            One of the most popular exchange directions to PayPal is Payeer.
                            We have tailored an easy process for your Payeer exchange here.
                            It all happens in just 4 steps:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">{
                        PayeerSteps.map((step, index) => (
                            <div className="w-full lg:w-[80%] mx-auto mt-9 h-72 px-5 flex flex-col items-center justify-around rounded-2xl border-2 border-black-400" key={index}>
                                <p className="text-xl font-bold">{index + 1}</p>
                                <p>{step.instruction}</p>
                                <Image src={step.icon} width={210} height={120} alt="Exchange Payeer to paypal" />
                            </div>
                        ))
                    }</div>

                    <div className="flex items-center justify-center">
                        <Link href="/" className="direction-btn my-20">
                            Order Your Exchange
                        </Link>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="px-3">
                    <h1 className="font-bold text-2xl text-center">
                        HiExchange is THE Platform to Exchange
                        Payeer for PayPal
                    </h1>

                    <div className="flex flex-col lg:flex-row">
                        {
                            benefits.map((benefit, index) => (
                                <div className="w-full mt-9 h-72 px-5 gap-7 flex flex-col items-center justify-around rounded-2xl" key={index}>
                                    <Image src={benefit.image} width={150} height={90} alt="Exchange Payeer to paypal" />
                                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                                    <p>{benefit.desc}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className=" my-12 gap-5 flex flex-col items-center justify-around gap-4">
                        <p className="text-2xl">Just like that...</p>
                        <h3 className="text-3xl font-bolder px-1 lg:text-5xl lg:w-[50%] lg:pt-4 lg:pb-32 text-center">You can exchange your
                            Payeer for PayPal instantly</h3>

                        <Link href="/" className="direction-btn">
                            Let&apos;s Give it a try
                        </Link>
                    </div>
                </section>
            </main>
        </>

    )
}

export default ExchangePayeerPaypal