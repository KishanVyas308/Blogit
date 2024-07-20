import { Link } from "react-router-dom";
import he from "he";

interface BlogCardProps {
  id: string;
  autherName: string;
  title: string;
  content: string;
  publishedAt: string;
}

const BlogCard = ({
  id,
  autherName,
  title,
  content,
  publishedAt,
}: BlogCardProps) => {

  const getPlainText = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    return he.decode(textContent);
  };
  return (
    <Link to={`/blog/${id}`} className="block mb-8">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center mb-4">
          <Avatar name={autherName} />
          <div className="ml-3">
            <div className="font-semibold text-lg">{autherName}</div>
            <div className="text-gray-400">Published on {(publishedAt).slice(0, 10).split("-").reverse().join("-")}</div>
          </div>
        </div>
        <div className="text-2xl font-bold mb-2">{title}</div>
        <div className="text-gray-300 mb-4">{getPlainText(content).slice(0, 100) + "..."}</div>
        <div className="text-gray-500">{`${Math.ceil(content.length / 3000)} min read`}</div>
      </div>
    </Link>
  );
};

export const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="flex-shrink-0">
      <div
        className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-700 rounded-full"
      >
        <span className="font-medium text-gray-300">{name[0]}</span>
      </div>
    </div>
  );
};

export default BlogCard;
