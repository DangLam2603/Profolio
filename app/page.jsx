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
        xl:pt-4 xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <TypingHeader firstLine="Hello I'm" secondLine="Dang Lam" />
            <p className="max-w-[500px] mb-9 text-white">
              I’m an aspiring developer passionate about software development
              and backend technologies. I have a strong foundation in .NET,
              Java, and database design, and I’m excited about building scalable
              backend solutions. I also enjoy exploring UI/UX design to create
              engaging web applications. Ready to bring my skills to real-world
              projects!
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
