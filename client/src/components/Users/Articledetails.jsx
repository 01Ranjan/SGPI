import React from "react";
import { useParams, Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css"; 

export default function Articledetails() {
  const { id } = useParams();

  const article = {
    id,
    title: "Defence Ministry Announces New Policy",
    date: "2025-08-05",
    author: "Rajiv Sharma",
    department: "Defence Ministry",
    tags: ["Policy", "Defence", "National Security"],
    summary: [
      "New policy aims to modernize armed forces by 2030.",
      "Focus on indigenous weapon manufacturing.",
      "Collaboration with international allies."
    ],
    content: `
      The Defence Ministry today unveiled its latest modernization policy...
      The policy focuses on enhancing the combat capabilities of the armed forces 
      through advanced technology and increased domestic production...
    `,
    documentImage: "/docs/defence-policy.jpg",
    relatedArticles: [
      { id: 2, title: "Home Ministry Approves Security Upgrades" },
      { id: 3, title: "New Defence Budget Allocation Announced" }
    ]
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      {/* Breadcrumb */}
      <nav className="text-sm hidden  text-gray-600 mb-4  items-center gap-2">
        <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
          <i className="bx bx-home"></i> Home
        </Link>
        <span>/</span>
        <Link to="/article" className="hover:text-blue-600">
          Article
        </Link>
        <span>/</span>
        <Link
          to={`/articles/department/${article.department
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="hover:text-blue-600"
        >
          {article.department}
        </Link>
        <span>/</span>
        <span className="font-semibold">{article.title}</span>
      </nav>
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
        <p className="text-gray-700 mb-1 flex items-center gap-2">
          <i className="bx bx-user text-lg"></i>
          <span className="font-semibold">{article.author}</span> |{" "}
          {article.department}
        </p>
        <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
          <i className="bx bx-calendar text-lg"></i>
          {new Date(article.date).toLocaleDateString()}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-1"
            >
              <i className="bx bx-purchase-tag-alt"></i>
              {tag}
            </span>
          ))}
        </div>
        {/* Content */}
        <div className="prose max-w-none mb-6">
          <h1 className="text-2xl font-bold">Statement</h1>
          <p>{article.content}</p>
        </div>
        {/* Document  */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <i className="bx bx-file"></i> Official Document
          </h2>
          <div className="relative w-full max-w-3xl">
            <img
              src={article.documentImage}
              alt="Official Document"
              className="rounded-lg border border-gray-300 pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white/40 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <ul className="list-disc ml-5 text-gray-700">
            {article.summary.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Related Articles */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <i className="bx bx-news"></i> Related Articles
          </h2>
          <ul className="list-disc ml-5">
            {article.relatedArticles.map((rel) => (
              <li key={rel.id}>
                <Link
                  to={`/article/${rel.id}`}
                  className="text-blue-700 hover:underline"
                >
                  {rel.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={copyLink}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-95 transition"
          >
            <i className="bx bx-link"></i> Copy Link
          </button>
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-95 transition">
            <i className="bx bx-error"></i> Report Issue
          </button>
        </div>
      </div>
    </div>
  );
}
