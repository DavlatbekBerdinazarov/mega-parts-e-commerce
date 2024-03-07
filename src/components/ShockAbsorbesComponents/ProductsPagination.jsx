import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const featured = [
  { id: 1, name: "5", unavailable: false },
  { id: 2, name: "10", unavailable: false },
  { id: 3, name: "25", unavailable: false },
];

export function PaginationDemo() {
  const [selectedFeatured, setSelectedFeatured] = useState(featured[1]);
  return (
    <div className="flex items-center justify-center gap-4 h-[40px]">
      <div className="h-full flex items-center justify-between bg-white p-2 border-2 rounded-md">
        <h1>Show</h1>
        <div className="z-30 ">
          <Listbox value={selectedFeatured} onChange={setSelectedFeatured}>
            <Listbox.Button className="p-1 flex justify-around items-center gap-1">
              {selectedFeatured.name} <FaChevronDown/>
            </Listbox.Button>
            <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
              {featured.map((featured) => (
                <Listbox.Option
                  key={featured.id}
                  value={featured}
                  disabled={featured.unavailable}
                >
                  {featured.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
      <Pagination className=" bg-white h-[40px] p-2 border-2 rounded-md">
        <PaginationContent>
          <PaginationItem className="border-r-2 rounded-md">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border-r-2 rounded-md" href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border-r-2 rounded-md" href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border-r-2 rounded-md" href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
