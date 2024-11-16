import About from "@/components/about";
import Contact from "@/components/contact";
import Herosection from "@/components/herosection";
import Project from "@/components/project";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}
