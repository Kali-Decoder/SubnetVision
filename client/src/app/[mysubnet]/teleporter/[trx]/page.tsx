"use client";
import { useParams } from "next/navigation";
import React from "react";
export default function TransactionHash() {
  const { trx } = useParams();
  return (
    <>
      <div className="p-12 flex  flex-col">
        <h1 className="font-bold text-2xl text-white">
          Teleporter Transaction Message : <span className="text-red-400">AVAX</span>
        </h1>
        <p className="mt-1 text-white">Transaction hash: {trx}</p>

        <div className="grid grid-cols-8 gap-3 mt-10 ">
          <div className="bg-gray-800 p-4 col-span-4 rounded-lg fixed-size">
          <table className="min-w-full bg-[#171717] border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-lg font-medium text-white sm:px-6">
                    Message Id
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-blue-400 sm:px-6">
                    {trx}
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">
                   Status
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-green-400 sm:px-6">
                    Completed
                  </td>
                </tr>
              </thead>

             
            </table>
          </div>
          <div className="bg-gray-800 p-4 col-span-4 gap-y-4 rounded-lg">
            <table className="min-w-full bg-[#171717] border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-lg font-medium text-white sm:px-6">
                    From
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-blue-400 sm:px-6">
                  0xeddfC4c35Fd9A6a2C6AE3f27aBcF320c65BBe707
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300 overflow-scroll">
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Source Subnet
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    Avalanche C-Chain
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Source Teleporter Contract:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    0x253b27...844684a1aC0aa5fcf
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Source Txn Hash:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    0xe2226106b9f598cd2fa...fb5def4493483c9a92f8
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Source Txn Timestamp:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    3mins ago (June 30, 2024)
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Gas Spent:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    3,783,675 nAVAX
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-800 p-0 h-0 col-span-4 rounded-lg">
            
          </div>
          <div className="bg-gray-800 p-4 col-span-4 rounded-lg">
          <table className="min-w-full bg-[#171717] border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-lg font-medium text-white sm:px-6">
                    To
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-blue-400 sm:px-6">
                  0xcfa038455b54714821f291814071161c9870B891
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300 overflow-scroll">
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Destination Subnet
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    Avalanche C-Chain
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                    Destination Teleporter Contract:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-blue-400 sm:px-6 lg:table-cell">
                    0x253b27...844684a1aC0aa5fcf
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                  Destination Txn Hash:

                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-400 sm:px-6 lg:table-cell">
                   N/A
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
         

Message Deliverer:

                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-400 sm:px-6 lg:table-cell">
                   N/A
                  </td>
                </tr>
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-sm  text-white sm:px-6">
                

Gas Spent:
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-400 sm:px-6 lg:table-cell">
                  N/A
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
    </>
  );
}
