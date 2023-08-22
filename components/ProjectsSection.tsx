import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Creating a Decoding Tool to Identify Neural Correlates of Behavior",
    description:
      "Analyzing an sEEG dataset to identify which areas of the brain carry the most information to predict behavior in a decision making task.",
    image: "/neural_decoding.jpg",
    github: "https://github.com/ncsl/lda-war-game",
    link: "",
  },
  {
    name: "Assistive Violin Bow Grip",
    description: "Led a team of students to design, develop, and test an assistive violin bow holder for an elementary school student with muscular dystrophy.",
    image: "/assistive_bow_holder.jpg",
    github: "",
    link: "https://docs.google.com/document/d/17y4iNeOtoSnIaeXsGstAnAzp-fu8ftRe2A7F4ESr73Y/edit?usp=sharing",
  },
  {
    name: "Assistive Umbrella Holder",
    description:
      "Led a team of high school students to develop an assistive umbrella holder for a friend living with brittle bone disease.",
    image: "/umbrella_holder.png",
    github: "",
    link: "https://docs.google.com/document/d/1F6OCFMYRVyx2CBrti77QK_qtGqxAnStUw06F10l-gvQ/edit?usp=sharing",
  },
  {
    name: "A Helping Hand",
    description:
      "Customized and manufactured an open source 3-D printed prosthetic hand for a middle school student without a right hand.",
    image: "/ty_holding_cup.png",
    github: "",
    link: "https://docs.google.com/document/d/1SoBejq1MZFsq2IU7V-Od88CXz_nPpeq-_YTz7H0jMMQ/edit?usp=sharing",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                      {project.github !== "" && (
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                        )}
                      </Link>
                      <Link href={project.link} target="_blank">
                        {project.link !== "" && (
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
