"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: " EcoGourmet ",
    description: "Sustainable Food Surplus Management System",
    stack: [
      { name: "Symfony" },
      { name: "Bootsrtrap" },
      { name: "Javascript" },
      { name: "php" },
    ],
    image: "/assets/work/ecog.png",
    live: "",
    github: "https://github.com/Harounjlassi/EcoGourmetWeb3a22",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Optimized Smart Court Management:",
    description: "Optimized Smart Court Management",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/smartcourt.png",
    live: "https://github.com/Harounjlassi/Harounjlassi/blob/master/images/smartcourt.gif",
    github: "https://github.com/Harounjlassi/gestion-des-affaires",
  },
  {
    num: "03",
    category: "desktop",
    title: "EcoGourmet Desktop Project",
    description: "Sustainable Food Surplus Management System",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/egogDes.png",
    live: "",
    github: "https://github.com/Harounjlassi/EcoGourmetWeb3a22",
  },
  {
    num: "04",
    category: "desktop",
    title: "Eco-Surplus Food Mobile App Management Network",
    description: "Sustainable Food Surplus Management System",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/flutter.png",
    live: "https://app.flutterflow.io/project/mobilevff-h2dxo3?tab=pageSelector&page=CreateEvent",
    github:
      "https://app.flutterflow.io/project/mobilevff-h2dxo3?tab=pageSelector&page=CreateEvent",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setProject(projects[currentindex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline_num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">{/* ... */}</ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
  justify-between xl:w-max xl:justify-none"
                btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] 
  flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
