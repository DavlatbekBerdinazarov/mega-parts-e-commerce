import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";

import { FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const filteredData2 = [
  {
    id: 1,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 2,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 3,
    img: rpart3,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 4,
    img: rpart4,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 5,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 6,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  }
];

export default function FiltersView2() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 my-4 gap-3">
      {filteredData2.map((element, index) => {
        return (
          <div
            key={index}
            className=" p-5 flex flex-col justify-center items-center bg-white rounded-md border-[1px] border-[#DEE2E7]"
          >
            <div className="h-[184px] w-[184px] mb-4 flex justify-center items-center ">
              <img src={element.img} alt="" />
            </div>
            <div className="flex">
              <div className="">
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold underline">49.99$</h1>
                  <h3 className>
                    {element.title}
                  </h3>
                </div>
              </div>
              <Button className="hidden lg:block" variant="outline">
                <FaRegHeart className="text-2xl text-[#0D6EFD]" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
