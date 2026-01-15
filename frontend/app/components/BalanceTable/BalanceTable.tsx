export const BalanceTable = () => {
  return (
    <div className="w-full rounded-2xl">
      <table className="w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="bg-black/30">
            <th className="rounded-l-xl py-3 pl-4 text-left font-semibold">
              Currency
            </th>
            <th className="py-3 text-center font-semibold">Purchase</th>
            <th className="rounded-r-xl py-3 pr-4 text-right font-semibold">
              Sale
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-sm">
            <td className="py-2 pl-4 text-left">USD</td>
            <td className="py-2 text-center">27.55</td>
            <td className="py-2 pr-4 text-right">27.65</td>
          </tr>

          <tr className="text-sm">
            <td className="py-2 pl-4 text-left">EUR</td>
            <td className="py-2 text-center">30.00</td>
            <td className="py-2 pr-4 text-right">30.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
