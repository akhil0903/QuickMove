import React from "react";
import CarCards from "./CarCards";

function CarsList(props: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.carsList.map((car: any, index: number) => (
        <div>
          <CarCards car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarsList;
