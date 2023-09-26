/* eslint-disable @typescript-eslint/no-misused-promises */
import ModalContainer from "./ModalContainer";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";

const validationSchema = z.object({
  email: z.string().email().min(3, { message: "Email is required" }).nonempty(),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  openOtherModal: () => void;
};

const SignUpModal = ({ modalOpen, closeModal, openOtherModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data, event?) => {
    if (event) {
      event.preventDefault();
    }
    try {
      // Send a POST request to the backend /auth/register route
      const response = await axios.post(
        "https://hi-exchange-backend.onrender.com/auth/register",
        data,
      );
      // console.log(data);

      // Handle the response, e.g., show a success message
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="h-full w-full rounded-3xl bg-white px-4 lg:h-[700px] lg:w-[500px]">
        <button onClick={closeModal} className="mt-2">
          <AiOutlineClose size={25} />
        </button>

        <div className="mt-5 flex justify-center">
          <h1 className="text-3xl font-semibold text-hero-bg lg:text-4xl">
            SIGN <span className="text-orange">UP</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <button className="mt-7 flex justify-center rounded-3xl border border-hero-bg px-[20px] py-[10px] font-semibold text-hero-bg">
            <div className="flex gap-1 ">
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </div>
          </button>
        </div>

        <form action="" className="p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-lg text-black" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`mt-2 w-full rounded-md border-2 border-gray-text bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-600" : "border-gray-text"
              } focus:outline-orange`}
              {...register("email")}
            />
            {errors.email ? (
              <p className="mt-2 text-xs italic text-red-600">
                {errors.email?.message}
              </p>
            ) : null}
          </div>

          <div className="mt-4">
            <label className="text-lg text-black" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`mt-2 w-full rounded-md border-2 border-gray-text bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-600" : "border-gray-text"
              } focus:outline-orange`}
              {...register("password")}
            />
            {errors.password ? (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              type="password"
              id="password"
              placeholder="Retype your password"
              className={`mt-2 w-full rounded-md border-2 border-gray-text bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-600" : "border-gray-text"
              } focus:outline-orange`}
              {...register("password")}
            />
            {errors.password ? (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            ) : null}
          </div>

          <div className=" mt-8 flex justify-center">
            <h1 className="text-lg text-black hover:text-[#a54824]">
              Accept the{" "}
              <Link href="/terms-of-services">
                <span className="text-orange ">Terms and Services</span>
              </Link>
            </h1>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="w-full rounded-3xl bg-hero-bg p-4 font-semibold text-white"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <div className=" flex justify-center">
          <h1 className="text-lg font-semibold text-black">
            You already have an account?{" "}
            <span
              className="cursor-pointer text-orange"
              onClick={openOtherModal}
            >
              Sign In
            </span>
          </h1>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SignUpModal;
