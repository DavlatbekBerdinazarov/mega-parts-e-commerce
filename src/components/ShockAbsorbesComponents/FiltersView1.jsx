import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";


import ProductItems1 from "./ProductItems1";

const filteredData1 = [
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
  },
];

export default function FiltersView1() {
  return (
    <div className="w-full h-full flex flex-col gap-1 pb-8">
      {filteredData1.map((element, index) => {
        return (
          <ProductItems1 key={index} element={element} index={index}/>
        );
      })}
    </div>
  );
}
