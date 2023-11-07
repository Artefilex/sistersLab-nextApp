"use client"

import { fetchSingleDataCharacter } from "@/app/api/rickandmorty";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetailsMorty(params) {
 
  const [singleCharacter, setSingleCharacter] = useState(null);
  const [epi , setEpi] = useState([])
  useEffect(() => {
    const fetcdata = async () => {
      const responseData = await fetchSingleDataCharacter(params.params.id);
      setSingleCharacter(responseData);
    };
    fetcdata();
  }, [params.params.id]);
  useEffect(() => {
    if (singleCharacter) {
        const fetchEpisodes = async () => {
            const episodesData = await Promise.all(
                singleCharacter.episode.map(async (item) => {
                    const episode = item.split("/").pop();
                    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`);
                    return response.json();
                })
            );
            setEpi(episodesData);
        };

        fetchEpisodes();
    }
}, [singleCharacter]);

  return (
    <div className="w-full flex items-center flex-col bg-slate-950 text-white min-h-screen px-5 py-10">
      {singleCharacter?.id && (
        <div className="flex flex-col items-center">
          <img   src={singleCharacter.image}
            alt="ssss"
            width={500}
            height={100}
          />
          <h2 className="text-[2rem] font-extrabold"> Character Info </h2>
          <div className="mt-8 w-full">
            <div className="w-full flex items-center mb-3 gap-6">     
              <h4 className="text-[1.4rem] font-bold" >Name :</h4> {singleCharacter.name}
            </div>
            <div className="w-full flex items-center mb-3 gap-6">
              <h4 className="text-[1.4rem] font-bold" >Status:</h4> {singleCharacter.status}
            </div>
            <div className="w-full flex items-center mb-3 gap-6">
              <h4 className="text-[1.4rem] font-bold" >Species: </h4> {singleCharacter.species}
            </div>
            <div className="w-full flex items-center mb-3 gap-6">
              <h4 className="text-[1.4rem] font-bold" >Gender: </h4>
              {singleCharacter.gender}
            </div>
            <div className="w-full flex items-center mb-3 gap-6">
              <h4 className="text-[1.4rem] font-bold" >Earth Name: </h4>
              {singleCharacter.origin.name}
            </div>
            <div className="flex flex-col">
              <h4 className="text-[1.4rem] font-bold mb-6" >Episodes:</h4> {epi.map((episode , i) =>(
                <div key={i}> {episode.episode} - {episode.name}</div>
              ))} 
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
