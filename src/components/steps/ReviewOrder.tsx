import { BsChevronRight } from "react-icons/bs";
import { useStepperContext } from "../../context/StepperContext";
import Image from "next/image";

const ReviewOrder = () => {
  const { userData } = useStepperContext();

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
      <section className="mt-8">
        <h1 className="font-semibold leading-7">Finally check your Address</h1>
        <div className="m-2 text-gray-500">
          <p className="mt-3">
            After checking the address and making sure it is correct, click on
            next button.
          </p>
          <small>
            If you entered the wrong address, you can correct it by click on
            back button.
          </small>
        </div>
        <div className="mt-5">
          <h3 className="font-medium">
            Your Email Address
            <small className="text-[#6b6b6b]">
              (to inform you about the order process)
            </small>
          </h3>
          <h1 className="mt-2 rounded-md border border-gray-300 bg-gray-100 p-3 font-semibold text-gray-500">
            {userData.address}
          </h1>
        </div>
      </section>
    </main>
  );
};

export default ReviewOrder;
