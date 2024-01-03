"use client";
import CarFilterOptions from "@/components/Home/CarFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carList, setCarList] = useState<any>([]);
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarList();
    setCarList(result?.carLists);
  };
  return (
    <div>
      <Hero />
      <SearchInput />
      <CarFilterOptions />
    </div>
  );
}
