import Head from "next/head";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>HiExchange|Exchange Digital and Crypto currencies</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10 p-10 lg:px-80">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
          <div>
            <Image
              className="w-full py-3 lg:w-[500px]"
              src="/assets/head-office.png"
              width={390}
              height={190}
              alt=""
            />
            <Image
              className="w-full py-3"
              src="/assets/branch-office.png"
              width={390}
              height={190}
              alt=""
            />
          </div>

          <div className="flex flex-col items-start font-medium">
            <div>
              <h1 className="text-5xl font-semibold text-hero-bg">Where?</h1>
              <p className="py-5">
                Head Office: Istanbul, Üsküdar, Denizmen Sokak
              </p>
              <p>
                Branch Office: No449, Floor 20, Block 21B, Dirsi, Nadirashvili,
                Tbilisi
              </p>
            </div>
            <div>
              <h1 className="text- py-5 text-5xl font-semibold">When?</h1>
              <p>
                24 hours a day, seven days a week. we are online to complete
                your order as quickly as possible.
              </p>
            </div>
            <div>
              <h1 className="py-5 text-5xl font-semibold text-hero-bg">
                Get in Touch
              </h1>
              <p>
                Email:{" "}
                <a className="text-blue-700" href="mailto:SUPPORT@HI.EXCHANGE">
                  SUPPORT@HI.EXCHANGE
                </a>
              </p>
              <p>
                Telegram:{" "}
                <a
                  className="text-blue-700"
                  href="https://t.me/hiexchangeOfficial"
                >
                  t.me/hiexchangeOfficial
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
