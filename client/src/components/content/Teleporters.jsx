import { transactions } from "../../utils/data";
function Teleporters() {
  return (
    <div className="flex p-4 flex-col">
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl font-bold">Teleporter Explorer</div>
      </div>
      <div className="mt-8 uppercase">Teleporter Messages</div>
      <table className="min-w-full bg-[#171717] border-separate border-spacing-y-2 border-spacing-x-2">
        <thead className="hidden border-b lg:table-header-group">
          <tr className="">
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Teleporter Message ID
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Source Txn Timestamp
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Source Subnet
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Sender Address
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Destination Subnet
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Recipient Address
            </td>
            <td className="whitespace-normal py-4 text-xs font-medium text-gray-500 sm:px-6">
              Relayer Rewards
            </td>
            
          </tr>
        </thead>

        <tbody className="lg:border-gray-300 overflow-scroll">
          {transactions.map((transaction, i) => {
            return (
              <tr className="" key={i}>
                <td className="whitespace-no-wrap py-4 text-xs   text-blue-400 sm:px-6">
                  {transaction?.txHash}
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-blue-400 sm:px-6 lg:table-cell">
                  {transaction?.from}
                </td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-xs  text-blue-400 lg:text-left">
                  {transaction?.to}
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-white sm:px-6 lg:table-cell">
                  {transaction?.age}
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-white sm:px-6 lg:table-cell">
                  {transaction?.value}
                </td>
                <td className="whitespace-no-wrap py-4 px-6 text-right text-xs  text-blue-400 lg:text-left">
                  {transaction?.to}
                </td>
                
                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-white sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                    View
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex-grow" />
    </div>
  );
}

export default Teleporters;
