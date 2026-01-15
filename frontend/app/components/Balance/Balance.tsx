"use client";

import { getCurrency } from "@/app/api/getCurrency";
import { BalanceTable } from "../BalanceTable/BalanceTable";
import { useQuery } from "@tanstack/react-query";

export const Balance = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["currency"],
  //   queryFn: getCurrency,
  // });

  // if (isLoading) return <p>Loading...</p>;

  // if (error) return <p>Some error..</p>;

  // console.log(data);

  return (
    <div className="w-112.5 bg-gradient-to-b from-[#3B5D63] to-[#355359] rounded-xl px-8 py-4">
      <p className="uppercase text-[#c0cacc] text-opacity-50 mb-3">
        Your balance
      </p>
      <h1 className="font-bold text-3xl mb-6">24 000.00 UAH</h1>

      <BalanceTable />
    </div>
  );
};
