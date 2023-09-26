import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import FAQ from "../components/FAQ";

const EarnMoney = () => (
  <>

    <Head>
      <title>HiExchange|Exchange Digital and Crypto currencies</title>
      <meta name="description" content="HiExchange" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-full bg-hero-bg">
      <div className="flex flex-col justify-center py-24 text-center ">
        <h1 className="heading-[50px] text-[28px] font-bold text-[#f5f9fe]">
          By Participating in our affiliate program, earn money the easy way
        </h1>
        <div className="mt-5">
          <button className="direction-btn">
            Become our partner in profit today
          </button>
          <div className="mt-3 flex justify-center text-center font-semibold">
            <p className="text-lg text-[#f4f4f4]">Have an account? </p>
            <Link href="/" className="ml-1 leading-7 text-[#f5a752]  underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>

    <main className="w-full bg-[#f5f9fe] py-20">
      <div className="">
        <h1 className="flex justify-center text-[32px] font-semibold leading-[52px] text-orange lg:text-[40px] lg:leading-[72px]">
          Earn Money in Three Easy Steps
        </h1>
      </div>
      <div className="flex items-center justify-center py-[72px] lg:px-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/reg-hi.svg"
              alt="reg"
              width={120}
              height={120}
            ></Image>
            <div className="mt-12 w-full">
              <h1 className="font-bold leading-7 text-hero-bg text-center">
                Register and Get Your Unique Referral
              </h1>
              <p className="text-center">
                Use a valid email address for creating your account on
                HiExchange then Login to your account, get your referral link,
                share it with your friends
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/right-arrow.png"
              alt="right arrow image"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/hi2.svg"
              alt="reg"
              width={132}
              height={135}
            ></Image>
            <h1 className="font-bold text-center pt-5 text-hero-bg">
              Wait for Them to Use HiExchange
            </h1>
            <p className="text-center">
              When your referrals place orders on HiExchange,
              we share the profit from their transactions with you.
              Because , you are our partner now
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/right-arrow.png"
              alt="right arrow image"
              width={50}
              height={50}
              className="m-5"
            ></Image>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/money-hi.svg"
              alt="reg"
              width={132}
              height={135}
            ></Image>
            <div className="mt-12 w-full">
              <h1 className="font-bold text-center text-hero-bg">
                Get Paid to Your Account
              </h1>
              <p className="text-center">
                As soon as your referral points reach $10, 
                you can withdraw them using the payment method of your choice
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-[50px] p-4 lg:grid-cols-2 lg:px-[90px] lg:py-[72px]">
        <div className="">
          <h1 className="text-[32px] font-bold leading-7">
            A referral plan like nowhere else
          </h1>
          <p className="mt-2 leading-7 text-gray-text">
            Either you are an online business owner, an influencer or just an
            individual who has some friends, you can start making money by
            acquiring your unique referral link from your account. Our
            progressive commission chart will help you earn more from our sales
            by introducing more potential customers to HiExchange. Start
            inviting more people to use HiExchange and track your earnings in
            your customers’ panel. You can cash out your earnings as soon as you
            reach $10
          </p>
        </div>
        <Image
          src="/assets/join-us.svg"
          alt="join us img"
          className="w-full"
          width={700}
          height={700}
        />
      </section>

      <section className="p-4 lg:px-[90px] text-center flex flex-col items-center">
        <h1 className="text-[28px] font-bold leading-[50px] text-orange lg:text-[40px] lg:leading-[72px]">
          Interesting Commission Rates, Easy to make more
        </h1>
        <p className="text-lg font-semibold leading-7 text-[#313766] ">
          Our Commissions get more tempting by climbing each step in our
          referral program. How high do you think you can get
        </p>
        <div className="mt-20">
          <Image
            src="/assets/referral-prices.svg"
            alt="referal prices"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </section>

      <div className="mt-28 flex justify-center p-4 text-2xl font-medium text-hero-bg lg:text-[34px] lg:leading-[60px]">
        <h1>What makes the HiExchange referral program different? </h1>
      </div>
      <section className="mt-5 flex items-center justify-center lg:px-[90px]">
        <div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/sales-np.svg"
              alt="referal prices"
              width={200}
              height={200}
            ></Image>
            <h1 className="mt-3 text-2xl text-hero-bg">
              Take from sales not profit
            </h1>
            <p className="text-lg font-semibold text-center text-gray-text">
              No shortcuts, No Ambiguity. Take your share directly from you
              referred customer’s exchanged amount
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/cash-out.svg"
              alt="referal prices"
              width={200}
              height={200}
            ></Image>
            <h1 className="mt-3 text-2xl text-hero-bg">Cash Out Anytime</h1>
            <p className="text-lg font-semibold text-center text-gray-text">
              Our cash-out limit is achievable. Don’t wait too long, cash out as
              soon as you reach $10 in your account
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/grow-income.svg"
              alt="referal prices"
              width={200}
              height={200}
            ></Image>
            <h1 className="mt-3 text-2xl text-hero-bg">
              Easily grow your income
            </h1>
            <p className="text-lg font-semibold text-center text-gray-text">
              We offer you a clear path in our partnership program. Bring more
              transactions on our website, make more money
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <h1 className="flex justify-center text-center text-[20px] font-semibold lg:py-12 text-hero-bg lg:text-[24px]">
          And best of all, HiExchange support team is there to assist you and
          your referees 24/7
        </h1>

        <div className="m mt-20 flex justify-center">
          <Image
            src="/assets/support-team.svg"
            alt="support team"
            width={400}
            height={400}
          ></Image>
        </div>
      </section>

      <section className="w-[80%] text-center text-white mx-auto bg-hero-bg ">
        <div className="flex flex-col items-center py-9 gap-5 justify-center">
          <h1 className="font-bold  text-3xl text-[#f49d3f]">
            Make money with HiExchange affiliates
          </h1>
          <p className="w-72 lg:w-full text-white text-xl">
            Take your share from HiExchange sales today:
          </p>
          <Link href="/" className="direction-btn">Become our partner in profit today</Link>
        </div>

        <div className="bg-[#23294d] flex flex-col items-center gap-9 p-9 text-center w-full">
          <h1 className="font-bold text-3xl text-[#f49d3f]">
            Referral Program for Larger Businesses
          </h1>

          <Image src="/assets/referral-program.svg"
              className="w-96"
              width={400}
              height={200}
              alt=""
              />

          <p className="text-white text-2xl py-5">
            We offer special partnership opportunities to those 
            businesses with more customers or bigger transactions. 
            If you own an investing company that needs exchange operations 
            for their customers, contact us and let’s discuss our partnership possibilities
          </p>
          <Link href="/" className="direction-btn">
            Enquire about our business plan
          </Link>
        </div>
      </section>

      <FAQ />
    </main>
  </>
);

export default EarnMoney;
