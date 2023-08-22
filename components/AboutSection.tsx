import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Scikit-Learn" },
  { skill: "Data Visualization" },
  { skill: "GitHub" },
  { skill: "SolidWorks" },
  { skill: "Fusion 360" },
  { skill: "3D Printing"},
  { skill: "User-Centered Design"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Daniel and I am an undergraduate student double majoring in{" "}
              <span className="font-bold">{"Biomedical Engineering"}</span> and
              <span className="font-bold">{" Applied Mathematics & Statistics"}</span> at
              Johns Hopkins University (JHU).
            </p>
            <br />
            <p>
              I am currently an undergraduate research assistant in the {" "}
              <span className="font-bold">{"Neuromedical Control Systems Laboratory "}</span>at JHU, and I'm interested
              in assistive technology and brain-computer interfaces.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
