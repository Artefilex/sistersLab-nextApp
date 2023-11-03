
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <nav className="w-full h-[5rem] bg-white flex items-center justify-center">
        <Link href={"/countrys"} className="text-black"> Countrys Api</Link>
        <Link href={"/rick-and-morty"} > Rick And Morty Api</Link>
      </nav>
          
    </main>
  );
}
