import React from "react";

function CarFilterOptions() {
  return (
    <div className="mt-10 flex items-center justify-between ml-8">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Lets get the started</h2>
      </div>
      <div className="flex gap-3">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Low - High</option>
          <option>High - Low</option>
        </select>
        <select
          className="select 
            select-bordered w-full md:block max-w-xs hidden mr-8"
        >
          <option disabled selected>
            Make
          </option>
          <option>brand1</option>
          <option>brand2</option>
        </select>
      </div>
    </div>
  );
}

export default CarFilterOptions;
