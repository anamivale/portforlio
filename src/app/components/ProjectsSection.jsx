"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application built with Go backend, PostgreSQL database, and Next.js frontend. Features include user authentication, product catalog, shopping cart, and payment integration.",
    image: "/images/projects/1.png",
    tag: ["All", "Full-Stack", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Task Management API",
    description: "RESTful API built with Python Flask and MongoDB. Implements CRUD operations, user authentication with JWT, and real-time notifications. Includes comprehensive API documentation.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend", "Database"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat app using Node.js, Socket.io, and SQLite. Features include private messaging, group chats, file sharing, and message history with responsive React frontend.",
    image: "/images/projects/3.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Enterprise-level inventory system built with Go microservices architecture, PostgreSQL database, and Next.js dashboard. Includes barcode scanning and automated reporting.",
    image: "/images/projects/4.png",
    tag: ["All", "Full-Stack", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Weather Analytics Dashboard",
    description: "Data visualization platform using Python for data processing, MongoDB for storage, and interactive charts. Processes weather API data and provides predictive analytics.",
    image: "/images/projects/5.png",
    tag: ["All", "Backend", "Database"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Blog Content Management System",
    description: "Custom CMS built with Next.js, Node.js backend, and PostgreSQL. Features rich text editor, SEO optimization, comment system, and admin dashboard for content management.",
    image: "/images/projects/6.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Financial Tracker Mobile App",
    description: "Cross-platform mobile application for expense tracking. Built with React Native frontend and Go backend API. Includes budget planning, expense categorization, and financial reports.",
    image: "/images/projects/1.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Student Information System",
    description: "University management system with Python Django backend and PostgreSQL database. Handles student enrollment, grade management, course scheduling, and generates academic reports.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend", "Database"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Social Media Analytics Tool",
    description: "Data analysis platform built with Python for social media metrics. Uses MongoDB for data storage and provides insights through interactive dashboards and automated reporting.",
    image: "/images/projects/3.png",
    tag: ["All", "Backend", "Database"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Healthcare Appointment System",
    description: "Medical appointment booking system with Go backend, SQLite database, and responsive web interface. Features patient management, doctor scheduling, and automated reminders.",
    image: "/images/projects/4.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
