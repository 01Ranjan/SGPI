import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form data to backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
          required
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Department</option>
          <option value="defence">Defence</option>
          <option value="home-ministry">Home Ministry</option>
          <option value="finance">Finance</option>
        </select>

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded p-2 min-h-[150px]"
          required
        ></textarea>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded p-2"
        />

        <div className="flex justify-self-start gap-4">
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Save draft
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Publish
            </button>
        </div>
      </form>
    </div>
  );
}
