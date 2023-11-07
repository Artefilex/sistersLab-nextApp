"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchDataFilm } from "../api/rickandmorty";
export default function RickAndMorty() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  // const initalState = JSON.parse(localStorage.getItem("favorites"))  || []
  // const [dtasf, setDatasF] = useState(initalState)


  useEffect(() => {
    
    const fetcdata = async () => {
      const responseData = await fetchDataFilm();
      setData(responseData);
    };
    fetcdata();
  }, []);


  const dataFilter = search
    ? data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  return (
    <div className="w-full flex items-center flex-col bg-slate-950 text-white min-h-screen">
      <input
        className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[95%]"
        placeholder="Search Character"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full flex gap-2 flex-wrap items-center justify-center ">
        {dataFilter &&
          dataFilter.map((item) => (
        <div className="relative border border-spacing-9 rounded-lg w-[20rem] h-[30rem] bg-gray-950 flex flex-col items-start gap-3 px-2 py-2" key={item.id}>
              <img
                src={item.image}
                alt="ssss"
                className="rounded-lg"
                width={350}
                height={70}
              />
            
             
            <div className="font-bold text-[1.5rem]">{item.name}</div>
            <Link
             href={`/rick-and-morty/${item.id}`}
             className="absolute bottom-0 px-3 py-2 mb-2 w-[12rem] rounded-md bg-cyan-950 hover:w-[19rem] transition-all duration-500 font-semibold"
            
            > Get Details </Link>
        </div>
          ))}
      </div>
    </div>
  );
}
