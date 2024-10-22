import FaQ from "@/components/FaQ";
import Featers from "@/components/Featers";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="px-10 lg:px-20 lg:mx-auto">
        <Featers/>
        <FaQ/>
      </div>
    </div>
  );
}
