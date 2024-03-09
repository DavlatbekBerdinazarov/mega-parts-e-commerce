import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";
import ProductItems2 from "./ProductItems2";

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
  },
];

export default function FiltersView2() {

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 my-4 gap-3 ">
      {filteredData2.map((element, index) => {
        return (
          <ProductItems2 element={element} index={index}/>
        );
      })}
    </div>
  );
}
