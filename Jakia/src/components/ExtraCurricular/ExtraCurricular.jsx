import React from "react";

const activities = [
  {
    id: 1,
    title: "Coding Competitions",
    description: "Participated in coding competitions and hackathons to sharpen programming skills.",
  },
  {
    id: 2,
    title: "IT Club Member",
    description: "Active member of university tech clubs, contributing to projects and workshops.",
  },
  {
    id: 3,
    title: "Workshops & Seminars",
    description: "Attended and organized seminars and webinars on technology and programming.",
  },
  {
    id: 4,
    title: "Open Source Contributions",
    description: "Contributed to open-source projects, improving coding and collaboration skills.",
  },
  {
    id: 5,
    title: "Mentoring Seniors",
    description: "Guided junior students in coding, problem-solving, and project development.",
  },
];

const ExtraCurricular = () => {
  return (
    <div className="extra-curricular-container px-4 py-10 bg-gray-50"
    id="extra_curricular"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Extra-Curricular Activities</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            style={{ width: "200px" }} // fixed width in pixels
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{activity.title}</h3>
            <p className="text-gray-600 text-sm">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCurricular;
