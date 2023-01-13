import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs"

export default function Introduction() {
  return (
    <div className="flex w-full h-[70vh] pl-[10%] pr-[10%] 2xl:pl-[20%] 2xl:pr-[20%] text-[3rem] flex-col md:text-[4rem] font-bold text-black mt-[5rem] md:mt-[10rem]">

        <div className=""> Hi, </div>

        <div className="flex flex-row">
          <div className="">I'm &nbsp;</div>
          <div className="text-blue-500"> Hasan </div>
          <div> . </div>
        </div>

        <div className="break-normal">Full Stack Engineer.</div>

        <div className="flex pt-[2rem]">
          <a href="#_" className="relative py-3 font-bold text-black group w-[15rem]">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black pl-[4rem]"></span>
            <span className="relative text-[1.5rem] flex items-center justify-center group-hover:text-white">Contact</span>
          </a>
        </div>

        <div className="flex flex-row mt-[5rem] md:mt-[10rem] space-x-5">
          <a href="https://github.com/HUchchas">
            <GoMarkGithub className="text-[3rem] hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/hasan-uchchas/">
            <BsLinkedin className="text-[3rem] hover:text-blue-500" />
          </a>
        </div>

    </div>
  )
}