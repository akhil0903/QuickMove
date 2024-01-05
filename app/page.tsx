"use client";
import CarFilterOptions from "@/components/Home/CarFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
  };
  return (
    <div>
      <Hero />
      <SearchInput />
      <CarFilterOptions />
      <CarsList carsList={carsList} />
    </div>
  );
}
