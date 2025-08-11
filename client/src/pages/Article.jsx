import React from "react";
import {Link} from "react-router-dom"

const articles = [
  {
    id: 1,
    title: "Government Approves New Policy",
    description: "The government has approved a new policy to improve infrastructure and development in rural areas...",
    date: "Aug 10, 2025",
    publishedBy: "Ministry of Infrastructure",
    link: "/readmore"
  },
  {
    id: 2,
    title: "Security Measures Updated",
    description: "Updated security measures have been implemented to enhance cyber safety across all departments...",
    date: "Aug 8, 2025",
    publishedBy: "Cyber Security Division",
    link: "/readmore"
  },
  {
    id: 3,
    title: "Health Department Releases Report",
    description: "The Health Department has released its annual report focusing on public health improvements...",
    date: "Aug 5, 2025",
    publishedBy: "Ministry of Health",
    link: "/readmore"
  },
  {
    id: 4,
    title: "Education Reform Initiatives",
    description: "New education reforms aim to modernize the curriculum and improve teacher training programs...",
    date: "Aug 2, 2025",
    publishedBy: "Ministry of Education",
    link: "/readmore"
  },
  {
    title: "Defense Sector Updates National Security Plan",
    description:
      "The Defense Ministry announced an updated national security plan focusing on modern technology and intelligence upgrades...",
    date: "August 9, 2025",
    publishedBy: "Defense Ministry",
    link: "/readmore",
  },
  {
    title: "Healthcare Reforms Announced",
    description:
      "The government has introduced healthcare reforms to make medical facilities more accessible in rural areas...",
    date: "August 8, 2025",
    publishedBy: "Health Ministry",
    link: "/readmore",
  },
  {
    title: "Transport Infrastructure Expansion",
    description:
      "Plans for expanding the national highway network have been revealed to improve connectivity between major cities...",
    date: "August 7, 2025",
    publishedBy: "Transport Ministry",
    link: "/readmore",
  },
  {
    title: "Environmental Protection Program Launched",
    description:
      "A nationwide environmental program has been launched to combat climate change and promote sustainability...",
    date: "August 6, 2025",
    publishedBy: "Environment Ministry",
    link: "/readmore",
  },
  {
    title: "Digital Governance Improvements",
    description:
      "The government has announced upgrades to its e-governance platform for better public service delivery...",
    date: "August 5, 2025",
    publishedBy: "IT Ministry",
    link: "/readmore",
  }
];

export default function Article() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Articles & News</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{article.description}</p>
              <p className="text-gray-500 text-xs">Published on: {article.date}</p>
              <p className="text-gray-500 text-xs">Published by: {article.publishedBy}</p>
            </div>
            <Link
               to={article.link}
              className="mt-4 text-blue-600 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
