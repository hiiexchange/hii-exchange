import React from "react";
import { BiUserCircle } from "react-icons/bi";
import UserOrders from "../components/UserOrders";
import Link from "next/link";

const Admin: React.FC = () => {
  return (
    <>
      <main className="mt-10">
        <div className="flex justify-center">
          <section className=" h-[250px] w-[900px] rounded-md bg-gray-200">
            <div className="flex w-[200px] justify-center rounded-md border border-orange bg-white p-3 text-hero-bg">
              <Link href="/">Go back to home</Link>
            </div>
            <div className="relative flex justify-center">
              <BiUserCircle size={80} className=" text-white" />
            </div>
            <div className="mt-10 text-center">
              <h1 className="text-xl font-semibold text-[#82919b]">
                Welcome, admin.
              </h1>
            </div>
          </section>
        </div>

        <section>
          <div className="mt-10 p-5">
            <UserOrders />
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
