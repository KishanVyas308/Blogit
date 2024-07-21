import{ useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./customQuill.css"; // Ensure this path points to your custom CSS
import { useSetRecoilState } from "recoil";
import blogsAtom from "../atoms/blogsAtom";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const setBlogs = useSetRecoilState(blogsAtom);
  const navigate = useNavigate();

  const handlePublish = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const fetchBlogs = async () => {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlogs(res.data.blogs);
      };
      fetchBlogs();
      navigate(`/blog/${res.data.id}`);
    } catch (err) {
      setError("Failed to publish the post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Appbar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full px-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="mb-4 bg-gray-800 border border-gray-500 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            modules={modules}
            formats={formats}
            className="mb-4 bg-gray-800 text-white rounded-lg"
            placeholder="Write your article here..."
          />
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            onClick={handlePublish}
            disabled={loading}
            className="inline-flex items-center px-5 py-2.5 mb-20 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
