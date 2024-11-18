/* eslint-disable react/no-unescaped-entities */
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import TypingHeader from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function HomePage() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <TypingHeader firstLine="Hello I'm" secondLine="Dang Lam" />
            <p className="max-w-[500px] mb-9 text-white">
              An enthusiastic aspiring developer with a passion for software
              development and backend technologies. I am eager to apply academic
              knowledge to real-world projects. Proficient in .NET and Java, I
              specialize in scalable backend solutions and am also captivated by
              UI/UX design for frontend web applications
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button className="border border-[#00ff99] bg-transparent text-accent hover:text-white flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload />
              </Button>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-start justify-center items-center mt-5 p-5">
              <Social
                containerStyle="flex items-center justify-center gap-4"
                iconStyle="w-8 h-12"
              />
            </div>
          </div>
          <div className="">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
