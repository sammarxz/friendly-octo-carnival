import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiBarChartLine, RiMore2Fill, RiQuestionMark } from "react-icons/ri";
import { graphData } from "../data";

const Graph = () => {
  const CustomTooltip = () => (
    <div className="rounded-xl overflow-hidden tooltip-head bg-white border border-gray-200">
      <div className="flex items-center justify-between p-2 bg-gray-100">
        <div className="">Revenue</div>
        <RiMore2Fill className="w-4 h-4" />
      </div>
      <div className="tooltip-body text-center p-3">
        <div className="text-gray-800 font-bold">$1300.50</div>
        <div className="">Revenue from 230 sales</div>
      </div>
    </div>
  );

  return (
    <section className="flex p-4 h-full flex-col">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="font-bold font-heading text-gray-800">
            Your Work Summary
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center">
              <RiBarChartLine className="w-4 h-4 text-primary-500" />
              <span className="fs-sm">Last 9 Months</span>
            </div>
            <button type="button">
              <RiQuestionMark className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={graphData}>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#ff402b" />
                <stop offset="1" stopColor="#ff402b" />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={false}
              strokeWidth="6"
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              activeDot={false}
              type="monotone"
              dataKey="expectedRevenue"
              stroke="#FFB72B"
              strokeWidth="3"
              dot={false}
              strokeDasharray="8 8"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export { Graph };
