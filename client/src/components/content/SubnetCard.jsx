import { animated, useSpring } from "react-spring";
import Icon from "../Icon";
import { useDataContext } from "../../context/DataContext";
function SubnetCard({ id, name, transactionAmount,chainType }) {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });

  const {selectedChain} = useDataContext();
  console.log(selectedChain,"Selected Chain");

  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="rounded-lg bg-card flex justify-between p-3 h-auto">
        <div className="">
          <div className="flex items-center">
            <div className="ml-2">
              <div className="flex items-center">
                <div className="mr-2 font-bold text-white">{name}</div>
                <Icon path="res-react-dash-tick" />
              </div>
            </div>
          </div>
          <svg
            className="w-44 mt-3"
            height="6"
            viewBox="0 0 200 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="6" rx="3" fill="#2D2D2D" />

            <rect x="38" width="2" height="6" fill="#171717" />
            <rect x="78" width="2" height="6" fill="#171717" />
            <rect x="118" width="2" height="6" fill="#171717" />
            <rect x="158" width="2" height="6" fill="#171717" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#8E76EF" />
                <stop offset="1" stopColor="#3912D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-blue-400">{chainType}</div>
        <div className="flex flex-col items-center">
          <animated.div
            className={`text-green-500
                font-bold
                text-lg`}
          >
            {transactions.interpolate((i) => `${i.toFixed(2)}`)}
          </animated.div>
          <div className="text-sm ">Last 6 month</div>
        </div>
      </div>
    </div>
  );
}

export default SubnetCard;
