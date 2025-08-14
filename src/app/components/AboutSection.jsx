"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Go (Golang)</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>SQLite</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor's Degree in Computer Science</li>
        <li>Kisii University</li>
        <li>Strong foundation in software engineering principles</li>
        <li>Database design and management</li>
        <li>Full-stack development practices</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li> Hackathon Winner - 1st Place</li>
        <li> 10+ Completed Projects</li>
        <li> 3+ Years Professional Development Experience</li>
        <li> Full-Stack Development Expertise</li>
        <li> Strong Problem-Solving Skills</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated full-stack developer with over 1 year of hands-on experience
            in software development. I specialize in building scalable web applications
            using modern technologies including Go, Python, JavaScript, and Next.js.
            My expertise spans both frontend and backend development, with strong proficiency
            in database design using PostgreSQL, MongoDB, and SQLite. I have a solid
            foundation in HTML/CSS for responsive layouts and enjoy working in collaborative
            environments to deliver high-quality software solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
