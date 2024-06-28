const teleporterTransactions = [
  {
    teleporterMessageId: "0x5e8d6be3fa4e0b76b2fa6c7e5d4b7e3c0d6c9e7a",
    sourceTxnTimestamp: "2024-06-27T10:15:30Z",
    sourceSubnet: "Subnet 1",
    senderAddress: "0x1234567890abcdef1234567890abcdef12345678",
    destinationSubnet: "Subnet 2",
    recipientAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    relayerRewards: 10.5,
  },
  {
    teleporterMessageId: "0x7a2d6f4b2c1e0b76a6c9e5d4b7e3fa5e8d6be3f7",
    sourceTxnTimestamp: "2024-06-27T11:20:45Z",
    sourceSubnet: "Subnet 3",
    senderAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    destinationSubnet: "Subnet 4",
    recipientAddress: "0x1234567890abcdef1234567890abcdef12345678",
    relayerRewards: 15.0,
  },
  {
    teleporterMessageId: "0xc6b2fa5e7a2d6f4b2c1e0b76a6c9e5d4b7e3fa5e",
    sourceTxnTimestamp: "2024-06-27T12:30:00Z",
    sourceSubnet: "Subnet 5",
    senderAddress: "0x4567890abcdef1234567890abcdef1234567890a",
    destinationSubnet: "Subnet 6",
    recipientAddress: "0xfabcdef1234567890abcdef1234567890abcdef12",
    relayerRewards: 8.25,
  },
  {
    teleporterMessageId: "0xb7e3fa5e8d6be3c0d6c9e7a2d6f4b2c1e0b76a6c",
    sourceTxnTimestamp: "2024-06-27T13:45:15Z",
    sourceSubnet: "Subnet 7",
    senderAddress: "0xfabcdef1234567890abcdef1234567890abcdef12",
    destinationSubnet: "Subnet 8",
    recipientAddress: "0x4567890abcdef1234567890abcdef1234567890a",
    relayerRewards: 12.0,
  },
  {
    teleporterMessageId: "0xa6c9e5d4b7e3fa5e8d6be3c0d6c9e7a2d6f4b2c1",
    sourceTxnTimestamp: "2024-06-27T14:50:30Z",
    sourceSubnet: "Subnet 9",
    senderAddress: "0x7890abcdef1234567890abcdef1234567890abcdef",
    destinationSubnet: "Subnet 10",
    recipientAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    relayerRewards: 7.75,
  },
  {
    teleporterMessageId: "0x1e0b76a6c9e5d4b7e3fa5e8d6be3c0d6c9e7a2d6",
    sourceTxnTimestamp: "2024-06-27T15:55:45Z",
    sourceSubnet: "Subnet 1",
    senderAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    destinationSubnet: "Subnet 2",
    recipientAddress: "0x1234567890abcdef1234567890abcdef12345678",
    relayerRewards: 9.0,
  },
  {
    teleporterMessageId: "0x6c9e5d4b7e3fa5e8d6be3c0d6c9e7a2d6f4b2c1e",
    sourceTxnTimestamp: "2024-06-27T17:00:00Z",
    sourceSubnet: "Subnet 3",
    senderAddress: "0x4567890abcdef1234567890abcdef1234567890a",
    destinationSubnet: "Subnet 4",
    recipientAddress: "0xfabcdef1234567890abcdef1234567890abcdef12",
    relayerRewards: 14.0,
  },
  {
    teleporterMessageId: "0x4b2c1e0b76a6c9e5d4b7e3fa5e8d6be3c0d6c9e7",
    sourceTxnTimestamp: "2024-06-27T18:05:15Z",
    sourceSubnet: "Subnet 5",
    senderAddress: "0xfabcdef1234567890abcdef1234567890abcdef12",
    destinationSubnet: "Subnet 6",
    recipientAddress: "0x4567890abcdef1234567890abcdef1234567890a",
    relayerRewards: 11.25,
  },
  {
    teleporterMessageId: "0x3fa5e8d6be3c0d6c9e7a2d6f4b2c1e0b76a6c9e5",
    sourceTxnTimestamp: "2024-06-27T19:10:30Z",
    sourceSubnet: "Subnet 7",
    senderAddress: "0x7890abcdef1234567890abcdef1234567890abcdef",
    destinationSubnet: "Subnet 8",
    recipientAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    relayerRewards: 13.0,
  },
  {
    teleporterMessageId: "0xe8d6be3c0d6c9e7a2d6f4b2c1e0b76a6c9e5d4b7",
    sourceTxnTimestamp: "2024-06-27T20:15:45Z",
    sourceSubnet: "Subnet 9",
    senderAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    destinationSubnet: "Subnet 10",
    recipientAddress: "0x1234567890abcdef1234567890abcdef12345678",
    relayerRewards: 10.0,
  }
];

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
              View Details
            </td>
            
          </tr>
        </thead>

        <tbody className="lg:border-gray-300 overflow-scroll">
          {teleporterTransactions.map((transaction, i) => {
            return (
              <tr className="" key={i}>
                <td className="whitespace-no-wrap py-4 text-xs   text-blue-400 sm:px-6">
                  {transaction?.teleporterMessageId?.slice(0, 10)}...
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-blue-400 sm:px-6 lg:table-cell">
                  {transaction?.sourceTxnTimestamp?.slice(0, 10)}
                </td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-xs  text-white lg:text-left">
                  {transaction?.sourceSubnet}
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-blue-400 sm:px-6 lg:table-cell">
                  {transaction?.senderAddress?.slice(0, 10)}...
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-xs  font-normal text-white sm:px-6 lg:table-cell">
                  {transaction?.destinationSubnet}
                </td>
                <td className="whitespace-no-wrap py-4 px-6 text-right text-xs  text-blue-400 lg:text-left">
                  {transaction?.recipientAddress?.slice(0, 10)}...
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
