"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
const services = [
  {
    num: "01",
    title: "Web Development",
    Description:
      "Creating and maintaining websites, ensuring they are functional, user-friendly, and visually appealing",
    href: "",
  },
  {
    num: "02",
    title: "Cybersecurity",
    Description:
      "Implementing measures to protect computer systems and networks from cyber threats and unauthorized access.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud Services",
    Description:
      "Offering cloud computing resources such as storage, processing power, and software applications over the internet.",
    href: "",
  },
  {
    num: "04",
    title: "IT Support",
    Description:
      "Providing technical assistance and troubleshooting for hardware and software issues, ensuring smooth business operations.",
    href: "",
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,

            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group  "
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
