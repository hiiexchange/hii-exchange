import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { useGlobalContext } from "@/context/GlobalContext";
import { cn } from "@/utils";
import navItems from "../data/navItems.json";
import paymentDirectionItems from "../data/paymentDirectionItems.json";
import supportItems from "../data/supportItems.json";

import DropdownCard from "./DropdownCard";
import SignUpModal from "./modals/SignUpModal";
import SignInModal from "./modals/SignInModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaymentDropDownOpen, setIsPaymentDropDownOpen] = useState(false);
  const [isSupportDropDownOpen, setIsSupportDropDownOpen] = useState(false);
  const router = useRouter();

  const {
    state: { user, signInModal, signUpModal },
    dispatch,
  } = useGlobalContext();

  function openSignInModal() {
    if (signUpModal) {
      dispatch({
        type: "SET_SIGN_UP_MODAL",
        payload: false,
      });
    }

    dispatch({
      type: "SET_SIGN_IN_MODAL",
      payload: true,
    });
  }

  function openSignUpModal() {
    if (signInModal) {
      dispatch({
        type: "SET_SIGN_IN_MODAL",
        payload: false,
      });
    }

    dispatch({
      type: "SET_SIGN_UP_MODAL",
      payload: true,
    });
  }

  function closeSignInModal() {
    dispatch({
      type: "SET_SIGN_IN_MODAL",
      payload: false,
    });
  }

  function closeSignUpModal() {
    dispatch({
      type: "SET_SIGN_UP_MODAL",
      payload: false,
    });
  }

  function logoutUser() {
    dispatch({
      type: "LOGOUT",
    });
  }

  const togglePaymentDropDown = () => {
    setIsPaymentDropDownOpen(!isPaymentDropDownOpen);
  };

  const toggleSupportDropDown = () => {
    setIsSupportDropDownOpen(!isSupportDropDownOpen);
  };

  return (
    <header className="bg-[#363d71]">
      <nav className="left-0 top-0 z-10 flex h-[70px] w-full justify-center bg-navbar">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-[0.4rem]">
          <Link href="/">
            <Image
              width={50}
              height={37}
              alt="Hi exchange Logo"
              src="/assets/logo-small.png"
              className="lg:hidden"
            />

            <Image
              width={150}
              height={50}
              alt="Hi exchange Logo"
              src="/assets/hiexchange-logo.svg"
              className="hidden lg:block"
            />
          </Link>

          <div className="flex font-semibold text-white">
            <ul className="hidden items-center text-sm lg:flex lg:gap-10">
              {navItems.map((item) => {
                const active = router.pathname === item.link;

                return (
                  <div key={item.title} className="z-100 relative">
                    <li
                      className={cn(
                        "dropdown-container after:h-0.5 after:w-full after:bg-white after:opacity-0 after:transition after:duration-200 after:content-[''] hover:border-b-2 hover:border-white after:hover:opacity-100",
                        {
                          "after:translate-x-0": active,
                        },
                      )}
                    >
                      {item.title === "Popular Direction" ? (
                        <>
                          <div className="dropdown-container-icon">
                            <Link href={item.link}>{item.title}</Link>
                            <FiChevronDown
                              size={24}
                              className={`${
                                isPaymentDropDownOpen ? "rotate-180" : ""
                              }`}
                              onClick={toggleSupportDropDown}
                            />
                          </div>
                          {!isPaymentDropDownOpen && (
                            <DropdownCard items={paymentDirectionItems} />
                          )}
                        </>
                      ) : item.title === "Support" ? (
                        <>
                          <div className="dropdown-container-icon">
                            <Link href={item.link}>{item.title}</Link>
                            <FiChevronDown
                              size={24}
                              className={`${
                                isSupportDropDownOpen ? "rotate-180" : ""
                              }`}
                              onClick={toggleSupportDropDown}
                            />
                          </div>
                          {!isSupportDropDownOpen && (
                            <DropdownCard items={supportItems} />
                          )}
                        </>
                      ) : (
                        <Link href={item.link} className="py-2.5">
                          {item.title}
                        </Link>
                      )}
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className="mx-1 flex items-center gap-1 lg:mx-6 lg:pl-1 lg:pr-4">
              <Image
                width={30}
                height={25}
                alt="England flag"
                src="/assets/Eng-flag.svg"
              />
              <div className="font-medium text-white">En</div>
            </div>

            {user.is_authenticated ? (
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="text-white">{user.email}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href="/profile">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={logoutUser}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="direction-btn cursor-pointer text-black">
                <p className="hidden hover:underline lg:inline-block">
                  <span onClick={openSignInModal}>Sign in</span> /
                  <span onClick={openSignUpModal}>Sign up</span>
                </p>

                <span className=" lg:hidden" onClick={openSignInModal}>
                  Sign in/up
                </span>
              </div>
            )}

            <button
              type="button"
              className="pl-2 lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4.75 12H19.25"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Nav Menu */}
      <div
        className={`fixed left-0 top-0 z-50 mx-auto h-screen w-full transform bg-[#313766] px-4 py-8 transition-all delay-100 duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={50}
            alt="Hi exchange Logo"
            src="/assets/hiexchange-logo.svg"
          />

          <ul className="mt-8 w-full items-center divide-y-[1px] font-semibold text-white">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="py-2">
                  {item.title === "Popular Direction" ? (
                    <>
                      <div className="dropdown-container-icon">
                        <Link href={item.link}>{item.title}</Link>
                        <FiChevronDown
                          className={`${
                            isSupportDropDownOpen ? "rotate-180" : ""
                          }`}
                          size={24}
                          onClick={togglePaymentDropDown}
                        />
                      </div>
                      <DropdownCard
                        className={`mobile-dropdown ${
                          isPaymentDropDownOpen ? "h-32" : "h-0"
                        }`}
                        items={paymentDirectionItems}
                      />
                    </>
                  ) : item.title === "Support" ? (
                    <>
                      <div className="dropdown-container-icon">
                        <Link href={item.link}>{item.title}</Link>
                        <FiChevronDown
                          size={24}
                          className={`${
                            isSupportDropDownOpen ? "rotate-180" : ""
                          }`}
                          onClick={toggleSupportDropDown}
                        />
                      </div>
                      <DropdownCard
                        items={supportItems}
                        className={`mobile-dropdown ${
                          isSupportDropDownOpen ? "h-32" : "h-0"
                        }`}
                      />
                    </>
                  ) : (
                    <Link href={item.link}>{item.title}</Link>
                  )}
                </div>
              );
            })}
          </ul>

          <button
            type="button"
            className="absolute right-4 top-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17.25 6.75L6.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6.75 6.75L17.25 17.25"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <SignInModal
        modalOpen={signInModal}
        closeModal={closeSignInModal}
        openOtherModal={openSignUpModal}
      />

      <SignUpModal
        modalOpen={signUpModal}
        closeModal={closeSignUpModal}
        openOtherModal={openSignInModal}
      />
    </header>
  );
};

export default Navbar;
