"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ls Command Implementation",
    description: "A custom implementation of the Unix ls command to list files and directories. Built in Golang to handle directory traversal, file metadata retrieval, and output formatting. Supports additional flags or options for sorting, filtering, and display customization. Demonstrates low-level system interaction and file I/O handling.",
    image: "/images/projects/1.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/anamivale/ls",
    previewUrl: "https://github.com/anamivale/ls",
  },
  {
    id: 2,
    title: "Groupie Tracker",
    description: "Fetches band and artist details from an external API and displays them in a web interface. Backend built with Golang handles API requests, data processing, and routing. Frontend built with JavaScript renders band information dynamically for users. Demonstrates API integration, data parsing, and full-stack delivery using Go and JS.",
    image: "/images/projects/2.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "https://github.com/anamivale/groupie-tracker",
    previewUrl: "https://github.com/anamivale/groupie-tracker",
  },
  {
    id: 3,
    title: "Netfix Service Marketplace",
    description: "A service marketplace where providers post services with hourly rates and clients can request those services. Supports two-sided interaction: service posting by providers and service requests by clients. Implements user authentication, profile management, and service listings. Enables real-time communication or booking features for smooth coordination.",
    image: "/images/projects/3.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "https://github.com/anamivale/netfix",
    previewUrl: "https://github.com/anamivale/netfix",
  },
  {
    id: 4,
    title: "Campus Voting System",
    description: "A campus voting system built with Node.js (backend), GraphQL (API layer), and React.js (frontend). Provides secure user authentication for voters to log in and cast votes. Uses GraphQL queries and mutations for efficient, structured data retrieval and updates. Implements an interactive UI for voting, displaying candidates, and showing results in real time.",
    image: "/images/projects/4.png",
    tag: ["All", "Full-Stack", "Database"],
    gitUrl: "https://github.com/anamivale/project/",
    previewUrl: "https://github.com/anamivale/project/",
  },
  {
    id: 5,
    title: "Forum Application",
    description: "A single-page application forum built with Go (backend), SQLite (database), JavaScript (frontend), HTML, and CSS. Implements user authentication with profile management. Features post creation, category organization, and comment threads displayed dynamically. Includes a real-time private messaging system with WebSocket integration for live chat updates.",
    image: "/images/projects/5.png",
    tag: ["All", "Full-Stack", "Database"],
    gitUrl: "https://github.com/anamivale/Forum",
    previewUrl: "https://github.com/anamivale/Forum",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Database"
          isSelected={tag === "Database"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
