import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#22295d] pb-10 pt-20">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex w-full flex-col md:flex-row">
          <div className="max-w-full grow basis-0 px-4">
            <Image
              width={150}
              height={50}
              alt="Hi exchange Logo"
              src="/assets/hiexchange-logo.svg"
            />

            <p className="mt-2 text-xs leading-[0.875rem] text-white">
              <span className="text-[#ffddb8]">HiExchange</span> is an online
              Crypyocurrency and Digital Currency exchange. We value our
              customers anonymity and protection of their data.
            </p>
            <div className="mt-4 flex justify-between">
              <Image
                src="/assets/twitter-fill.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/assets/twitter-fill.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/assets/instagram-fill.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/assets/star.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/assets/ok-icon.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/assets/bestchange.svg"
                alt="Social media icon"
                width={24}
                height={24}
              ></Image>
            </div>
          </div>

          <div className="mt-12 grow basis-0 px-4 text-white md:mt-0">
            <h5 className="mb-4 text-[1.3rem] font-semibold leading-tight">
              Guides
            </h5>
            <ul className="text-[0.8rem] font-semibold leading-6">
              <li>How to Exchange Ethereum to PayPal</li>
              <li>How to Buy Bitcoin with Perfect Money</li>
              <li>How to Exchange Tether to PayPal</li>
              <li>How to Exchange Dash to PayPal</li>
            </ul>
          </div>

          <div className="mt-12 grow basis-0 px-4 text-white md:mt-0">
            <h5 className="mb-4 text-[1.3rem] font-semibold leading-tight">
              Quick Access
            </h5>
            <ul className="text-[0.8rem] font-semibold leading-6">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Disclaimer</li>
              <li>Terms of Service</li>
              <li>Why sign up</li>
            </ul>
          </div>
        </div>

        <span className="px-4 text-xs text-[#9099d9]">
          © 2020 HiExchange Co All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
