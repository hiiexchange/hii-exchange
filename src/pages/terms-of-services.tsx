import Image from "next/image";
import Link from "next/link";

const TermsOfServices = () => {
  return (
    <>
      <main className="mt-16 px-2 lg:px-[240px]">
        <div className="">
          <h1 className="text-3xl text-[#c37e32] lg:text-5xl">
            Terms of service
          </h1>
          <p className="mt-6 text-base font-medium leading-[40px] text-[#707070] lg:text-[22px]">
            Please read all Terms and Conditions set by HiExchange before using
            any of our exchange directions or other services. HiExchange is
            provides service to its customers In order to make it easier for you
            to find your desired direction terms and rules, we have categorized
            terms of services into General and Special categories. We highly
            recommend you to read through General Rules and those considering
            your desired currency directions before doing any transaction on our
            website.
          </p>
        </div>
        <div className="mt-8 cursor-pointer p-4">
          <ul className="space-y-4 text-[#007bff] ">
            <li>General Rules</li>
            <li>Webmoney Exchange Rules</li>
            <li>PayPal Exchange Rules</li>
            <li>Cryptocurrency Exchange Rules</li>
            <li>Perfect Money Exchange Rules</li>
          </ul>
        </div>

        <section className="mt-6 p-2 text-base font-medium leading-[40px] text-[#707070] lg:text-[22px]">
          <h1 className="text-3xl font-semibold">General Rules</h1>
          <p>
            1. All exchange operations must only take place on HiExchange
            platform with hi.exchange URL address. No one from HiExchange
            provides you with wallet address, bank account number, IBAN or any
            other forms of account number for transferring money or asking for
            additional fees.
          </p>
          <p>
            2. All communications with customers will only happen through
            HiExchange formal email addresses (i.e support@hi.exchange) or
            verified social media or messenger accounts stated on our website
            “Contact Us” page.
          </p>
          <p>
            3. All fees and expenses are stated clearly in the final step of
            your order process. No one from HiExchange will ever ask you for
            additional fees that are not stated in the final step of your order.
          </p>
          <p>
            4. Orders involving cryptocurrencies on one or both sides of the
            exchange direction should be paid in less than 20minutes. Due to the
            volatile nature of cryptocurrencies, unpaid orders will be canceled
            after 20 minutes hour from placing the order and users have to place
            a new order for the same operation.
          </p>
          <p>
            5. HiExchange does not ask you to sign up or go through KYC for
            placing orders on the website. But in order to be able to
            communicate with you in case any problems occurred, customers should
            provide a valid email address to continue order completion steps.
          </p>
          <p>
            6. In case of a refund request from customers, the gateway fees are
            deducted from the original amount received in HiExchange accounts
            from the customer.
          </p>
          <p>
            7. Any refund operations due to any reason, will be communicated
            with the customer and will be done after customers confirmation.
          </p>
          <p>
            8. Users must pay exactly the amount that is stated on the final
            stage of placing their order.
          </p>
          <p>
            9. Users can not change (increase or decrease) the amount of their
            order after it is submitted. In order to do so, they need to place a
            new order and pay the new amount based on that.
          </p>
          <p>
            10. Orders must be paid only to the wallet address/Account number
            stated by HiExchange on the final step of their order. HiExchange
            never announces account numbers or wallet addresses via Telegram,
            WhatsApp or other similar applications.
          </p>

          <h1 className="text-3xl font-semibold">Webmoney Exchange Rules</h1>
          <p>
            1. Users must put the Track ID (Order ID) as the description of the
            transaction when sending WebMoney to our purse.
          </p>
          <p>
            2. WebMoney exchange orders with missing Track ID in the description
            will lead to a refund from us. The refund process may take up to 3
            working days and the transaction fee (WebMoney Fee) will be deducted
            from the original amount sent by the user.
          </p>
          <p>
            3. The refund fee for webmoney is 0.8% of the amount received in our
            purse.
          </p>
          <p>
            4. We cannot exchange WebMoney for Cryptocurrencies or Perfect Money
            as it is strictly forbidden by WebMoney.
          </p>
          <p>
            5. Any refund in the form of WebMoney, like other currencies, is
            subject to deducting the transaction fee.
          </p>
          <p>
            6. Please note that WebMoney accounts, depending on the type of the
            account, are subject to daily and monthly transfer limits. Always
            check your account limit before placing a WebMoney exchange order.
          </p>
          <p>
            7. If we are sending WebMoney to users purse, the WebMoney fee is
            paid by HiExchange.
          </p>
          <p>
            8. You can find your WebMoney account limit by checking the table
            below:
          </p>

          <Image
            className="mt-8"
            src="/assets/table-hi.png"
            alt="Table"
            width={1110}
            height={200}
          ></Image>

          <h1 className="mb-10 mt-10 text-3xl font-semibold">
            PayPal Exchange Rules
          </h1>
          <p>
            1. HiExchange does not accept PayPal as a form of payment from
            users. Therefore, we cannot exchange your PayPal for other
            currencies.
          </p>
          <p>
            2. You can receive PayPal USD, EUR, or GBP in exchange for your
            crypto or e-currencies.
          </p>
          <p>
            3. Always make sure you are providing HiExchange with an active
            PayPal account capable of receiving funds.
          </p>
          <p>
            4. If your PayPal account is not active or has other issues, we
            cannot send your exchanged amount. In this case we contact you so
            you can provide us with a new account.
          </p>
          <p>
            5. HiExchange keeps the right to refund your payment after 48 hours
            of sending you a notification for a new PayPal account. In this case
            any fees and expenses concerning the refund process will be deducted
            from the original amount.
          </p>
          <p>
            6. PayPal refund periods may be different due to the amount sent by
            users and it might take from 24 hours to 7 working days. It means
            that after we received your refund request and the amount was
            received in our PayPal accounts, you will receive your payment after
            a certain amount based on your payment. The refund periods based on
            the amount are stated below:
          </p>

          <ul className="p-4">
            <li>10 to 100 USD ➡ 24 to 48 hours</li>
            <li>101 to 300 USD ➡ 48 hours to 3 days</li>
            <li>301 to 500 USD ➡ 3days to 5 days</li>
            <li>501 to 1000 USD ➡ 5 days to 1 week</li>
          </ul>

          <p>
            7. If you want to request a refund after you received PayPal in your
            account, please do not refund the amount without discussing it with
            our support team. We work around the clock to assist you.
          </p>
          <p>
            8. Refunding PayPal amounts without discussing it with our support
            team might lead to losing your exchanged amount. Or 1.5% to 2% of
            the refunded amount will be deducted from your original amount.
          </p>
          <p>9. HiExchange sends money via PayPal using more than 1 account.</p>
          <p>
            10. Since the PayPal amount is sent to you using “Selling goods and
            services”, the transaction fee is variable from 2.9 % to 5.9 % +
            0.30 $ fixed fee.
          </p>
          <p>
            11. It might happen that PayPal holds the transferred money from 24
            hours to 21 days for a confirmation. If the confirmation button is
            accessible from our side, we will confirm the payment quickly.
            Otherwise, you have to wait for PayPall to unhold the sent amount.
          </p>
          <p>
            12. HiExchange is not responsible if the users&apos; PayPal account gets
            limited by PayPal due to any reason. But in case of such incidents
            happening, you can always contact HiExchange Support team to guide
            you for lifting the limitations.
          </p>
          <p>
            13. There are many cases that lead to PayPal holding the money sent
            to your account:
          </p>

          <ul>
            <li>You are new to receiving payments via PayPal</li>
            <li>Your account was inactive for a long time</li>
            <li>
              Your previous customers filed formal complaints for a refund,
              dispute, or chargeback
            </li>
            <li>
              You have a suspicious selling pattern due to PayPal algorithms
            </li>
            <li>You are selling riskier items</li>
          </ul>

          <p className="mt-8">
            For more information about this issue you may visit this page:
          </p>
          <Link href="https://www.paypal.com/us/cshelp/article/why-is-my-payment-on-hold-or-unavailable-pcc105">
            <p className="space-y-2 text-[#007bff]">
              My payment is on hold. Why is this happening
            </p>
          </Link>

          <h1 className="mb-10 mt-10 text-3xl font-semibold">
            Cryptocurrencies Exchange Rules
          </h1>
          <p>
            1. When sending any form of cryptocurrency to our wallets, customers
            must attach a screenshot of their wallet that includes the TDIX.
          </p>
          <p>
            2. A cryptocurrency exchange order without TDIX or other required
            information included in the screenshot, will lead to suspending the
            order from HiExchange until the customer provides a screenshot with
            all required data.
          </p>
          <p>
            3. If youre sending BInance Coin or Ripple you should also include
            the Tag in your order details.
          </p>
          <p>
            4. All cryptocurrency exchanges will be done after the transferred
            cryptos are received in HiExchange wallets.
          </p>
          <p>
            5. Transaction fees to HiExchange wallets should be covered by the
            user.
          </p>
          <p>
            6. HiExchange will transfer the exchanged amount to your desired
            account exactly based on the amount received in the wallet.
          </p>
          <p>
            7. Every Crypto exchange order must be paid in less than 30 minute.
          </p>
          <p>
            8. If a crypto order stays in the unpaid situation for more than 1
            hour, the order will be automatically cancelled and users should
            place a new order.
          </p>
          <p>9. Cryptocurrency exchanges are non-refundable.</p>

          <h1 className="mb-10 mt-10 text-3xl font-semibold">
            Perfect Money Exchange Rules
          </h1>
          <p>
            1. The transaction fee for sending money to our Perfect Money
            accounts has to be paid by the user.
          </p>
          <p>
            2. In case of a refund request, a transaction fee of 0.5% of the
            received amount will be deducted.
          </p>
          <p className="mb-24">
            3. Due to Perfect Money rules, the transaction fee for sending money
            to unverified accounts is 1.99%.
          </p>
        </section>
      </main>
    </>
  );
};

export default TermsOfServices;
