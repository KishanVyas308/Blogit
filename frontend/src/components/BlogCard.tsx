import { Link } from "react-router-dom";

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
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 w-screen max-w-screen-md">
      <div>
        <Avarator name={autherName} /> {autherName} . {publishedAt}
      </div>
      <div>{title}</div>
      <div>{content.slice(0, 100) + "..."}</div>
      <div>{`${Math.ceil(content.length / 100)} min read`}</div>
    </div>
    </Link>
  );
};

export const Avarator = ({ name }: { name: string }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="font-medium text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};
export default BlogCard;
