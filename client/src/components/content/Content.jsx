import Icon from "../Icon";
import IconButton from "../IconButton";
import NameCard from "./NameCard";
import Graph from "./Graph";
import Teleporters from "./Teleporters";
import Segmentation from "./Segmentation";
import SubnetCard from "./SubnetCard";
import Satisfication from "./Satisfication";
import AddComponent from "./AddComponent";
import { useState } from "react";
import { useDataContext } from "@/context/DataContext";
import Table from "../Table";
const employeeData = [
  {
    id: 1,
    name: "Esther Howard",
    position: "Sale's manager USA",
    transactions: 3490,
    rise: true,
    tasksCompleted: 3,
    imgId: 0,
  },

  {
    id: 2,
    name: "Eleanor Pena",
    position: "Sale's manager Europe",
    transactions: 590,
    rise: false,
    tasksCompleted: 5,
    imgId: 2,
  },

  {
    id: 3,
    name: "Robert Fox",
    position: "Sale's manager Asia",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: 3,
  },
  {
    id: 3,
    name: "Robert Fox",
    position: "Sale's manager Asia",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: 3,
  },
  {
    id: 3,
    name: "Robert Fox",
    position: "Sale's manager Asia",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: 3,
  },
  {
    id: 3,
    name: "Robert Fox",
    position: "Sale's manager Asia",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: 3,
  },
];

const subnetsCreated = [
  {
    id: 1,
    name: "Subnet 1",
    transactions: 3490,
    rise: true,
    chainType: "C-Chain",
  },
  {
    id: 2,
    name: "Subnet 2",
    transactions: 590,
    rise: false,
    chainType: "X-Chain",
  },
  {
    id: 3,
    name: "Subnet 3",
    transactions: 1230,
    rise: true,
    chainType: "P-Chain",
  },
  {
    id: 4,
    name: "Subnet 4",
    transactions: 4020,
    rise: false,
    chainType: "C-Chain",
  },
  {
    id: 5,
    name: "Subnet 5",
    transactions: 2780,
    rise: true,
    chainType: "X-Chain",
  },
  {
    id: 6,
    name: "Subnet 6",
    transactions: 670,
    rise: false,
    chainType: "P-Chain",
  },
  {
    id: 7,
    name: "Subnet 7",
    transactions: 4890,
    rise: true,
    chainType: "C-Chain",
  },
  {
    id: 8,
    name: "Subnet 8",
    transactions: 3150,
    rise: false,
    chainType: "X-Chain",
  },
  {
    id: 9,
    name: "Subnet 9",
    transactions: 830,
    rise: true,
    chainType: "P-Chain",
  },
  {
    id: 10,
    name: "Subnet 10",
    transactions: 1450,
    rise: false,
    chainType: "C-Chain",
  },
];

function Content({ onSidebarHide }) {
  const [dropDownShow, setDropDownShow] = useState(false);
  const { selected, setSelectedChain, selectedChain } = useDataContext();
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0"></div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-xl font-bold text-white">Nikku.Dev</div>
                <div className="flex items-center p-2 px-4 bg-card ml-4 rounded-xl">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => setDropDownShow(!dropDownShow)}
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-0 text-sm font-semibold text-yellow-500 shadow-sm "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        {selectedChain}
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {dropDownShow && (
                      <div
                        className="absolute right-0 z-10 mt-3 w-56  origin-top-right rounded-md bg-[#171717] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                      >
                        <div className="py-1" role="none">
                          <div
                            onClick={() => {
                              setSelectedChain("X-Chain");
                              setDropDownShow(false);
                            }}
                            className="block px-4 py-2 text-sm text-white cursor-pointer"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0"
                          >
                            X-Chain
                          </div>
                          <div
                            onClick={() => {
                              setSelectedChain("P-Chain");
                              setDropDownShow(false);
                            }}
                            className="block px-4 py-2 text-sm text-white cursor-pointer"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-1"
                          >
                            P-Chain
                          </div>
                          <div
                            onClick={() => {
                              setSelectedChain("C-Chain");
                              setDropDownShow(false);
                            }}
                            className="block px-4 py-2 text-sm text-white cursor-pointer"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-2"
                          >
                            C-Chain
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
        </div>
        {selected == "0" && (
          <>
            <div className="flex w-full mt-4">
              <div className="w-1/2 sm:w-50  mb-4 ml-1 sm:mt-0 relative">
                <Icon
                  path="res-react-dash-search"
                  className="w-5 h-5 search-icon left-3 absolute"
                />
                <form action="#" method="POST">
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="pl-12 py-4  pr-2 block w-full rounded-lg border-gray-300 bg-card"
                    placeholder="Search all Subnets for tx hash, block ID, address, token, etc…"
                  />
                </form>
              </div>
            </div>
            <div className="flex w-full mt-0">
              <Table />
            </div>
          </>
        )}
        {selected == "1" &&
          subnetsCreated.map(({ id, name, transactions, rise, chainType }) => (
            <SubnetCard
              key={id}
              id={id}
              name={name}
              chainType={chainType}
              transactionAmount={transactions}
              rise={rise}
            />
          ))}

        {selected == "2" && (
          <>
            {employeeData.map(
              ({
                id,
                name,
                position,
                transactions,
                rise,
                tasksCompleted,
                imgId,
              }) => (
                <NameCard
                  key={id}
                  id={id}
                  name={name}
                  position={position}
                  transactionAmount={transactions}
                  rise={rise}
                  tasksCompleted={tasksCompleted}
                  imgId={imgId}
                />
              )
            )}
          </>
        )}

        {selected == "3" && (
          <>
          <div className="w-full p-2 lg:w-1/1">
              <div className="rounded-lg bg-card h-80">
                <Teleporters />
              </div>
            </div>
          </>
        )}
        {selected == "4" && (
          <>
            <div className="w-full p-2 lg:w-1/1">
              <div className="rounded-lg bg-card sm:h-80 h-60">
                <Graph />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
{
  /* <div className="w-full p-2 lg:w-2/3">
              <div className="rounded-lg bg-card sm:h-80 h-60">
                <Graph />
              </div>
            </div>
            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card h-80">
                <TopCountries />
              </div>
            </div> */
}
