import React from "react";
import { transactions } from "../utils/data";
const Table = () => {
  return (
    <>
      <div className="w-screen ">
        <div className="mx-auto mt-0 max-w-screen-xl px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base  text-white">
              Latest Successful Transactions
            </p>

            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-center text-sm font-medium text-white shadow hover:bg-gray-100 focus:shadow"
                >
                  <svg
                    className="mr-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4  rounded-xl shadow-lg h-[60vh] overflow-y-scroll">
            <table className="min-w-full bg-[#171717] border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Tx Hash
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    From
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    To
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Age
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Value Total
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    View
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300 overflow-scroll">
                {transactions.map((transaction) => {
                  return (
                    <tr className="">
                      <td className="whitespace-no-wrap py-4 text-sm  text-blue-400 sm:px-6">
                        {transaction?.txHash}
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                        {transaction?.from}
                      </td>

                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-blue-400 lg:text-left">
                        {transaction?.to}
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                        {transaction?.age}
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                        {transaction?.value}
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                        <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          View
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
