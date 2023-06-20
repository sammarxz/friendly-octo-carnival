import { RiArrowRightSLine, RiMore2Line } from "react-icons/ri";

import { segmentationData } from "../data";

const Segmentation = () => {
  return (
    <section className="p-4 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-800 font-heading font-bold">Segmentation</h2>
        <RiMore2Line className="w-4 h-4" />
      </div>
      {segmentationData.map(({ c1, c2, c3, color }) => (
        <div className="flex items-center" key={c1}>
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: color,
            }}
          />
          <div className="ml-2 text-gray-800">{c1}</div>
          <div className="flex-grow" />
          <div className="" style={{ color }}>
            {c2}
          </div>
          <div className="ml-2 w-12 card-stack-border" />
          <div className="ml-2 h-8">
            <div
              className="w-20 h-20 rounded-lg overflow-hidden"
              style={{
                background: c3,
              }}
            />
          </div>
        </div>
      ))}

      <a
        href="#!"
        className="inline-flex mt-6 items-center justify-between gap-2 text-primary-500 hover:underline"
      >
        Details
        <RiArrowRightSLine className="w-4 h-4" />
      </a>
    </section>
  );
};

export { Segmentation };
