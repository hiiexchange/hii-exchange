import Image from "next/image";

const About = () => {
  return (
    <>
      <main className="mt-16 p-2 lg:px-60">
        <div className="">
          <h1 className="text-5xl font-semibold text-hero-bg">
            About HiExchange
          </h1>
          <div className="leading-7 text-gray-text">
            <p className="mt-5">
              Some 8 years ago, the HiExchange team started their activities in
              the Fintech field. Since then, our team has served many customers
              for exchanging their Cryptocurrencies and Different Electronic
              Currencies.
            </p>
            <p className="mt-5">
              Of course our story began with exchanging mostly E-Currencies such
              as PayPal, WebMoney and Perfect Money, but as we grew we carefully
              took steps into the Cryptocurrency exchange field to be able to
              respond to our loyal customers needs.
            </p>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-2 flex flex-col ">
            <div className="text-5xl font-semibold text-hero-bg">
              <h1>A safe and fast</h1>
              <h1>Cryptocurrency Exchange</h1>
            </div>
            <div className="mt-5 leading-8 text-gray-text">
              <p>
                With dedicated teams working on different parts of our website,
                We offer Safety, Speed and Full Anonymity to our customers. We
                respect the soul of cryptocurrency and we want what happens at
                HiExchange to stay in HiExchange
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/about-pic1.png"
              alt="about pic"
              width={900}
              height={700}
            ></Image>
          </div>
        </div>
        <section className="mt-8">
          <h1 className="text-5xl font-semibold text-hero-bg">
            24/7 Service and Support?
          </h1>
          <div className="mt-2 leading-8 text-gray-text lg:mt-5">
            <p>
              As an online cryptocurrency exchange, we offer our fast and safe
              exchange services around the clock. While, we’re there for you all
              day if you need support!
            </p>
            <p className="mt-3">
              We want to make your Bitcoin Exchange experience a memorable one
              so we have gathered the most talented colleagues who know their
              way around all sorts of Digital Currencies.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/assets/about-pic2.png"
              alt="about pic"
              width={1640}
              height={200}
            ></Image>
          </div>
        </section>
        <section className="mt-8">
          <h1 className="text-5xl font-semibold text-hero-bg">
            Digital Currency? We accept them here
          </h1>
          <p className="mb-32 mt-2 leading-8 text-gray-text lg:mt-5">
            You can easily exchange your Bitcoin to PayPal or buy crypto with
            your WebMoney wallet from HiExchange. Our website works around the
            clock and you can swap your coins without going through the KYC
            process or sign up.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
