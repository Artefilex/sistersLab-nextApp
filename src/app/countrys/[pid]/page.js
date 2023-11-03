"use client";
import { useEffect, useState } from "react";
import { fetchCountrys } from "@/app/api/country";
import Image from "next/image";
export default function CountryDetails() {
  const [countrys, setCountrys] = useState([]);
  const [singleCountry, setSingleCountry] = useState({});
  useEffect(() => {
    const fetcdata = async () => {
      const responseData = await fetchCountrys();
      setCountrys(responseData);
    };
    fetcdata();
  }, []);
  useEffect(() => {
    const id = window.location.href.split("/").pop();
    const filterCountry = async () => {
      await countrys
        .filter((country) => country.ccn3 === id)
        .map((item) => setSingleCountry(item));
    };
    filterCountry();
  }, [countrys]);

  return (
    <div className="p-5 w-full flex flex-col items-center justify-center bg-slate-950">
      {singleCountry?.flags && (
        <div className="w-[80] flex flex-col items-start gap-5  ">
          <Image
          className=""
            loader={() => singleCountry.flags.png}
            src={singleCountry.flags.png}
            alt="ssss"
            width={500}
            height={70}
          />

          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Ülke : </span> {singleCountry.translations.tur.common}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Başkenti : </span> {singleCountry.capital}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Yüz ölçümü : </span> {singleCountry.area} km2{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Kıta : </span> {singleCountry.continents.map((item) => item)}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Zaman Dilimi: </span> <p>{singleCountry.timezones}</p>{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Nüfus: </span> {singleCountry.population}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Plaka Kodu: </span> {singleCountry.car.signs}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Trafik akışı:</span> {singleCountry.car.side}{" "}
          </div>
          <div className="font-semibold text-white">
            {" "}
            <span className="text-[1.25rem] font-bold"> Enlem - Boylam : </span>{" "}
            {singleCountry.latlng[0] + " " + singleCountry.latlng[1]}{" "}
          </div>
        </div>
      )}
    </div>
  );
}
