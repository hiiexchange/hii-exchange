import { useQuery } from "@tanstack/react-query";
import { BiUserCircle } from "react-icons/bi";

import { fetchUserTransactions } from "@/backend/transactions";
import { DataTable } from "@/components/DataTable/data-table";
import { columns } from "@/components/DataTable/columns";
import { useGlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

const Profile: React.FC = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchUserTransactions,
  });

  const {
    state: { user },
  } = useGlobalContext();

  if (isLoading)
    return (
      <div className="flex w-full justify-center">
        <div className="h-10 w-10 animate-spinner rounded-full border-2 border-t border-t-slate-800 ease-linear"></div>
      </div>
    );

  return (
    <>
      <main className="mt-10">
        <div className="flex justify-center">
          <section className="h-full w-full rounded-md bg-gray-200 lg:h-[450px] lg:w-[900px]">
            <div className="relative flex justify-center">
              <BiUserCircle size={80} className=" text-white" />
            </div>

            <div className="mt-10 text-center">
              <h1 className="text-xl font-semibold text-[#82919b]">
                {user.email}
              </h1>
              <p className="mt-5 text-xl font-semibold">
                How can i <span className="text-[#007bff]">earn money</span>{" "}
                from Hiexchange
              </p>
              <div className="">
                <Link href="/">
                  <button className="mt-5 rounded-md bg-white px-3 py-3 font-semibold text-hero-bg">
                    Create New Order
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section>
          {/* <div className="mt-10 p-5">
            <div className="container mx-auto bg-hero-bg">
              <table className="min-w-full border border-gray-300 bg-white">
                <thead>
                  <tr className="text-hero-bg">
                    <th className="border-b px-4 py-2">Order ID</th>

                    <th className="border-b px-4 py-2">INPUT TOKEN</th>
                    <th className="border-b px-4 py-2">OUTPUT TOKEN</th>
                    <th className="border-b px-4 py-2">FROM </th>
                    <th className="border-b px-4 py-2"> TO</th>
                    <th className="border-b px-4 py-2">CREATED AT</th>
                    <th className="border-b px-4 py-2">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions?.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="border-b px-4 py-2">{transaction.id}</td>
                      <td className="border-b px-4 py-2">
                        {transaction.inputToken}
                      </td>
                      <td className="border-b px-4 py-2">
                        {transaction.outputToken}
                      </td>
                      <td className="border-b px-4 py-2">
                        {transaction.inputAmount}
                      </td>
                      <td className="border-b px-4 py-2">
                        {transaction.outputAmount}
                      </td>
                      <td className="border-b px-4 py-2">
                        {transaction.createdAt}
                      </td>
                      <td className="font-semibold text-yellow-500">PENDING</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}

          {transactions ? (
            <div className="container mx-auto py-10">
              <DataTable columns={columns} data={transactions} />
            </div>
          ) : (
            <div className="flex justify-center">No Data Available</div>
          )}
        </section>
      </main>
    </>
  );
};

export default Profile;
