import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";

import { FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const filteredData1 = [
  {
    id: 1,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 2,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 3,
    img: rpart3,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 4,
    img: rpart4,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 5,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 6,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title:
      "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
];

export default function FiltersView1() {
  return (
    <div className="w-full h-full flex flex-col gap-1 pb-8">
      {filteredData1.map((element, index) => {
        return (
          <div key={index} className="w-full h-[114px] md:h-[184px] lg:h-[230px] p-2 md:p-5 bg-white rounded-md border-[1px] border-[#DEE2E7] flex gap-4">
            <div className="w-[84px] lg:w-[184px]">
              <img src={element.img} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="w-full lg:w-3/4">
                <h3>{element.title}</h3>
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold underline">Show price</h1>
                  <p className="flex gap-3 mb-4">
                    <span className="text-[#8B96A5]">154 orders </span>{" "}
                    <span className="text-[#8B96A5]">•</span>{" "}
                    <span className="text-[#00B517]">Free shipping</span>
                  </p>
                  <p className="text-[#505050] mb-4 hidden lg:block">
                    {element.desc}
                  </p>

                  <button className="text-[#0D6EFD] hidden lg:block">View details</button>
                </div>
              </div>
              <Button className=" hidden lg:block" variant="outline">
                <FaRegHeart className="text-2xl text-[#0D6EFD]" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

