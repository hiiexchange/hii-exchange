/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import ModalContainer from "./ModalContainer";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginWithEmailAndPassword } from "@/backend/auth";
import { useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const validationSchema = z.object({
  email: z.string().min(3, { message: "Email is required" }).nonempty(),
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

const SignInModal = ({ modalOpen, closeModal, openOtherModal }: Props) => {
  const { dispatch } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      dispatch({ type: "LOGIN", payload: data });
      closeModal();
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    mutation.mutate(data);
  };

  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal} locked>
      <div className="h-full w-full rounded-3xl bg-white px-4 lg:h-[650px] lg:w-[500px]">
        <button onClick={closeModal} className="mt-2">
          <AiOutlineClose size={25} />
        </button>

        <div className="mt-5 flex justify-center">
          <h1 className="text-3xl font-semibold text-hero-bg lg:text-4xl">
            SIGN <span className="text-orange">IN</span>
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

        <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-lg text-black" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`mt-2 w-full rounded-md border border-gray-300 bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-600" : "border-gray-300"
              } focus:outline-blue-300`}
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
              id="password"
              placeholder="Enter your password"
              className={`mt-2 w-full rounded-md border border-gray-300 bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-600" : "border-gray-300"
              } focus:outline-blue-300`}
              {...register("password")}
            />
            {errors.password ? (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            ) : null}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="flex w-full items-center justify-center rounded-3xl bg-hero-bg p-4 font-semibold text-white"
              type="submit"
            >
              {mutation.isLoading ? (
                <div className="h-6 w-6 animate-spinner rounded-full border border-t border-t-slate-800 ease-linear"></div>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-red-500">{error}</p>
        </form>

        <div className="mt-4 flex justify-center">
          <h1 className="text-lg font-semibold text-black">
            You are not a member of HiExchange?{" "}
            <span
              className="cursor-pointer text-orange"
              onClick={openOtherModal}
            >
              Sign up
            </span>
          </h1>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SignInModal;
