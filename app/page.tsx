import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="app"> 
         <Navbar/> 
         <Hero/> 
    </div>
  );
}
