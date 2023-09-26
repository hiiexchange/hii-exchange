import { useState, useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import Image from "next/image";
import { useGlobalContext } from "../../context/GlobalContext";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const PayOrder = () => {
  const { userData } = useStepperContext();

  const { state } = useGlobalContext();

  const token = state.user.accessToken;

  const [cryptoAddress, setCryptoAddress] = useState<string | undefined>(""); // State to store the crypto address

  useEffect(() => {
    getAddress()
      .then((address) => {
        setCryptoAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });

    createTransaction()
      .then((res) => {
        console.log("Transaction created successfully", res);
      })
      .catch((error) => {
        console.error("Error creating transaction", error);
      });
  }, []);

  const getAddress = async () => {
    // make post fetch request to get address
    try {
      const response = await fetch(
        `https://hi-exchange-backend.onrender.com/crypto/${userData.inputToken.slug}/address`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        const address = await response.text();
        return address;
        console.log(address);
      } else {
        console.error("Failed to fetch address");
      }
    } catch (error) {
      console.error("Error calculating address", error);
    }
  };

  const createTransaction = async () => {
    try {
      const response = await fetch(
        "https://hi-exchange-backend.onrender.com/transactions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            inputToken: userData.inputToken.currency_code,
            outputToken: userData.outputToken.currency_code,
            inputAmount:
              userData.inputAmount !== undefined
                ? parseFloat(userData.inputAmount)
                : 0,
            outputAmount:
              userData.outputAmount !== undefined
                ? parseFloat(userData.outputAmount)
                : 0,
            address: userData.address,
          }),
        },
      );

      if (response.ok) {
        console.log("Transaction created successfully", response);
      } else {
        console.error("Failed to create transaction");
      }
    } catch (error) {
      console.error("Error creating transaction", error);
    }
  };

  const [isProcessing, setIsProcessing] = useState(false);
  const handleConfirmPayment: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 50000);
  };

  return (
    <main className="mb-20 mt-10 px-5 lg:px-[150px]">
      <div className="flex flex-row justify-between ">
        <section className="">
          <div className="">
            <Image
              alt="token icon"
              src={userData.inputToken.icon}
              width={60}
              height={60}
            />
            <p className="mt-2 font-light">{userData.inputToken.title}</p>
          </div>
          <div className="mt-5 flex flex-row gap-2 text-gray-text">
            <div className="m-2 font-semibold">
              <small>You send</small>
              <h1>{userData.inputToken.title}</h1>
            </div>
            <div className="m-2 font-semibold">
              <small>We recieve</small>
              <h1>{userData.inputAmount}</h1>
            </div>
          </div>
        </section>
        <BsChevronRight size={25} className="mr-5 mt-20 " />
        <section className="">
          <div className="">
            <Image
              alt="token icon"
              src={userData.outputToken.icon}
              width={60}
              height={60}
            />
            <p className="mt-2 font-light">{userData.outputToken.title}</p>
          </div>
          <div className="mt-5 flex flex-row gap-2 text-gray-text">
            <div className="m-2 font-semibold">
              <small> We send</small>
              <h1>{userData.outputToken.title}</h1>
            </div>
            <div className="m-2 font-semibold">
              <small>You recieve</small>
              <h1>{userData.outputAmount}</h1>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-8 flex flex-col items-center justify-between gap-20 lg:flex-row">
        <div className="mt-5">
          <h3 className="font-medium">
            Email Address
            <small className="text-[#6b6b6b]">
              (to inform you about the order process)
            </small>
          </h3>
          <h1 className="rounded-md border border-gray-300 bg-gray-100 p-3 font-semibold text-gray-500">
            {userData.address}
          </h1>
        </div>

        <div className="mt-5 rounded-md border border-gray-300 px-8 py-8">
          <h3 className="font-semibold">
            HiExchange {userData.inputToken.title} Address
          </h3>
          <div className="rounded-md border border-gray-300 bg-gray-100 p-3 font-semibold text-gray-500">
            {cryptoAddress ? cryptoAddress : "Loading..."}
          </div>
        </div>
      </section>
      <div className="m-5 flex space-x-4 font-semibold lg:ml-[200px] lg:mt-10">
        <Link href="/profile">
          <button className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-300">
            Check Your Order
          </button>
        </Link>
        <button
          type="button"
          className="rounded-md bg-hero-bg px-4 py-3 text-white hover:border-gray-300 hover:bg-orange"
          onClick={handleConfirmPayment}
          disabled={isProcessing}
        >
          Confirm Payment
        </button>
      </div>
      {isProcessing && (
        <div className="mr-[200px] mt-10 flex justify-center rounded-md border border-red-500 p-3 text-center font-semibold text-red-500">
          Processing your payment...
        </div>
      )}
    </main>
  );
};

export default PayOrder;
